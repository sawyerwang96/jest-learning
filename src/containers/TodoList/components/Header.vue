<template>
  <div class="headerWrapper">
    <div class="headerInner">
      <span class="des">TodoList</span>
      <input
        class="todoInput"
        type="text"
        data-test="header-input"
        v-model="inputValue"
        @keyup.enter="add"
      />
    </div>
    <!-- <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="4">
        <div class="grid-content bg-purple title">
          <h2>TodoList</h2>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple">
          TodoList
          <input
            type="text"
            data-test="input"
            v-model="inputValue"
            @keyup.enter="add"
          />
          <el-input
            id="todoInput"
            data-test="input"
            v-model="inputValue"
            @change="add"
            placeholder="添加ToDo"
          ></el-input>
        </div>
      </el-col>
    </el-row> -->
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

<style scoped lang="scss">
.headerWrapper {
  background-color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;

  .headerInner {
    display: flex;
    justify-content: space-between;
    width: 600px;
  }

  .des {
    font-size: 30px;
    color: #FFFFFF;
  }

  .todoInput {
    width: 400px;
    padding-left: 10px;
    font-size: 18px;
  }
}
</style>
