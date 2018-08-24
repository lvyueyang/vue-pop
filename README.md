# vue-pop  基于Vue的弹出消息弹出框插件（适配移动端）

# 安装

## 直接引入
```html
<script src="/path/to/vue.js"></script>
<script src="/path/to/vue-pop.js"></script>
```
## NPM
```sh
npm install vue-pop --save
```
## CNPM
```sh
cnpm install vue-pop --save
```
如果在一个模块化工程中使用它，必须要通过 `Vue.use()`
```javascript
import Vue from 'vue'
import vuePop from 'vue-pop'

Vue.use(vuePop)
```
# API

``` javascript
// alert
this.$pop.alert('这是一个确认框', res => {
  console.log('点击了确定')
})

// confirm
this.$pop.confirm({
  content: '缺点要关闭吗',
  cancel() {
    console.log('点击了取消')
  },
  ok() {
    console.log('点击了确定')
  }
})

// prompt
this.$pop.prompt({
  type: 'text', 			 // 输入框的类型 默认值 text
  algin: 'left', 			 // 输入框文字对齐方式 默认值 left
  maxlength: -1, 			 // 输入框最大长度 默认值 -1 不限长度
  title: '请输入你年龄', 		// 弹出层标题 
  value: '', 				 // 输入框默认值 
  cancel(text) {
    console.log('输入的数据为：' + text)
  },
  ok(text) {
    console.log('点击了确定-输入的数据为：' + text)
  }
})

// message
this.$pop.message({
  text: '这是一个提示消息', 	// 消息内容 
  type: 'info',  // 消息类型 默认值 info  ['info', 'warning', 'success', 'error',  'loading']
  hide() {
    console.log('结束了啊')
  }
})

// notice 通知消息
this.$pop.notice({
  text: '这是一个通知消息的标题',
  title: '这是一个通知消息的内容',
  type: 'info', // 消息类型 默认值 info  ['info', 'warning', 'success', 'error',  'loading']
  hide() {
    console.log('结束了啊')
  }
})
```



