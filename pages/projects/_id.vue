<template>
  <div class="container project">
    <div class="project__info">
      <header class="project__header">
        <h1 class="h1 project__heading">{{ project.name }}</h1>
        <icon-globe class="project__icon"/>
        <icon-code  class="project__icon"/>
      </header>
      <p>{{ project.description }}</p> 
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
      return this.$store.getters.projectById(this.$route.params.id);
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

    await this.loadImage(this.$store.state.projects[to.params.id - 1].images.main)
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
    grid-gap: 5rem;
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

  &__header {
    display: flex;
  }

  &__heading {
    margin-right: auto;
  }

  &__icon {
    width: 3.5rem;
    height: 3.5rem;
    fill: $color-grey-dark-1;

    &:not(:last-child) {
      margin-right: 1.5rem;
    }
  }

  &__img {
    width: 100%;
    display: block;
  }
}
</style>
