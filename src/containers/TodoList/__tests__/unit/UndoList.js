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

  it('changeStatus', () => {
    const list = [
      { status: 'div', value: 1 },
      { status: 'div', value: 2 },
      { status: 'div', value: 3 }
    ]
    const wrapper = shallowMount(UndoList, {
      propsData: { list }
    })
    const delBtns = findTestWrapper(wrapper, 'item').at(1)
    delBtns.trigger('click')
    expect(wrapper.emitted().status).toBeTruthy()
    expect(wrapper.emitted().status[0][0]).toBe(1)
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

  it('UndoList显示一个输入框项和两个正常内容项', () => {
    const list = [
      { status: 'div', value: 1 },
      { status: 'input', value: 2 },
      { status: 'div', value: 3 }
    ]
    const wrapper = shallowMount(UndoList, {
      propsData: { list }
    })
    const input = findTestWrapper(wrapper, 'input')
    expect(input.at(0).element.value).toBe('2')
    expect(input.length).toBe(1)
    // expect(wrapper.emitted().delete[0][0]).toBe(1)
  })

  it('input失焦是没有输入框', () => {
    const list = [
      { status: 'div', value: 1 },
      { status: 'input', value: 2 },
      { status: 'div', value: 3 }
    ]
    const wrapper = shallowMount(UndoList, {
      propsData: { list }
    })
    const inputElement = findTestWrapper(wrapper, 'input').at(0)
    inputElement.trigger('blur')
    expect(wrapper.emitted().reset).toBeTruthy()
  })

  it('输入框变化时 向外触发change事件', () => {
    const wrapper = shallowMount(UndoList, {
      propsData: {
        list: [
          { status: 'div', value: 1 },
          { status: 'input', value: 123 },
          { status: 'div', value: 3 }
        ]
      }
    })

    const inputElem = findTestWrapper(wrapper, 'input').at(0)
    inputElem.trigger('change')
    expect(wrapper.emitted().change).toBeTruthy()
    expect(wrapper.emitted().change[0][0]).toEqual({
      index: 1,
      value: '123'
    })
  })
})
