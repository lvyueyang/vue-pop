<template>
  <div class="v-pop" :style="{'background': bg}">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'vPop',
    props: {
      bg: {
        type: [String, Boolean],
        default: 'rgba(0, 0, 0, .6)'
      }
    },
    data() {
      return {}
    },
    mounted() {
    },
    methods: {}
  }
</script>
<style lang="scss">
  .v-pop-root-wrapper{
    width: 0;
    height: 0;
  }
  .v-pop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    font-size: 14px;
    .dialog-box {
      background-color: #fff;
    }
    .pop-header {
      padding: 10px;
      border-bottom: 1px solid #ccc;
    }
    .pop-body {
      padding: 10px;
      min-height: 60px;
    }
    .pop-footer {
      height: 45px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      text-align: right;
      button {
        cursor: pointer;
        outline: none;
        height: 30px;
        padding: 0 20px;
        margin-right: 15px;
        background-color: #333;
        color: #fff;
        border: 1px solid transparent;
        &.cancel {
          border: 1px solid #ccc;
          background-color: transparent;
          color: #333;
        }
        &:active {
          font-weight: 700;
          @media (min-width: 769px) {
            &.cancel {
              background-color: rgba(204, 204, 204, .2);
            }
            &.sure {
              border: 1px solid #fff;
              box-shadow: 0 0 10px #333;
            }
          }
        }
      }
      @media (max-width: 768px) {
        border-top: 1px solid #ccc;
        button {
          background-color: transparent;
          border: none !important;
          margin: 0;
          flex: 1;
          border-right: 1px solid #ccc !important;
          color: #666;
          padding: 0;
          height: 100%;
          &:hover {
            color: #333;
          }
          &:last-child {
            border: none !important;
          }
          &:active {
            font-weight: 700;
            background-color: #e5e5e5;
          }
        }
      }
    }
    .v-pop-prompt {
      max-width: 400px;
      width: 100%;
      border: 1px solid #ccc;
      box-shadow: 0 0 10px #ccc;
      @media (max-width: 401px) {
        max-width: 90%;
      }
      .pop-body {
        font-size: 16px;
        display: flex;
        align-items: center;
        input {
          width: 100%;
          height: 40px;
          padding: 0 10px;
          margin: 0;
          box-sizing: border-box;
          border: 1px solid #ccc;
          outline: none;
          &:focus {
            border-color: #000;
          }
        }
      }
    }
    .v-pop-alert {
      @extend .v-pop-prompt
    }
    .v-pop-confirm {
      @extend .v-pop-prompt
    }
  }
  .v-pop-message {
    position: fixed;
    width: 100%;
    top: 20px;
    left: 0;
  }
</style>
