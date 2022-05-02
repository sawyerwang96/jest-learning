import { mount } from '@vue/test-utils'
import { findTestWrapper } from '@/utils/test.util.js'
import TodoList from '@/containers/TodoList/TodoList.vue'

/**
 * 1. 编写业务代码
 * 2. 预想用户行为，写一个story描述用户的行为
 * 3. 模拟用户的行为做测试
 */

it(`
  1. 用户在header输入框输入内容
  2. 用户会按下回车按钮
  3. 列表应该增加用户输入内容的列表项
`, async () => {
  const wrapper = mount(TodoList)
  const inputElem = findTestWrapper(wrapper, 'header-input').at(0)
  const content = 'sawyer'
  inputElem.setValue(content)
  await inputElem.trigger('change')
  await inputElem.trigger('keyup.enter')
  const listItems = findTestWrapper(wrapper, 'list-item')
  expect(listItems.length).toBe(1)
  expect(listItems.at(0).text()).toContain(content)
})
