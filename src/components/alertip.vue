<!--弹出框组件-->
<template>
    <div class="tip">
        <p>{{ alertText }}</p>
        <p>
            <button @click="closeTip">关闭</button>
        </p>
    </div>
</template>
<style scoped>
    .tip{ width: 400px;height: 200px; overflow: hidden; position: fixed; left:38%;top:20%; background: #fff; border: 1px solid #ccc; padding:20px;}
</style>
<script>
    export default{
        name: 'tip',
        props: ['alertText'],
        methods: {
            closeTip(){
                this.$emit('closeTip')
            }
        }
    }
</script>
