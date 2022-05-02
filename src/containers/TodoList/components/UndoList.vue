<template>
  <div class="undoList">
    <div class="title">
      <div class="des">正在进行</div>
      <div class="count" data-test="count">{{ list.length }}</div>
    </div>
    <ul>
      <li
        v-for="(item, index) in list"
        :key="index"
        data-test="list-item"
        class="list-item"
        @click="handleChangeStatus(index)"
      >
        <input
          type="text"
          data-test="input"
          class="itemInput"
          :value="item.value"
          v-if="item.status === 'input'"
          @blur="handleInputBlur($event, index)"
          @change="handleInputChange($event, index)"
        />
        <span v-else>{{ item.value }}</span>

        <span
          class="deleteBtn"
          data-test="delete-btn"
          @click="handleDelete(index)"
        >
          -
        </span>
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
    },
    handleChangeStatus (index) {
      this.$emit('status', index)
    },
    handleInputBlur () {
      this.$emit('reset')
    },
    handleInputChange (event, index) {
      debugger
      const value = event.target.value
      this.$emit('change', {
        index,
        value
      })
    }
  }
}
</script>

<style scoped lang="scss">
.undoList {
  width: 600px;
  margin: 20px auto;

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;

    .des {
      font-size: 20px;
      font-weight: 600;
    }

    .count {
      width: 30px;
      height: 30px;
      line-height: 30px;
      background-color: #ffffff;
      color: #999999;
      border-radius: 50%;
      text-align: center;
    }
  }

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
    border-left: 4px solid pink;
    border-radius: 4px;
    padding-left: 6px;
    padding-right: 6px;
    height: 36px;
    margin-top: 8px;
  }

  .itemInput {
    width: 320px;
    height: 24px;
    padding-left: 6px;
    padding-right: 6px;
  }

  .deleteBtn {
    border: 2px solid #ccc;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 18px;
    color: #999999;
    cursor: pointer;
  }
}
</style>
