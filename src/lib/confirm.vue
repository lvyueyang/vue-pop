<template>
  <vue-pop :bg="false">
    <div class="v-pop-confirm dialog-box">
      <div class="pop-body" v-html="text"></div>
      <div class="pop-footer">
        <button class="cancel" @click="cancel">取消</button>
        <button class="sure" @click="ok">确定</button>
      </div>
    </div>
  </vue-pop>
</template>

<script>
  import vuePop from './vue-pop'

  export default {
    name: "Alert",
    data() {
      return {
        text: ''
      }
    },
    components: {
      vuePop
    },
    methods: {
      ok() {},
      cancel() {},
    }
  }
</script>
