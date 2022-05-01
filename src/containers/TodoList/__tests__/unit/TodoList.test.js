import { shallowMount } from '@vue/test-utils'
import TodoList from '@/containers/TodoList/TodoList.vue'
// import Header from '@/containers/TodoList/components/Header.vue'
import UndoList from '@/containers/TodoList/components/UndoList.vue'
// describe('TodoList.vue', () => {
//   it('TodoList render', () => {
//     const wrapper = shallowMount(TodoList)
//     expect(wrapper.exists()).toBeTruthy()
//   })
// })

it('TodoItem 初始化时,undoList应该为空', () => {
  const wrapper = shallowMount(TodoList)
  const undoList = wrapper.vm.undoList
  expect(undoList).toEqual([])
})

it('TodoItem 执行addItem后 内会增加一项', () => {
  // it('TodoItem 执行addItem时 undoList增加一个内容', () => {
  // 集成测试
  // const wrapper = shallowMount(TodoList)
  // const header = wrapper.findComponent(Header)
  // header.vm.$emit('add', 'wsy')
  // const undoList = wrapper.vm.undoList
  // expect(undoList.length).toEqual(1)
  // expect(undoList).toEqual(['wsy'])

  // 单元测试
  const wrapper = shallowMount(TodoList)
  wrapper.setData({
    undoList: [1, 2, 3]
  })
  wrapper.vm.addItem(4)
  expect(wrapper.vm.$data.undoList).toEqual([1, 2, 3, 4])
})

it('TodoList 调用UndoList,应该传递list参数', () => {
  const wrapper = shallowMount(TodoList)
  const undoList = wrapper.findComponent(UndoList)
  const list = undoList.props('list')
  expect(list).toBeTruthy()
})

it('TodoList handleDeleteItem方法被调用时,undoList列表内容会减少一项', () => {
  const wrapper = shallowMount(TodoList)
  wrapper.setData({
    undoList: [1, 2, 3]
  })
  wrapper.vm.handleDeleteItem(1)
  expect(wrapper.vm.$data.undoList).toEqual([1, 3])
})
