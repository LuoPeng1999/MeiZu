<template>
  <div>
    <!-- 订单头部 -->
    <div class="orderlist-header">
      <div class="left" @click="$router.push('/recommend')">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span>{{ $route.name }}</span>
      </div>
      <div class="right"></div>
    </div>
    <van-tabs
      v-model="$store.state.orderactive"
      color="#00c3f5"
      title-inactive-color="#333"
      title-active-color="#00c3f5"
    >
      <van-tab title="全部" to="/orderlist/orderAll"></van-tab>
      <van-tab title="待付款" to="/orderlist/orderPayment"></van-tab>
      <van-tab title="待收货" to="/orderlist/orderReceipt"></van-tab>
      <van-tab title="售后" to="/orderlist/orderAfterSale"></van-tab>
    </van-tabs>
    <!-- 二级路由 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>

<style lang="scss" scoped>
// 订单头部样式
.orderlist-header {
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
</style>
