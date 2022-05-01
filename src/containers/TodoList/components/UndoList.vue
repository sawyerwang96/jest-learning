<template>
  <div>
    <div data-test="count">{{ list.length }}</div>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        data-test="item"
      >
        <span>{{ item }}</span>

        <span data-test="delete-btn" @click="handleDelete(index)">x</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'UndoList',
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    handleDelete (index) {
      this.$emit('delete', index)
    }
  }
}
</script>
