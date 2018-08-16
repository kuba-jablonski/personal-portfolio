<template>
  <div class="container projects">
    <div class="header__content container">
      <h1 class="h1">Jakub Jabłoński</h1>
      <hr class="header__divider">
      <p class="p">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, fugiat maxime. Consectetur soluta omnis illo eaque aut deserunt rem voluptas officia quae repellendus hic saepe eius reprehenderit quod, expedita excepturi veritatis quidem maiores error nisi totam? Adipisci exercitationem dolorum illo excepturi quae quasi ducimus placeat. Voluptates doloribus reiciendis sit maxime?</p>      
    </div>
    <img src="~/assets/images/pinclone2.png" alt="">
  </div>
</template>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10rem;
}

img {
  width: 100%;
}
.header {
  padding: 3rem 0;
  display: flex;
  align-items: flex-end;

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
