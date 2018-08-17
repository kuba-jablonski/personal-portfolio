<template>
  <div>
    <the-nav />
    <nuxt/>
    <the-footer />
  </div>
</template>

<script>
import TheNav from '@/components/TheNav'
import TheFooter from '@/components/TheFooter'

export default {
  components: {
    TheNav,
    TheFooter
  }
}
</script>


