<template>
    <div class="app">
        <button @click="add" class="add-btn" v-touch-ripple>+</button>
        <transition-group name="slide" tag="ul" class="list-wrapper">
                <v-touch tag="li"
                         class="list"
                         v-for="(item,index) in lists"
                         v-on:swipeleft="showBtn(item)"
                         v-on:swiperight="hideBtn(item)"
                         :key="item">
                    <span class="text">{{ item.text }}</span>
                    <transition name="move">
                        <button class="del-btn"
                                @click="delList(index)"
                                v-show="item.show">删除</button>
                    </transition>
                </v-touch>
        </transition-group>
    </div>
</template>
<style lang="less">
    button {
        display: block;
        color: #fff;
        background-color: #4caf50;
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        border: none;
    }
    .app {
        padding: 100px 0;
        overflow: hidden;
    }
    .list {
        display: flex;
        width: 100%;
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        margin-bottom: 10px;
        color: #666;
        font-size: 14px;
        background: #eee;
        transition: all .4s;
        &.slide-move {
             transition: transform 1s
         }
        &.slide-enter {
             transform: translate3d(-100%, 0, 0)
         }
        &.slide-leave-active {
             position: absolute;
             transform: translate3d(-100%, 0, 0)
         }
        &:last-child {
             margin-bottom: 0
         }
         .del-btn {
             flex: 0 0 60px;
             border: none;
             outline: none;
             color: #fff;
             background: red;
             transition: all .4s;
             &.move-enter, &.move-leave-active {
                transform: translate3d(70px, 0, 0)
             }
         }
        .text {
            flex: 1;
            padding-left: 20px;
        }
    }
</style>
<script>
    export default{
        data: function () {
            return {
                num: 1,
                lists: [],
                event: ''
            }
        },
        methods: {
            add: function () {
                let obj = {};
                obj.text = 'todo list '+ this.num;
                obj.show = false;

                this.lists.push(obj);
                this.num++;
            },
            showBtn: function (item) {
                item.show = true;
            },
            hideBtn: function (item) {
                item.show = false;
            },
            delList: function (index) {
                this.lists.splice(index,1)
            }
        }
    }
</script>
