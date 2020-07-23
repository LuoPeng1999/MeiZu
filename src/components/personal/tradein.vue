<template>
  <div>
    <!-- 旧换新头部 -->
    <div class="tradein-header">
      <div class="left" @click="$router.go(-1)">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span>我的以旧换新</span>
      </div>
      <div class="right"></div>
    </div>

    <div class="banner">
      <button>前往以旧换新</button>
    </div>

    <div class="list">
      <ul>
        <router-link tag="li" to="/repaylist">
          <div class="left">我的回购单</div>
          <div class="right">
            <span class="iconfont iconright"></span>
          </div>
        </router-link>
        <router-link tag="li" to="/repaygold">
          <div class="left">我的回购金</div>
          <div class="right">
            <span class="iconfont iconright"></span>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// 以旧换新头部样式
.tradein-header {
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
.banner {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  height: 234px;
  background: url(//mall.res.meizu.com/mcycle/img/mc-background5.jpg) no-repeat;
  background-size: contain;
  position: relative;
  button {
    width: 115px;
    height: 46px;
    background-color: #00a5f5;
    color: #fff;
    line-height: 46px;
    text-align: center;
    position: absolute;
    left: 50%;
    margin-left: -57.5px;
    bottom: 36px;
    border: none;
    border-radius: 5px;
    font-size: 14px;
  }
}
.list {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  margin-top: 20px;
  ul {
    width: 100%;
    background-color: #fff;
    li {
      width: 80%;
      height: 66px;
      background-color: #fff;
      margin: 0 auto;
      line-height: 66px;
      font-size: 16px;
      color: #333;
      &:last-child {
        border-top: 1px solid #f0f0f0;
      }
      .left {
        float: left;
      }
      .right {
        float: right;
      }
    }
  }
}
</style>
