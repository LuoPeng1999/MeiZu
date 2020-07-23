<template>
  <div>
    <!-- 产品头部 -->
    <div class="products-header">
      <div class="left" @click="$router.go(-1)">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span>产品</span>
      </div>
      <div class="right"></div>
    </div>
    <!-- 产品广告 -->
    <div class="products-banner">
      <img
        src="https://fms.res.meizu.com/dms/2020/05/11/5c7e3986-fd6c-4ef6-8af5-d00757f299f7.jpg"
        alt
      />
    </div>
    <!-- 产品内容 -->
    <div class="products-content">
      <ul>
        <li v-for="(item, index) in productslist" :key="index">
          <img :src="item.name" alt class="name" />
          <p class="title">{{ item.title }}</p>
          <p class="price">{{ item.price }}</p>
          <img :src="item.img" alt class="productImg" />
        </li>
      </ul>
    </div>
    <div class="products-fitting">
      <ul>
        <li v-for="(item, index) in fittinglist" :key="index">
          <img :src="item.img" alt />
          <p>{{ item.name }}</p>
        </li>
      </ul>
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
              <img :src="item.img" alt />
              <p>{{ item.name }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productslist: [
        {
          name:
            "https://fms.res.meizu.com/dms/2020/05/11/3ba34186-2f11-4458-8045-5d0418acd4af.png",
          title: "如你，才华横溢",
          price: "￥4299",
          img:
            "https://fms.res.meizu.com/dms/2020/05/11/80c725ee-363e-4805-a8de-50d981f98981.png"
        },
        {
          name:
            "https://fms.res.meizu.com/dms/2020/05/11/5e9d0e73-5e00-42ba-9a1b-1a0fb5b16e80.png",
          title: "如你，才华横溢",
          price: "￥3699",
          img:
            "https://fms.res.meizu.com/dms/2020/05/11/6040ee57-3090-4f5c-a43e-1c207e48f606.png"
        },
        {
          name:
            "https://fms.res.meizu.com/dms/2020/05/11/100ef8e2-fae8-4bb7-ab16-2ab3b1305a7d.png",
          title: "玩出我的热爱",
          price: "￥1999",
          img:
            "https://fms.res.meizu.com/dms/2020/05/11/78119b25-ba10-48a1-a9e7-0cd7b2616c43.png"
        },
        {
          name:
            "https://fms.res.meizu.com/dms/2020/05/11/a74cc701-87cb-43fa-bc26-cd4fa628048a.png",
          title: "让热爱，更澎湃",
          price: "￥2699",
          img:
            "https://fms.res.meizu.com/dms/2020/05/11/88ba25c7-6797-42af-b91c-c296b6def10c.png"
        },
        {
          name:
            "https://fms.res.meizu.com/dms/2019/08/28/ee560813-235a-47ec-a1fe-69c935c8386c.png",
          title: "让热爱，更澎湃",
          price: "￥1499",
          img:
            "https://fms.res.meizu.com/dms/2019/06/04/35bf7886-ec6d-4de4-890a-1e1dcb8f705f.png"
        },
        {
          name:
            "https://fms.res.meizu.com/dms/2019/05/30/2eadab38-00a6-4d78-b919-e054231ba863.png",
          title: "追求不止 只因热爱",
          price: "￥2699",
          img:
            "https://fms.res.meizu.com/dms/2019/05/30/d69551f8-02c2-44c3-9b83-1e52cb2389bd.png"
        },
        {
          name:
            "https://fms.res.meizu.com/dms/2019/04/23/4aadd031-ea44-4e39-b0e0-ad4b79e6ff10.png",
          title: "吃鸡不卡 拍她更美",
          price: "￥1199",
          img:
            "https://fms.res.meizu.com/dms/2019/04/23/1b7be8b5-95b8-432c-8634-ae3672797229.png"
        },
        {
          name:
            "https://fms.res.meizu.com/dms/2019/03/06/0a029223-0667-4071-a34e-42dfe7ca27c7.png",
          title: "国民拍照手机",
          price: "￥999",
          img:
            "https://fms.res.meizu.com/dms/2019/03/06/3b3780da-8804-4003-95c6-42d1b8ec8ff7.png"
        },
        {
          name:
            "https://fms.res.meizu.com/dms/2018/10/11/9a408962-0561-4e3a-880a-43265a3baa0e.png",
          title: "追求源于热爱",
          price: "￥1598",
          img:
            "https://fms.res.meizu.com/dms/2018/10/11/2eec897b-f923-43b3-af04-f3f56c200ab3.png"
        },
        {
          name:
            "https://fms.res.meizu.com/dms/2018/10/11/c1451a62-7369-4e56-a921-1b2f08819aba.png",
          title: "轻奢拍照手机",
          price: "￥1298",
          img:
            "https://fms.res.meizu.com/dms/2018/10/11/bcf3e261-c1aa-4070-8544-ccbb516f9ed4.png"
        },
        {
          name:
            "https://fms.res.meizu.com/dms/2018/10/11/a1eb6058-f624-4e16-8786-509908f13ed0.png",
          title: "国际爆款",
          price: "￥898",
          img:
            "https://fms.res.meizu.com/dms/2018/10/11/9158fa07-f7b2-46b8-af66-e966bfbfe550.png"
        },
        {
          name:
            "https://fms.res.meizu.com/dms/2018/10/11/56dc25ea-5af1-4b5b-9691-3c27688e0194.png",
          title: "追求源于热爱",
          price: "￥2298",
          img:
            "https://fms.res.meizu.com/dms/2018/08/08/e817b6e1-1aa2-4e16-9eb4-fab6e529ffd9.png"
        },
        {
          name:
            "https://fms.res.meizu.com/dms/2018/10/11/9b539c07-1ae3-4c2b-9a7b-51d84f77206d.png",
          title: "双摄全面屏，游戏长续航",
          price: "￥799",
          img:
            "https://fms.res.meizu.com/dms/2018/10/11/b0714533-9b4a-4d3f-957f-103bfb46a489.jpg"
        },
        {
          name:
            "https://fms.res.meizu.com/dms/2018/04/22/176d8352-e71b-447e-a35f-a69eccfeab46.png",
          title: "雕刻时光 重塑经典",
          price: "￥1398",
          img:
            "https://fms.res.meizu.com/dms/2018/04/22/51469ac3-2703-42af-990e-7f5bc29f931a.jpg"
        },
        {
          name:
            "https://fms.res.meizu.com/dms/2018/05/28/61345fd6-d821-43b7-a1da-495bdef349d0.png",
          title: "玩的畅快",
          price: "￥1799",
          img:
            "https://fms.res.meizu.com/dms/2018/05/28/e06e5e17-0613-4bd6-a247-bf2352f05d04.jpg"
        }
      ],
      fittinglist: [
        {
          img:
            "https://fms.res.meizu.com/dms/2020/05/11/080436f8-de2a-4c60-a0be-e804e731b82b.jpg",
          name: "魅族 HD60 降噪耳机"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2020/05/11/8dba454c-853e-42ee-952c-73af6b568682.jpg",
          name: "魅族无线超充板"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2020/05/11/62508f93-a074-411e-9741-dd0658f50063.jpg",
          name: "Lifeme 双肩包"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2020/05/11/9ebd9c47-de20-4159-95aa-7a9d0e6e0d75.jpg",
          name: "Lifeme 相机包"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2020/05/11/42cbe8fb-41e3-4190-9665-e021626c7630.jpg",
          name: "Pandaer 「17」系列 手机壳"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2020/05/11/8c3b89c3-5e32-4aad-be17-4f4fa62c1ad6.jpg",
          name: "  收藏 魅族 17 系列 液态硅胶壳"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2020/05/11/931055b5-33f0-4e27-b3c3-8948709e0dc0.jpg",
          name: "Pandaer 「17」系列 T恤"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2020/05/11/a16036a2-d475-4eac-8eba-e0d0c5ca7afc.jpg",
          name: "Pandaer 「17」系列 果冻包"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2019/04/23/10cb6c05-6ecd-4c8c-bdc2-dfc98ce89d12.jpg",
          name: "魅族 POP2 真无线蓝牙耳机"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2019/04/23/d439f2b9-f97a-40c0-aa75-6d676b09fa22.jpg",
          name: "魅族 EP63NC 无线降噪耳机"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2018/04/22/fc7823e2-1f25-4da3-9923-eb7c079d4c66.jpg",
          name: "魅族 HALO 激光蓝牙耳机 "
        },
        {
          img:
            "https://m2.res.meizu.com/static/cn/index/images/live_4c233d7.jpg",
          name: "魅族LIVE 四单元动铁耳机"
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
  }
};
</script>

<style lang="scss" scoped>
// 产品头部样式
.products-header {
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
// 产品广告样式
.products-banner {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  img {
    width: 100%;
    height: 323px;
  }
}
// 产品内容样式
.products-content {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  ul {
    width: 100%;
    margin-top: 20px;
    li {
      height: 377px;
      margin-top: 10px;
      overflow: hidden;
      text-align: center;
      background-color: #fff;
      .name {
        display: inline-block;
        width: 82.5px;
        height: 27.5px;
        margin-top: 50px;
      }
      .title {
        font-size: 14px;
        color: #999;
        margin-top: 5px;
      }
      .price {
        font-size: 14px;
        color: #666;
        margin-top: 10px;
      }
      .productImg {
        display: inline-block;
        width: 157.5px;
        height: 186px;
        margin-top: 10px;
      }
      &:first-child .name {
        height: 22px;
      }
      &:nth-child(2) .name {
        width: 37.5px;
        height: 30px;
      }
      &:nth-child(3) .name {
        width: 60px;
        height: 30px;
      }
      &:nth-child(4) .name {
        width: 86px;
      }
      &:nth-child(9) .name {
        width: 49px;
        height: 28px;
      }
      &:nth-child(10) .name {
        width: 37.5px;
        height: 23px;
      }
      &:nth-child(11) .name {
        width: 37.5px;
        height: 23px;
      }
      &:nth-child(12) .name {
        width: 120px;
        height: 23.5px;
      }
      &:nth-child(13) .name {
        height: 23px;
      }
      &:nth-child(14) .name {
        width: 52.5px;
        height: 19.5px;
      }
      &:nth-child(15) .name {
        height: 22.6px;
      }
    }
  }
}
// 产品配件样式
.products-fitting {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  margin-bottom: 20px;
  ul {
    width: 100%;
    margin-top: 20px;
    li {
      width: 49.5%;
      height: 172px;
      float: left;
      margin-left: 1%;
      margin-top: 1%;
      position: relative;
      &:nth-child(odd) {
        margin-left: 0;
      }
      img {
        width: 100%;
        height: 100%;
      }
      p {
        width: 100%;
        font-size: 12px;
        color: #333;
        text-align: center;
        position: absolute;
        bottom: 10px;
      }
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
</style>
