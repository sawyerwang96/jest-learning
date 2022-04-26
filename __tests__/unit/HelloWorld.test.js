import { shallowMount } from '@vue/test-utils'
// import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  // shallowMount只测试当前组件，不会测试子组件 适合单元测试
  // mount适合集成测试 测试组件间通信、关联时使用
  // it('renders props.msg when passed', () => {
  //   const msg = 'new message'
  //   const wrapper = shallowMount(HelloWorld, {
  //     propsData: { msg }
  //   })
  //   expect(wrapper.text()).toMatch(msg)
  // })

  // it('renders pops.msg when passed', () => {
  //   // 只能测试ui展示
  //   let root = document.createElement('div')
  //   root.className = 'root'
  //   document.body.appendChild(root)
  //   new Vue({
  //     render: h => h(HelloWorld, {
  //       props: {
  //         msg: 'wsy'
  //       }
  //     })
  //   }).$mount('.root')
  //   expect(document.getElementsByClassName('hello').length).toBe(1)
  // })

  it('component render', () => {
    const wrapper = shallowMount(HelloWorld, {
      props: {
        msg: 123
      }
    })
    // 快照能及时捕获ui更新内容
    expect(wrapper).toMatchSnapshot()
  })
})
