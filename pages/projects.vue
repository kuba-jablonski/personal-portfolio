<template>
  <div>
    <!-- <div>Project List</div> -->
    <nuxt-child />
    <div class="container grid">
      <nuxt-link v-for="project in projects" :key="project.id" :to="`/projects/${project.id}`">
        <img  :src="project.images.thumbnail" alt="">
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
  }
}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  border: 2px solid transparent;
}


.grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
</style>
