import { CSSProperties, computed, defineComponent, h, onMounted, onUnmounted, ref, watch } from 'vue';
import { watermarkProps } from './main.props';
import { useMutationObserver, getStyleStr, getPixelRatio } from '../util/util';

export default defineComponent({
  name: 'CuWatermark',
  props: watermarkProps,
  setup(props, { slots }) {
    const containerRef = ref();
    const watermarkRef = ref();

    const getMarkStyle = computed(() => {
      const [gapX, gapY] = props.gap;
      const [offsetX, offsetY] = props.offset;
      const gapXCenter = gapX / 2;
      const gapYCenter = gapY / 2;
      const offsetTop = offsetY || gapYCenter;
      const offsetLeft = offsetX || gapXCenter;
      const markStyle = {
        zIndex: props.zIndex,
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        backgroundRepeat: 'repeat'
      } as CSSProperties;

      let positionLeft = offsetLeft - gapXCenter;
      let positionTop = offsetTop - gapYCenter;
      if (positionLeft > 0) {
        markStyle.left = `${positionLeft}px`;
        markStyle.width = `calc(100% - ${positionLeft}px)`;
        positionLeft = 0;
      }
      if (positionTop > 0) {
        markStyle.top = `${positionTop}px`;
        markStyle.height = `calc(100% - ${positionTop}px)`;
        positionTop = 0;
      }
      markStyle.backgroundPosition = `${positionLeft}px ${positionTop}px`;

      return markStyle;
    });

    const assignFont = computed(() => {
      return Object.assign(
        {
          fontSize: 16,
          fontFamily: 'sans-serif',
          fontStyle: 'normal',
          fontWeight: 'normal',
          color: 'rgba(0, 0, 0, 0.15)'
        },
        props.font
      );
    });

    function destroyWatermark() {
      if (!watermarkRef.value) return;
      watermarkRef.value.remove();
      watermarkRef.value = null;
    }

    function getMarkSize(ctx: CanvasRenderingContext2D) {
      const { fontSize, fontFamily } = assignFont.value;

      let defaultWidth: number, defaultHeight: number;

      const content = props.content;
      const image = props.image;
      const width = props.width;
      const height = props.height;

      if (!image && ctx.measureText) {
        ctx.font = `${Number(fontSize)}px ${fontFamily}`;
        const contents = Array.isArray(content) ? content : [content];
        const widths = contents.map((item) => ctx.measureText(item).width);
        defaultWidth = Math.ceil(Math.max(...widths));
        defaultHeight = Number(fontSize) * contents.length + (contents.length - 1) * 3;
      }

      return [width ?? defaultWidth, height ?? defaultHeight];
    }

    function rotateWatermark(ctx: CanvasRenderingContext2D, rotateX: number, rotateY: number, rotate: number) {
      ctx.translate(rotateX, rotateY);
      ctx.rotate((Math.PI / 180) * Number(rotate));
      ctx.translate(-rotateX, -rotateY);
    }
    function fillTexts(
      ctx: CanvasRenderingContext2D,
      drawX: number,
      drawY: number,
      drawWidth: number,
      drawHeight: number
    ) {
      const { fontSize, fontFamily, fontStyle, fontWeight, color } = assignFont.value;

      const ratio = getPixelRatio();
      const content = props.content;
      const mergedFontSize = Number(fontSize) * ratio;
      ctx.font = `${fontStyle} normal ${fontWeight} ${mergedFontSize}px/${drawHeight}px ${fontFamily}`;
      ctx.fillStyle = color;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'top';
      ctx.translate(drawWidth / 2, 0);
      const contents = Array.isArray(content) ? content : [content];
      contents?.forEach((item, index) => {
        ctx.fillText(item ?? '', drawX, drawY + index * (mergedFontSize + 2 * ratio));
      });
    }

    function appendWatermark(base64Url: string, markWidth: number) {
      const [gapX] = props.gap;
      if (!containerRef.value) return;
      const attrs = getStyleStr({
        ...getMarkStyle.value,
        backgroundImage: `url('${base64Url}')`,
        backgroundSize: `${(gapX + markWidth) * 2}px`
      });
      watermarkRef.value.setAttribute('style', attrs);
      containerRef.value.append(watermarkRef.value);
    }

    function renderWatermark() {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      const image = props.image;
      const rotate = props.rotate;

      if (!ctx) return;
      if (!watermarkRef.value) {
        watermarkRef.value = document.createElement('div');
      }

      const ratio = getPixelRatio();
      const [gapX, gapY] = props.gap;
      const [markWidth, markHeight] = getMarkSize(ctx);
      const canvasWidth = (gapX + markWidth) * ratio;
      const canvasHeight = (gapY + markHeight) * ratio;
      canvas.setAttribute('width', `${canvasWidth * 2}px`);
      canvas.setAttribute('height', `${canvasHeight * 2}px`);

      const drawX = (gapX * ratio) / 2;
      const drawY = (gapY * ratio) / 2;
      const drawWidth = markWidth * ratio;
      const drawHeight = markHeight * ratio;
      const rotateX = (drawWidth + gapX * ratio) / 2;
      const rotateY = (drawHeight + gapY * ratio) / 2;

      const alternateDrawX = drawX + canvasWidth;
      const alternateDrawY = drawY + canvasHeight;
      const alternateRotateX = rotateX + canvasWidth;
      const alternateRotateY = rotateY + canvasHeight;

      ctx.save();
      rotateWatermark(ctx, rotateX, rotateY, rotate);

      if (image) {
        const img = new Image();
        img.onload = () => {
          ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
          /** 旋转后绘制交错图 */
          ctx.restore();
          rotateWatermark(ctx, alternateRotateX, alternateRotateY, rotate);
          ctx.drawImage(img, alternateDrawX, alternateDrawY, drawWidth, drawHeight);
          appendWatermark(canvas.toDataURL(), markWidth);
        };
        img.crossOrigin = 'anonymous';
        img.referrerPolicy = 'no-referrer';
        img.src = image;
      } else {
        fillTexts(ctx, drawX, drawY, drawWidth, drawHeight);
        /** 旋转后填充交错的文本*/
        ctx.restore();
        rotateWatermark(ctx, alternateRotateX, alternateRotateY, rotate);
        fillTexts(ctx, alternateDrawX, alternateDrawY, drawWidth, drawHeight);
        appendWatermark(canvas.toDataURL(), markWidth);
      }
    }

    watch(
      props,
      () => {
        renderWatermark();
      },
      { deep: true }
    );

    onMounted(() => {
      renderWatermark();
    });

    onUnmounted(() => {
      destroyWatermark();
    });

    useMutationObserver(
      containerRef,
      () => {
        destroyWatermark();
        renderWatermark();
      },
      {
        attributes: true,
        childList: true,
        subtree: true,
        attributeFilter: ['style', 'class']
      }
    );

    return () => h('div', { style: { position: 'relative' }, ref: containerRef }, slots);
  }
});
