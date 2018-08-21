<template>
  <div class="container">
    <h1 class="h1">Contact</h1>
    <form @submit.prevent="onSubmit" class="form">
      <base-input v-model="name" id="name">Name</base-input>
      <base-input v-model="email" id="email">Email</base-input>
      <base-input v-model="subject" id="subject">Subject</base-input>
      <base-input v-model="message" type="textarea" id="message">Message</base-input>
      <button type="submit" class="button">Submit</button>
      <mail-icon class="icon"/>
    </form>
  </div>
</template>

<script>
import BaseInput from '@/components/BaseInput'
import MailIcon from '@/assets/svg/mail-envelope-open.svg'

export default {
  components: {
    BaseInput,
    MailIcon
  },
  data() {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  },
  methods: {
    onSubmit() {
      // TODO
      console.log('do stuff')
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
  // fill: #d4d3d3;
}

.button {
  padding: 1rem 3rem;
  font-family: inherit;
  font-size: 1.6rem;
  border: none;
  outline: none;
  background-color: $color-grey-dark-1;
  color: #fff;
  cursor: pointer;
}
</style>
