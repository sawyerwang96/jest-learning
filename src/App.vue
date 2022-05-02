<template>
  <div id="app">
    <TodoList/>

    <!-- <div>
      TDD（一种模式） 代码质量高
      单元测试
        优点：测试覆盖率高
        缺点：
          业务耦合度高
          代码量大
          过于独立(针对单个组件进行测试，只能保证单个组件没有问题，无法保证多个组件联合使用时没有问题)
    </div> -->

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
