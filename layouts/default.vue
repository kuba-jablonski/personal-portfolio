<template>
  <div>
    <the-nav @onMenuClick="mobileNavOpen = true"/>
    <the-nav-mobile v-if="mobileNavOpen" @close="mobileNavOpen = false"/>
    <nuxt/>
    <the-footer />
  </div>
</template>

<script>
import TheNav from '@/components/TheNav'
import TheNavMobile from '@/components/TheNavMobile'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheNav,
    TheNavMobile,
    TheFooter
  },
  data() {
    return {
      mobileNavOpen: false
    }
  }
}
</script>


