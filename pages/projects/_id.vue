<template>
  <div class="container project">
    <div class="project__info">
      <header class="project__header">
        <h1 class="h1 project__heading">{{ project.name }}</h1>
      </header>
      <p class="p">{{ project.description }}</p>
      <p>Built with:</p>
      <ul class="tech">
        <li class="tech__item" v-for="tech in project.tech" :key="tech">
          {{ tech }}
        </li>
      </ul>
      <div class="project__links project__links--desktop">
        <a :href="project.links.website" target="_blank">
          <base-button class="project__btn">Visit live</base-button>
        </a>
        <a :href="project.links.code" target="_blank">
          <base-button class="project__btn">Check code</base-button>
        </a>
      </div>
    </div>

    <img class="project__img" :src="project.images.main" alt="">

    <div class="project__links project__links--mobile">
      <a :href="project.links.website" target="_blank">
        <base-button class="project__btn">Visit live</base-button>
      </a>
      <a :href="project.links.code" target="_blank">
        <base-button class="project__btn">Check code</base-button>
      </a>
    </div>

    <transition name="fade" @afterLeave="$emit('loadingAnimationFinished')">
      <div v-if="isLoading" class="project__overlay">
        <grid-loader/>
      </div>
    </transition>

  </div>
</template>

<script>
import GridLoader from '@/components/GridLoader'
import BaseButton from '@/components/BaseButton'

export default {
  transition(to, from) {
    if (!to || !from) return

    return +to.params.id > +from.params.id ? 'slideinright' : 'slideinleft'
  },
  components: {
    GridLoader,
    BaseButton
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
<<<<<<< HEAD
    grid-gap: 2rem;
  }

  @include respond(sm) {
=======
>>>>>>> dev
    grid-template-columns: 1fr;
    grid-gap: 5rem;
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
    display: flex;
    flex-direction: column;
    min-height: 20rem;
  }

  &__header {
    display: flex;
  }

  &__heading {
    margin-right: auto;
  }

  &__links {
    display: flex;
    margin-top: 4rem;

    & > *:not(:last-child) {
      margin-right: 2rem;
    }

    &--desktop {
      @include respond(md) {
        display: none;
      }
    }

    &--mobile {
      display: none;

      @include respond(md) {
        display: flex;
        justify-content: center;
        margin-top: 0;
      }
    }
  }

  &__img {
    max-width: 55rem;
    width: 100%;
    align-self: center;
    justify-self: center;
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
