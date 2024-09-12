import { defineComponent, h } from 'vue';
import { IconProps, iconProps } from './icon.props';
import '../style/icon.css';

export const useIcon = (name: string, d: string) => {
  return defineComponent({
    name: name,
    props: iconProps,
    setup(props: IconProps) {
      return () =>
        h(
          'svg',
          {
            viewBox: '0 0 1024 1024',
            width: props.size,
            height: props.size,
            fill: props.color,
            class: ['cu-icon--' + name]
          },
          h('path', { d })
        );
    }
  });
};
