<template>
  <div>
    <!-- Flyme头部 -->
    <div class="flyme-header">
      <div class="left" @click="$router.go(-1)">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span>Flyme</span>
      </div>
      <div class="right"></div>
    </div>
    <!-- Flyme广告轮播 -->
    <div class="swiper-container flymeBannerSwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img
            src="https://image-res.mzres.com/image/flyme-icon/b2559dfd6b8f4aa4bcc97722b982536dz"
            alt=""
          />
        </div>
        <div class="swiper-slide">
          <img
            src="https://image-res.mzres.com/image/flyme-icon/b5396757cfe742f596a3b764d26eae5ez"
            alt=""
          />
        </div>
      </div>
      <!-- Add Pagination -->
      <div class="swiper-pagination swiper-pagination-white"></div>
    </div>
    <!-- Flyme内容图片 -->
    <div class="flyme-contentImg">
      <ul>
        <li v-for="(item, index) in flymeContentList" :key="index">
          <img :src="item.img" alt="" />
        </li>
      </ul>
    </div>
    <!-- Flyme列表菜单 -->
    <div class="flyme-list">
      <van-collapse v-model="activeName" accordion>
        <van-collapse-item
          v-for="(item, index) in flymeMenuList"
          :key="index"
          :title="item.title"
          :name="index"
        >
          <ul>
            <li v-for="(obj, key) in item.itemList" :key="key">
              {{ obj.title }}
            </li>
          </ul>
        </van-collapse-item>
      </van-collapse>
    </div>
    <!-- Flyme客服时间 -->
    <div class="flyme-footer">
      <div class="flyme-customer">
        <ul>
          <li>400-788-3333</li>
          <li>周一至周五 8:00-20:00</li>
          <li><a href="tel:400-788-3333">在线客服</a></li>
        </ul>
        <span>China (简体中文)</span>
      </div>
      <div class="flyme-other">
        <p>© {{ nowYear }} Meiwang Technology Co., Ltd. All rights reserved.</p>
        <p>
          备案号：粤ICP备16039921号 | 经营许可证编号：粤B2-20170003 | 营业执照 |
          粤公网安备 44049102496076号
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data() {
    return {
      flymeContentList: [
        {
          img:
            "https://image-res.mzres.com/image/flyme-icon/9fdaeb08edda4b77af3e04712ed2c791z",
          to: ""
        },
        {
          img:
            "https://image-res.mzres.com/image/flyme-icon/e189de477d784ddebca7a4fb7fb52fcez",
          to: ""
        },
        {
          img:
            "https://image-res.mzres.com/image/flyme-icon/4f252a3f604a483ba84f1d94b08b0800z",
          to: ""
        },
        {
          img:
            "https://image-res.mzres.com/image/flyme-icon/e38f5704d9574b8ca87949796d7d1be8z",
          to: ""
        },
        {
          img:
            "https://image-res.mzres.com/image/flyme-icon/a4da9991bb794354aef116a743a7701dz",
          to: ""
        }
      ],
      activeName: "1",
      flymeMenuList: [
        {
          title: "应用服务",
          itemList: [
            {
              title: "查找手机",
              to: ""
            },
            {
              title: "换机助手",
              to: ""
            },
            {
              title: "应用商店",
              to: ""
            },
            {
              title: "Root权限",
              to: ""
            }
          ]
        },
        {
          title: "新闻资讯",
          itemList: [
            {
              title: "往期动态",
              to: ""
            },
            {
              title: "官方视频",
              to: ""
            }
          ]
        },
        {
          title: "官方网站",
          itemList: [
            {
              title: "开放平台",
              to: ""
            },
            {
              title: "政企制定",
              to: ""
            },
            {
              title: "魅族互娱",
              to: ""
            },
            {
              title: "应用公示",
              to: ""
            }
          ]
        },
        {
          title: "关注我们",
          itemList: [
            {
              title: "新浪微博",
              to: ""
            },
            {
              title: "官方微信",
              to: ""
            }
          ]
        }
      ],
      nowYear: new Date().getFullYear()
    };
  },
  mounted() {
    new Swiper(".flymeBannerSwiper", {
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
  }
};
</script>

<style lang="scss" scoped>
// Flyme头部样式
.flyme-header {
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
    font-weight: bold;
    color: #008cff;
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
// Flyme广告轮播样式
.flymeBannerSwiper {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 500px;
  }
}
// Flyme内容图片样式
.flyme-contentImg {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  ul {
    li {
      height: 225px;
      margin-top: 20px;
      img {
        display: inline-block;
        height: 225px;
      }
    }
  }
}
// Flyme列表菜单样式
.flyme-list {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  padding-top: 50px;
  background-color: #fff;
  font-size: 14px;
  ul {
    li {
      width: 100%;
      height: 34px;
      font-size: 12.6px;
      color: rgba($color: #000000, $alpha: 0.7);
      text-indent: 16px;
      line-height: 34px;
    }
  }
}
// Flyme客服时间
.flyme-footer {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fff;
  height: 240px;
  .flyme-customer {
    width: 90%;
    height: 140px;
    border-bottom: 1px solid #f0f0f0;
    margin: 0 auto;
    // background-color: pink;
    ul {
      width: 50%;
      float: left;
      margin-top: 20px;
      li {
        width: 100%;
        height: 20px;
        line-height: 18px;
        color: rgba($color: #000000, $alpha: 0.35);
        &:first-child {
          height: 45.6px;
          line-height: 60px;
          font-size: 20px;
          color: #333;
        }
        &:last-child {
          width: 75px;
          height: 28.5px;
          a {
            display: inline-block;
            width: 100%;
            height: 100%;
            background-color: #0095ff;
            color: #fff;
            line-height: 28.5px;
            text-align: center;
            border: none;
            border-radius: 5px;
            margin-top: 2px;
          }
        }
      }
    }
    span {
      float: right;
      margin-top: 80px;
      font-size: 14px;
      padding-bottom: 2px;
      border-bottom: 2px solid #e0dddd;
      color: rgba($color: #000000, $alpha: 0.35);
    }
  }
  .flyme-other {
    width: 90%;
    height: 100px;
    margin: 0 auto;
    margin-top: 15px;
    p {
      width: 100%;
      line-height: 23.3px;
      text-align: center;
      color: rgba($color: #000000, $alpha: 0.35);
      font-size: 12px;
    }
  }
}
</style>
