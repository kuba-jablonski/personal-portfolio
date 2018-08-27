<template>
  <div>
    <nuxt-child :key="$route.fullPath"/>
    <div class="container projects">
      <nuxt-link
        v-for="project in projects"
        :key="project.id"
        :to="`/projects/${project.id}`"
        replace
        style="position: relative;"
      >
        <img
          class="projects__img"
          :src="project.images.thumbnail"
        />
        <div class="overlay"></div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects
    }
  },
}
</script>

<style lang="scss" scoped>
.projects {
  margin-top: 7rem;
  margin-bottom: 1px;
  display: grid;
  grid-gap: 2px;
  grid-template-columns: repeat(6, 1fr);

  @include respond(lg) {
    padding: 1px 2px;
  }

  @include respond(sm) {
    grid-template-columns: repeat(3, 1fr);
  }

  &__img {
    width: 100%;
    position: relative;
    display: block;
    cursor: pointer;
  }
}

.overlay {
  background-color: rgba(#fff, .5);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  transition: all .3s;
}

.nuxt-link-active .overlay {
  background-color: transparent;
}
</style>
