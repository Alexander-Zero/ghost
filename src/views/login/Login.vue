<template>
  <div class="login-bg flex justify-center items-center container">
    <login-form></login-form>
    <h2 class="content text-left ">GHOST后台管理系统</h2>
  </div>
</template>

<script>
  import LoginForm from "./LoginForm";

  export default {
    name: "Login",
    components: {LoginForm}
  }
</script>

<style scoped>
  .container /deep/ .el-input__inner {
    color: black;
  }

  .login-bg {
    background-image: url("../../../public/login-bg1.jpg");
    background-width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .content {
    color: white;
    font-size: 60px;
    position: absolute;
    bottom: 40%;
    left: 120px;
  }

</style>