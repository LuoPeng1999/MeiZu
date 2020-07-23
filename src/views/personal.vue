<template>
  <div>
    <!-- 个人中心头部 -->
    <div class="header">
      <div class="personal-header">
        <div class="left" @click="$router.push('/recommend')">
          <span class="iconfont iconright1"></span>
        </div>
        <div class="center">
          <!-- <span>结算</span> -->
        </div>
        <div class="right" @click="$router.push('/news')">
          <span class="iconfont icon6"></span>
        </div>
      </div>
      <div class="user-img">
        <img
          src="//mall.res.meizu.com/member/img/login.png"
          alt=""
          v-if="$store.state.username == null"
        />
        <img
          src="//mall.res.meizu.com/member/img/login.png"
          alt=""
          v-if="$store.state.username != null"
        />
      </div>
      <div class="user-name">
        <p
          @click="$router.push('/login')"
          v-if="$store.state.username == null || $store.state.username == ''"
        >
          点击登录
        </p>
        <p v-if="$store.state.username != null">{{ $store.state.username }}</p>
      </div>
    </div>
    <!-- 我的订单 -->
    <div class="my-order">
      <van-cell
        title="我的订单"
        is-link
        value="查看全部订单"
        to="/orderlist/orderAll"
      />
      <div class="order-nav">
        <ul>
          <router-link tag="li" to="/orderlist/orderAll">
            <span class="iconfont icondingdan"></span>
            <p>全部</p>
          </router-link>
          <router-link tag="li" to="/orderlist/orderPayment">
            <span class="iconfont icondaifukuan"></span>
            <p>待付款</p>
          </router-link>
          <router-link tag="li" to="/orderlist/orderReceipt">
            <span class="iconfont icondaishouhuo"></span>
            <p>待收货</p>
          </router-link>
          <router-link tag="li" to="/orderlist/orderAfterSale">
            <span class="iconfont iconshouhou"></span>
            <p>售后</p>
          </router-link>
        </ul>
      </div>
    </div>
    <!-- 导航栏 -->
    <div class="nav">
      <ul>
        <router-link
          tag="li"
          v-for="(item, index) in useroperatinglist"
          :key="index"
          :to="item.to"
        >
          <img :src="item.img" alt="" />
          <p>{{ item.name }}</p>
        </router-link>
      </ul>
    </div>
    <!-- 单元格 -->
    <div class="my-cell">
      <van-cell title="M码通道" is-link to="/mcode" />
      <van-cell title="手机号查询订单" is-link to="/telfind" />
      <van-cell title="以旧换新" is-link to="/tradein" />
      <van-cell title="百城速达" is-link to="/fast" />
      <van-cell title="联系客服" is-link to="/contact" />
      <van-cell title="意见反馈" is-link to="/feedback" />
    </div>
    <!-- 退出登录 -->
    <div class="dropout">
      <p @click="$store.state.username = ''">退出登录</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      useroperatinglist: [
        {
          name: "我的收藏",
          img:
            "https://fms.res.meizu.com/dms/2018/08/14/68cb6912-a7a1-482e-b8cf-76960b2dc368.png",
          to: "/collect"
        },
        {
          name: "我的地址",
          img:
            "https://fms.res.meizu.com/dms/2018/08/14/0e40e9a3-6ad7-4d24-80ee-c5677ea5c48e.png",
          to: "/address"
        },
        {
          name: "我的红包",
          img:
            "https://fms.res.meizu.com/dms/2018/08/14/6c017770-c969-472b-a9b5-47eca996be65.png",
          to: "/envelope"
        },
        {
          name: "我的优惠券",
          img:
            "https://fms.res.meizu.com/dms/2018/08/14/b39b0e5a-f912-4733-a98d-3acdf4a83940.png",
          to: "/coupon"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
// 个人中心头部
.header {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  height: 146px;
  background: url(../assets/image/recommend/personalHeaderBanner.jpg);
  position: relative;
  .personal-header {
    width: 100%;
    height: 54px;
    // background-color: #fff;
    line-height: 54px;
    display: flex;
    text-align: center;
    color: #333;
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
        color: white;
        font-size: 18px;
      }
    }
    .center {
      color: #008cff;
      text-align: center;
    }
    .right {
      margin-right: 8px;
      text-align: center;
      span {
        margin-right: 10px;
        font-size: 18px;
        color: white;
      }
    }
  }
  .user-img {
    width: 80px;
    height: 78px;
    border: 3px solid white;
    border-radius: 50%;
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    margin-left: -40px;
    top: 50%;
    margin-top: -39px;
  }
  .user-name {
    width: 100%;
    height: 20px;
    position: absolute;
    bottom: 5px;
    text-align: center;
    line-height: 20px;
    p {
      color: white;
      font-size: 16px;
    }
  }
}
// 我的订单
.my-order {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  margin-top: 10px;
  .order-nav {
    width: 100%;
    height: 78px;
    border-top: 1px solid #f0f0f0;
    ul {
      width: 100%;
      height: 78px;
      display: flex;
      li {
        flex: 1;
        text-align: center;
        background-color: #fff;
        position: relative;
        &:nth-child(1)::after {
          content: "";
          width: 2px;
          height: 30px;
          position: absolute;
          right: 0;
          top: 50%;
          margin-top: -15px;
          background-color: #f0f0f0;
        }
        &:nth-child(2)::after {
          content: "";
          width: 2px;
          height: 30px;
          position: absolute;
          right: 0;
          top: 50%;
          margin-top: -15px;
          background-color: #f0f0f0;
        }
        &:nth-child(3)::after {
          content: "";
          width: 2px;
          height: 30px;
          position: absolute;
          right: 0;
          top: 50%;
          margin-top: -15px;
          background-color: #f0f0f0;
        }
        span {
          display: inline-block;
          font-size: 22px;
          color: #999;
          margin-top: 10px;
        }
        p {
          font-size: 14px;
          color: #999;
        }
      }
    }
  }
}
// 导航栏
.nav {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  margin-top: 10px;
  background-color: #fff;
  ul {
    width: 96%;
    height: 80px;
    margin: 0 auto;
    //   background-color: skyblue;
    li {
      width: 25%;
      height: 80px;
      text-align: center;
      overflow: hidden;
      float: left;
      img {
        display: block;
        width: 41.26px;
        height: 41.26px;
        transform: translate(60%);
        margin-top: 12px;
      }
      p {
        display: block;
      }
    }
  }
}
// 单元格
.my-cell {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  margin-top: 10px;
  background-color: #fff;
}
// 退出登录
.dropout {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  margin-top: 40px;
  background-color: #fff;
  font-size: 14px;
  color: #333;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
</style>
