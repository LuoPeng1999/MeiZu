<template>
  <div>
    <!-- 红包头部 -->
    <div class="envelope-header">
      <div class="left" @click="$router.go(-1)">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span>我的红包</span>
      </div>
      <div class="right"></div>
    </div>

    <div class="envelope-content">
      <van-tabs
        v-model="active"
        color="#00c3f5"
        title-inactive-color="#333"
        title-active-color="#00c3f5"
      >
        <van-tab title="可使用">
          <div class="content">
            <img :src="emptyImg" alt="" />
            <p>没有可使用的红包</p>
          </div>
        </van-tab>
        <van-tab title="已使用">
          <div class="content">
            <img :src="emptyImg" alt="" />
            <p>没有已使用的红包</p>
          </div>
        </van-tab>
        <van-tab title="已过期">
          <div class="content">
            <img :src="emptyImg" alt="" />
            <p>没有已过期的红包</p>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      emptyImg: require("../../assets/image/recommend/empty.jpg")
    };
  }
};
</script>

<style lang="scss" scoped>
// 红包头部样式
.envelope-header {
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
    color: #666;
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
.envelope-content {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  .content {
    width: 100%;
    height: 569px;
    background-color: #fff;
    text-align: center;
    img {
      display: inline-block;
      width: 200px;
      height: 200px;
      margin-top: 80px;
    }
    p {
      color: #999;
      font-size: 20px;
      font-weight: bold;
    }
  }
}
</style>
