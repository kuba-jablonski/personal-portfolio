<template>
  <div>
    <header class="header container">
      <h1 class="h1">Jakub Jabłoński</h1>
      <p class="p">Hi! I'm a highly motivated, self-starting developer seeking to launch a career building web applications and services.</p>
      <p class="p">I love creating complex user interfaces using modern JavaScript techniques and frameworks.</p>
      <p class="p"><span class="heart">&hearts;&nbsp;</span> Vue, Node, Progressive Web Apps <span class="heart">&nbsp;&hearts;</span></p>
    </header>
    <main class="main container">
      <section class="about">
        <div class="skill">
          <h2 class="h2 skill__heading">I create responsive websites</h2>
          <p class="skill__description">I use modern web standards to develop lean and performant websites, that look great on any screen size. Using Sass, I'm able to develop scalable, component-based solutions without relying on CSS frameworks.
          </p>
          <responsive-icon class="skill__icon"/>    
        </div>
        <div class="skill">
          <h2 class="h2 skill__heading">I build JavaScript applications</h2>
          <p class="skill__description">I have used Vue.js on many of my personal projects. I'm very familiar with it's companion libraries (Vuex, Vue-Router, Nuxt etc.) and best practices. If needed, this experience and strong JavaScript fundamentals will allow me to quickly pick up other front-end frameworks such as React.</p>
          <report-icon class="skill__icon"/>
        </div>
        <div class="skill">
          <h2 class="h2 skill__heading">I know my way around the back-end</h2>
          <p class="skill__description">While my focus is on the front-end side of things, I have also worked with Node.js on the back-end to create more complex projects. I'm comfortable using libraries such as Express, Mongoose, Socket-io, Passport, Joi, and more.</p>
          <server-icon class="skill__icon"/>
        </div>        
      </section>
      <h2 class="h1">Projects</h2>
      <project-grid/>
      <section class="cta">
        <p class="bottom-p">
          Is your team looking for a junior developer with strong fundamentals and experience with Vue.js? 
        </p>
        <base-button @click="$router.push('/contact')">Get in touch</base-button>
      </section>
    </main>  
  </div>
</template>

<script>
import ProjectGrid from '@/components/ProjectGrid'
import BaseButton from '@/components/BaseButton'
import ReportIcon from '@/assets/svg/report.svg'
import ResponsiveIcon from '@/assets/svg/responsive.svg'
import ServerIcon from '@/assets/svg/server.svg'

export default {
  components: {
    ProjectGrid,
    BaseButton,
    ReportIcon,
    ResponsiveIcon,
    ServerIcon
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
  margin-bottom: 2.5rem;
}

.cta {
  padding: 3rem 4rem;
  border: 1px solid $color-grey-light-1;

  @include respond(xs) {
    padding: 0;
    border: none;
  }
}

.about {
  margin-bottom: 10rem;
}

.skill {
  display: grid;
  grid-template-columns: 1fr min-content;
  grid-template-rows: min-content 1fr;
  grid-column-gap: 10rem;
  min-height: 15rem;
  margin-bottom: 10rem;

  &__heading {
    // grid-column: 1/-1;
    margin-bottom: .5rem;
  }

  &__description {
    @include respond(sm) {
      grid-row: 2;
      grid-column: 1/-1;
    }
  }

  &__icon {
    width: 20rem;
    height: 100%;
    grid-row: 1/-1;
    grid-column: 2;

    @include respond(sm) {
      display: none;
    }
  }
}
</style>
