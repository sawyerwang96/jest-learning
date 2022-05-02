import { shallowMount } from '@vue/test-utils'
import TodoList from '@/containers/TodoList/TodoList.vue'
// import Header from '@/containers/TodoList/components/Header.vue'
import UndoList from '@/containers/TodoList/components/UndoList.vue'

describe('TodoList.vue', () => {
  it('初始化时,undoList应该为空', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.vm.undoList
    expect(undoList).toEqual([])
  })

  it('执行addItem后 内会增加一项', () => {
    // it('执行addItem时 undoList增加一个内容', () => {
    // 集成测试
    // const wrapper = shallowMount(TodoList)
    // const header = wrapper.findComponent(Header)
    // header.vm.$emit('add', 'wsy')
    // const undoList = wrapper.vm.undoList
    // expect(undoList.length).toEqual(1)
    // expect(undoList).toEqual(['wsy'])

    // 单元测试
    const wrapper = shallowMount(TodoList)
    const undoList = [
      { status: 'div', value: 1 },
      { status: 'div', value: 2 },
      { status: 'div', value: 3 }
    ]
    wrapper.setData({ undoList })
    wrapper.vm.addItem(4)
    expect(wrapper.vm.$data.undoList).toEqual(undoList)
  })

  it('调用UndoList,应该传递list参数', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = wrapper.findComponent(UndoList)
    const list = undoList.props('list')
    expect(list).toBeTruthy()
  })

  it('handleDeleteItem方法被调用时,undoList列表内容会减少一项', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = [
      { status: 'div', value: 1 },
      { status: 'div', value: 2 },
      { status: 'div', value: 3 }
    ]
    wrapper.setData({ undoList })
    wrapper.vm.handleDeleteItem(1)
    undoList.splice(1, 1)
    expect(wrapper.vm.$data.undoList).toEqual(undoList)
  })

  it('handleChangeStatus方法被调用时', () => {
    const wrapper = shallowMount(TodoList)
    const undoList = [
      { status: 'div', value: 1 },
      { status: 'div', value: 2 },
      { status: 'div', value: 3 }
    ]
    wrapper.setData({ undoList })
    wrapper.vm.handleChangeStatus(1)
    expect(wrapper.vm.$data.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'input', value: 2 },
      { status: 'div', value: 3 }
    ])
  })

  it('changItemValue方法执行时 undoList内容变化', () => {
    const wrapper = shallowMount(TodoList)
    wrapper.setData({
      undoList: [
        { status: 'div', value: 1 },
        { status: 'div', value: 2 },
        { status: 'div', value: 3 }
      ]
    })
    wrapper.vm.handleChangeItemValue({
      index: 1,
      value: '44444'
    })
    expect(wrapper.vm.$data.undoList).toEqual([
      { status: 'div', value: 1 },
      { status: 'div', value: '44444' },
      { status: 'div', value: 3 }
    ])
  })
})
