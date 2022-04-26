import { shallowMount } from '@vue/test-utils'
import TodoList from '@/containers/TodoList/TodoList.vue'

describe('TodoList.vue', () => {
  it('TodoList render', () => {
    const wrapper = shallowMount(TodoList)
    expect(wrapper.exists()).toBeTruthy()
  })
})
