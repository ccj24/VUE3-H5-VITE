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
        <van-checkbox-group v-model="checked" shape="square">
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
      </div>
      <div style="margin: 1rem 0.2rem">
        <van-button round type="primary" block @click="handConfirm"
          >Confirm Cancellation
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, watch, reactive } from "vue";
import { showDialog } from "vant";
import router from "@/router/index.js";
import { useRoute } from "vue-router";

export default {
  name: "CancelAccount",
  setup() {
    const checked = ref([]);
    const route = useRoute();
    const dataObj = reactive({
      token: null,
      email: null,
    });
    // 注销账号页
    const handConfirm = () => {
      showDialog({
        title: "",
        confirmButtonText: "I got it.",
        message: `Your account ${dataObj.email} has been successfully cancelled!`,
      }).then(() => {
        router.push({
          path: "/",
          query: {},
        });
      });
    };
    watch(
      () => route,
      (newPath, oldPath) => {
        if (newPath.query) {
          dataObj.token = newPath.query.email;
          dataObj.email = newPath.query.token;
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
