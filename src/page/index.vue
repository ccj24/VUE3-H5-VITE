<!--
 * @description: 
 * @param: params
 * @return: 
-->
<template>
  <div class="cancel-account-page">
    <div class="home-page">
      <van-form @submit="onSubmit">
        <div class="topname">SIHOO</div>
        <div class="writing-tip">
          if you need to delete account,plaase sign in to your account first.
        </div>
        <van-cell-group inset>
          <van-field
            v-model="formData.email"
            name="email"
            label="邮箱"
            placeholder="Please enter your email address"
            :rules="[
              { required: true, message: 'Please enter your email address' },
            ]"
          />
          <van-field
            v-model="formData.password"
            type="password"
            name="password"
            label="密码"
            placeholder="Please enter your password"
            :rules="[{ required: true, message: 'Please enter your password' }]"
          />
        </van-cell-group>
        <div style="margin: 50px 16px 0px">
          <van-button type="primary" block native-type="submit"
            >Login</van-button
          >
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { showDialog } from "vant";
import router from "@/router/index.js";

export default {
  name: "index",
  setup() {
    const formData = ref({
      email: null,
      password: null,
    });

    const onSubmit = (values) => {
      console.log("提交的数据:", values);
      // 在这里处理表单提交逻辑
      router.push({
        path: "/logindescriptionPage",
        query: {
          email: formData.value.email,
          token: "xxxxxxx",
        },
      });
    };

    return {
      formData,
      onSubmit,
    };
  },
};
</script>

<style scoped lang="less">
.cancel-account-page {
  .home-page {
    margin: 50% 10px;
    .topname {
      text-align: center;
    }
    .writing-tip {
      font-size: 32px;
      padding: 20px 0 20px 40px;
    }
    .van-field {
      margin: 10px 0;
      border: solid 1px;
    }
    .login-btn {
      margin-bottom: 10px;
    }
  }
}
</style>
