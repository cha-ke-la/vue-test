<template>
  <div>
    <!-- <ElementTest></ElementTest> -->

    <!-- KForm -->
    <BForm :model="userInfo" :rules="rules" ref="loginForm">
      <!-- 用户名 -->
      <BFormItem label="用户名" prop="username">
        <BInput v-model="userInfo.username" placeholder="请输入用户名"></BInput>
      </BFormItem>
      <!-- 密码 -->
      <BFormItem label="密码" prop="password">
        <BInput type="password" v-model="userInfo.password" placeholder="请输入密码"></BInput>
      </BFormItem>
      <!-- 提交按钮 -->
      <BFormItem>
        <button @click="login">登录</button>
      </BFormItem>
    </BForm>
  </div>
</template>

<script>
import BInput from "@/components/form/input.vue";
import BFormItem from "@/components/form/form-item.vue";
import BForm from "@/components/form/form.vue";
// import Notice from "@/components/Notice.vue";

export default {
  data() {
    return {
      userInfo: {
        username: "tom",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入用户名称" }],
        password: [{ required: true, message: "请输入密码" }]
      }
    };
  },
  components: {
    BInput,
    BFormItem,
    BForm
  },
  methods: {
    login() {
      this.$refs.loginForm.validate((valid) => {
        console.log(valid)
        throw new Error('login')
      })
      // this.$refs["loginForm"].validate(valid => {
      //   const notice = this.$notice({
      //     title: "社会你杨哥喊你来搬砖",
      //     message: valid ? "请求登录!" : "校验失败!",
      //     duration: 2000
      //   });
      //   notice.show();
      //   // if (valid) {
      //   //   alert("submit");
      //   // } else {
      //   //   console.log("error submit!");
      //   //   return false;
      //   // }
      // });
    }
  }
};
</script>

<style scoped>
</style>