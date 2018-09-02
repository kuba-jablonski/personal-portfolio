<template>
  <div class="container">
    <h1 class="h1">Contact</h1>
    <form action="https://formspree.io/kuba.jablonski.zg@gmail.com" method="POST" class="form">
      <base-input v-model="name" id="name" required name="name">Name</base-input>
      <base-input v-model="email" type="email" required id="email" name="_replyto">Email</base-input>
      <base-input v-model="subject" id="subject" required name="subject">Subject</base-input>
      <base-input v-model="message" textarea required id="message" name="message">Message</base-input>
      <base-button type="submit">Submit</base-button>
      <mail-icon class="icon"/>
    </form>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput'
import BaseButton from '@/components/BaseButton'
import MailIcon from '@/assets/svg/mail-envelope-open.svg'

export default {
  components: {
    BaseInput,
    BaseButton,
    MailIcon
  },
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  position: relative;
  margin-bottom: 7rem;
}

.icon {
  display: block;
  width: 45%;
  position: absolute;
  right: 2%;
  top: -10%;
  z-index: 0;
  fill: #fafafa;

  @include respond(sm) {
    display: none;
  }
}
</style>
