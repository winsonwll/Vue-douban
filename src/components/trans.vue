<template>
    <div class="trans">
        <button @click="showMenu" class="btn">{{ text }}</button>
        <transition name="move">
            <div class="menu" v-show="show">
                <div class="inner inner-1">1</div>
                <div class="inner inner-2">2</div>
                <div class="inner inner-3">3</div>
            </div>
        </transition>
    </div>

    <!--<div class="app">
        <button @click="showball" class="btn">显示</button>
        <transition name="move" type="animation">
            <div class="ball" v-show="isShow">
                <div class="inner"></div>
            </div>
        </transition>
    </div>-->
</template>
<style lang="less">
    .trans {
        .btn {
            position: fixed;
            bottom: 50px;
            right: 10px;
            z-index: 10;
            width: 50px;
            height: 50px;
            line-height: 50px;
            border-radius: 50%;
            border: none;
            outline: none;
            color: #fff;
            font-size: 18px;
            background: blue
        }
        .menu {
            position: fixed;
            bottom: 50px;
            right: 10px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            transition: all .7s ease-in;

            &.move-enter-active {
              .inner {
                  transform: translate3d(0, 0, 0);
                  transition-timing-function: cubic-bezier(0, .57, .44, 1.97);
              }
              .inner-1 {
                  transition-delay: .1s;
              }
              .inner-2 {
                  transition-delay: .2s;
              }
              .inner-3 {
                  transition-delay: .3s;
              }
            }
            &.move-enter, &.move-leave-active {
                .inner {
                    transition-timing-function: ease-in-out;
                }

                .inner-1 {
                    transform: translate3d(0, 60px, 0);
                    transition-delay: .3s;
                }

                .inner-2 {
                    transform: translate3d(40px, 40px, 0);
                    transition-delay: .2s;
                }

                .inner-3 {
                    transform: translate3d(60px, 0, 0);
                    transition-delay: .1s;
                }
            }
            .inner {
                display: inline-block;
                position: absolute;
                width: 30px;
                height: 30px;
                line-height: 30px;
                border-radius: 50%;
                background: red;
                text-align: center;
                color: #fff;
                transition: all .4s;
            }
              .inner-1 {
                  top: -50px;
                  left: 10px;
              }
              .inner-2 {
                  left: -30px;
                  top: -30px;
              }
               .inner-3 {
                   left: -50px;
                   top: 10px;
               }
        }
    }

    @keyframes shape-change {
        0%, 100% {
            border-radius: 50%;
            background: red;
        }
        50% {
            border-radius: 0;
            background: blue;
        }
    }

    @keyframes moveball-in {
        0% {
            transform: translate3d(300px,-200px,0)
        }
        50% {
            transform: translate3d(100px,-400px,0)
        }
        100% {
            transform: translate3d(0,0,0)
        }
    }
    @keyframes moveball-out {
        0% {
            transform: translate3d(0,0,0)
        }
        50% {
            transform: translate3d(100px,-400px,0)
        }
        100% {
            transform: translate3d(300px,-200px,0)
        }
    }

    .app {
        .btn {
            width: 40px;
            height: 30px;
            margin-top: 40px;
            border: none;
            outline: none;
            background: red;
            color: #fff;
        }
        .ball {
            position: absolute;
            bottom: 20px;
            left: 20px;
            width: 50px;
            height: 50px;
            transition: all 1s cubic-bezier(.22,-0.86,.97,.58);

            &.move-enter-active {
                 opacity: 1;
                 animation: moveball-in 1s;
                 .inner {
                     animation: shape-change 1s;
                 }
             }
            &.move-leave-active {
                opacity: 0.8;
                animation: moveball-out 1s;
                .inner {
                    animation: shape-change 1s;
                }
            }
            .inner {
                display: inline-block;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background: red;
                transition: all 1s linear;
            }
        }
    }
</style>
<script>
    export default{
        data(){
            return{
                show: false,
                isShow: false
            }
        },
        methods: {
            showMenu(){
                this.show = !this.show;
            },
            showball(){
                this.isShow = !this.isShow;
            }
        },
        computed: {
            text(){
                return this.show ? '收' : '开'
            }
        }
    }
</script>
