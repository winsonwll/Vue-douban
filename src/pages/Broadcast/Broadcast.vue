<template>
  <div>
  	<m-header title="广播" fixed>
  			<a href="javascript:;" slot="right"><img class="m-icon-img margin-right-10" src="../../assets/images/ic_actionbar_search_icon.png"/></a>
  			<a href="javascript:;" slot="right"><img class="m-icon-img" src="../../assets/images/ic_chat_green.png"/></a>
  	</m-header>

      <timer style="padding: 100px"></timer>

      <trans></trans>
  </div>
</template>

<script>
  import mHeader from '../../components/header'
  import timer from '../../components/timer'
  import trans from '../../components/trans'

  export default {
    name: 'index',
    components: {
        mHeader,
        timer,
        trans
    }
  }
</script>


<style lang="less">

</style>