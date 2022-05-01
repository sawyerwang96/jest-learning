import { shallowMount } from '@vue/test-utils'
import Header from '@/containers/TodoList/components/Header.vue'
import { findTestWrapper } from '@/utils/test.util.js'
it('Header style change', () => {
  const wrapper = shallowMount(Header)
  expect(wrapper).toMatchSnapshot()
})

it('Header 包含input框', () => {
  const wrapper = shallowMount(Header)
  // const input = wrapper.find('[data-test="input"]')
  const input = findTestWrapper(wrapper, 'input')
  expect(input.exists()).toBe(true)
})

it('Header input初始内容为空', () => {
  const wrapper = shallowMount(Header)
  const inputValue = wrapper.vm.$data.inputValue
  expect(inputValue).toBe('')
})

it('Header input框的value发生变化,数据应该跟着编', () => {
  const wrapper = shallowMount(Header)
  // const input = wrapper.find('[data-test="input"]')
  const input = findTestWrapper(wrapper, 'input')
  input.setValue('sawyer')
  const inputValue = wrapper.vm.$data.inputValue
  expect(inputValue).toBe('sawyer')
})

it('Header input框按下enter键,inputValue为空时,无反应', () => {
  const wrapper = shallowMount(Header)
  // const input = wrapper.find('[data-test="input"]')
  const input = findTestWrapper(wrapper, 'input')
  input.setValue('')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeFalsy()
})

it('Header input框按下enter键,inputValue为不空时,向外触发add事件,同时清空inputValue', () => {
  const wrapper = shallowMount(Header)
  // const input = wrapper.find('[data-test="input"]')
  const input = findTestWrapper(wrapper, 'input')
  input.setValue('haha')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeTruthy()
  const inputValue = wrapper.vm.inputValue
  expect(inputValue).toBe('')
})
