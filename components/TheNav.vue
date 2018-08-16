<template>
  <nav class="nav container">
    <MailIcon class="nav__icon"/>
    <div class="nav__items">
      <div class="nav__item">Home</div>
      <div class="nav__item">Projects</div>
      <div class="nav__item">Contact</div>
    </div>
  </nav>
</template>

<script>
import MailIcon from '@/assets/svg/mail.svg'

export default {
  components: {
    MailIcon
  }
}
</script>

<style lang="scss" scoped>
.nav {
  padding-top: 5rem;
  display: flex;
  justify-content: space-between;

  &__icon {
    width: 5rem;
    height: 5rem;
    fill: $color-grey-light-1;
  }

  &__items {
    display: flex;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(:last-child) {
      margin-right: 5rem;
    }
  }
}
</style>
