<template>
    <div class="login_container ">
   <div class="login_box">
    <!-- 头像区域 -->
<div class="avatar_box">
    <img src="@/assets/logo.png" alt="">
</div>
<!-- 登录表单区域 -->
<el-form ref="loginFromRef" :model="loginForm" class="login_form" :rules="loginFormRules">
    <!-- 用户名 -->
  <el-form-item prop="username">
    <el-input  prefix-icon="el-icon-user-solid" v-model="loginForm.username"></el-input>
  </el-form-item>
  <!-- 密码区 -->
  <el-form-item  prop="password">
    <el-input  prefix-icon="el-icon-lock" v-model="loginForm.password" type="password"></el-input>
  </el-form-item>
  <!-- 按钮区 -->
 <el-form-item class="btns">
    <el-button type="primary" @click="login">登录</el-button>
  <el-button type="info" @click="resetLoginFrom">重置</el-button>
 </el-form-item>
</el-form>
   </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
            loginForm: {
          username: 'admin',
          password: '123456',
         
        },
        // 这是表单上的验证规则对象
        loginFormRules:{

            // 验证用户名是否合法
            username:[
                { required: true, message: '请输入登录名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
            ],
        // 验证密码是否合法
        password:[
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
        ],
        }
        
        }
    },
    methods: {
         // 点击重置按钮，重置登录表单
        resetLoginFrom(){
           this.$refs.loginFromRef.resetFields();
        },
        login(){
            this.$refs.loginFromRef.validate(async valid=>{
               if(!valid) return 
               const {data:res}=await this.$http.post('login',this.loginForm);
               if(res.meta.status!==200)return this.$message.error('登录失败！')
               this.$message.success('登录成功')
            //    1.将登陆成功之后的token，保存到客户端的sessionStorage中
            // 1.1项目中除了登录之外的其他API接口，必须在登录之后才能访问
            // 1.2token只用在当前网站打开期间生效，所以将token保存在sessionStorage中
            window.sessionStorage.setItem('token',res.data.token);
            // 2通过编程式导航跳转到后台主页，路由地址是/home
            this.$router.push('/home');
             
            });
   
        }
    },
    components: {

    },
};
</script>

<style scoped lang="less">
.login_container{
   
    height: 100%;
    width: 100%;
  
  background: url(../assets/bj.jpg);
   
  background-size: cover;
}
.login_box{
width: 450px;
height: 300px;
background-color: #fff;
border-radius: 3px;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%,-50%);
.avatar_box{
height: 130px;
width: 130px;
border: 1px solid #eee;
border-radius: 50%;
padding: 10px;
box-shadow: 0 0 10px #ddd;
position: absolute;
left: 50%;
transform: translate(-50%,-50%);
background-color: #fff;
img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;

}
}
}
.login_form{
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}
.btns{
    display: flex;
    justify-content: flex-end;
}

</style>
