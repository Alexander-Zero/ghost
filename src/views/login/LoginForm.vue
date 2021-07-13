<template>
  <div class="login-form  opacity-7 radius8">
    <br/><br/>
    <h2>账号登录</h2><br/>
    <el-input class="login-input  " v-model="requestBody.username" placeholder="账号"></el-input>

    <br/>
    <br/>

    <el-input class="login-input  " v-model="requestBody.password" placeholder="密码" show-password></el-input>

    <br/>
    <br/>
    <el-button class="login-input  " @click="login">登录</el-button>

  </div>

</template>

<script>


  import {login} from "../../api/authApi";
  import {SET_MENU, SET_TOKEN, SET_USER_ID} from "../../store/mutations-type";

  export default {
    data() {
      return {
        requestBody: {
          password: "",
          username: ""
        }
      }
    },
    name: "LoginForm",
    components: {},
    methods: {
      login() {
        login(this.requestBody).then(
            res => {
              if (typeof res !== "undefined") {
                this.$store.commit(SET_TOKEN,res.token);
                this.$store.commit(SET_MENU,res.menu);
                this.$store.commit(SET_USER_ID,res.userId)
                this.$router.push("/home");
              }
            })

      }
    }

  }
</script>

<style scoped>
  .login-form {
    width: 400px;
    height: 450px;
    background: white;
    position: relative;
    left: 10%;
  }

  .login-input {
    width: 300px;
  }


</style>