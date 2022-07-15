import Vue from "vue"
import App from "./App.vue"

import mButton from "./components/mButton.vue"
import mButtonGroup from "./components/mButtonGroup.vue"
import mIcon from "./components/mIcon.vue"
import mInput from "./components/mInput.vue"

Vue.component('m-button', mButton)
Vue.component('m-button-group', mButtonGroup)
Vue.component('m-icon', mIcon)
Vue.component('m-input', mInput)

new Vue({
    el: "#app",
    render: h => h(App)
})
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies);

const expect = chai.expect


try {

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

    {
        // mock
        const Constructor = Vue.extend(mButton)
        const vm = new Constructor({
            propsData: {
                icon: '#icon-setting',
            }
        })
        vm.$mount()
        let eventType
        let spy = chai.spy((e) => { eventType = e.type })
        // 这是使用dom原生的事件
        vm.$el.onclick = spy
        vm.$el.click()
        // 也可以使用下面的vue方法触发事件，但不能叉用原生和vue的绑定和触发，那样是肯定不会触发的，因为没有联系起来
        // 建议使用上面的，因为我们的mButton使用native绑定的是原生click事件

        // vm.$on('click', spy)
        // vm.$emit("click")


        expect(spy).to.have.been.called()
        expect(eventType).to.eq("click")
        vm.$destroy()
        // 这个库的间谍我觉得并不好，他只是判断spy有没有触发而已
        // 我可能还需要判断函数是不是click事件触发的
        // 所以使用eventType做了一些改进

        // 为什么老师的可以vm.$on和.click()可以一起使用，因为他的mButton内部和我设计的不一样
        // 他确实需要这样，在父级添加$on，子级再原生click触发
    }
} catch (err) {
    window.errors = err
} finally {
    window.errors && window.errors.forEach(err => {
        console.log(err);
    });
}
