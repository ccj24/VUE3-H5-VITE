<template>
  <div class="cancel-account-page">
    <!-- 注销账号页 -->
    <div class="logOffPage">
      <div class="logOff">
        <p style="padding-bottom: 0.2rem">
          Once the account is canceled, it cannot be restored.
        </p>
        <p>Please reconsider before you proceed.</p>
      </div>
      <div class="logOff-tip">Please select the reason for cancellation:</div>
      <div class="logOff-group">
        <van-form @submit="handConfirm">
          <van-cell-group inset>
            <van-checkbox-group
              v-model="checked"
              shape="square"
              :rules="[
                { required: true, message: 'Please enter your email address' },
              ]"
            >
              <van-checkbox name="a"
                >I'm no longer using an Sihoo device</van-checkbox
              >
              <van-checkbox name="b">Security/privacy concerns</van-checkbox>
              <van-checkbox name="c">This is a duplicate account </van-checkbox>
              <van-checkbox name="d"
                >Difficulties encoutered during use
              </van-checkbox>
              <van-checkbox name="e">Other </van-checkbox>
            </van-checkbox-group>
          </van-cell-group>
          <div style="margin: 16px">
            <van-button round block type="primary" native-type="submit"
              >提交</van-button
            >
          </div>
        </van-form>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, reactive } from "vue";
import { showDialog, showToast } from "vant";
import router from "@/router/index.js";
import { useRoute } from "vue-router";
import { revokeUser } from "../api/common.js";

export default {
  name: "CancelAccount",
  setup() {
    const checked = ref([]);
    const route = useRoute();
    const dataObj = reactive({
      userId: null,
      token: null,
    });

    // 注销账号页
    const handConfirm = () => {
      if (checked.value.length > 0) {
        showDialog({
          title: "",
          confirmButtonText: "I got it.",
          message: `Your account ${dataObj.email} has been successfully cancelled!`,
        }).then(async () => {
          let params = {
            userId: parseInt(dataObj.userId),
            token: dataObj.token,
            verificationType: "EMAIL",
          };
          let result = await revokeUser(params);
          if (result.code === 0) {
            router.push({
              path: "/",
              query: {},
            });
          }
          console.log(result, "result");
        });
      } else {
        showToast("Please check the option");
      }
    };
    watch(
      () => route,
      (newPath, oldPath) => {
        if (newPath.query) {
          dataObj.token = newPath.query.token;
          dataObj.userId = newPath.query.userId;
        }
      },
      {
        immediate: true,
        deep: true,
      }
    );
    return {
      handConfirm,
      checked,
      dataObj,
      revokeUser,
    };
  },
};
</script>

<style scoped lang="less">
.cancel-account-page {
  .logOffPage {
    width: 100%;
    font-size: 36px;

    .logOff {
      height: 2.3rem;
      width: 100%;
      background-color: #fef1cf;
      padding-top: 0.2rem;
      text-align: center;
    }
    .logOff-tip {
      padding-top: 0.8rem;
      font-weight: bold;
      text-align: center;
    }
    .logOff-group {
      padding-top: 1rem;
      padding-left: 0.3rem;
      .van-checkbox {
        padding-bottom: 0.3rem;
        font-weight: bold;
      }
    }
  }
}
</style>

