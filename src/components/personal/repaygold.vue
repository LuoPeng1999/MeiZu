<template>
  <div>
    <!-- 账号问题头部 -->
    <div class="repaygold-header">
      <div class="left" @click="$router.go(-1)">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span>我的回购单</span>
      </div>
      <div class="right"></div>
    </div>

    <div class="repaygold-content">
      <div class="amount">
        <p>回购金余额：<span>￥0</span></p>
      </div>
      <div class="desc">
        <div class="title">
          <p>回购金明细</p>
        </div>
        <div class="content">
          <p>暂无回购金明细记录</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emptyimg: require("../../assets/image/recommend/empty.jpg")
    };
  }
};
</script>

<style lang="scss" scoped>
//  账号问题头部样式
.repaygold-header {
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
.repaygold-content {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  .amount {
    width: 100%;
    height: 62.5px;
    background-color: #fff;
    line-height: 62.5px;
    text-indent: 24px;
    margin-top: 10px;
    p {
      font-size: 14px;
      color: #444;
      span {
        font-size: 20px;
        color: #333;
        margin-left: 5px;
      }
    }
  }
  .desc {
    width: 100%;
    height: 90px;
    background-color: #fff;
    margin-top: 10px;
    .title {
      font-size: 13px;
      font-weight: bold;
      color: #666;
      text-indent: 24px;
      height: 42px;
      line-height: 42px;
      box-sizing: border-box;
      border-bottom: 1px solid #f0f0f0;
    }
    .content {
      font-size: 14px;
      height: 58px;
      line-height: 50px;
      text-align: center;
      color: #999;
    }
  }
}
</style>
