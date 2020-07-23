<template>
  <div>
    <!-- 账号问题头部 -->
    <div class="problem-header">
      <div class="left" @click="$router.go(-1)">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span>账号问题</span>
      </div>
      <div class="right"></div>
    </div>

    <div class="problem-content">
      为了给用户带来更好的服务体验，即日起 Flyme 将提供冻结 Flyme 账号、解冻
      Flyme 账号、注销 Flyme 账号的增值服务。
      <br />
      1、冻结账号 <br />
      服务内容：Flyme 账号暂停登录，但保留当前账号信息。 <br />
      注：以下 3 种情况不能申请冻结账号 <br />
      1）账号有未支付或正在退款的订单； <br />
      2）账号已绑定开发者账号； <br />
      3）账号未退出所有绑定的设备。 <br />
      <br />
      2、解冻账号 <br />
      服务内容：恢复账号使用 <br />
      <br />
      3、注销账号 <br />
      服务内容：删除 Flyme
      账号所有信息，包括但不限于实名认证、手机号、邮箱、昵称等信息。注销后，账号将永久不能登录，账户内金豆也会被清零。
      <br />
      注：以下 5 种情况不能申请注销账号 <br />
      1）当前账号魅币存在余额、有未支付订单、有正在退款订单； <br />
      2）账号已绑定开发者账号； <br />
      3）账号未退出所有绑定的设备； <br />
      4）账号有未过期的视频会员服务； <br />
      5）账号有未过期的付费云服务。 <br />
      <br />
      4、如何申请 <br />
      如需申请上述服务，请您提供申请材料，编辑邮件发送至 mzzhfw@meizu.com
      邮箱，工作人员在收到您的申请材料后将尽快审核并处理。
      <br />
      5、申请材料 <br />
      Flyme 账号（必须提供）、昵称、手持身份证照片（该身份证绑定了对应的 Flyme
      账号） <br />
      如果身份证无法提供，为帮助工作人员验证您的身份，请您尽可能多提供以下材料：注册地区、常用地区、注册时间、曾绑定的手机。
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
//  账号问题头部样式
.problem-header {
  width: 100%;
  height: 54px;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  display: flex;
  color: #333;
  background-color: #fff;
  line-height: 54px;
  text-align: center;
  & > div:nth-child(2) {
    flex: auto;
  }
  & > div:first-child {
    width: 54px;
    height: 54px;
  }
  & > div:last-child {
    width: 54px;
    height: 54px;
  }
  .left {
    text-align: center;
    margin-left: 4px;
    & > span {
      font-size: 20px;
    }
  }
  .center {
    color: #333;
    text-align: center;
    font-size: 18px;
  }
  .right {
    margin-right: 8px;
    text-align: center;
    span {
      margin-right: 10px;
      font-size: 12px;
      color: #999;
    }
  }
}
.problem-content {
  width: 88%;
  margin: 0 auto;
  padding: 20px 0px;
  max-width: 436px;
  min-width: 320px;
}
</style>
