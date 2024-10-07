<template>
  <div class="cancel-account-page">
    <div class="home-page" v-if="showPage === 'login'">
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

    <div v-if="showPage === 'logindescriptionPage'" class="logindescription">
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

    <!-- FAQ说明页 -->
    <div v-if="showPage === 'FqaDescriptionPage'" class="FAQdescription">
      <div class="explain-tip1">
        1. After cancelling my account, will the subsequent use of the connected
        smart chair be affected?
      </div>
      <div class="explain-tip2">
        A. After cancelling the account, the Smart Chair will not work properly
        without using the app, and you need to bind another account or register
        a new account before you can continue to use it.
      </div>
      <div class="explain-tip3">
        2. After I successfully cancelled my account, can I get it back later?
      </div>
      <div class="explain-tip3">
        A: Once an account is cancelled, it cannot be restored.
      </div>
      <div class="explain-tip3">
        3. Can I still use another account to connect to my Smart Chair after
        cancelling my account?
      </div>
      <div class="explain-tip4">
        A: After cancelling your account, any device information tied to the
        cancelled account will also be deleted. You can use another account to
        log in to the app and reset the network for your Smart Chair.
      </div>
    </div>

    <!-- 注销账号页 -->
    <div v-if="showPage === 'logOffPage'" class="logOffPage">
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
          <van-checkbox name="b">This is a duplicate account </van-checkbox>
          <van-checkbox name="b"
            >Difficulties encoutered during use
          </van-checkbox>
          <van-checkbox name="b">Other </van-checkbox>
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
import { ref } from "vue";
import { showDialog } from "vant";

export default {
  name: "CancelAccount",
  setup() {
    const formData = ref({
      email: null,
      password: null,
    });
    const showPage = ref("login");
    const checked = ref([]);

    const onSubmit = (values) => {
      console.log("提交的数据:", values);
      // 在这里处理表单提交逻辑
      showPage.value = "logindescriptionPage";
    };
    const handView = () => {
      showPage.value = "FqaDescriptionPage";
    };
    const handDelete = () => {
      showPage.value = "logOffPage";
    };

    // 注销账号页
    const handConfirm = () => {
      showDialog({
        title: "",
        confirmButtonText: "I got it.",
        message:
          "Your account leiothrixs@foxmail has been successfully cancelled!",
      }).then(() => {
        showPage.value = "login";
      });
    };
    return {
      formData,
      onSubmit,
      showPage,
      handView,
      handDelete,
      checked,
      handConfirm,
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
  .FAQdescription {
    padding: 70px 30px;
    font-size: 32px;
    .explain-tip1 {
      padding-bottom: 50px;
    }
    .explain-tip2 {
      padding-bottom: 50px;
    }
    .explain-tip3 {
      padding-bottom: 50px;
    }
  }
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
