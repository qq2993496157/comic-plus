<template>
  <div class="cu-web-footer">
    <div class="cu-web-footer__links" v-if="links || $slots['default']">
      <slot>
        <a
          class="cu-web-footer__link"
          v-for="link in links"
          :href="link.href ?? 'javascript:void(0);'"
          :target="link.href && link.blankTarget ? '_blank' : undefined">
          <i v-if="link.icon" :class="link.icon"></i>{{ link.content }}
        </a>
      </slot>
    </div>
    <div class="cu-web-footer__copyright" v-if="copyright || $slots['copyright']">
      <slot name="copyright">
        {{ copyright }}
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { webFooterProps } from './main.props';
import '../style/web-footer.css';

defineOptions({
  name: 'CuWebFooter'
});

const props = defineProps(webFooterProps);
</script>
