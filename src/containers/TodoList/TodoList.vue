<template>
  <div>
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
    addItem (item) {
      this.undoList.push(item)
    },
    handleDeleteItem (index) {
      this.undoList.splice(index, 1)
    }
  }
}
</script>

<style scoped lang="scss"></style>
