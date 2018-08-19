<template>
  <div>
    <header class="header container">
      <h1 class="h1">Jakub Jabłoński</h1>
      <p class="p">Hi! I'm a highly motivated, self-starting developer seeking to launch a career building web applications and services.</p>
      <p class="p">I love creating complex user interfaces using modern JavaScript techniques and frameworks.</p>
      <p class="p"><span class="heart">&hearts;&nbsp;</span> Vue, Node, Progressive Web Apps <span class="heart">&nbsp;&hearts;</span></p> 
    </header>
    <main class="main container">
      <h2 class="h2">Projects</h2>
      <project-grid/>
    </main>
  </div>
</template>

<script>
import ProjectGrid from '@/components/ProjectGrid'

export default {
  components: {
    ProjectGrid
  }
}
</script>

<style lang="scss" scoped>
.header, .main {
  margin-top: 10rem;
}

.heart {
  color: red;
  font-size: 2rem;
}
</style>
