import { defineComponent, h, warn, computed, PropType } from 'vue';
import { iconProps } from './icon.props';
import * as icons from './components';
import '../style/icon.css';

const enums: Record<string, string> = (() => {
  return Object.keys(icons).reduce((sum, acc) => {
    let key = acc
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/([A-Z])([A-Z][a-z])/g, '$1-$2')
      .toLowerCase(); //将大驼峰转为 - 连接
    sum[key] = acc;
    return sum;
  }, {} as Record<string, string>);
})();

/**
 * @description: icon-warpper
 * @return {*}
 */
export default defineComponent({
  name: 'CuIcon',
  props: {
    ...iconProps,
    name: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props) {
    const currentIcon = computed(() => {
      if (!enums[props.name]) {
        warn('The icon with that name does not exist in the library. Please check if the name is legal');
        return null;
      }
      return h(icons[enums[props.name]], props);
    });

    return () => h('i', { class: 'cu-icon' }, currentIcon.value);
  }
});
