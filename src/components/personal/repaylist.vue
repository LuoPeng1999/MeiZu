<template>
  <div>
    <!-- 账号问题头部 -->
    <div class="repaylist-header">
      <div class="left" @click="$router.go(-1)">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span>我的回购单</span>
      </div>
      <div class="right"></div>
    </div>

    <div class="repaylist-content">
      <img :src="emptyimg" alt="" />
      <p>暂无回购单</p>
      <a>赶快去以旧换新吧</a>
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
.repaylist-header {
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
.repaylist-content {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  height: 613px;
  background-color: #fff;
  text-align: center;
  border-top: 1px solid #f0f0f0;
  img {
    display: inline-block;
    width: 180px;
    height: 180px;
    margin-top: 100px;
  }
  p {
    font-size: 16px;
    color: #999;
  }
  a {
    font-size: 14px;
    color: #00a5f5;
  }
}
</style>
