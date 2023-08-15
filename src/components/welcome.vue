<template>
    <div class="logo">
     <img src="../assets/bired.png" alt="">
     <h3>
        欢迎来到
        <span>精灵购物</span>
        平台管理系统
     </h3>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {

    },
    components: {

    },
};
</script>

<style scoped lang="less">
.logo{
    text-align: center;
font-size: 40px;
    img{
        width: 500px;
position: absolute;
left: 50%;
top: 10%;
transform: translateX(-43%);
    }
    h3{
        margin-top: 300px;
letter-spacing: 10px;
color: #fff;
    }
    span{
        color: #06f8fc;
font-size: 70px;

    }
}


</style>
