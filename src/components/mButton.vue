<template>
  <button class="m-button">
    <m-icon v-if="icon" :class="[
    { loading: loading },
    { [`${classPrefix}-icon`]: classPrefix }]" :icon="loading ? '#icon-loading' : icon">
    </m-icon>
    <div class="slot">
      <slot></slot>
    </div>

  </button>
</template>
<script>
import mIcon from "./mIcon.vue";

export default {
  components: {
    "m-icon": mIcon,
  },
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
<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  line-height: 1.2em;
}

:root {
  --font-size: 1em;
  --button-bg: rgba(89, 200, 173, 1);
  --button-active-bg: #eee;
  --border-radius: calc(3 * var(--font-size));
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
</style>


<style lang ="scss" scoped>
.m-button {
  font-size: var(--font-size);
  padding: 0 calc(0.3 * var(--font-size));
  border-radius: var(--border-radius);
  border: 2px solid var(--border-color);
  background: var(--button-bg);
  color: var(--color);
  display: flex;
  flex-wrap: nowrap;

  > .slot {
    flex-wrap: nowrap;
    display: flex;
    flex-shrink: 0;
  }
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
  animation: spin 2s infinite linear;
}
</style>