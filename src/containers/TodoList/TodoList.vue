<template>
  <div class="todoListWrapper">
    <Header @add="addItem" />
    <UndoList
      :list="undoList"
      @delete="handleDeleteItem"
      @status="handleChangeStatus"
      @reset="handleResetStatus"
      @change="handleChangeItemValue"
    />
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
    },
    handleChangeStatus (index) {
      this.undoList = this.undoList.map((item, idx) => {
        if (index === idx) {
          item.status = 'input'
        } else {
          item.status = 'div'
        }
        return item
      })
    },
    handleResetStatus () {
      this.undoList = this.undoList.map(item => {
        item.status = 'div'
        return item
      })
    },
    handleChangeItemValue ({ index, value }) {
      this.undoList[index].value = value
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
