import { defineComponent, h, provide, computed } from 'vue';
import type { CSSProperties } from 'vue';
import '../style/menu.css';
import { menuProps, menuEmits } from './main.props';
import { MENU_PROVIDE } from './type';

export const Menu = defineComponent({
  name: 'CuMenu',
  props: menuProps,
  emit: menuEmits,
  setup(props, { slots, emit }) {
    const menuClick = (name: string) => {
      emit('menu-click', name);
      emit('update:modelValue', name);
    };

    const style = computed<CSSProperties>(() => {
      return {
        '--cu-menu-active-background': props.activeBackgroundColor,
        '--cu-menu-active-text': props.activeTextColor,
        backgroundColor: props.backgroundColor,
        color: props.textColor,
        '--cu-menu-base-height': props.size + 'px'
      };
    });

    provide(MENU_PROVIDE, {
      props,
      menuClick,
      style
    });

    return () =>
      h(
        'ul',
        {
          class: [
            'cu-menu',
            props.mode ? 'is-' + props.mode : undefined,
            { 'menu-collapse': props.mode === 'vertical' && props.collapse }
          ],
          style: style.value
        },
        slots
      );
  }
});
