<template>
  <nav class="nav container">
    <MailIcon class="nav__icon"/>
    <div class="nav__items">
      <nuxt-link to="/" exact class="nav__item">Home</nuxt-link>
      <nuxt-link to="/projects" exact class="nav__item">Projects</nuxt-link>
      <nuxt-link to="/contact" exact class="nav__item">Contact</nuxt-link>
    </div>
    <MenuIcon @click.native="$emit('onMenuClick')" class="nav__icon menu-icon"/>
  </nav>
</template>

<script>
import MailIcon from '@/assets/svg/mail-envelope-closed.svg'
import MenuIcon from '@/assets/svg/menu.svg'

export default {
  components: {
    MailIcon,
    MenuIcon
  }
}
</script>

<style lang="scss" scoped>
.nav {
  margin-bottom: 10rem;
  padding-top: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__icon {
    width: 5rem;
    height: 5rem;
    fill: $color-grey-light-1;
    cursor: pointer;
  }

  &__items {
    display: flex;

    @include respond(sm) {
      display: none;
    }
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

.menu-icon {
  display: none;
  cursor: pointer;
  height: 4rem;
  width: 4rem;

  @include respond(sm) {
    display: block;
  }
}

.nuxt-link-active {
  color: $color-grey-dark-1;
}
</style>
