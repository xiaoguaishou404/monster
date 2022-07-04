<template>
  <button class="m-button">h1</button>
</template>
<style lang ="scss">
.m-button {
  font-size: var(--font-size);
  padding: 0 var(--font-size);
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