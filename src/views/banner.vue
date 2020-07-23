<template>
  <div>
    <div class="banner-header">
      <div class="left" @click="$router.go(-1)">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span
          class="iconfont iconmeizu"
          @click="$router.push('/recommend')"
        ></span>
      </div>
      <div class="right">
        <span
          class="iconfont iconsearch"
          @click="$router.push('search')"
        ></span>
      </div>
    </div>
    <div class="ad base">
      <img
        src="https://openfile.meizu.com/group1/M00/07/F9/Cgbj0F7nUfyAFV_zAAZIyw39fTc360.jpg"
        alt=""
      />
    </div>
    <div class="countdown base">
      <img
        src="https://openfile.meizu.com/group1/M00/08/10/Cgbj0V7opgSAIZWxAABgZb4OmEI436.png"
        alt=""
      />
    </div>
    <div class="banner base">
      <div class="swiper-container bannerswiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              src="https://openfile.meizu.com/group1/M00/08/10/Cgbj0V7omq6AJM7IAALIGHYi2n0986.png"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://openfile.meizu.com/group1/M00/07/FA/Cgbj0F7omq6APrt8AAJrshi4VUA983.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="ticket base">
      <img
        src="https://openfile.meizu.com/group1/M00/07/F8/Cgbj0F7m4lKAcNyKAAGWYuhvtlc685.png"
        alt=""
      />
    </div>
    <div class="discount base">
      <img
        src="https://openfile.meizu.com/group1/M00/07/F9/Cgbj0F7nZ1uASsqpAAUCGDMr9bo794.png"
        alt=""
      />
    </div>
    <div class="new-phone base">
      <img
        src="https://openfile.meizu.com/group1/M00/07/F6/Cgbj0V7PWsyAZM2mAAAiyjTM9vE567.png"
        alt=""
      />
    </div>
    <div class="new-video">
      <video src="https://cimg2.res.meizu.com/17(1).mp4" ref="video"></video>
      <span class="iconfont iconbofang" @click="play" v-if="videoflag"></span>
    </div>
    <div class="product01 base">
      <img
        src="https://openfile.meizu.com/group1/M00/07/F9/Cgbj0F7oa2SAN3KhAAewLZsefJY727.png"
        alt=""
      />
    </div>
    <div class="product02 base">
      <img
        src="https://openfile.meizu.com/group1/M00/07/F9/Cgbj0F7oa2OADytMAAhjt5vIOjw386.png"
        alt=""
      />
    </div>
    <div class="fitting-title base">
      <img
        src="https://openfile.meizu.com/group1/M00/07/E0/Cgbj0F7PWWCAPA-bAAAbkOI-jsU116.png"
        alt=""
      />
    </div>
    <div class="fitting-ticket base">
      <img
        src="https://openfile.meizu.com/group1/M00/07/EF/Cgbj0F7ZttiAWDyzAAGC_gcXnoA544.png"
        alt=""
      />
    </div>
    <div class="fitting-banner01 base">
      <img
        src="https://openfile.meizu.com/group1/M00/07/FA/Cgbj0F7opeKAO9ngAAHOUBpDDD0376.png"
        alt=""
      />
    </div>
    <div class="fitting-banner02 base">
      <img
        src="https://openfile.meizu.com/group1/M00/07/FA/Cgbj0F7obcqAPe4nAAmxSEEonGE234.png"
        alt=""
      />
    </div>
    <div class="fitting-product01 base">
      <img
        src="https://openfile.meizu.com/group1/M00/07/FA/Cgbj0F7obcmAGZm3AAed3LbV7RU022.png"
        alt=""
      />
    </div>
    <div class="fitting-product02 base">
      <img
        src="https://openfile.meizu.com/group1/M00/08/0F/Cgbj0V7obcmAbVQkAArMFckd8AQ521.png"
        alt=""
      />
    </div>
    <div class="fitting-product03 base">
      <img
        src="https://openfile.meizu.com/group1/M00/07/F1/Cgbj0F7co2-ALBSbAAhpeuiZ6_w357.png"
        alt=""
      />
    </div>
    <div class="banner base">
      <div class="swiper-container bannerswiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              src="https://openfile.meizu.com/group1/M00/08/0D/Cgbj0V7i9H6AdyKmAAKxSKJSJWo399.png"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://openfile.meizu.com/group1/M00/08/0F/Cgbj0V7nUz6AAYigAAEvm1Bl82Y506.png"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://openfile.meizu.com/group1/M00/07/F9/Cgbj0F7nOByAO9zlAAMBv6SJD6c370.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="headset-title base">
      <img
        src="https://openfile.meizu.com/group1/M00/07/F9/Cgbj0V7TKaCAbcDaAAAkQ0UH1hk567.png"
        alt=""
      />
    </div>
    <div class="headset-banner base">
      <img
        src="https://openfile.meizu.com/group1/M00/07/F6/Cgbj0V7PMCGAZSF_AAJhKHYNFiQ803.png"
        alt=""
      />
    </div>
    <div class="headset-product base">
      <ul>
        <li v-for="(item, index) in bannerHeadSetList" :key="index">
          <span class="hot" v-show="item.hotword != ''">{{
            item.hotword
          }}</span>
          <div class="product-img">
            <img :src="item.img" alt="" />
          </div>
          <div class="product-title">
            <p>{{ item.name }}</p>
          </div>
          <div class="product-detail">
            <p>{{ item.detail }}</p>
          </div>
          <div class="product-price">
            <p>
              <span>{{ item.nowPrice }}</span
              ><s>{{ item.oldPrice }}</s>
            </p>
          </div>
          <div class="product-btn">
            <a href="javascript:;">立即购买</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="gallery base">
      <img
        src="https://openfile.meizu.com/group1/M00/07/FB/Cgbj0F7p3ZOAN6fnAAAm4TvXQKE919.png"
        alt=""
      />
    </div>
    <div class="banner base">
      <div class="swiper-container bannerswiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img
              src="https://openfile.meizu.com/group1/M00/07/FB/Cgbj0F7p13GAKZ1kAAafjtZkd5U709.png"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://openfile.meizu.com/group1/M00/08/11/Cgbj0V7p13GATA0MAAQED6TaOgU427.png"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://openfile.meizu.com/group1/M00/07/FB/Cgbj0F7p13CAVaWYAALpgqqbfQs817.png"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://openfile.meizu.com/group1/M00/08/11/Cgbj0V7p12-AIrghAAVn_zacJRM237.png"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://openfile.meizu.com/group1/M00/08/11/Cgbj0V7p12-ARKTFAAXEz990a9I675.png"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://openfile.meizu.com/group1/M00/07/FB/Cgbj0F7p12-ARQbdAAQjyZMKL18121.png"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://openfile.meizu.com/group1/M00/07/FB/Cgbj0F7p122AQZ0_AAjCv0fv8SY256.png"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://openfile.meizu.com/group1/M00/07/FB/Cgbj0F7p126AaUwwAAPrEQjQFqI270.png"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://openfile.meizu.com/group1/M00/07/FB/Cgbj0F7p12uAdsOJAAX1wFVcQ58391.png"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://openfile.meizu.com/group1/M00/08/11/Cgbj0V7p13GATA0MAAQED6TaOgU427.png"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://openfile.meizu.com/group1/M00/07/FB/Cgbj0F7p12mAROarAAMvgMzTEgY556.png"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://openfile.meizu.com/group1/M00/08/11/Cgbj0V7p12mAcLjzAANeE7tG2Qc787.png"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://openfile.meizu.com/group1/M00/07/FB/Cgbj0F7p12iAFO_TAAS8J82Aezc265.png"
              alt=""
            />
          </div>
          <div class="swiper-slide">
            <img
              src="https://openfile.meizu.com/group1/M00/07/FB/Cgbj0F7p12uAfb_OAAbl5qWKRDE191.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="exchange base">
      <img
        src="https://openfile.meizu.com/group1/M00/08/0F/Cgbj0V7nOI-ARqAYAAQ9VlG5UJE996.png"
        alt=""
      />
    </div>
    <div class="lottery-title base">
      <img
        src="https://openfile.meizu.com/group1/M00/07/E0/Cgbj0F7PZlKAHuVzAAAyTqYb_Qs335.png"
        alt=""
      />
    </div>
    <div class="lottery-content">
      <lottery></lottery>
    </div>
    <div class="lottery-bottom" @click="$router.push('/rule')">
      <span>抽奖规则</span>
    </div>
    <div class="banner-bottom">
      <span>©2020 Meizu Telecom Equipment Co., Ltd.</span>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import lottery from "../components/public/lottery";
export default {
  data() {
    return {
      videoflag: true,
      bannerHeadSetList: [
        {
          hotword: "",
          img:
            "//openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2ieAYKJGAAHMHuLWRMo374.png@480x480.jpg",
          name: "魅族 EP3C 耳机",
          detail: "Hi-Res 认证高解析音质 | Type-C数字接口 | 高保真生物纤维振膜",
          nowPrice: "￥99",
          oldPrice: "￥129"
        },
        {
          hotword: "",
          img:
            "//openfile.meizu.com/group1/M00/06/A6/Cgbj0Vui_-SASKMsAAQO9wrBG1Q074.png@480x480.jpg",
          name: "魅族 EP52 Lite 蓝牙耳机",
          detail: "轻巧亲肤 | 生物纤维振膜 | 8小时续航 | IPX5级防水",
          nowPrice: "￥109",
          oldPrice: "￥129"
        },
        {
          hotword: "限时6期免息",
          img:
            "//openfile.meizu.com/group1/M00/07/86/Cgbj0V3UocyAR_tJAApbDmCAyEo620.png@480x480.jpg",
          name: "魅族 HD60 头戴式蓝牙耳机",
          detail: "40mm生物振膜  | Type-C充电 | 触控操作 | 蓝牙5.0 | 轻奢品质",
          nowPrice: "￥429",
          oldPrice: "￥499"
        },
        {
          hotword: "",
          img:
            "//openfile.meizu.com/group1/M00/02/EF/Cgbj0FpeqaKAYLSmAATXqR4BPH8829.png@480x480.jpg",
          name: "魅族 LIVE 四单元动铁耳机",
          detail: "Knowles四动铁 双通道导音系统 现场级音乐表现",
          nowPrice: "￥899",
          oldPrice: "￥1299"
        },
        {
          hotword: "",
          img:
            "//openfile.meizu.com/group1/M00/00/A2/Cix_s1gcTG6AbXZNAAEtC-x50Ns221.png@480x480.jpg",
          name: "魅族 EP2X 耳机",
          detail: "一体式线控 | 3.5mm接口 | 流线设计",
          nowPrice: "￥69",
          oldPrice: "￥129"
        },
        {
          hotword: "",
          img: "//storeimg.meizu.com/product/1449643421-24522.png@480x480.jpg",
          name: "魅族 EP21耳机",
          detail: "三键一体式线控 | 3.5mm接口 ",
          nowPrice: "￥39",
          oldPrice: "￥89"
        },
        {
          hotword: "",
          img:
            "//openfile.meizu.com/group1/M00/07/78/Cgbj0V2unKeALop5AAGkXjbP1nY517.png@480x480.jpg",
          name: "魅族防飞溅声波电动牙刷",
          detail:
            "智能压感防飞溅 | 超强震动清洁 | FDA 杜邦软毛 | 30天超长续航  | IPX7 级防水全身防霉防污垢 | 四种模式全面呵护 ",
          nowPrice: "￥249",
          oldPrice: "￥299"
        },
        {
          hotword: "",
          img:
            "//openfile.meizu.com/group1/M00/07/28/Cgbj0Vy9J36ARuB2AAVQph9X9vs749.png@480x480.jpg",
          name: "魅族极简都市双肩包",
          detail:
            "650D高耐磨牛津布 | 人体工学减负设计 | 大容量多功能收纳 | 生活防泼溅",
          nowPrice: "￥149",
          oldPrice: "￥179"
        },
        {
          hotword: "",
          img:
            "//openfile.meizu.com/group1/M00/07/66/Cgbj0V1mIcGAfsr1AAyHfC16kLQ799.png@480x480.jpg",
          name: "Pandaer readnap T恤",
          detail:
            "潮趣设计 | 100％精织纯棉 | 多重潮流工艺 | Mixcolor混色搭配 | 情侣装",
          nowPrice: "￥169",
          oldPrice: "￥199"
        },
        {
          hotword: "",
          img:
            "//openfile.meizu.com/group1/M00/07/63/Cgbj0V1l2T6AK4g2AAV30_p6ODA499.png@480x480.jpg",
          name: "Lifeme 梨木伞",
          detail:
            "高定时装压花伞布 | 隔绝99% UV | 进口环保拒水涂层 | 8骨静音防风伞架 | 千足纯银徽章 | 优质花梨木伞柄",
          nowPrice: "￥459",
          oldPrice: "￥499"
        },
        {
          hotword: "",
          img:
            "//openfile.meizu.com/group1/M00/07/C7/Cgbj0F6z7g-AF5S1AA8zScC2y3s686.png@480x480.jpg",
          name: "Pandaer 「17」系列 手机壳",
          detail:
            "魅族 17 / 魅族 17 Pro 适用 | Pandaer 家族 | 潮趣个性 | 官方适配",
          nowPrice: "￥49",
          oldPrice: ""
        },
        {
          hotword: "",
          img:
            "//openfile.meizu.com/group1/M00/07/C8/Cgbj0F6z7ouAdDUlAAgE_65zxx0628.png@480x480.jpg",
          name: "魅族 17 系列 液态硅胶壳",
          detail: "魅族 17 / 魅族 17 Pro 适用 | 官方适配 | 魅族手感 | 柔韧保护",
          nowPrice: "￥89",
          oldPrice: ""
        },
        {
          hotword: "新品数据线",
          img:
            "//openfile.meizu.com/group1/M00/07/F7/Cgbj0F7jIyOAaKEWAAdLI30DPuc780.png@480x480.jpg",
          name: "魅族双 USB-C 快充线",
          detail: "双 USB-C 接口 | 5A 大电流 | 耐磨编织材料 | E-Marker 芯片",
          nowPrice: "￥49",
          oldPrice: ""
        },
        {
          hotword: "",
          img:
            "//openfile.meizu.com/group1/M00/07/D5/Cgbj0V6o2n-ACbZsAAGnmeZVVRs678.png@480x480.jpg",
          name: "魅族 Type-C 数据线",
          detail: "5A 大电流 | Type-C 接口 | 更快更方便",
          nowPrice: "￥49",
          oldPrice: ""
        },
        {
          hotword: "",
          img: "//storeimg.meizu.com/product/1467170145-52479.png@480x480.jpg",
          name: "快充电源适配器（UP0830S）",
          detail: "快速充电 安全无忧",
          nowPrice: "￥69",
          oldPrice: "￥89"
        },
        {
          hotword: "",
          img:
            "//openfile.meizu.com/group1/M00/04/15/Cgbj0VrcXw2AL0tBAApTh_xwKKk709.png@480x480.jpg",
          name: "魅族无线充电器",
          detail: "10W快速充电 无线即放即充",
          nowPrice: "￥69",
          oldPrice: "￥99"
        },
        {
          hotword: "",
          img:
            "//openfile.meizu.com/group1/M00/07/6A/Cgbj0F2yXrSAaUXKAA7Db1JnKHs624.png@480x480.jpg",
          name: "Flyme 8 暗夜流光卫衣",
          detail:
            "Flyme原创 | 镭射材料 | 随光而动 | 暗夜微光 | 点亮梦想 |  情侣装",
          nowPrice: "￥169",
          oldPrice: "￥269"
        },
        {
          hotword: "",
          img:
            "//openfile.meizu.com/group1/M00/07/7C/Cgbj0V2vva6AOk-vAAuUyJ3QsAo839.png@480x480.jpg",
          name: "Pandaer 魔术师帽衫",
          detail:
            "Magic Pandaer前卫设计 | 100％精梳棉纱 | 潮流款式 挺括有型 | 亲肤内衬 柔顺舒适 | 情侣装",
          nowPrice: "￥249",
          oldPrice: "￥399"
        }
      ]
    };
  },
  mounted() {
    new Swiper(".bannerswiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  },
  methods: {
    play() {
      this.$refs.video.setAttribute("controls", "controls");
      this.$refs.video.play();
      this.videoflag = false;
    }
  },
  components: {
    lottery
  }
};
</script>

<style lang="scss" scoped>
.banner-header {
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
    color: #008cff;
    text-align: center;
  }
  .right {
    margin-right: 8px;
    text-align: center;
    span {
      margin-right: 10px;
      font-size: 20px;
    }
  }
}
.new-video {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0px auto;
  background-color: #c62a2d;
  height: 190px;
  position: relative;
  line-height: 190px;
  video {
    width: 90%;
    margin-left: 5%;
  }
  span {
    font-size: 70px;
    position: absolute;
    left: 150px;
    color: #fff;
  }
}
.headset-product {
  width: 100%;
  height: 2542px;
  max-width: 436px;
  min-width: 320px;
  margin: 0px auto;
  background-color: #c62a2d;
  & > ul {
    width: 90%;
    margin: 0 auto;
    li {
      width: 49%;
      height: 275px;
      margin-left: 2%;
      margin-top: 2%;
      background-color: #fff;
      float: left;
      position: relative;
      &:nth-child(odd) {
        margin-left: 0;
      }
      .hot {
        position: absolute;
        left: 10px;
        top: 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: #f6514c;
        color: #fff;
        font-size: 12px;
        text-align: center;
        line-height: 14px;
      }
      .product-img {
        width: 90%;
        margin: 0 auto;
        img {
          width: 100%;
        }
      }
      .product-title {
        width: 90%;
        margin: 0 auto;
        p {
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: center;
          overflow: hidden;
          font-size: 14px;
          color: #333;
        }
      }
      .product-detail {
        width: 96%;
        margin: 0 auto;
        p {
          width: 100%;
          white-space: nowrap;
          text-overflow: ellipsis;
          text-align: center;
          overflow: hidden;
          font-size: 12px;
          color: #333;
        }
      }
      .product-price {
        width: 90%;
        margin: 0 auto;
        margin-top: 10px;
        p {
          text-align: center;
          font-size: 10px;
          color: #f6514c;
          span {
            font-size: 18px;
          }
          s {
            color: #999;
            margin-left: 2px;
          }
        }
      }
      .product-btn {
        width: 90%;
        margin: 0 auto;
        text-align: center;
        margin-top: 5px;
        a {
          display: inline-block;
          width: 90px;
          height: 25px;
          background-color: #f6514c;
          color: #fff;
          font-size: 12px;
          line-height: 25px;
          border-radius: 3px;
        }
      }
    }
  }
}
.base {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0px auto;
  background-color: #c62a2d;
}
.lottery-content {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0px auto;
  background-color: #c62a2d;
  padding: 35px 0;
}
.lottery-bottom {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0px auto;
  background-color: #c62a2d;
  height: 30px;
  span {
    float: right;
    border-bottom: 1px solid #fff;
    color: white;
    padding-bottom: 3px;
    margin-top: 5px;
    margin-right: 10px;
  }
}
.banner-bottom {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0px auto;
  background-color: #c62a2d;
  height: 50px;
  line-height: 50px;
  color: white;
  border-top: 1px solid #e97171;
  text-align: center;
  font-size: 12px;
}
</style>
