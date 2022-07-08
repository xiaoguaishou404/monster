import Vue from "vue"
import App from "./App.vue"

import mButton from "./components/mButton.vue"
import mButtonGroup from "./components/mButtonGroup.vue"

import mIcon from "./components/mIcon.vue"

Vue.component('m-button', mButton)
Vue.component('m-button-group', mButtonGroup)
Vue.component('m-icon', mIcon)

new Vue({
    el: "#app",
    render: h => h(App)
})
import chai from 'chai'
const expect = chai.expect
// 单元测试
{
    const Constructor = Vue.extend(mButton)
    const vm = new Constructor({
        propsData: {
            icon: '#icon-setting'
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-setting')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(mButton)
    const vm = new Constructor({
        propsData: {
            icon: '#icon-setting',
            loading: true
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#icon-loading')
    vm.$el.remove()
    vm.$destroy()
}
// {
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//         propsData: {
//             icon: 'settings',
//             loading: true
//         }
//     })
//     vm.$mount()
//     let useElement = vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-loading')
//     vm.$el.remove()
//     vm.$destroy()
// }
//   {
//     const div = document.createElement('div')
//     document.body.appendChild(div)
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'settings',
//         iconPosition: 'right'
//       }
//     })
//     vm.$mount(div)
//     let svg = vm.$el.querySelector('svg')
//     let {order} = window.getComputedStyle(svg)
//     expect(order).to.eq('2')
//     vm.$el.remove()
//     vm.$destroy()
//   }
//   {
//     // mock
//     const Constructor = Vue.extend(Button)
//     const vm = new Constructor({
//       propsData: {
//         icon: 'settings',
//       }
//     })
//     vm.$mount()
//     vm.$on('click', function () {
//       expect(1).to.eq(1)
//     })
//     // 希望这个函数被执行
//     let button = vm.$el
//     button.click()
//   }