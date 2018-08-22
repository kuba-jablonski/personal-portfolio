<template>
  <div>
    <nuxt-child :key="$route.fullPath"/>
    <div class="container projects">
      <nuxt-link
        v-for="project in projects"
        :key="project.id"
        class="project"
        tag="img"
        :src="project.images.thumbnail"
        :to="`/projects/${project.id}`"
        replace
      />
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
.project {
  width: 100%;
  display: block;
  cursor: pointer;
}

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
}
</style>
