<template>
  <div class="mobile-nav container">
    <div class="mobile-nav__icons">
      <close-icon @click.native="$emit('close')" class="mobile-nav__icon mobile-nav__icon--close"/>
      <menu-icon class="mobile-nav__icon mobile-nav__icon--menu"/>
    </div>
    <div class="mobile-nav__items">
      <nuxt-link @click.native="$emit('close')" to="/" exact class="mobile-nav__item">
        Home
        <small>Back where we started!</small>
      </nuxt-link>
      <nuxt-link @click.native="$emit('close')" to="/projects" class="mobile-nav__item">
        Projects
        <small>Explore my work!</small>
      </nuxt-link>
      <nuxt-link @click.native="$emit('close')" to="/contact" exact class="mobile-nav__item">
        Contact
        <small>Let's get in touch!</small>
      </nuxt-link>
    </div>      
  </div>
</template>

<script>
import CloseIcon from '@/assets/svg/close.svg'
import MenuIcon from '@/assets/svg/menu.svg'

export default {
  components: {
    CloseIcon,
    MenuIcon
  }
}
</script>


<style lang="scss" scoped>
.mobile-nav {
  height: 100vh;
  width: 100%;
  padding-top: 5rem;
  padding-left: 4rem;
  top: 0;
  left: 0;
  position: fixed;
  background-color: #fff;
  z-index: 10;
  overflow-y: overlay;

  &__icons {
    height: 5rem;
    display: flex;
    align-items: center;
    margin-bottom: 10rem;
  }

  &__icon {
    width: 4rem;
    height: 4rem;
    fill: $color-grey-light-1;
    cursor: pointer;

    &--close {
      width: 3rem;
      height: 3rem;
    }

    &--menu {
      margin-left: auto;
    }
  }

  &__items {
    display: flex;
    flex-direction: column;
  }

  &__item {
    font-size: 2rem;

    &:not(:last-child) {
      margin-bottom: 4rem;
    }

    small {
      display: block;
      font-size: 1.4rem;
      color: $color-grey-light-3;
    }
  }
}

.nuxt-link-active {
  color: $color-grey-dark-1;
}
</style>
