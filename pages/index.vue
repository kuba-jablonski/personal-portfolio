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
      <p class="bottom-p">
        If your team is looking for a junior developer with strong fundamentals and deep knowledge of Vue.js? 
      </p>
      <base-button @click="$router.push('/contact')">Get in touch</base-button>
    </main>
    
  </div>
</template>

<script>
import ProjectGrid from '@/components/ProjectGrid'
import BaseButton from '@/components/BaseButton'

export default {
  components: {
    ProjectGrid,
    BaseButton
  }
}
</script>

<style lang="scss" scoped>
.header, .main {
  margin-top: 10rem;
  margin-bottom: 10rem;
}

.heart {
  color: red;
  font-size: 2rem;
}
.link {
  color: $color-grey-dark-1;
}

.bottom-p {
  margin-bottom: 1.5rem;
}
</style>
