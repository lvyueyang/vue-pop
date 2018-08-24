<template>
  <div id="app">
    <button @click="alertFn">alert</button>
    <button @click="confirmFn">confirm</button>
    <button @click="promptFn">prompt</button>
    <button @click="messageFn">message</button>
    <button @click="noticeFn">notice</button>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        num: 1
      }
    },
    mounted() {
    },
    methods: {
      alertFn() {
        this.$pop.alert('哈哈哈', res => {
          console.log('点击了确定')
          this.$pop.alert('哈哈哈1', res => {
            console.log('点击了确定1')
          })
        })
      },
      confirmFn() {
        this.$pop.confirm({
          content: '哈哈哈？',
          cancel() {
            console.log('点击了取消')
          },
          ok() {
            console.log('点击了确定')
          }
        })
      },
      promptFn() {
        this.$pop.prompt({
          title: '请输入金额',
          cancel(text) {
            console.log('输入的数据为：' + text)
          },
          ok(text) {
            console.log('点击了确定-输入的数据为：' + text)
          }
        })
      },
      messageFn() {
        this.num++
        this.$pop.message({
          text: '错错错',
          type: 'error',
          hide() {
            console.log('结束了啊')
          }
        })
      },
      noticeFn() {
        this.$pop.notice({
          text: '错错错',
          title: '这是标题',
          type: 'warning',
          hide() {
            console.log('结束了啊')
          }
        })
      }
    }
  }
</script>

<style lang="scss">

</style>
