<template>
  <div class="container project">
    <div class="project__info">
      <header class="project__header">
        <h1 class="h1 project__heading">{{ project.name }}</h1>
        <a :href="project.links.website" target="_blank" class="project__link">
          <icon-globe class="project__icon"/>
        </a>
        <a :href="project.links.code" target="_blank" class="project__link">
          <icon-code  class="project__icon"/>
        </a>
      </header>
      <p class="p">{{ project.description }}</p>
      <p>Built with:</p>
      <ul class="tech">
        <li class="tech__item" v-for="tech in project.tech" :key="tech">
          {{ tech }}
        </li>
      </ul>
    </div>
    <img class="project__img" :src="project.images.main" alt="">
    <transition name="fade" @afterLeave="$emit('loadingAnimationFinished')">
      <div v-if="isLoading" class="project__overlay">
        <grid-loader/>
      </div>
    </transition>
  </div>
</template>

<script>
import GridLoader from '@/components/GridLoader'
import IconGlobe from '@/assets/svg/globe.svg'
import IconCode from '@/assets/svg/code.svg'

export default {
  transition(to, from) {
    if (!to || !from) return

    return +to.params.id > +from.params.id ? 'slideinright' : 'slideinleft'
  },
  components: {
    IconGlobe,
    IconCode,
    GridLoader
  },
  data() {
    return {
      isLoading: false
    }
  },
  computed: {
    project() {
      if (this.$route.params.id) {
        return this.$store.getters.projectById(this.$route.params.id);
      } else {
        return this.$store.getters.projectById('1');
      }
      
    }
  },
  methods: {
    loadImage(url) {
      return new Promise((resolve, reject) => {
        const img = new Image()

        img.onload = () => {
          resolve()
        }

        img.onerror = () => {
          reject()
        }

        img.src = url
      })
    }
  },
  async beforeRouteUpdate(to, from, next) {
    let loadingAnimationPlayed = false;
    setTimeout(() => {
      loadingAnimationPlayed = true;
      this.isLoading = true
    }, 300)

    try {
      await this.loadImage(this.$store.state.projects[to.params.id - 1].images.main)
    } catch(e) {
      await this.loadImage(this.$store.state.projects[1].images.main)
    }
    
    this.isLoading = false

    if (loadingAnimationPlayed)
      this.$on('loadingAnimationFinished', () => next()) 
    else
      next()
  }
}
</script>


<style lang="scss" scoped>
.project {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 8rem;
  position: relative;

  @include respond(md) {
    grid-gap: 2rem;
  }

  @include respond(sm) {
    grid-template-columns: 1fr;
  }

  &__overlay {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(#fff, .9);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__info {
    // fix content reflow issue on mobile
    min-height: 25rem;
  }

  &__header {
    display: flex;
  }

  &__heading {
    margin-right: auto;
  }

  &__link {
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  &__icon {
    width: 3.5rem;
    height: 3.5rem;
    fill: $color-grey-dark-1;
  }

  &__img {
    width: 100%;
    display: block;
  }
}

.tech {
  list-style: none;
  display: flex;

  &__item {
    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }
}
</style>
