<template>
  <div id="app">
    <TodoList/>
  </div>
</template>

<script>
import TodoList from '@/containers/TodoList/TodoList.vue'
export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}
</style>
