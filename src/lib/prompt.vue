<template>
  <vue-pop :bg="false">
    <div class="v-pop-prompt dialog-box">
      <div class="pop-header" v-if="title" :style="{algin}">{{title}}</div>
      <div class="pop-body"><input :type="type" :value="value" @input="inputVal" :style="{algin}" :maxlength="maxlength"></div>
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
        type: 'text',
        algin: 'left',
        maxlength: -1,
        title: '',
        value: ''
      }
    },
    components: {
      vuePop
    },
    methods: {
      ok() {
      },
      cancel() {
      },
      inputVal(e) {
        this.value = e.target.value
      }
    }
  }
</script>
