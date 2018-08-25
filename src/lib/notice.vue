<template>
  <div class="v-pop-notice" v-show="show">
    <div class="item" :class="v.type" v-for="v in list" :key="v.id">
      <div class="left">
        <i class="icon " :class="'icon-'+v.type"></i>
      </div>
      <div class="right">
        <div class="v-pop-notice-header" v-html="v.title" :style="{'padding-top' : v.text ? 0 : '5px'}"></div>
        <div class="v-pop-notice-body" v-html="v.text"></div>
        <i class="icon icon-close" @click="close"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import vuePop from './vue-pop'

  export default {
    name: "Alert",
    data() {
      return {
        text: '',
        list: {},
        show: false
      }
    },
    components: {
      vuePop
    },
    methods: {
      ok() {
      },
      close() {
      }
    }
  }
</script>
<style lang="scss">
  $info: #2db7f5;
  $success: #19be6b;
  $warning: #ff9900;
  $error: #ed4014;
  .v-pop-notice {
    position: fixed;
    right: 0;
    top: 25px;
    padding-right: 25px;
    .item {
      position: relative;
      width: 300px;
      display: flex;
      box-sizing: border-box;
      white-space: nowrap;
      color: #333;
      box-shadow: 0 0 6px rgba(0, 0, 0, .2);
      background-color: #fff;
      border-radius: 2px;
      font-size: 14px;
      padding-top: 5px;
      margin-bottom: 20px;
      overflow: hidden;
      .left {
        flex: 0 0 40px;
        text-align: right;
        padding-top: 10px;
        .icon {
          width: 30px;
          height: 30px;
        }
      }
      .right {
        flex: 1;
      }
      .v-pop-notice-header {
        line-height: 40px;
        height: 40px;
        padding: 0 15px;
        font-size: 14px;
        font-weight: 700;
        color: #000;
      }
      .v-pop-notice-body {
        padding: 0 15px 15px 15px;
      }
      &.info, &.loading {
        border-color: $info;
        box-shadow: 0 0 6px $info;
      }
      &.success {
        border-color: $success;
        box-shadow: 0 0 6px $success;
      }
      &.warning {
        border-color: $warning;
        box-shadow: 0 0 6px $warning;
      }
      &.error {
        border-color: $error;
        box-shadow: 0 0 6px $error;
      }
      span {
        vertical-align: middle;
      }
      i.icon {
        display: inline-block;
        width: 15px;
        height: 15px;
        vertical-align: middle;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100%;
        &.icon-info {
          background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512zm0-85.333c235.648 0 426.667-191.019 426.667-426.667S747.648 85.333 512 85.333 85.333 276.352 85.333 512 276.352 938.667 512 938.667zm-42.667-469.334a42.667 42.667 0 0 1 85.334 0V768a42.667 42.667 0 0 1-85.334 0V469.333zm38.4-136.533a59.733 59.733 0 1 1 0-119.467 59.733 59.733 0 0 1 0 119.467z' fill='%232db7f5'/%3E%3C/svg%3E");
        }
        &.icon-success {
          background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M512 0C228.43 0 0 228.43 0 512s228.43 512 512 512 512-228.43 512-512S795.57 0 512 0zm0 945.23C271.754 945.23 78.77 752.247 78.77 512S271.753 78.77 512 78.77 945.23 271.753 945.23 512 752.247 945.23 512 945.23z' fill='%2319be6b'/%3E%3Cpath d='M716.8 330.83L508.062 578.955c-15.754 15.754-43.324 19.692-59.077 7.877L299.323 472.615c-15.754-11.815-43.323-7.877-55.138 7.877-11.816 15.754-7.877 43.323 7.877 55.139l149.661 114.215c19.692 15.754 47.262 23.63 74.83 23.63 35.447 0 70.893-15.753 94.524-43.322L779.815 382.03c15.754-15.754 11.816-43.323-3.938-55.139-19.692-15.754-43.323-15.754-59.077 3.939z' fill='%2319be6b'/%3E%3C/svg%3E");
        }
        &.icon-warning {
          background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M481.835 545.835A42.539 42.539 0 0 1 512 533.333a128 128 0 1 0-128-128 42.667 42.667 0 0 1-85.333 0 213.333 213.333 0 1 1 256 209.067v46.933a42.667 42.667 0 0 1-85.334 0V576c0-11.776 4.779-22.443 12.502-30.165zM512 1024C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512zm0-85.333c235.648 0 426.667-191.019 426.667-426.667S747.648 85.333 512 85.333 85.333 276.352 85.333 512 276.352 938.667 512 938.667zM512 832a42.667 42.667 0 1 1 0-85.333A42.667 42.667 0 0 1 512 832z' fill='%23f90'/%3E%3C/svg%3E");
        }
        &.icon-error {
          background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M511.252 80.752c58.15 0 114.52 11.372 167.549 33.8 51.255 21.68 97.302 52.73 136.861 92.29 39.56 39.56 70.61 85.606 92.29 136.861 22.428 53.028 33.8 109.4 33.8 167.55s-11.372 114.52-33.8 167.548c-21.679 51.255-52.73 97.302-92.29 136.861-39.559 39.56-85.606 70.61-136.861 92.29-53.028 22.428-109.4 33.8-167.549 33.8s-114.52-11.372-167.549-33.8c-51.255-21.679-97.302-52.73-136.86-92.29-39.56-39.559-70.61-85.606-92.29-136.861-22.429-53.028-33.801-109.4-33.801-167.549s11.372-114.52 33.8-167.549c21.68-51.255 52.73-97.302 92.29-136.86 39.56-39.56 85.606-70.61 136.861-92.29 53.03-22.429 109.4-33.801 167.55-33.801m0-71.75c-277.387 0-502.251 224.864-502.251 502.25s224.864 502.25 502.25 502.25 502.25-224.864 502.25-502.25S788.639 9.002 511.253 9.002z' fill='%23ed4014'/%3E%3Cpath d='M562.734 512l165.22-165.22c14.01-14.01 14.01-36.724 0-50.734-14.01-14.01-36.726-14.01-50.735 0L512 461.266l-165.22-165.22c-14.01-14.01-36.724-14.01-50.734 0s-14.01 36.726 0 50.736L461.266 512l-165.22 165.22c-14.01 14.008-14.01 36.724 0 50.733 7.005 7.006 16.187 10.508 25.368 10.508s18.362-3.502 25.367-10.508L512 562.734l165.22 165.22c7.004 7.005 16.185 10.507 25.366 10.507s18.363-3.502 25.367-10.508c14.01-14.01 14.01-36.725 0-50.734L562.734 512z' fill='%23ed4014'/%3E%3C/svg%3E");
        }
        &.icon-close {
          position: absolute;
          right: 8px;
          top: 8px;
          cursor: pointer;
          opacity: 0;
          background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='48' height='48'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M511.333 127.333c51.868 0 102.15 10.144 149.451 30.15 45.719 19.337 86.792 47.034 122.078 82.321 35.287 35.286 62.983 76.359 82.321 122.078 20.006 47.3 30.15 97.583 30.15 149.451s-10.144 102.15-30.15 149.451c-19.337 45.719-47.034 86.792-82.321 122.078-35.286 35.287-76.359 62.983-122.078 82.321-47.3 20.006-97.583 30.15-149.451 30.15s-102.15-10.144-149.451-30.15c-45.719-19.337-86.792-47.034-122.078-82.321-35.287-35.286-62.983-76.359-82.321-122.078-20.006-47.3-30.15-97.583-30.15-149.451s10.144-102.15 30.15-149.451c19.337-45.719 47.034-86.792 82.321-122.078 35.286-35.287 76.359-62.983 122.078-82.321 47.301-20.006 97.583-30.15 149.451-30.15m0-64c-247.424 0-448 200.576-448 448s200.576 448 448 448 448-200.576 448-448-200.576-448-448-448z' fill='%23999'/%3E%3Cpath d='M557.254 512l147.373-147.373c12.497-12.497 12.497-32.758 0-45.255-12.496-12.497-32.758-12.497-45.254 0L512 466.746 364.627 319.373c-12.497-12.497-32.758-12.497-45.255 0s-12.497 32.758 0 45.255L466.746 512 319.373 659.373c-12.497 12.496-12.497 32.758 0 45.254C325.621 710.876 333.811 714 342 714s16.379-3.124 22.627-9.373L512 557.254l147.373 147.373C665.621 710.876 673.811 714 682 714s16.379-3.124 22.627-9.373c12.497-12.496 12.497-32.758 0-45.254L557.254 512z' fill='%23999'/%3E%3C/svg%3E");
        }
        &.icon-loading {
          background-image: url("data:image/svg+xml,%3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' width='64' height='64'%3E%3Cdefs%3E%3Cstyle/%3E%3C/defs%3E%3Cpath d='M891.36 351.933A411.785 411.785 0 0 0 512 100.398a411.602 411.602 0 1 0 0 823.204 411.74 411.74 0 0 0 383.384-261.504 45.734 45.734 0 1 1 85.156 33.385A503.16 503.16 0 0 1 512 1015.069C234.169 1015.07 8.93 789.831 8.93 512S234.17 8.93 512 8.93c167.705 0 319.495 82.779 411.602 213.622v-99.287a45.734 45.734 0 0 1 91.467 0v274.401a45.596 45.596 0 0 1-45.733 45.734H740.668a45.734 45.734 0 0 1 0-91.467H891.36z' fill='%232db7f5'/%3E%3C/svg%3E");
          animation: rotateInfinite 1s infinite linear;
        }
      }
      &:hover {
        .icon-close {
          transition: opacity .2s;
          opacity: 1 !important;
        }
      }
    }
  }
</style>
