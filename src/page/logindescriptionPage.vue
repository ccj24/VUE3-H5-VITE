<template>
  <div class="cancel-account-page">
    <div class="logindescription">
      <div class="logindescription-tip1">
        once the account is canceled,the following information will be cleared
        cannot be recovered.
      </div>
      <div class="logindescription-tip2">
        Including but not limited to the following information:
      </div>
      <div class="logindescription-tip3">Acoount Logins</div>
      <div class="logindescription-tip3">All personal profiles</div>
      <div class="logindescription-tip3">All network conneted device data</div>
      <div class="logindescription-tip4">
        For the impacts of canceling an account, please see the FAQs for more
        informations.
      </div>
      <div style="margin-right: 10px; margin-bottom: 50px">
        <van-button round type="primary" block @click="handView"
          >View FAQs</van-button
        >
      </div>

      <div style="margin-right: 10px">
        <van-button round type="primary" block @click="handDelete"
          >Delete Account
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { showDialog } from "vant";
import router from "@/router/index.js";

export default {
  name: "logindescriptionPage",
  setup() {
    const handView = () => {
      router.push({
        path: "/FqaDescriptionPage",
        query: {
          testParam: "131331",
        },
      });
    };
    const handDelete = () => {
      router.push({
        path: "/logOffPage",
        query: {
          testParam: "131331",
        },
      });
    };

    return {
      handView,
      handDelete,
    };
  },
};
</script>

<style scoped lang="less">
.cancel-account-page {
  .logindescription {
    padding: 50px 0 20px 40px;
    .logindescription-tip1 {
      font-size: 32px;
      padding-bottom: 50px;
    }
    .logindescription-tip2 {
      font-size: 32px;
      font-weight: 600;
    }
    .logindescription-tip3 {
      font-size: 32px;
      font-weight: 600;
    }
    .logindescription-tip4 {
      font-size: 32px;
      padding: 50px 0 60px;
    }
  }
}
</style>
