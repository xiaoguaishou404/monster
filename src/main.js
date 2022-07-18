import Vue from "vue"
import App from "./App.vue"

import mButton from "./components/mButton.vue"
import mButtonGroup from "./components/mButtonGroup.vue"
import mIcon from "./components/mIcon.vue"
import mInput from "./components/mInput.vue"
import mRow from "./components/mRow.vue"
import mCol from "./components/mCol.vue"
import mLayout from './components/mLayout.vue'
import mHeader from './components/mHeader.vue'
import mSider from './components/mSider.vue'
import mContent from './components/mContent.vue'
import mFooter from './components/mFooter.vue'
import mToast from './components/mToast.vue'
import plugin from './components/plugin.js'
import mPopover from './components/mPopover.vue'
import mTabsBody from './components/mTabs-body.vue'
import mTabsHead from './components/mTabs-head.vue'
import mTabsItem from './components/mTabs-item.vue'
import mTabsPane from './components/mTabs-pane.vue'
import mTabs from './components/mTabs.vue'

Vue.component('m-button', mButton)
Vue.component('m-button-group', mButtonGroup)
Vue.component('m-icon', mIcon)
Vue.component('m-input', mInput)
Vue.component('m-row', mRow)
Vue.component('m-col', mCol)
Vue.component('m-layout', mLayout)
Vue.component('m-header', mHeader)
Vue.component('m-sider', mSider)
Vue.component('m-content', mContent)
Vue.component('m-footer', mFooter)
Vue.component('m-toast', mToast)
Vue.component('m-popover', mPopover)
Vue.component('m-tabs-body', mTabsBody)
Vue.component('m-tabs-head', mTabsHead)
Vue.component('m-tabs-item', mTabsItem)
Vue.component('m-tabs-pane', mTabsPane)
Vue.component('m-tabs', mTabs)
Vue.use(plugin)


new Vue({
    el: "#app",
    render: h => h(App),
    methods: {
        yyy() {
            console.log('yyy')
        },
        showToast1() {
            this.showToast('top')
        },
        showToast2() {
            this.showToast('middle')
        },
        showToast3() {
            this.showToast('bottom')
        },
        showToast(position) {
            this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`, {
                position,
                enableHtml: false,
                closeButton: {
                    text: '已充值',
                    callback() {
                        console.log('他说已经充值智商了')
                    }
                },
                autoClose: 3,
            })
        }
    }
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

        // dispatchEvent方法可以用js触发任意事件，看mdn
    }
} catch (err) {
    window.errors = err
} finally {
    window.errors && window.errors.forEach(err => {
        console.log(err);
    });
}
