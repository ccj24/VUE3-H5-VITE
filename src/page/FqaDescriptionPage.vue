<template>
  <div class="cancel-account-page">
    <div class="FAQdescription">
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
  </div>
</template>

<script>
import { ref } from "vue";
import { showDialog } from "vant";

export default {
  name: "CancelAccount",
  setup() {
    return {};
  },
};
</script>

<style scoped lang="less">
.cancel-account-page {
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
}
</style>
