<template>
  <div class="todoListWrapper">
    <Header @add="addItem" />
    <UndoList :list="undoList" @delete="handleDeleteItem" />
  </div>
</template>

<script>
import Header from '@/containers/TodoList/components/Header.vue'
import UndoList from '@/containers/TodoList/components/UndoList.vue'
export default {
  name: 'TodoList',
  props: {},
  components: {
    Header,
    UndoList
  },
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    addItem (value) {
      this.undoList.push({
        status: 'div',
        value
      })
    },
    handleDeleteItem (index) {
      this.undoList.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="scss">
.todoListWrapper {
  height: 100vh;
  background: #cccccc;
}
</style>
