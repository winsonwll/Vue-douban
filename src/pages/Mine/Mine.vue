<template>
  <div>
      <m-header title="我的" fixed>
          <a href="javascript:;" slot="left" @click="back">
              <img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png"/>
              返回
          </a>
          <a href="javascript:;" slot="right">分享</a>
      </m-header>

      <todolist></todolist>
      <!--<loading></loading>-->

      <button @click="addToast">open a toast</button>

      <button @click="openTop()">top</button>
      <button @click="openCenter()">center</button>
      <button @click="openBottom()">bottom</button>
      <button @click="openLoading()">loading</button>
  </div>
</template>

<script>
    import Vue from 'vue'
  import mHeader from '../../components/header'
  import todolist from '../../components/todolist'
  import Toast from '../../components/toast/index.js';
  import loading from '../../components/loading/index.js';

  import '../../components/toast/toast.css';
  import Toast2 from '../../components/toast/toast.js';
  Vue.use(Toast2);

  export default {
    name: 'mine',
    components: {
      mHeader,todolist
    },
      methods: {
          back() {
              this.$router.go(-1);
          },
          addToast: function () {
              Toast({
                  message: '12121',
                  position: 'bottom',
                  iconClass: 'd-icon-success',
                  duration: 50000
              });
          },
          openTop(){
              this.$toast.top('top');
          },
          openCenter(){
              this.$toast.center('center');
          },
          openBottom(){
              this.$toast('bottom');  // or this.$toast.bottom('bottom');
          },
          openLoading(){
              this.$loading('loading...');
              let self = this;
              setTimeout(function () {
                  self.closeLoading()
              }, 2000)
          },
          closeLoading(){
              this.$loading.close();
          }
      }
  }
</script>


<style lang="less">

</style>