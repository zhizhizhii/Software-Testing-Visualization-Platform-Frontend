<template>
  <div class="login-container">

    <el-form 
        class="login-form" 
        ref="login-form" 
        :model="user"
        :rules="formRules"
    >

      <div class="main-logo"></div>

      <el-form-item prop="username">
        <el-input 
            v-model="user.username"
            placeholder="请输入账号"
            prefix-icon="el-icon-user"
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input 
            type="password" 
            v-model="user.password"
            placeholder="请输入密码"
            prefix-icon="el-icon-lock"
        ></el-input>
      </el-form-item>

      <el-form-item prop="agree">
          <el-checkbox v-model="user.agree">我已阅读隐私政策和用户协议</el-checkbox>
      </el-form-item>

      <el-form-item>
        <el-button 
            class="login-btn"
            type="primary" 
            @click="onLogin"
            :loading="loginLoading"
        >登录</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
import { login } from '@/api/user.js'

export default {
  name: "LoginIndex",
  components: {},
  props: {},
  data() {
    return {
      user: {
          username:"",
          password:"",
          agree:false,
      },
      loginLoading: false, //登录按钮的loading状态，防止重复发送请求
      formRules:{
          username:[
              {required:true, message:'请输入用户名', trigger:'change'},
          ],
          password:[
              {required:true, message:'请输入密码', trigger:'change'},
          ],
          agree:[
              {
                  validator: (rule,value,callback)=>{
                      if(value){
                          callback();
                      }else{
                          callback(new Error("请同意用户协议"));
                      }
                  },
                  trigger:'change'
              }
          ]
      }
    };
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    onLogin() {
    this.$refs['login-form'].validate( valid =>{
        if(!valid){
            return;
        }
        this.loginLoading = true;
        this.doLogin();
    })
    },
    doLogin() {
      login(this.user).then(res =>{
        if(res.data.state){
          this.$message({message:res.data.msg, type:'success'});
          this.$router.push({name:'home'});
        }
        else{
          this.$message({message:res.data.msg, type:'error'});
        }
      }).catch(err =>{
          this.$message({message:"网络错误，登录失败！", type:'error'});
      });
      this.loginLoading = false;
    }
  },
};
</script>

<style scoped lang="less">

.login-container{
    position: fixed;
    left:0;
    right: 0;
    top:0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('./login_bg.jpg') no-repeat;
    background-size: cover;
    .login-form{
        background-color: #fff;
        padding: 30px 50px 30px 50px;
        min-width: 300px;
        .login-btn{
            width:100%
        }
        .main-logo{
            width:100%;
            height:70px;
            background: url('./main_logo.png') no-repeat;
            background-size : cover;
            margin-bottom: 10px;
        }
    }
}
</style>