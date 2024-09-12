import { reactive, type Plugin, type App } from 'vue';
import { colorToRgba, colorBlendArray, toHex, type Config } from './utils';
import { deepMerge } from './tools';
import components from './components';
import CuMessageBox from './components/message-box';
import { preview } from './components/preview-image';
import { CuLoading, vLoading, useLoading } from './components/loading';
import { vTooltip, useTooltip } from './components/tooltip';
import { useInfiniteScroll, vInfiniteScroll } from './components/infinite-scroll';
import { CuLoadingbar } from './components/loadingbar';
import icons from './icons';

const plugin = {
  install(app: App, config: Config) {
    components.forEach((item) => app.use(item));

    app.config.globalProperties.$alert = CuMessageBox.alert;
    app.config.globalProperties.$confirm = CuMessageBox.confirm;
    app.config.globalProperties.$message = CuMessageBox.message;
    app.config.globalProperties.$notice = CuMessageBox.notice;

    app.config.globalProperties.$preview = preview;
    app.config.globalProperties.$loading = CuLoading;

    app.config.globalProperties.$loadingbar = CuLoadingbar;

    app.use(vLoading);
    app.use(vTooltip);
    app.use(vInfiniteScroll);

    useComicConfig(config);
  }
} as Plugin;

const installIcons = (app: App, prefix?: string) => {
  icons.forEach((icon) => {
    app.component(prefix ? prefix + icon.name : icon.name, icon);
  });
};

var assignConfig = reactive({}) as Config;

const useComicConfig = (config: Config): void => {
  setColor(config?.color);
  assignConfig = reactive(deepMerge(assignConfig, config));
  window['$COMIC'] = assignConfig;
};

const getHexColor = (rgba: number[]) => {
  return toHex({ r: rgba[0], g: rgba[1], b: rgba[2] });
};

const setColor = (value?: Config['color']): void => {
  if (!value) return;
  let obj = {};
  if (typeof value === 'string') {
    obj['primary'] = value;
  } else {
    obj = value;
  }
  const colors = ['primary', 'success', 'warning', 'danger', 'info'];
  colors.forEach((colorKey) => {
    const rgba = colorToRgba(obj[colorKey]) || [];
    if (rgba.length > 0) {
      Array.from({ length: 10 }).forEach((_, index) => {
        if (index === 0) {
          document.documentElement.style.setProperty(`--cu-color-${colorKey}`, getHexColor(rgba));
        } else if (index === 1) {
          document.documentElement.style.setProperty(
            `--cu-color-${colorKey}-light`,
            getHexColor(colorBlendArray(rgba, 90))
          );
        } else {
          document.documentElement.style.setProperty(
            `--cu-color-${colorKey}-light${index}`,
            getHexColor(colorBlendArray(rgba, 100 - index * 10))
          );
        }
      });
    }
  });
};

export default plugin;

export * from './tools/index';
export * from './components';
export * from './icons';

export {
  CuMessageBox,
  preview,
  CuLoading,
  vLoading,
  useLoading,
  useComicConfig,
  useTooltip,
  vTooltip,
  useInfiniteScroll,
  vInfiniteScroll,
  CuLoadingbar,
  installIcons
};
