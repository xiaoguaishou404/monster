<template>
  <div>
    <h1>Monster UI</h1>
    <br>
    <span>如果你想使用图标组件你需要引入monster-ui.js</span>
    <br>
    <div class="section-buttons">

      <m-button>按钮</m-button>
      <m-button icon="#icon-top">图标</m-button>
      <m-button :loading="type" @click.native="type = !type" icon="#icon-top">点击完成</m-button>

      <m-button class="button-flex" icon="#icon-top">可布局</m-button>
      <m-button>
        <svg class="diyIcon" aria-hidden="true">
          <use xlink:href="#icon-top"></use>
        </svg>
        完全自定义
        <svg class="diyIcon" aria-hidden="true">
          <use xlink:href="#icon-top"></use>
        </svg>
      </m-button>
      <m-button-group>
        <m-button icon="#icon-left">上一页</m-button>
        <m-button>1</m-button>
        <m-button>2</m-button>
        <m-button>3</m-button>
        <m-button>4</m-button>
        <m-button>5</m-button>
        <m-button class="button-flex" icon="#icon-right">下一页</m-button>
      </m-button-group>
    </div>

    <div class="section-icons">
      <h2>图标组件</h2>
      <span>如果你需要使用自己的svg图标配合Monster UI，你需要使用svg loader工具或者iconfont网站提供的svg symbol方式在页面body元素最前面创建svg symbol标签，后面搭配使用自己的symbol的id就可以了</span><br>
      <span>往后可能会思考制作svg单文件组件的设计</span>
      <br />
      <m-icon icon="#icon-loading"></m-icon>
      <m-icon icon="#icon-dwon"></m-icon>
      <m-icon icon="#icon-top"></m-icon>
      <m-icon icon="#icon-left"></m-icon>
      <m-icon icon="#icon-setting"></m-icon>
      <m-icon icon="#icon-good"></m-icon>
      <m-icon icon="#icon-right"></m-icon>
      <m-icon icon="#icon-download"></m-icon>

    </div>
    <div class="section-input">
      <m-input value="禁止" :disabled=disabled></m-input>
      <m-input value="只读" :readonly=true></m-input>
      <m-input value="默认"></m-input>
      <m-input :error="error" v-model="vModel"></m-input>
    </div>

    <div>
      <m-row>
        <m-col span="24" :narrow-pc="{span:8}" :wide-pc="{span:6}">
          <div class="demo"></div>
        </m-col>
        <m-col span="24" :narrow-pc="{span:8}" :wide-pc="{span:6}">
          <div class="demo"></div>
        </m-col>
        <m-col span="24" :narrow-pc="{span:8}" :wide-pc="{span:6}">
          <div class="demo"></div>
        </m-col>
        <m-col span="24" :narrow-pc="{span:8}" :wide-pc="{span:6}">
          <div class="demo"></div>
        </m-col>
        <m-col span="24" :narrow-pc="{span:8}" :wide-pc="{span:6}">
          <div class="demo"></div>
        </m-col>
        <m-col span="24" :narrow-pc="{span:8}" :wide-pc="{span:6}">
          <div class="demo"></div>
        </m-col>
        <m-col span="24" :narrow-pc="{span:8}" :wide-pc="{span:6}">
          <div class="demo"></div>
        </m-col>
        <m-col span="24" :narrow-pc="{span:8}" :wide-pc="{span:6}">
          <div class="demo"></div>
        </m-col>
        <m-col span="24" :narrow-pc="{span:8}" :wide-pc="{span:6}">
          <div class="demo"></div>
        </m-col>
        <m-col span="24" :narrow-pc="{span:8}" :wide-pc="{span:6}">
          <div class="demo"></div>
        </m-col>
        <m-col span="24" :narrow-pc="{span:8}" :wide-pc="{span:6}">
          <div class="demo"></div>
        </m-col>
        <m-col span="24" :narrow-pc="{span:8}" :wide-pc="{span:6}">
          <div class="demo"></div>
        </m-col>
        <m-col span="24" :narrow-pc="{span:8}" :wide-pc="{span:6}">
          <div class="demo"></div>
        </m-col>

      </m-row>
    </div>

    <div>

      <m-layout style="color: white; margin-bottom:50px;">
        <m-header style="height: 50px; background:lightskyblue;">
          header
        </m-header>
        <m-content style="height: 100px; background:deepskyblue;">
          content
        </m-content>
        <m-footer style="height: 50px; background:lightskyblue;">
          footer
        </m-footer>
      </m-layout>
    </div>

    <div>
      <m-button @click.native="$toast('点击弹出提示')">上方弹出</m-button>
      <m-button @click.native="$toast('点击弹出提示', {position:'middle'})">中间弹出</m-button>
      <m-button @click.native="$toast('点击弹出提示', {position:'bottom'})">下方弹出</m-button>

      <m-button @click.native="onClickButton">上方弹出</m-button>
      <m-button @click.native="onClickColorButton">上方弹出</m-button>
    </div>
    <br>
    <div style="display:flex;justify-content: center;">
      <m-popover position="left">
        <m-button>左边弹出</m-button>
        <template slot="content">
          <strong style="color: #06f">支持加粗</strong>
        </template>
      </m-popover>
      <m-popover>
        <m-button>上方弹出</m-button>
        <template slot="content">
          <a href="https://www.baidu.com/">支持链接</a>
        </template>
      </m-popover>
      <m-popover position="bottom">
        <m-button>下方弹出</m-button>
        <template slot="content">普通文本</template>
      </m-popover>
      <m-popover position="right">
        <m-button>右边弹出</m-button>
        <template slot="content">普通文本</template>
      </m-popover>

      <m-popover position="left" trigger="hover">
        <m-button>左边提示</m-button>
        <template slot="content"> 提示内容 </template>
      </m-popover>
      <m-popover trigger="hover">
        <m-button>上方提示</m-button>
        <template slot="content"> 提示内容 </template>
      </m-popover>
      <m-popover position="bottom" trigger="hover">
        <m-button>下方提示</m-button>
        <template slot="content"> 提示内容 </template>
      </m-popover>
      <m-popover position="right" trigger="hover">
        <m-button>右边提示</m-button>
        <template slot="content"> 提示内容 </template>
      </m-popover>

    </div>

    <div>
      <div style="margin-top: 10px">
        <div>
          <m-tabs :selected="selected1">
            <m-tabs-head>
              <m-tabs-item name="1">标题一</m-tabs-item>
              <m-tabs-item name="2">标题二</m-tabs-item>
            </m-tabs-head>
            <m-tabs-body>
              <m-tabs-pane name="1">内容1</m-tabs-pane>
              <m-tabs-pane name="2">内容2</m-tabs-pane>
            </m-tabs-body>
          </m-tabs>
        </div>

        <div style="margin-top: 20px">
          <m-tabs :selected="selected2">
            <m-tabs-head>
              <m-tabs-item name="1">标题一</m-tabs-item>
              <m-tabs-item disabled name="2">禁用标题</m-tabs-item>
              <m-tabs-item name="3">标题三</m-tabs-item>
            </m-tabs-head>
            <m-tabs-body>
              <m-tabs-pane name="1">内容1</m-tabs-pane>
              <m-tabs-pane name="2">内容2</m-tabs-pane>
              <m-tabs-pane name="3">内容3</m-tabs-pane>
            </m-tabs-body>
          </m-tabs>
        </div>
      </div>
    </div>

    <div>
      <m-collapse :selected.sync="selectedTab" single>
        <m-collapse-item title="标题1" name="1">标题1的内容</m-collapse-item>
        <m-collapse-item title="标题2" name="3">标题2的内容</m-collapse-item>
        <m-collapse-item title="标题3" name="2">标题3的内容</m-collapse-item>
      </m-collapse>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: true,
      disabled: true,
      readonly: true,
      error: "错误",
      vModel: "1234",
      selected1: "1",
      selected2: "1",
      selectedTab: ['1']
    };
  },
  methods: {
    onClickButton() {
      this.$toast("你知道我在等你吗？", {
        closeButton: {
          text: "知道了",
          callback: () => {
            console.log("他说知道了");
          },
        },
      });
    },

    onClickColorButton() {
      this.$toast('<strong style="color: #3eaf7c;">加粗带颜色的提示</strong>', {
        enableHtml: true,
      });
    },
  },
};
</script>
<style lang ="scss" scoped>
.section-buttons {
  display: flex;
}

.button-flex {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

.button-icon {
  margin: 0 calc(0.2 * var(--font-size));
  color: red;
}

.diyIcon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: blue;
}
.demo {
  background: #ddd;
  border: 1px solid #666;
  height: 100px;
}
</style>
<style >
.m-toast {
  z-index: 30;
}
.m-popover {
  z-index: 30;
}
</style>