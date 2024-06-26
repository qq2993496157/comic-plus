import { defineComponent, h, computed } from 'vue';
import type { Component, VNode } from 'vue';
import '../style/container.css';
import { asideProps, containerCommonProps } from './container.props';

const Container = defineComponent({
  name: 'CuContainer',
  setup(props, { slots }) {
    const isVertical = computed(() => {
      const vNodes: VNode[] = slots.default?.() ?? [];
      return vNodes.some((vNode) => {
        const tag = (vNode.type as Component).name;
        return tag === 'CuHeader' || tag === 'CuFooter';
      });
    });

    const customStyle = computed(() => {
      return {
        height: props.height
      };
    });

    return () => {
      return h(
        'section',
        { class: ['cu-container', isVertical.value ? 'is-vertical' : undefined], style: customStyle.value },
        slots
      );
    };
  },
  props: containerCommonProps
});

const Aside = defineComponent({
  name: 'CuAside',
  setup(props, { slots }) {
    const customStyle = computed(() => {
      return {
        width: props.width,
        height: props.height
      };
    });
    return () => {
      return h('aside', { class: 'cu-aside', style: customStyle.value }, slots);
    };
  },
  props: asideProps
});

const Header = defineComponent({
  name: 'CuHeader',
  setup(props, { slots }) {
    const customStyle = computed(() => {
      return {
        height: props.height
      };
    });
    return () => {
      return h('header', { class: 'cu-header', style: customStyle.value }, slots);
    };
  },
  props: containerCommonProps
});

const Main = defineComponent({
  name: 'CuMain',
  setup(props, { slots }) {
    const customStyle = computed(() => {
      return {
        height: props.height
      };
    });
    return () => {
      return h('main', { class: 'cu-main', style: customStyle.value }, slots);
    };
  },
  props: containerCommonProps
});

const Footer = defineComponent({
  name: 'CuFooter',
  setup(props, { slots }) {
    const customStyle = computed(() => {
      return {
        height: props.height
      };
    });
    return () => {
      return h('footer', { class: 'cu-footer', style: customStyle.value }, slots);
    };
  },
  props: containerCommonProps
});

export { Container, Aside, Header, Main, Footer };
