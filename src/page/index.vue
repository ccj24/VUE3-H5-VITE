<!--
 * @description: 
 * @param: params
 * @return: 
-->
<template>
  <div class="cancel-account-page">
    <div class="home-page">
      <van-form @submit="onSubmit">
        <div class="topname">
          <div class="bg"></div>
        </div>
        <div class="writing-tip">
          If you need to delete account,please sign in to your account first.
        </div>
        <van-cell-group inset>
          <van-field
            v-model="formData.email"
            name="email"
            label=""
            placeholder="Please enter your email address"
            :rules="[
              { required: true, message: 'Please enter your email address' },
            ]"
            style="margin-bottom: 20px"
          >
            <template #left-icon>
              <img
                style="width: 25px; height: 25px"
                src="@/assets/email.png"
                alt=""
              />
            </template>
          </van-field>

          <van-field
            v-model="formData.passwordSalt"
            type="password"
            name="passwordSalt"
            label=""
            placeholder="Please enter your password"
            :rules="[{ required: true, message: 'Please enter your password' }]"
          >
            <template #left-icon>
              <img
                style="width: 25px; height: 25px"
                src="@/assets/password.png"
                alt=""
              />
            </template>
          </van-field>
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
import { showDialog, showToast } from "vant";
import router from "@/router/index.js";
import { login, emailLogin } from "../api/common.js";
import CryptoJS from "crypto-js";
import email from "@/assets/email.png";

export default {
  name: "index",
  setup() {
    const formData = ref({
      email: null,
      passwordSalt: null,
    });
    // 通过邮箱生成一个md5值
    const generateMd5WithTimestamp = (input) => {
      return CryptoJS.MD5(input).toString();
    };
    const onSubmit = async (values) => {
      console.log("提交的数据:", values);
      let hashpass = null;
      const md5Email = generateMd5WithTimestamp(values.email);
      await SHA256(values.passwordSalt).then((hash) => {
        hashpass = hash;
        return hash;
      });
      let params = {
        passwordSalt: hashpass,
        email: values.email,
        verificationType: "EMAIL",
        phoneInfo: {
          phoneModel: "Web1.0",
          phoneUid: "1",
          deviceToken: md5Email,
          phoneName: "Web",
          systemType: "Web",
          systemVersion: "1.0.0",
          appVersion: "1.0.0",
        },
      };
      console.log(params, "=============>params");
      let res = await emailLogin(params);
      if (res.code === 0) {
        router.push({
          path: "/logindescriptionPage",
          query: {
            userId: res.content.user.userId,
            token: res.content.token,
            email: values.email,
          },
        });
      } else {
        showToast("login failed");
      }
      console.log(res, "=============>res");
      // 在这里处理表单提交逻辑
    };
    const SHA256 = async (decrypt) => {
      // 将传入字符串与"passxh"拼接
      const input = decrypt + "passxh";
      // 使用 TextEncoder 将字符串转换为 Uint8Array
      const encoder = new TextEncoder();
      const data = encoder.encode(input);
      // 使用 Web Crypto API 进行 SHA-256 加密
      const hashBuffer = await crypto.subtle.digest("SHA-256", data);
      // 将结果转换为字节数组
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      // 将每个字节转换为十六进制并拼接成最终的字符串
      const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

      return hashHex.toLowerCase();
    };

    return {
      formData,
      onSubmit,
      login,
      emailLogin,
    };
  },
};
</script>

<style scoped lang="less">
.cancel-account-page {
  .home-page {
    margin: 50% 10px;
    .topname {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;

      .bg {
        width: 350px; /* 设置图标的宽度 */
        height: 120px; /* 设置图标的高度 */
        background-image: url("@/assets/logo.png"); /* 设置图标的图片路径 */
        background-size: cover; /* 背景图片覆盖整个元素区域 */
        background-position: center; /* 背景图片居中显示 */
        background-repeat: no-repeat; /* 背景图片不重复 */
      }
    }
    .writing-tip {
      font-size: 32px;
      padding: 20px 0 20px 40px;
      color: #ffffff;
    }
    .van-field {
      // margin: 30px 0;
      border: solid 1px;
      border-radius: 15px;

      background: none;
    }
    .van-cell-group {
      background: none;
    }
    .login-btn {
      margin-bottom: 10px;
    }
  }
}
</style>
