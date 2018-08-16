<template>
  <div class="container projects">
    <text-box>
      <h1 class="h1" slot="heading">{{ project.name }}</h1>
      <p>{{ project.description }}</p>      
    </text-box>
    <img src="~/assets/images/pinclone2.png" alt="">
  </div>
</template>

<script>
import TextBox from '@/components/TextBox'

export default {
  components: {
    TextBox
  },
  computed: {
    project() {
      return this.$store.getters.projectById(this.$route.params.id);
    }
  }
}
</script>


<style lang="scss" scoped>
.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10rem;
}

img {
  width: 100%;
}
.projects {
  // padding: 3rem 0;
  // display: flex;
  // align-items: flex-end;

  &__divider {
    width: 20rem;
    height: 2px;
    background-color: $color-grey-light-1;
    margin-bottom: 2rem;
  }

  &__content {
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
}
</style>
