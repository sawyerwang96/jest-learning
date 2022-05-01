<template>
  <div id="app">
    <TodoList/>

    <!-- <div>
      tdd + 单元测试（适用于通用函数库）
      每次修改代码都需要先修改测试用例代码，再修改业务代码，需要修改两遍代码
      因为测试用例代码和业务代码有耦合
    </div> -->
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
