import { provide, defineComponent, h } from 'vue';
import { breadcrumbProps } from './main.props';
import { BREADCRUMB_PROVIDE } from './type';
import '../style/breadcrumb.css';

export default defineComponent({
  name: 'CuBreadcrumb',
  props: breadcrumbProps,
  setup(props, { slots }) {
    provide(BREADCRUMB_PROVIDE, { props });
    return () => {
      return h(
        'div',
        {
          class: ['cu-breadcrumb', { fill: props.fill, closeboth: props.closeboth }],
          style: { '--cu-breadcrumb-color': props.color || undefined }
        },
        slots
      );
    };
  }
});
