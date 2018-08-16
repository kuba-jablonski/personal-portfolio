<template functional>
  <div class="textbox">
    <slot name="heading"/>
    <hr class="textbox__divider">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.textbox {
  &__divider {
    width: 20rem;
    height: 2px;
    background-color: $color-grey-light-1;
    margin-bottom: 2rem;
  }
}
</style>
