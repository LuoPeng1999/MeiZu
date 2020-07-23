<template>
  <div>
    <div class="container">
      <!-- 头部样式 -->
      <div class="header">
        <div class="left">
          <span
            class="iconfont iconsearch"
            @click="$router.push('search')"
          ></span>
        </div>
        <div class="center">
          <span
            class="iconfont iconmeizu"
            @click="$router.push('/recommend')"
          ></span>
        </div>
        <div class="right">
          <span
            class="iconfont icongouwuche1"
            @click="$router.push('/cart')"
          ></span>
          <span class="listicon">
            <span class="iconfont iconcaidan" is-link @click="showPopup"></span>
          </span>
        </div>
      </div>
      <!-- 头部导航栏 -->
      <div class="headerNav">
        <ul>
          <li>
            <router-link tag="span" to="/recommend">推荐</router-link>
          </li>
          <li>
            <router-link tag="span" to="/phone">手机</router-link>
          </li>
          <li>
            <router-link tag="span" to="/acoustics">声学</router-link>
          </li>
          <li>
            <router-link tag="span" to="/fitting">配件</router-link>
          </li>
          <li>
            <router-link tag="span" to="/life">生活</router-link>
          </li>
        </ul>
      </div>
    </div>

    <!-- vant组件部分 -->
    <van-popup
      v-model="show"
      closeable
      position="top"
      :style="{ height: '100%' }"
    >
      <div class="operating">
        <div class="operating-user">
          <div class="operating-title">魅族官网</div>
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
        <ul>
          <router-link tag="li" to="/meizu17">
            <img
              src="https://fms.res.meizu.com/dms/2020/05/10/ae710a72-b259-4010-9d8d-4d35685691a6.jpg"
              alt=""
            />
            <p>魅族 17 系列</p>
          </router-link>
          <router-link tag="li" to="/meizu16t">
            <img
              src="https://fms.res.meizu.com/dms/2020/04/21/31fb6896-6028-4d17-8d73-61eafd09e630.png"
              alt=""
            />
            <p>魅族 16T</p>
          </router-link>
          <li>
            <img
              src="https://fms.res.meizu.com/dms/2019/04/28/bd43b2ba-d2d8-4946-a8a5-38d5aa7e16ac.jpg"
              alt=""
            />
            <p>以旧换新</p>
          </li>
          <router-link tag="li" to="/mcode">
            <img
              src="https://fms.res.meizu.com/dms/2019/05/16/98055a85-393c-4138-8cad-9353b7a6edce.png"
              alt=""
            />
            <p>M码通道</p>
          </router-link>
        </ul>
        <div class="operating-official">
          <ul>
            <router-link
              tag="li"
              v-for="(item, index) in officialoperatinglist"
              :key="index"
              :to="item.to"
            >
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </router-link>
          </ul>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      useroperatinglist: [
        {
          name: "个人中心",
          img:
            "https://fms.res.meizu.com/dms/2018/08/14/15569c6b-5e3f-41da-8dbf-edfd557191fb.png",
          to: "/personal"
        },
        {
          name: "我的订单",
          img:
            "https://fms.res.meizu.com/dms/2018/08/14/00963788-63ab-4dfc-8722-b59d4096c437.png",
          to: "/orderlist/orderAll"
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
        },
        {
          name: "我的地址",
          img:
            "https://fms.res.meizu.com/dms/2018/08/14/0e40e9a3-6ad7-4d24-80ee-c5677ea5c48e.png",
          to: "/address"
        },
        {
          name: "我的收藏",
          img:
            "https://fms.res.meizu.com/dms/2018/08/14/68cb6912-a7a1-482e-b8cf-76960b2dc368.png",
          to: "/collect"
        }
      ],
      officialoperatinglist: [
        {
          img:
            "https://fms.res.meizu.com/dms/2018/04/11/ec8cb46d-5340-428a-b9bc-3893f4749d80.png",
          name: "产品",
          to: "/products"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2018/04/11/0ba8483f-464e-4500-879a-66c834b62128.png",
          name: "Flyme",
          to: "/flyme"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2018/04/11/9ef59a5f-aa24-46a7-9443-275347f42773.png",
          name: "云服务",
          to: "/cloud"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2018/04/11/deff1f64-aeff-4b1a-a321-e54626c25d7d.png",
          name: "专卖店",
          to: "/special"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2018/04/11/7a170057-4036-4088-bda3-c0cfbfe70c03.png",
          name: "服务支持",
          to: "/products"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2018/04/11/2b57d6ff-3f1d-4907-8e6a-8aab99c89b8b.png",
          name: "社区",
          to: "/products"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2018/11/19/6d9b6d21-a84f-439b-a995-b86bbe2aba4d.png",
          name: "App下载",
          to: "/products"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2020/04/21/16aa51a5-2585-4f3e-b936-93204b021b8b.png",
          name: "政企定制",
          to: "/products"
        }
      ]
    };
  },
  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 84px;
  max-width: 436px;
  min-width: 320px;
  background-color: #fff;
  margin: 0 auto;
  .header {
    width: 100%;
    height: 54px;
    // background-color: #f0f0f0;
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
        font-size: 16px;
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
        margin-right: 9px;
        font-size: 16px;
      }
    }
  }
  .headerNav {
    width: 100%;
    height: 30px;
    // background-color: #f0f0f0;
    line-height: 30px;
    & > ul {
      display: flex;
      li {
        flex: 1;
        text-align: center;
        font-size: 14px;
        color: #333;
        & > span.active {
          color: #008cff;
          border-bottom: 2px solid #008cff;
          padding-bottom: 6px;
          box-sizing: border-box;
        }
      }
    }
  }
}
// 弹出层样式
.operating {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fafafa;
  .operating-user {
    height: 202px;
    color: #333;
    // background-color: pink;
    box-shadow: 0 4px 12px 1px #ebebeb;
    .operating-title {
      height: 50px;
      font-size: 18px;
      line-height: 50px;
      text-align: center;
      color: #333;
      //   background-color: pink;
    }
    & > ul {
      width: 96%;
      height: 152px;
      margin: 0 auto;
      //   background-color: skyblue;
      li {
        width: 25%;
        height: 57.26px;
        // background-color: lightgreen;
        text-align: center;
        overflow: hidden;
        float: left;
        &:nth-child(5) {
          margin-top: 15px;
        }
        &:last-child {
          margin-top: 15px;
        }
        img {
          display: block;
          width: 41.26px;
          height: 41.26px;
          transform: translate(60%);
        }
        p {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  & > ul {
    width: 100%;
    max-width: 436px;
    min-width: 320px;
    margin: 0 auto;
    height: 110px;
    // background-color: #fafafa;
    display: flex;
    border-bottom: 1px solid #f0f0f0;
    & > li {
      height: 110px;
      flex: 1;
      line-height: 20px;
      text-align: center;
      img {
        display: inline-block;
        width: 27.6px;
        height: 27.6px;
        margin-top: 28px;
      }
      p {
        color: #333;
      }
    }
  }
  .operating-official {
    width: 100%;
    max-width: 436px;
    min-width: 320px;
    margin: 0 auto;
    height: 355px;
    overflow: hidden;
    & > ul {
      width: 98%;
      margin: 0px auto;
      & > li {
        width: 25%;
        height: 53.5px;
        text-align: center;
        margin-top: 10px;
        float: left;
        img {
          display: inline-block;
          width: 26px;
          height: 26px;
          margin-top: 5px;
        }
        p {
          color: #333;
        }
      }
    }
  }
}
</style>
