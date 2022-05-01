<template>
  <div class="header">
    TodoList
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

<style>
.header {
  background-color: #666;
  height: 60px;
  line-height: 60px;
}
</style>
