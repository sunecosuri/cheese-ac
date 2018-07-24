<template>
  <button :class="$style.button">
    <slot />
  </button>
</template>

<style module>

@import '~/assets/css/values.css';

.button{
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
}

.button {
  height: 48px;
  padding: 0 var(--default);
  border-radius: 4px;
  background: #ffd61a;
  color: #fff !important;
  font-size: var(--font-default);
  font-weight: bold;
  line-height: 48px;
  text-align: center;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: box-shadow .2s;
}

.button:hover,
.button:focus {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

</style>