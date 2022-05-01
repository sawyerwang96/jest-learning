import { shallowMount } from '@vue/test-utils'
import UndoList from '@/containers/TodoList/components/UndoList.vue'
import { findTestWrapper } from '@/utils/test.util.js'

describe('UndoList.vue', () => {
  it('UndoList 参数为空数组[],count值应该为0,且列表无内容', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: { list: [] }
    })
    const countElem = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'item')
    expect(countElem.at(0).text()).toEqual('0')
    expect(listItems.length).toEqual(0)
  })

  it('UndoList 参数数组list,count值应该为3,且列表有内容, 且存在删除按钮', () => {
    const list = [
      { status: 'div', value: 1 },
      { status: 'div', value: 2 },
      { status: 'div', value: 3 }
    ]
    const wrapper = shallowMount(UndoList, {
      propsData: { list }
    })
    const countElem = findTestWrapper(wrapper, 'count')
    const listItems = findTestWrapper(wrapper, 'item')
    const delBtns = findTestWrapper(wrapper, 'delete-btn')
    expect(countElem.at(0).text()).toEqual('3')
    expect(listItems.length).toEqual(3)
    expect(delBtns.length).toEqual(3)
  })

  it('UndoList 删除按钮被点击时,向外触发删除事件', () => {
    const list = [
      { status: 'div', value: 1 },
      { status: 'div', value: 2 },
      { status: 'div', value: 3 }
    ]
    const wrapper = shallowMount(UndoList, {
      propsData: { list }
    })
    const delBtns = findTestWrapper(wrapper, 'delete-btn').at(1)
    delBtns.trigger('click')
    expect(wrapper.emitted().delete).toBeTruthy()
    expect(wrapper.emitted().delete[0][0]).toBe(1)
  })
})
