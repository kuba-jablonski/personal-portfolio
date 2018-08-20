<template>
  <div class="form-input">
    <label class="label" :for="id">
      <slot/>
    </label>
    <input
      v-if="type === 'input'"
      v-bind="$attrs"
      class="input"
      :id="id"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
    <textarea
      v-if="type === 'textarea'"
      v-bind="$attrs"
      class="textarea"
      :id="id"
      :value="value"
      @input="$emit('input', $event.target.value)"
      rows="10"
    ></textarea>
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  // props: ["value", "id"]
  props: {
    value: { required: true },
    id: { required: true },
    type: {
      type: String,
      default: 'input'
    }
  }
};
</script>


<style lang="scss" scoped>
.form-input {
  display: flex;
  flex-direction: column;
  // text-align: center;
  // box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.label {
  // background-color: $color-font;
  // color: ;
  // font-size: 1.6rem;
  padding: 0.5rem 1.5rem;
}

.input {
  text-align: inherit;
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  color: $color-grey-dark-1;
  border: 1px solid $color-grey-light-1;
  border-radius: 3px;
  outline: none;
  max-width: 50rem;
}

.textarea {
  font-family: inherit;
  text-align: inherit;
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
  color: $color-grey-dark-1;
  border: 1px solid $color-grey-light-1;
  border-radius: 3px;
  outline: none;
  max-width: 70rem; 
}
</style>
