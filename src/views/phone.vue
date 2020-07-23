<template>
  <div>
    <publicnav></publicnav>
    <div class="phone">
      <!-- <div class="phone-title">
        <h3>智能手机<span></span></h3>
      </div> -->
      <div class="phone-banner">
        <img
          src="https://fms.res.meizu.com/dms/2020/05/11/431ab565-25e4-4f04-9c03-62929ed00c00.jpg"
          alt=""
        />
      </div>
      <div class="phone-goodslist">
        <ul>
          <router-link
            tag="li"
            v-for="(item, index) in phonelist"
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
    <div class="banner">
      <img
        src="https://openfile.meizu.com/group1/M00/07/00/Cgbj0Vw-0c2AeM5PAAMKUIJwe2k826.jpg"
        alt=""
      />
    </div>
    <div class="recommend">
      <div class="title">
        为您推荐
      </div>
      <div class="item">
        <div class="swiper-container phoneSwiper">
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
      // 手机数据
      phonelist: [
        {
          img: require("../assets/image/phone/phone01.png"),
          name: "魅族 17 Pro",
          hotword: "",
          description:
            "【MY+ 10周年 限时赠HIFI+立省100】【老用户专享18个月超长保修】【学生专享12期免息+学生礼包】5G旗舰 | 高通骁龙 865 + UFS 3.1 + LPDDR5 | 6400W 全场景 AR 专业影像系统 ",
          nowprice: " ￥4299 ",
          oldprice: "",
          hotflag: false,
          to: "/meizu17pro"
        },
        {
          img: require("../assets/image/phone/phone02.png"),
          name: "魅族 17",
          hotword: "",
          description:
            "【MY+ 10周年 限时1赠HIFI+立省100】【老用户专享18个月超长保修】【学生专享12期免息+学生礼包】5G旗舰  |  高通骁龙 865 + UFS 3.1 高速闪存  |  6400W 全场景影像系统",
          nowprice: " ￥3699 ",
          oldprice: "",
          hotflag: false,
          to: "meizu17"
        },
        {
          img: require("../assets/image/phone/phone03.png"),
          name: "魅族 17 Pro 晓芳窑艺术典藏版",
          hotword: "",
          description: "这艺术 科技极了",
          nowprice: " ￥9999 ",
          oldprice: "",
          hotflag: false,
          to: "/meizu17proxfy"
        },
        {
          img: require("../assets/image/phone/phone04.png"),
          name: "魅族 16T",
          hotword: "",
          description:
            "【限时领券立省50元】6.5英寸极边全面屏 | 骁龙855旗舰处理器 | 4500mAh续航怪兽 | UFS 3.0 高速闪存 | 「双」·立体声扬声器 | 超广角 AI 三摄 | 线性振动马达 | 全球频段",
          nowprice: " ￥1999 ",
          oldprice: "",
          hotflag: false,
          to: "/meizu16t"
        },
        {
          img: require("../assets/image/phone/phone05.png"),
          name: "魅族 16s Pro",
          hotword: "",
          description:
            "高通骁龙 855 Plus  | 索尼 4800W 像素超广角 AI 三摄 | 极边全面屏 | Flyme8 尝鲜体验 | 极速屏下指纹 | 全功能NFC",
          nowprice: " ￥2699 ",
          oldprice: "",
          hotflag: false,
          to: "/meizu16spro"
        },
        {
          img: require("../assets/image/phone/phone06.png"),
          name: "魅族 16Xs",
          hotword: "",
          description:
            "极边全面屏 | 4800W AI三摄 | 疾速屏下指纹 | 4000mAh大电池 | 高通骁龙675 | Onemind 3.0 | 绚丽多彩新色系",
          nowprice: " ￥1499 ",
          oldprice: "",
          hotflag: false,
          to: "/meizu16xs"
        },
        {
          img: require("../assets/image/phone/phone07.png"),
          name: "魅族 17 航母限定版",
          hotword: "",
          description:
            "高通骁龙 865 + UFS 3.1 高速闪存 | 6400W 全场景影像系统 | 定制三星 Super AMOLED 90 帧直屏 | 4500mAh 超大电池 + 30W 快充 | 智能全功能 NFC",
          nowprice: " ￥4299 ",
          oldprice: "",
          hotflag: false,
          to: "/meizu17hm"
        },
        {
          img: require("../assets/image/phone/phone08.png"),
          name: "魅族 16th",
          hotword: "",
          description:
            "骁龙845 | 屏幕下指纹 | 前后2000万像素摄像头 | 6.0英寸屏幕 | mEngine | 超线性双扬声器 |  铜管散热",
          nowprice: " ￥1898 ",
          oldprice: "",
          hotflag: false,
          to: "/meizu16"
        },
        {
          img: require("../assets/image/phone/phone09.png"),
          name: "魅族 16s 白夜童话限量礼盒",
          hotword: "",
          description: "以梦为马 乘风破浪",
          nowprice: " ￥3099 ",
          oldprice: "",
          hotflag: false,
          to: "/meizu16sgift"
        },
        {
          img: require("../assets/image/phone/phone10.png"),
          name: "魅族 16s",
          hotword: "",
          description:
            "高通骁龙855 | 4800W光学防抖 | 对称式AMOLED全面屏 | 极速屏下指纹 | 全功能NFC ",
          nowprice: " ￥2399 ",
          oldprice: "",
          hotflag: false,
          to: "/meizu16s"
        },
        {
          img: require("../assets/image/phone/phone11.png"),
          name: "魅族 X8",
          hotword: "",
          description:
            "骁龙710 | 6.2寸定制浅刘海屏 | 89.6%屏占比 | 旗舰双摄 | 人脸+指纹双解锁",
          nowprice: " ￥1098 ",
          oldprice: "",
          hotflag: false,
          to: "/meizux8"
        },
        {
          img: require("../assets/image/phone/phone12.png"),
          name: "魅族 V8 标配版",
          hotword: "",
          description: "5.7英寸HD+全面屏 智能美颜",
          nowprice: " ￥799 ",
          oldprice: "",
          hotflag: false,
          to: "/meizuv8low"
        },
        {
          img: require("../assets/image/phone/phone13.png"),
          name: "魅族 V8 高配版",
          hotword: "",
          description:
            "Helio P22 处理器 | 5.7 英寸全面屏 | 后置双摄组合 | 双色温双闪光灯 | 人脸+指纹双解锁",
          nowprice: " ￥798 ",
          oldprice: "",
          hotflag: false,
          to: "/meizuv8hight"
        },
        {
          img: require("../assets/image/phone/phone14.png"),
          name: "魅族 16 X",
          hotword: "",
          description:
            "骁龙710 | 屏幕下指纹 | 对称式全面屏 | 前置2000万像素 + AI人脸识别 | 后置索尼2000万像素双摄 + 光学防抖",
          nowprice: " ￥1198 ",
          oldprice: "",
          hotflag: false,
          to: "/meizu16x"
        },
        {
          img: require("../assets/image/phone/phone15.png"),
          name: "魅族 16th Plus",
          hotword: "",
          description:
            "骁龙845 | 屏幕下指纹 | 前后2000万像素摄像头 | 6.5英寸屏幕 | 4×4 MIMO 天线 | mEngine | 超线性双扬声器",
          nowprice: " ￥2098 ",
          oldprice: "",
          hotflag: false,
          to: "/meizu16thplus"
        },
        {
          img: require("../assets/image/phone/phone16.png"),
          name: "魅蓝 6T",
          hotword: "",
          description: "双摄全面屏，游戏长续航",
          nowprice: " ￥799 ",
          oldprice: "",
          hotflag: false,
          to: "/meizu6t"
        },
        {
          img: require("../assets/image/phone/phone17.png"),
          name: "魅族 15 Plus",
          hotword: "",
          description: "三星8895处理器 2000万暗光双摄",
          nowprice: " ￥1798 ",
          oldprice: "",
          hotflag: false,
          to: "/meizu15plus"
        },
        {
          img: require("../assets/image/phone/phone18.png"),
          name: "魅族 M15",
          hotword: "",
          description: "骁龙626 前置2000万AI智能美颜",
          nowprice: " ￥1398 ",
          oldprice: "",
          hotflag: false,
          to: "/meizum15"
        },
        {
          img: require("../assets/image/phone/phone19.png"),
          name: "魅族 15",
          hotword: "",
          description:
            "骁龙660 | 2000万暗光双摄 | 3倍无损变焦 | mEngine触感引擎 | 立体声扬声器",
          nowprice: " ￥1498 ",
          oldprice: "",
          hotflag: false,
          to: "/meizu15"
        },
        {
          img: require("../assets/image/phone/phone20.png"),
          name: "魅蓝 E3",
          hotword: "",
          description: "骁龙636处理器 全系6G大运存",
          nowprice: " ￥1799 ",
          oldprice: "",
          hotflag: false,
          to: "/meizue3"
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
    new Swiper(".phoneSwiper", {
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
.phone {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #f4f4f4;
  overflow: hidden;
  // margin-top: 10px;
  .phone-title {
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
  .phone-banner {
    height: 160px;
    & > img {
      height: 160px;
    }
  }
  .phone-goodslist {
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
