<template>
  <div class="lds-grid"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
</template>

<style lang="scss" scoped>
.lds-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 6px;
  position: relative;
  width: 100px;
  height: 100px;
}
.lds-grid div {
  background: $color-grey-dark-1;
  animation: lds-grid 1.2s linear infinite;
}
.lds-grid div:nth-child(1) {
  animation-delay: 0s;
}
.lds-grid div:nth-child(2) {
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(3) {
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(4) {
  animation-delay: -0.4s;
}
.lds-grid div:nth-child(5) {
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(6) {
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(7) {
  animation-delay: -0.8s;
}
.lds-grid div:nth-child(8) {
  animation-delay: -1.2s;
}
.lds-grid div:nth-child(9) {
  animation-delay: -1.6s;
}
@keyframes lds-grid {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

</style>
