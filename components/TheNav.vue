<template>
  <nav class="nav container container--lg">
    <MailIcon class="nav__icon"/>
    <div class="nav__items">
      <nuxt-link to="/" exact class="nav__item">Home</nuxt-link>
      <nuxt-link to="/projects" exact class="nav__item">Projects</nuxt-link>
      <nuxt-link to="/contact" exact class="nav__item">Contact</nuxt-link>
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
  margin-bottom: 10rem;
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

.nuxt-link-active {
  color: $color-grey-dark-1;
}
</style>
