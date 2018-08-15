<template>
  <div class="project-grid container">
    <img class="project project--1" src="~/assets/images/pinclone.jpg" alt="">
    <img class="project project--2" src="~/assets/images/books.jpg" alt="">
    <img class="project project--3" src="~/assets/images/voting.jpg" alt="">
    <img class="project project--4" src="~/assets/images/pomodoro.jpg" alt="">
  </div>
</template>

<style lang="scss" scoped>
.project-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
}

.project {
  padding: 4rem;
  width: 100%;
  transition: all .3s;

  &--1 {
    background-color: #ACE8DC;
  }

  &--2 {
    background-color: #FBEBA5;
  }

  &--3 {
    background-color: #DDC6E7;
  }

  &--4 {
    background-color: #B5EFCE;
  }
}
</style>
