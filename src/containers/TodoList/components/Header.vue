<template>
  <div>
    <input
      type="text"
      data-test="input"
      v-model="inputValue"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    add () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>
