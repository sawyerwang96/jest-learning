<template>
  <div>
    <Header @add="addItem" />
  </div>
</template>

<script>
import Header from '@/containers/TodoList/components/Header.vue'
export default {
  name: 'TodoList',
  props: {},
  components: {
    Header
  },
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    addItem (item) {
      this.undoList.push(item)
    }
  }
}
</script>

<style scoped lang="scss">

</style>
