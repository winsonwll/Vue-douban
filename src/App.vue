<template>
    <div id="app">
        <loading v-if="$store.state.loading"></loading>
        <router-view></router-view>

        <m-tabbar v-model="select">
            <!--v-model是动态绑定值到value，然后监听input的inpit事件获取值后赋给dataA的一个过程-->
            <m-tabbar-item id='Index' isRouter><!--isRouter属性，来判断当前item是否是路由跳转-->
                <img src="./assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal">
                <img src="./assets/images/ic_tab_home_active.png" alt="" slot="icon-active">
                首页
            </m-tabbar-item>
            <m-tabbar-item id='AudioBook'>
                <router-link to="AudioBook">
                    <img src="./assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal">
                    <img src="./assets/images/ic_tab_subject_active.png" alt="" slot="icon-active">
                    图书
                </router-link>
            </m-tabbar-item>
            <m-tabbar-item id='Broadcast' isRouter>
                <img src="./assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal">
                <img src="./assets/images/ic_tab_status_active.png" alt="" slot="icon-active">
                电影
            </m-tabbar-item>
            <m-tabbar-item id='Mine' isRouter>
                <img src="./assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal">
                <img src="./assets/images/ic_tab_profile_active.png" alt="" slot="icon-active">
                我的
            </m-tabbar-item>
        </m-tabbar>
    </div>
</template>

<script>
import mTabbar from './components/tabbar'
import mTabbarItem from './components/tabbar-item'

export default {
  name: 'app',
  components:{
  	mTabbar,
    mTabbarItem
  },
  data() {
      return {
        select:"Index"
      }
    }
}

</script>

<style>

</style>
