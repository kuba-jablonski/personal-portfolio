<template>
  <button v-on="$listeners" class="btn">
    <slot/>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  padding: 1rem 3rem;
  font-family: inherit;
  font-size: 1.6rem;
  border: none;
  outline: none;
  background-color: $color-grey-dark-1;
  color: #fff;
  cursor: pointer;
}
</style>
