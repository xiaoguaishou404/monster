<template>
  <button class="m-button">
    <div :class="classPrefix && [`${classPrefix}-layout`]">
      <m-icon
        v-if="icon"
        :class="classPrefix && [`${classPrefix}-icon`]"
        :icon="icon"
      ></m-icon>
      <slot></slot>
    </div>
  </button>
</template>
<script>
export default {
  props: {
    icon: {},
    classPrefix: {
      type: String,
    },
  },
};
</script>
<style lang ="scss" scoped>
.m-button {
  font-size: var(--font-size);
  padding: 0 calc(0.3 * var(--font-size));
  border-radius: var(--border-radius);
  border: 2px solid var(--border-color);
  background: var(--button-bg);
  color: var(--color);
}

.m-button:hover {
  border-color: var(--border-color-hover);
}

.m-button:active {
  border-color: var(--button-active-bg);
}

.m-button:focus {
  outline: none;
}
</style>