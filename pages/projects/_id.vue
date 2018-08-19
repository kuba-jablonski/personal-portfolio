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
    <img :src="project.images.main" alt="">
  </div>
</template>

<script>
import IconGlobe from '@/assets/svg/globe.svg'
import IconCode from '@/assets/svg/code.svg'

export default {
  transition(to, from) {
    if (!to || !from) return

    return +to.params.id > +from.params.id ? 'slideinright' : 'slideinleft'
  },
  components: {
    IconGlobe,
    IconCode
  },
  computed: {
    project() {
      return this.$store.getters.projectById(this.$route.params.id);
    }
  },
  beforeRouteUpdate(to, from, next) {
    // TODO: implement a loader

    const img = new Image()

    img.onload = () => {
      next()
    }

    img.src = this.$store.state.projects[to.params.id - 1].images.main
  }
}
</script>


<style lang="scss" scoped>
.project {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10rem;

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
}

img {
  width: 100%;
}
// .projects {
//   // padding: 3rem 0;
//   // display: flex;
//   // align-items: flex-end;

//   &__divider {
//     width: 20rem;
//     height: 2px;
//     background-color: $color-grey-light-1;
//     margin-bottom: 2rem;
//   }

//   &__content {
//     height: 50%;
//     display: flex;
//     flex-direction: column;
//     justify-content: space-between;
//   }
// }
</style>
