<template>
  <button class="m-button">
    <div :class="classPrefix && [`${classPrefix}-layout`]">
      <svg
        :class="classPrefix && [`${classPrefix}-icon`]"
        v-if="icon"
        class="icon"
        aria-hidden="true"
      >
        <use :xlink:href="icon"></use>
      </svg>
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
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>