<!--方式1-->
<template>
    <div class="modal" v-show="visible">
        <div class="close" @click="cancel">X</div>
    </div>
</template>
<style lang="less">
    .modal {
        width: 90%;
        margin: 0 auto;
        background-color: #4caf50;
        height: 200px;;
    }
</style>
<script>
    export default {
        props: {
            value: {
                type: Boolean,
                default:false
            }
        },
        computed: {
            visible(){
                if(this.value){
                    return true;
                }
            }
        },
        methods:{
            cancel(){
                this.$emit('input', false);
            }
        }
    }
</script>




<!--方式2-->
<!--<template>
    <div class="modal" v-show="visible">
        <div class="close" @click="cancel">X</div>
        <input type="hidden" :value="value">
    </div>
</template>
<style lang="less">
    .modal {
        width: 90%;
        margin: 0 auto;
        background-color: #4caf50;
        height: 200px;;
    }
</style>
<script>
    export default {
        props: {
            value: {
                type: Boolean,
                default:false
            }
        },

        data () {
            return {
                visible:false
            }
        },
        watch:{
            value(val) {
                console.log(val);
                this.visible = val;
            },
            visible(val) {
                this.$emit('input', val);
            }
        },
        methods:{
            cancel(){
                this.visible = false;
            }
        },
        mounted() {
            if (this.value) {
                this.visible = true;
            }
        }
    }
</script>-->

