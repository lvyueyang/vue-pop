<template>
  <vue-pop :bg="false">
    <div class="v-pop-alert dialog-box">
      <div class="pop-body" v-html="text"></div>
      <div class="pop-footer">
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
      ok() {}
    }
  }
</script>
