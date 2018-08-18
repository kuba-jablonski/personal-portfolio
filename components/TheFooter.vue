<template>
  <footer class="footer">
    <div class="footer__content container container--lg">
      <div class="footer__copy">Created by Jakub Jabłoński</div>
      <div class="footer__social">
        <a href="https://github.com/kuba-jablonski" target="_blank" class="footer__link">
          <github-icon class="footer__icon"/>
        </a>
        <a href="https://www.linkedin.com/in/jakub-jab%C5%82o%C5%84ski-47a990138/" target="_blank" class="footer__link">
          <linkedin-icon class="footer__icon"/>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import GithubIcon from '@/assets/svg/github-with-circle.svg'
import LinkedinIcon from '@/assets/svg/linkedin-with-circle.svg'

export default {
  components: {
    GithubIcon,
    LinkedinIcon
  }
}
</script>


<style lang="scss" scoped>
.footer {
  height: 15rem;
  background-color: $color-grey-light-2;
  margin-top: 10rem;
  padding: 0 1rem;

  &__content {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__link {
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }

  &__icon {
    width: 5rem;
    height: 5rem;
    fill: $color-grey-light-1;
  }
}
</style>