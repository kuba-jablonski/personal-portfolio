<template>
<div>
  <nav class="nav container">
    <div class="brand">Hello</div>
    <div class="nav-items">
      <div>Home</div>
      <div>Projects</div>
      <div>Contact</div>
    </div>
  </nav>
  <the-header/>
  <project-grid/>
</div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import ProjectGrid from '@/components/ProjectGrid'

export default {
  components: {
    TheHeader,
    ProjectGrid
  }
}
</script>

<style scoped>
.nav {
  padding-top: 5rem;
  display: flex;
  justify-content: space-between;
}

.nav-items {
  display: flex;
}
</style>
