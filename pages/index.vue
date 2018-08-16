<template>
<div>
  <the-nav/>
  <header class="header container">
    <text-box>
      <h1 class="h1" slot="heading">Jakub Jabłoński</h1>
      <p class="p">Highly motivated, self-starting developer seeking to launch a career building web applications and services. Familiar with development and deployment process for many web-based technologies.</p>      
    </text-box>
  </header>
  <main class="main container">
    <project-grid/>
  </main>
</div>
</template>

<script>
import TheNav from '@/components/TheNav'
import ProjectGrid from '@/components/ProjectGrid'
import TextBox from '@/components/TextBox'

export default {
  components: {
    TheNav,
    ProjectGrid,
    TextBox
  }
}
</script>

<style lang="scss" scoped>
.header, .main {
  margin-top: 10rem;
}
</style>
