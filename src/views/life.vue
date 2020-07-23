<template>
  <div>
    <publicnav></publicnav>
    <div class="life">
      <!-- <div class="phone-title">
        <h3>智能手机<span></span></h3>
      </div> -->
      <div class="life-banner">
        <img
          src="https://openfile.meizu.com/group1/M00/07/D3/Cgbj0F62IYiAEInUAAJUk3hiqjo839.jpg"
          alt=""
        />
      </div>
      <div class="life-goodslist">
        <ul>
          <router-link
            tag="li"
            v-for="(item, index) in lifelist"
            :key="index"
            :to="item.to"
          >
            <div class="goodslist-img">
              <img :src="item.img" alt="" />
            </div>
            <div class="goodslist-name">
              <p>{{ item.name }}</p>
            </div>
            <div class="goodslist-title">
              <p :class="{ normal: !item.hotflag }">
                <span v-show="item.hotflag">{{ item.hotword }}</span
                >{{ item.description }}
              </p>
            </div>
            <div class="goodslist-price">
              {{ item.nowprice }}<s>{{ item.oldprice }}</s>
            </div>
          </router-link>
        </ul>
      </div>
    </div>
    <!-- <div class="banner">
      <img
        src="https://openfile.meizu.com/group1/M00/07/00/Cgbj0Vw-0c2AeM5PAAMKUIJwe2k826.jpg"
        alt=""
      />
    </div> -->
    <div class="recommend">
      <div class="title">
        为您推荐
      </div>
      <div class="item">
        <div class="swiper-container fittingSwiper">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(item, index) in recommentlist"
              :key="index"
              @click="$router.push(item.to)"
            >
              <div class="recomment-item">
                <img :src="item.img" alt="" />
                <p class="name">{{ item.name }}</p>
                <p class="price">
                  <span>￥</span>
                  {{ item.price }}
                </p>
              </div>
            </div>
          </div>
          <!-- Add Pagination -->
        </div>
      </div>
    </div>

    <!-- 底部详情 -->
    <div class="footerClass">
      <div class="footer-top">
        <div class="tel">
          <a href="tel:400-788-3333">
            <span class="iconfont icondianhua"></span>
            <p>400-788-3333</p>
          </a>
        </div>
        <div class="customer" @click="$router.push('/customer')">
          <span class="iconfont iconbianzu"></span>
          <p>在线客服</p>
        </div>
      </div>
      <div class="footer-bottom">
        <ul>
          <li>粤ICP备13003602号-2合字B2-20170010</li>
          <li>营业执照©2018 Meizu All rights reserved</li>
        </ul>
        <div class="changeLuan">
          <ul>
            <li v-for="(item, index) in languagelist" :key="index">
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import publicnav from "../components/public/publicnav";
export default {
  data() {
    return {
      // 生活数据
      lifelist: [
        {
          img: require("../assets/image/life/life01.png"),
          name: "Lifeme 双肩包",
          hotword: "",
          description:
            "【前50名赠定制勋章】【狂暑季特惠249元】创新外观设计 | 扩容超大容量 | 人体工学背负 | 轻盈减负重量 | 颜值安全插扣 | 相机包新搭配",
          nowprice: " ￥299 ",
          oldprice: "",
          hotflag: false,
          to: ""
        },
        {
          img: require("../assets/image/life/life02.png"),
          name: "Pandaer 「17」系列 T恤",
          hotword: "",
          description: "【狂暑季特惠149元】潮酷印花 | 丝绸手感 | 100％长绒棉",
          nowprice: " ￥269 ",
          oldprice: "",
          hotflag: false,
          to: ""
        },
        {
          img: require("../assets/image/life/life03.png"),
          name: "Pandaer 「17」系列 果冻包",
          hotword: "",
          description:
            "【社区煤球/APP积分兑换30元优惠券】潮酷印花 | 超大容量 | 透亮设计",
          nowprice: " ￥99 ",
          oldprice: "",
          hotflag: false,
          to: ""
        },
        {
          img: require("../assets/image/life/life04.png"),
          name: "Lifeme 相机包",
          hotword: "",
          description: "相机包新搭配 | 一机两镜超大容量 | 加厚防冲击材料",
          nowprice: " ￥129 ",
          oldprice: "",
          hotflag: false,
          to: ""
        },
        {
          img: require("../assets/image/life/life05.png"),
          name: "魅族防飞溅声波电动牙刷",
          hotword: "",
          description:
            "【前150名赠刷头】【狂暑季特惠229元】智能压感防飞溅 | 超强震动清洁 | FDA 杜邦软毛 | 30天超长续航  | IPX7 级防水全身防霉防污垢 | 四种模式全面呵护 ",
          nowprice: " ￥299 ",
          oldprice: "",
          hotflag: false,
          to: ""
        },
        {
          img: require("../assets/image/life/life06.png"),
          name: "魅族极简都市双肩包",
          hotword: "",
          description:
            "【狂暑季特惠129元】650D高耐磨牛津布 | 人体工学减负设计 | 大容量多功能收纳 | 生活防泼溅",
          nowprice: " ￥179 ",
          oldprice: "",
          hotflag: false,
          to: ""
        },
        {
          img: require("../assets/image/life/life07.png"),
          name: "Pandaer readnap T恤",
          hotword: "",
          description:
            "潮趣设计 | 100％精织纯棉 | 多重潮流工艺 | Mixcolor混色搭配 | 情侣装",
          nowprice: " ￥199 ",
          oldprice: "",
          hotflag: false,
          to: ""
        },
        {
          img: require("../assets/image/life/life08.png"),
          name: "Pandaer 魔术师帽衫",
          hotword: "",
          description:
            "Magic Pandaer前卫设计 | 100％精梳棉纱 | 潮流款式 挺括有型 | 亲肤内衬 柔顺舒适 | 情侣装",
          nowprice: " ￥399 ",
          oldprice: "",
          hotflag: false,
          to: ""
        },
        {
          img: require("../assets/image/life/life09.png"),
          name: "Flyme 8 暗夜流光卫衣",
          hotword: "",
          description:
            "Flyme原创 | 镭射材料 | 随光而动 | 暗夜微光 | 点亮梦想 |  情侣装",
          nowprice: " ￥269 ",
          oldprice: "",
          hotflag: false,
          to: ""
        },
        {
          img: require("../assets/image/life/life10.png"),
          name: "Lifeme 梨木伞",
          hotword: "",
          description:
            "【APP限时抢购低至399元】高定时装压花伞布 | 隔绝99% UV | 进口环保拒水涂层 | 8骨静音防风伞架 | 千足纯银徽章 | 优质花梨木伞柄 ",
          nowprice: " ￥499 ",
          oldprice: "",
          hotflag: false,
          to: ""
        },
        {
          img: require("../assets/image/life/life11.png"),
          name: "【魅友家10周年】-Lifeme 梨木伞",
          hotword: "",
          description:
            "【限时12期免息】高定时装压花伞布 | 隔绝99% UV | 进口环保拒水涂层 | 8骨静音防风伞架 | 千足纯银徽章 | 优质花梨木伞柄",
          nowprice: " ￥449 ",
          oldprice: "",
          hotflag: false,
          to: ""
        },
        {
          img: require("../assets/image/life/life12.png"),
          name: "【魅友家10周年活动】-魅族极简都市双肩包",
          hotword: "",
          description:
            "650D高耐磨牛津布 | 人体工学减负设计 | 大容量多功能收纳 | 生活防泼溅",
          nowprice: " ￥129 ",
          oldprice: "",
          hotflag: false,
          to: ""
        },
        {
          img: require("../assets/image/life/life13.png"),
          name: "【魅友家10周年】魅族防飞溅声波电动牙刷",
          hotword: "",
          description:
            "【社区煤球/APP积分兑换30元优惠券】智能压感防飞溅 | 超强震动清洁 | FDA 杜邦软毛 | 30天超长续航  | IPX7 级防水全身防霉防污垢 | 四种模式全面呵护 ",
          nowprice: " ￥229 ",
          oldprice: "",
          hotflag: false,
          to: ""
        },
        {
          img: require("../assets/image/life/life14.png"),
          name: "【魅友家10周年活动】-Lifeme 双肩包",
          hotword: "",
          description:
            "【社区煤球/APP积分兑换优惠券】创新外观设计 | 扩容超大容量 | 人体工学背负 | 轻盈减负重量 | 颜值安全插扣 | 相机包新搭配",
          nowprice: " ￥249 ",
          oldprice: "",
          hotflag: false,
          to: ""
        },
        {
          img: require("../assets/image/life/life15.png"),
          name: "Pandaer 鼠年圆领卫衣",
          hotword: "",
          description:
            "【珍稀现货】金鼠限定/ 优质棉料 / 挺括亲肤 / 保暖舒适 / 情侣装",
          nowprice: " ￥199 ",
          oldprice: "",
          hotflag: false,
          to: ""
        },
        {
          img: require("../assets/image/life/life16.png"),
          name: "2020福来我发新春大礼盒",
          hotword: "",
          description:
            "Flyme 原创设计/ 鼠年春节套装 / 复古潮流 / 棒球衫 / 怀旧礼包 / 情侣装",
          nowprice: " ￥488 ",
          oldprice: "",
          hotflag: false,
          to: ""
        },
        {
          img: require("../assets/image/life/life17.png"),
          name: "魅族 Mini 线控自拍杆",
          hotword: "",
          description: "轻巧迷你 自在随心",
          nowprice: " ￥59 ",
          oldprice: "",
          hotflag: false,
          to: ""
        },
        {
          img: require("../assets/image/life/life18.png"),
          name: "魅族路由器 极速版",
          hotword: "",
          description: "天生不凡 快狠稳",
          nowprice: " ￥199 ",
          oldprice: "",
          hotflag: false,
          to: ""
        }
      ],
      recommentlist: [
        {
          img:
            "//openfile.meizu.com/group1/M00/07/C4/Cgbj0F6zwMuANEeWAAw6yQFAJXM097.png@240x240.jpg",
          name: "魅族 17",
          price: "3699",
          to: "/meizu17"
        },
        {
          img:
            "//openfile.meizu.com/group1/M00/07/C5/Cgbj0F6zwUqAdPsoAAtCAjTT7ek670.png@240x240.jpg",
          name: "魅族 17 Pro",
          price: "4299",
          to: "/meizu17pro"
        },
        {
          img:
            "//openfile.meizu.com/group1/M00/07/7A/Cgbj0V2upxqANyVFAAjApUYA58w668.png@240x240.jpg",
          name: "魅族 16T",
          price: "1999",
          to: "/meizu16t"
        },
        {
          img:
            "//openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9Jq6AEzhMAApuih_4TPw329.png@240x240.jpg",
          name: "魅族 POP2 真无线蓝牙耳机",
          price: "399",
          to: ""
        },
        {
          img:
            "//openfile.meizu.com/group1/M00/07/95/Cgbj0V37HNOAIdPFAAcMN3qrsLw357.png@240x240.jpg",
          name: "魅族中国红 Type-C 金属编织线",
          price: "39",
          to: ""
        },
        {
          img:
            "//openfile.meizu.com/group1/M00/06/CC/Cgbj0VvJjKeATLxsAAF7_uDseks390.png@240x240.jpg",
          name: "魅族移动电源3",
          price: "79",
          to: ""
        },
        {
          img:
            "//openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png@240x240.jpg",
          name: "魅族 EP3C 耳机",
          price: "129",
          to: ""
        },
        {
          img:
            "//openfile.meizu.com/group1/M00/07/2F/Cgbj0Vy_C3GAN_TKAAExaPfTwFc180.png@240x240.jpg",
          name: "魅族 HIFI 解码耳放",
          price: "169",
          to: ""
        }
      ],
      // 语言更替
      languagelist: [
        {
          img:
            "https://fms.res.meizu.com/dms/2017/12/18/1c31db15-ab85-4932-8e6c-edfd6039bc60.png",
          name: "简体中文"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2017/12/18/85fba643-95ca-4db1-991c-43e66f108afb.png",
          name: "繁体中文"
        },
        {
          img:
            "https://www3.res.meizu.com/static/cn/icon-en/f9C63F21yJxwMNvsqRSTpnWlkiahgBue.png",
          name: "English"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2017/12/18/e743e97c-71af-4853-a91d-bd81c2d3a31c.png",
          name: "Русский"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2017/12/20/062710b5-2f96-4402-ad27-822af5b4f993.png",
          name: "Türkiye"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2017/12/18/1c31db15-ab85-4932-8e6c-edfd6039bc60.png",
          name: "简体中文"
        }
      ]
    };
  },
  mounted() {
    new Swiper(".fittingSwiper", {
      slidesPerView: 2,
      spaceBetween: 10,
      freeMode: true
    });
  },
  components: {
    publicnav
  }
};
</script>

<style lang="scss" scoped>
// 智能手机样式
.life {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #f4f4f4;
  overflow: hidden;
  // margin-top: 10px;
  .life-title {
    height: 90px;
    line-height: 90px;
    text-align: center;
    & > h3 {
      height: 100%;
      display: block;
      position: relative;
      font-size: 18px;
      color: #333;
      span {
        position: absolute;
        left: 50%;
        margin-left: -10px;
        bottom: 20px;
        display: block;
        width: 20px;
        height: 3px;
        background-color: #008cff;
      }
    }
  }
  .life-banner {
    height: 160px;
    & > img {
      height: 160px;
    }
  }
  .life-goodslist {
    margin-top: 10px;
    & > ul {
      li {
        height: 282.5px;
        width: 49%;
        margin-left: 2%;
        float: left;
        background-color: #fff;
        text-align: center;
        margin-top: 2%;
        &:nth-child(2n + 1) {
          margin-left: 0;
        }
        .goodslist-img {
          text-align: center;
          margin-top: 25px;
          img {
            display: inline-block;
            width: 84%;
            height: 84%;
          }
        }
        .goodslist-name {
          text-align: center;
          p {
            width: 94%;
            display: inline-block;
            font-size: 15px;
            color: #333;
            font-weight: 700;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
        .goodslist-title {
          text-align: center;
          margin-top: 10px;
          p {
            display: inline-block;
            width: 94%;
            height: 20px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            color: #c00;
            border: 1px solid #c00;
            padding-left: 40px;
            line-height: 20px;
            box-sizing: border-box;
            position: relative;
            span {
              position: absolute;
              left: 0;
              top: 0;
              height: 22px;
              background-color: #c00;
              color: white;
              padding: 0 5px;
              line-height: 19px;
            }
            &.normal {
              display: inline-block;
              width: 94%;
              height: 20px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              color: #999;
              padding-left: 0;
              border: 0;
              font-size: 12px;
              padding: 0 8px;
            }
          }
        }
        .goodslist-price {
          height: 21px;
          font-size: 14px;
          color: #c00;
          margin-top: 10px;
          s {
            color: #999;
            font-size: 10px;
            margin-left: 3px;
          }
        }
      }
    }
  }
}

.banner {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  margin-top: 10px;
  height: 160px;
  & > img {
    height: 160px;
  }
}
.recommend {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  .title {
    width: 100%;
    height: 72px;
    color: #333;
    line-height: 72px;
    font-weight: 500;
    text-align: center;
    font-size: 18px;
  }
}
.recomment-item {
  width: 176px;
  height: 190px;
  background-color: #fff;
  text-align: center;
  img {
    display: inline-block;
    width: 100px;
    height: 100px;
    margin-top: 8px;
    margin-top: 10px;
  }
  .name {
    width: 100%;
    color: #333;
    font-size: 14.5px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-top: 10px;
  }
  .price {
    font-size: 14.5px;
    color: #cc0000;
    margin-top: 10px;
    span {
      font-size: 10px;
    }
  }
}
// 底部详情
.footerClass {
  width: 100%;
  height: 116px;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 20px;
  .footer-top {
    width: 100%;
    height: 60px;
    // background-color: #f0f0f0;
    .tel {
      width: 42%;
      height: 36px;
      float: left;
      margin-left: 5.3%;
      background-color: #008cff;
      margin-top: 24px;
      border-radius: 36px;
      font-size: 16px;
      p {
        display: inline-block;
        width: 70%;
        height: 36px;
        color: #fff;
        text-align: center;
        line-height: 36px;
      }
      span {
        display: inline-block;
        color: #fff;
        width: 20px;
        height: 36px;
        text-align: center;
        line-height: 36px;
        margin-left: 10px;
        font-size: 18px;
      }
    }
    .customer {
      width: 42%;
      height: 36px;
      background-color: #008cff;
      float: right;
      margin-right: 5.3%;
      margin-top: 24px;
      border-radius: 36px;
      font-size: 16px;
      & > p {
        display: inline-block;
        width: 50%;
        height: 36px;
        color: #fff;
        text-align: center;
        line-height: 36px;
      }
      & > span {
        display: inline-block;
        color: #fff;
        width: 20px;
        height: 36px;
        text-align: center;
        line-height: 36px;
        margin-left: 30px;
        font-size: 18px;
      }
    }
  }
  .footer-bottom {
    width: 100%;
    height: 56px;
    & > ul {
      height: 28px;
      width: 51%;
      margin-top: 14px;
      margin-left: 14px;
      float: left;
      li {
        height: 14px;
        font-size: 10px;
        color: #999;
        line-height: 14px;
      }
    }
    .changeLuan {
      float: right;
      width: 90px;
      height: 30px;
      margin-top: 12px;
      margin-right: 20px;
      // background-color: pink;
      position: relative;
      overflow: hidden;
      & > ul {
        width: 100%;
        height: 180px;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 10;
        // border: 1px solid #f0f0f0;
        // box-sizing: border-box;
        &.active {
          overflow: hidden;
        }
        li {
          width: 100%;
          height: 30px;
          // border-bottom: 1px solid #f0f0f0;
          box-sizing: border-box;
          &:last-child {
            border-bottom: 0;
          }
          &.active {
            background-color: #fff;
            border: none;
          }
          img {
            float: left;
            width: 18px;
            margin-left: 6px;
            margin-top: 6px;
          }
          p {
            float: left;
            font-size: 14px;
            margin-left: 3px;
            margin-top: 5px;
          }
        }
      }
    }
  }
}
// swiper插件样式
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
