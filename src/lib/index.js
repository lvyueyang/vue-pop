import Alert from './alert'
import Confirm from './confirm'
import Prompt from './prompt'
import Message from './message'
import Notice from './notice'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vuePop);
}
const PopPlugin = {
  install(Vue, options) {
    const PopAlert = Vue.extend(Alert)
    const PopConfirm = Vue.extend(Confirm)
    const PopPrompt = Vue.extend(Prompt)
    const PopMessage = Vue.extend(Message)
    const PopNotice = Vue.extend(Notice)
    // 为插件添加父节点
    const rootVm = document.createElement('div')
    rootVm.classList.add('v-pop-root-wrapper')
    rootVm.style.position = 'relative'
    rootVm.style.zIndex = 2018

    // 生成子组件节点
    const $alert = new PopAlert({
      el: document.createElement('div')
    })
    const $confirm = new PopConfirm({
      el: document.createElement('div')
    })
    const $prompt = new PopPrompt({
      el: document.createElement('div')
    })
    const $message = new PopMessage({
      el: document.createElement('div')
    })
    const $notice = new PopNotice({
      el: document.createElement('div')
    })
    const defaultFn = () => {
    }
    // 添加message容器
    rootVm.appendChild($message.$el)
    rootVm.appendChild($notice.$el)

    document.body.appendChild(rootVm)

    Vue.prototype.$pop = {
      // 弹出层
      alert(text, callback = defaultFn) {
        const el = $alert.$el;
        $alert.text = text
        rootVm.appendChild(el)
        // 点击确定时的回调
        $alert.ok = () => {
          rootVm.removeChild(el)
          callback()
        }
      },
      // 对话框
      confirm(options) {
        const el = $confirm.$el;
        $confirm.text = options.content || ''
        rootVm.appendChild(el)
        // 点击确定时的回调
        $confirm.ok = () => {
          rootVm.removeChild(el)
          if (options.ok) {
            options.ok()
          }
        }
        $confirm.cancel = () => {
          rootVm.removeChild(el)
          if (options.cancel) {
            options.cancel()
          }
        }
      },
      // 输入框
      prompt(options) {
        const el = $prompt.$el;
        $prompt.type = options.type || 'left'
        $prompt.algin = options.algin || 'left'
        $prompt.maxlength = options.maxlength || -1
        $prompt.title = options.title || ''
        $prompt.value = options.value || ''

        rootVm.appendChild(el)
        // 点击确定时的回调
        $prompt.ok = () => {
          const text = $prompt.value
          rootVm.removeChild(el)
          if (options.ok) {
            options.ok(text)
          }
        }
        $prompt.cancel = () => {
          const text = $prompt.value
          rootVm.removeChild(el)
          if (options.cancel) {
            options.cancel(text)
          }
        }
      },
      // 消息框
      message(options) {
        $message.show = true
        const timer = options.time || 2500
        let list = $message.list
        const id = Date.now()
        if (options.type === 'loading' && !options.text) {
          options.text = '正在加载中...'
        }
        const item = {
          text: options.text || '',
          type: options.type || 'info',
          id
        }
        $message.$set(list, id, item)
        setTimeout(() => {
          $message.$delete(list, id)
          if (options.hide) {
            options.hide()
          }
          const str = JSON.stringify($message.list)
          if (str === '{}') {
            $message.show = false
          }
        }, timer)
      },
      // 通知消息框
      notice(options) {
        $notice.show = true
        const timer = options.time || 2500
        let list = $notice.list
        const id = Date.now()
        const item = {
          title: options.title || '',
          text: options.text || '',
          type: options.type || 'info',
          id
        }
        $notice.$set(list, id, item)
        const close = () => {
          $notice.$delete(list, id)
          if (options.hide) {
            options.hide()
          }
          const str = JSON.stringify($notice.list)
          if (str === '{}') {
            $notice.show = false
          }
        }
        $notice.close = close
        setTimeout(() => {
          close()
        }, timer)
      }
    }
  }
}

export default PopPlugin
