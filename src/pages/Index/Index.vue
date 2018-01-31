<template>
    <div>
        <m-header title="豆瓣app1" bg>
            <a href="javascript:;" slot="left">
                <img class="m-icon-img" src="../../assets/images/ic_bar_back_white.png"/>
                返回
            </a>
            <a href="javascript:;" slot="right">分享</a>
        </m-header>
        <m-header title="豆瓣app2" fixed>
            <a href="javascript:;" slot="left">
                <img class="m-icon-img" src="../../assets/images/ic_bar_back_green.png"/>
                返回
            </a>
            <a href="javascript:;" slot="right">
                <img class="m-icon-img margin-right-10" src="../../assets/images/ic_actionbar_search_icon.png"/>
            </a>
            <a href="javascript:;" slot="right">
                <img class="m-icon-img" src="../../assets/images/ic_chat_green.png"/>
            </a>
        </m-header>
        <!--<header class="m-header is-fixed is-bg top-search">
            <div class="search-wrap">
                <img src="../../assets/images/ic_search_gray.png" alt="">
                <span class="placeholder">影视 图书 唱片 小组 舞台剧等</span>
                <img src="../../assets/images/ic_scan_gray.png" alt="">
            </div>
            <div class="m-header-button is-right" style="text-align: center;width: 50px;">
                <a href="javascript:;"><img class="m-icon-img" src="../../assets/images/ic_chat_white.png" /></a>
            </div>
        </header>-->

        <div class="page-content">
            <m-swipe swipeid="swipe01" :autoplay="1000" paginationDirection="right" effect="cube">
                <div class="swiper-slide " slot="swiper-con"><img src="../../assets/images/banner/01.jpg" alt=""></div>
                <div class="swiper-slide " slot="swiper-con"><img src="../../assets/images/banner/02.jpg" alt=""></div>
                <div class="swiper-slide " slot="swiper-con"><img src="../../assets/images/banner/03.jpg" alt=""></div>
            </m-swipe>

            <m-cell title="提醒1" icon>
                <img src="../../assets/images/ic_mine_notification.png" slot="icon">
            </m-cell>
            <m-cell title="设置2">
                <a href="javascript:;" slot="cell-right"><img src="../../assets/images/ic_arrow_gray_small.png" alt=""></a>
            </m-cell>

            <!--热门-->
            <div class="hot-wrap">
                <m-cell title="热门" label="hot">
                    <a href="javascript:;" slot="cell-right">更多<img src="../../assets/images/ic_arrow_gray_small.png" alt=""></a>
                </m-cell>

                <m-cell-media author="大象公会" column="来自栏目：广播精选" img="https://qnmob2.doubanio.com/img/files/file-1489047494.jpg">
                    <span slot="title">个人意见：为什么中国没有鲍勃·迪伦这样的民谣歌手</span>
                    <span slot="describe">我们这一代人的成长年代，真正的诗歌课从来都是缺席的。</span>
                </m-cell-media>

                <m-cell-media
                        :author="item.target.author.name"
                        :column="item.source_cn"
                        :img="item.target.cover_url"
                        v-for="(item,index) in hotData"
                        :key="item.id">

                    <span slot="title">{{item.title}}</span>
                    <span slot="describe">{{item.target.desc}}</span>
                </m-cell-media>
            </div>

            <!--推荐-->
            <div class="recommend-wrap">
                      <m-cell title="推荐" label="recommend"></m-cell>

                      <m-cell-media  :author="item.target.author.name" :column="item.source_cn" :bg="item.target.cover_url" v-for="(item,index) in recommendData" :key="item.id">
                          <span slot="title">{{item.title}}</span>
                          <span slot="describe">{{item.target.desc}}</span>
                      </m-cell-media>
                  </div>
        </div>
    </div>
</template>

<script>
    import mHeader from '../../components/header'
    import mSwipe from '../../components/swiper'
    import mCell from '../../components/cell'
    import mCellMedia from '../../components/cell-media'
    export default {
        name: 'index',
        components: {
            mHeader,
            mSwipe,
            mCell,
            mCellMedia
        },
        data() {
            return {
                recommendData: [],
                hotData: []
            }
        },

        created() {
            this.fetchData();
        },
        methods: {
            fetchData() {
                this.axios.get('/api/homeData')
                .then((response) => {

                    let data = response.data.data.recommend_feeds;
                    let recommend = [];
                    let hot = [];

                    data.forEach(function (item,index) {
                        if(item.card && item.card.name == '为你推荐'){
                            recommend.push(item);
                        }else{
                            hot.push(item);
                        }
                    })

                    this.recommendData = recommend;
                    this.hotData = hot;

                })
            }
        }
    }
</script>

<style lang="less">
    header.m-header {
        padding: 0 0 0 10px;
    }

    .is-fixed~.page-content {
        padding-top: 44px;
        padding-bottom: 50px;
    }

    .top-search {
    .search-wrap {
        width: 100%;
        height: 30px;
        background: #fff;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #c0c0c0;
        padding: 0 12px;
    .placeholder {
        flex: 1;
        text-align: left;
        padding-left: 12px;
    }
    img {
        width: 20px;
        height: 20px;
    }
    }
    }

    .hot-wrap,
    .recommend-wrap {
        padding-top: 12px;
    }

</style>
