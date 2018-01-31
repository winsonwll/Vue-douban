<template>
  <div>
  	<m-header title="书影音" fixed>
  			<a href="javascript:;" slot="right">
                <img class="m-icon-img margin-right-10" src="../../assets/images/ic_actionbar_search_icon.png"/>
            </a>
  			<a href="javascript:;" slot="right">
                <img class="m-icon-img" src="../../assets/images/ic_chat_green.png"/>
            </a>
  	</m-header>

      <a href="javascript:;" @click="isShow = true" style="display: block; height: 100px; background-color: #00ee00">点击出现弹层</a>
      <modal v-model="isShow"></modal>

      <alertip v-show="alertipShow" @closeTip="alertipShow = false" :alertText="alertText"></alertip>
      <button type="button" @click="alerts()">点击此按钮，出现浮动窗口</button>
  </div>
</template>

<script>
  import mHeader from '../../components/header'
  import modal from '../../components/modal'
  import alertip from '../../components/alertip'

  export default {
    name: 'broadcast',
    components: {
        mHeader,
        modal,
        alertip
    },
      data() {
          return {
              isShow: false,
              alertipShow: false,
              alertText: ''
          }
      },
      methods: {
          alerts(){
              this.alertText = 'asas';
              this.alertipShow = true;
          }
      }
  }
</script>


<style lang="less">

</style>