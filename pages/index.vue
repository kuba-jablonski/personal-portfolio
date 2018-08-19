<template>
<div>
  <header class="header container">
    <text-box>
      <h1 class="h1" slot="heading">Jakub Jabłoński</h1>
      <p class="p">Hi! I'm a highly motivated, self-starting developer seeking to launch a career building web applications and services.</p>
      <p class="p">I love building complex user interfaces using modern JavaScript techniques and frameworks.</p>
      <p class="p"><span class="heart">&hearts;</span> Vue, Node, Progressive Web Apps <span class="heart">&hearts;</span></p> 
    </text-box>
  </header>
  <main class="main container">
    <project-grid/>
  </main>
</div>
</template>

<script>
import ProjectGrid from '@/components/ProjectGrid'
import TextBox from '@/components/TextBox'

export default {
  components: {
    ProjectGrid,
    TextBox
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
