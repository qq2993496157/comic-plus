<template>
  <div
    class="cu-card"
    :class="[shadow, { 'turn-card': turnCard }]"
    @click="showTurn = !showTurn"
    ref="cardRef"
    :style="style">
    <div class="cu-card__container" :class="[{ turn: !showTurn && turnType === 'click' }, turnType]">
      <slot></slot>
    </div>
    <div class="cu-card__opposite" :class="[{ turn: showTurn && turnType === 'click' }, turnType]" v-if="turnCard">
      <slot name="opposite"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import '../style/card.css';
import { cardProps } from './main.props';
defineOptions({
  name: 'CuCard'
});

defineProps(cardProps);

const cardRef = ref(null);
const showTurn = ref(false);

const style = computed(() => {
  if (!cardRef.value) return undefined;
  let style = cardRef.value.getBoundingClientRect();
  let l = 0 - (style.width - style.width * 0.3) + 'px';
  return { '--cu-card-margin-left': l };
});
</script>
