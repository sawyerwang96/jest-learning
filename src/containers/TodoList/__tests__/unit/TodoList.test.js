import { shallowMount } from '@vue/test-utils'
import TodoList from '@/containers/TodoList/TodoList.vue'
import Header from '@/containers/TodoList/components/Header.vue'
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

it('TodoItem 执行addItem时 undoList增加一个内容', () => {
  const wrapper = shallowMount(TodoList)
  const header = wrapper.findComponent(Header)
  header.vm.$emit('add', 'wsy')
  const undoList = wrapper.vm.undoList
  expect(undoList.length).toEqual(1)
})
