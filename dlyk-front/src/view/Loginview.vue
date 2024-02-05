<template>
  <el-container>
    <!--left side-->
    <el-aside width="200px">
      <img src="../assets/loginBox.svg">
      <p class="imgTitle">
        welcome to use DLYK system
      </p>
    </el-aside>
    <!--right side-->
    <el-main>
      <div class="loginTile">welcome to login</div>
      <el-form :model="form" label-width="120px">
        <el-form-item label="Username">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="form.name" />
        </el-form-item>

        <el-form-item >
        <el-button type="primary">Login</el-button>
        </el-form-item>

        <el-form-item >
            <el-checkbox label="RememberMe" name="RememberMe" />
        </el-form-item>

      </el-form>
    </el-main>
  </el-container>

</template>

<script>
export default {
  name: "Loginview",
  data(){
    return{
      form:{}
    }

  }
}
</script>

<style scoped>
.el-aside{
  background: #1a1a1a;
  width: 40%;
  text-align: center;
}
.el-main{
  height: calc(100vh);
}
img{
  height: 413px;
}
.imgTitle{
  color: #f9f9f9;
  font-size: 28px;
}
.el-form{
  width: 60%;
  margin: auto;
}
.loginTile{
  text-align: center;
  margin-top: 100px;
  margin-bottom: 25px;
  font-weight: bold;
}
.el-button{
  width: 100%;
}
</style>