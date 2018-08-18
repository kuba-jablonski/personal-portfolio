<template>
  <div class="project-grid">
    <nuxt-link v-for="project in projects" :key="project.id" :to="`projects/${project.id}`">
      <img class="project" :src="project.images.thumbnail" alt="">
    </nuxt-link>    
  </div>
</template>

<script>
export default {
  computed: {
    projects() {
      return this.$store.state.projects
    }
  }
}
</script>


<style lang="scss" scoped>
.project-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}

.project {
  padding: 4rem;
  width: 100%;
  transition: all .3s;
  background-color: $color-grey-light-2;

  &:hover {
    background-color: #B2EBF2;
  }
}
</style>
