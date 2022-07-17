<template>
  <div class="wrapper">
    <input @input="onInput" :value="value" :disabled="disabled" :readonly="readonly" type="text">
    <template v-if="error">
      <m-icon icon="#icon-error"></m-icon>
      <span>{{error}}</span>
    </template>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
      type: String,
    },
  },
  methods: {
    onInput(event) {
        console.log(event);
      this.$emit("input", event.target.value);
    },
  },
};
</script>
<style lang ="scss" scoped>
.wrapper {
  > input {
    font-size: var(--font-size);
    border-radius: var(--border-radius);
    padding: 0.3em calc(0.6 * var(--font-size));
    border-color: #ccc;

    &:hover {
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
    }
    &:focus {
      border-color: var(--button-bg);
      outline: none;
    }
    &[disabled] {
      cursor: not-allowed;
      box-shadow: none;
      color: rgba(0, 0, 0, 0.3);
      border-color: rgba(0, 0, 0, 0.3);
    }
  }
}
</style>