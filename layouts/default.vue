<template>
  <div>
    <the-nav class="nav"/>
    <nuxt/>
  </div>
</template>

<script>
import TheNav from '@/components/TheNav'

export default {
  components: {
    TheNav
  }
}
</script>

<style scoped>
.nav {
  margin-bottom: 10rem;
}
</style>
