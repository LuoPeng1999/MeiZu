<template>
  <div>
    <!-- 抽奖规则头部 -->
    <div class="rule-header">
      <div class="left" @click="$router.go(-1)">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span>抽奖规则</span>
      </div>
      <div class="right"></div>
    </div>

    <div class="rule-content">
      【活动时间】7月3日10:00:00——7月31日23:59:59<br />【参与方式】<br />活动期间，用户登陆魅族商城账号即可参与抽奖，每个用户每天有1次抽奖机会；<br />【活动奖品】<br />抽奖转盘奖品为
      魅族 17
      1台、魅友家十周年纪念贴纸集100份、魅友家十周年纪念版嘻哈帽70个、魅友家十周年纪念币50个、魅族
      17 周年徽章30个、魅友家特别版手机壳20个、魅友家十周年纪念版T恤 10件；<br />【奖品发放】<br />获得实物奖品的用户，需在活动结束后5个工作日内填写收货地址信息，魅族商城将在确认收货后30个工作日内根据用户填写的收货地址信息寄送奖品；<br />【活动声明】<br />1、ID、收件人姓名、地址、电话、支付宝账号等有任何一个信息相同的均视为同一用户，如产生多次中奖，核实后仅保留第一次中奖资格，取消后续产生的中奖资格；<br />2、图片仅做展示，具体以收到的奖品为准，奖品型号、颜色随机发放；在活动页面，点击“我的奖品”可查看本人所有中奖信息；<br />3、弹出界面获得奖品和转盘指向奖品因系统原因出现不同的情况下，具体以“我的奖品”获得奖品为准；<br />4、如发现用户为恶意刷奖品，或其他非正常手段抽取奖品，将取消全部中奖资格；<br />5、由于用户联系方式错误或拒收等导致无法成功派送的，均视为用户放弃领奖；<br />6、获得实物奖品的用户，逾期未填写收货信息视作自动放弃奖品；<br />7、如有任何奖品问题，请在8月3日前反馈给客服，逾期将视为自动放弃奖品；<br />8、获奖者应在收到奖品时确认其是否完整；如有异议，获奖者应在确认收到奖品后2日内与魅族客服联系；若获奖者未在奖品收到2日内通过客服提出异议，则视为对奖品或奖金的完全认可；<br />9、
      在法律法规允许范围内，魅族商城有权对本次活动的格式条款作出解释。
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
//  抽奖规则头部样式
.rule-header {
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
.rule-content {
  width: 88%;
  margin: 0 auto;
  padding: 20px 0px;
  max-width: 436px;
  min-width: 320px;
}
</style>
