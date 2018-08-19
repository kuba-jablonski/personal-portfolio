<template>
  <div>
    <nuxt-child :key="$route.fullPath"/>
    <div  class="container projects">
      <div v-for="project in projects" :key="project.id" class="project">
        <nuxt-link class="project__link" :to="`/projects/${project.id}`">
          <img class="project__img" :src="project.images.thumbnail" alt="">
        </nuxt-link> 
      </div>

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
.project {
  position: relative;

  &__img {
    width: 100%;
    border: 2px solid transparent;
    display: block;
  }
}


.projects {
  margin-top: 7rem;
  margin-bottom: 1px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

.nuxt-link-active {
  &::before {
    content: "";
    display: inline-block;
    width: 25%;
    height: 1px;
    background-color: $color-grey-light-1;
    position: absolute;
    top: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
