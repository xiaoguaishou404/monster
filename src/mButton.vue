<template>
  <button class="m-button">
    <div :class="classPrefix && [`${classPrefix}-layout`]">
      <m-icon
        v-if="icon"
        :class="[
          { [`${classPrefix}-icon`]: classPrefix },
          { loading: loading },
        ]"
        :icon="loading ? '#icon-loading' : icon"
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
    loading: {
      type: Boolean,
      default: false,
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
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  animation: spin 2s infinite;
}
</style>