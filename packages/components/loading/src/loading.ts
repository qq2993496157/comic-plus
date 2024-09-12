import { createVNode, render } from 'vue';
import LoadingConstructor from './main.vue';
import type { LoadingInstance, LoadingOptions } from './type';

const attributes = {
  blur: {
    type: Boolean,
    default: false
  },
  text: {
    type: String,
    default: undefined
  },
  background: {
    type: String,
    default: undefined
  },
  color: {
    type: String,
    default: undefined
  }
} as const;
type Attributes = typeof attributes;
type loadingAttributes = { [K in keyof Attributes]: Attributes[K]['default'] };

function createLoading(
  props: {
    glabal?: boolean;
    defaultVisible: boolean;
  } & LoadingOptions
) {
  const container = document.createElement('div');

  const vnode = createVNode(LoadingConstructor, props);

  render(vnode, container);

  props.target?.appendChild(container.firstElementChild!);

  return {
    vnode,
    updateVisible: (val: boolean) => {
      const vm = vnode.component!;
      vm.exposed?.updateVisible(val);
    },
    destroy: () => {
      render(null, container);
    }
  };
}

function getDataAttribute(el: HTMLElement): loadingAttributes {
  return Object.entries(attributes).reduce((attrobj, [name, option]) => {
    const attrVal = el.getAttribute(`comic-loading-${name}`);
    const { type, default: defaultValue } = option;
    let value = attrVal ?? defaultValue;
    value = value === 'false' ? false : value;
    value = value ? type(value) : undefined;
    attrobj[name] = value;

    return attrobj;
  }, {} as loadingAttributes);
}

var loadingInstance: LoadingInstance;

function LoadingService(option?: LoadingOptions): LoadingInstance {
  if (loadingInstance) {
    loadingInstance.updateVisible(true);
    return loadingInstance;
  }
  const el: HTMLElement = option?.target ?? document.body;
  let instance = createLoading({
    glabal: true,
    defaultVisible: true,
    target: el,
    ...option
  });

  loadingInstance = {
    ...instance,
    close: () => {
      instance.updateVisible(false);
      setTimeout(() => {
        instance.destroy();
        loadingInstance = undefined;
      }, 300);
    }
  };

  return loadingInstance;
}

export { createLoading, getDataAttribute, LoadingService };
