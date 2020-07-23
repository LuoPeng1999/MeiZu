<template>
  <div>
    <!-- 专卖店头部 -->
    <div class="special-header">
      <div class="left" @click="$router.go(-1)">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span>专卖店</span>
      </div>
      <div class="right"></div>
    </div>
    <!-- 专卖店主图 -->
    <div class="special-img">
      <img
        src="//service.res.meizu.com/image/retail/index_banner_m.jpg?v=1.01"
        alt=""
      />
      <div class="special-address" @click="addressflag = true">
        <div class="cityName">{{ cityName }}</div>
        <p>切换地区<span class="iconfont iconright"></span></p>
      </div>
    </div>

    <!-- 专卖店信息 #008cff -->
    <div class="special-info">
      <van-tabs
        v-model="specialActive"
        color="#008cff"
        title-active-color="#008cff"
        title-inactive-color="#666"
      >
        <van-tab title="专卖店">
          <ul class="specialStore">
            <li v-for="(item, index) in storeList" :key="index">
              <p class="title">{{ item.name }}</p>
              <p class="address">{{ item.address }}</p>
              <p class="addRemark">{{ item.addRemark }}</p>
              <p class="tel">{{ item.tel }}</p>
            </li>
          </ul>
        </van-tab>
        <van-tab title="形象销售点">
          <div class="sales">
            <input
              type="text"
              class="searchSales"
              placeholder="试着搜 销售点~"
              @keyup.enter="submit"
              ref="input"
            />
            <ul>
              <li v-for="(item, index) in salesList" :key="index">
                <div class="name">{{ item.name }}</div>
                <div class="address">{{ item.address }}</div>
                <div class="tel">{{ item.tel }}</div>
              </li>
            </ul>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <!-- 加盟魅族 -->
    <div class="join-meizu">
      <p>加盟魅族, 梦想从此开始</p>
      <button>加盟认证店</button>
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

    <!-- 地址弹框 -->
    <van-popup
      v-model="addressflag"
      position="bottom"
      :style="{ height: '40%' }"
    >
      <van-area
        :title="title"
        :area-list="areaList"
        @confirm="changeAddress"
        @cancel="changeAddress"
        ref="address"
        columns-num="2"
        value="110100"
      />
    </van-popup>
  </div>
</template>

<script>
import areaList from "../../assets/js/erea";
export default {
  data() {
    return {
      cityName: "北京市",
      provinceName: "北京省",
      title: "",
      addressflag: false, // 控制地址弹窗
      areaList,
      cityCode: 110100, // 城市代码
      storeList: [], // 返回专卖店数据
      specialActive: 2,
      salesList: [],
      inputValue: "", // 记录输入框的值
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
  methods: {
    changeAddress(arr) {
      this.cityName = arr[1].name;
      this.provinceName = arr[0].name;
      this.addressflag = false;
      this.cityCode = arr[1].code;
      this.storeList = [];
      this.salesList = [];
      this.title = "当前城市:" + this.provinceName + " " + this.cityName;
      // console.log(arr);
      this.$axios
        .get("/api/retail/list", {
          params: {
            city_id: this.cityCode
          }
        })
        .then(res => {
          // console.log(res);
          // this.storeList = res.data.result;
          for (let key in res.data.result) {
            this.storeList.push(res.data.result[key]);
          }
          // console.log(this.storeList);
        });

      this.$axios
        .get("/api/retail/image-list", {
          params: {
            city_id: this.cityCode
          }
        })
        .then(res => {
          // console.log("sales", res);
          for (let key in res.data.result) {
            this.salesList.push(res.data.result[key]);
          }
          // console.log(this.salesList);
        });
    },
    submit() {
      this.inputValue = this.$refs.input.value;
      console.log(this.inputValue);
      this.$axios
        .get("/api/retail/image-list", {
          params: {
            city_id: this.cityCode
          }
        })
        .then(res => {
          for (let key in res.data.result) {
            this.salesList.push(res.data.result[key]);
          }
          let newArr = this.salesList.filter(item => {
            var num = item.name.indexOf(this.inputValue);
            if (num != -1) {
              return item;
            }
          });
          this.salesList = newArr;
        });
    }
  },
  created() {
    this.title = "当前城市:" + this.provinceName + " " + this.cityName;
    this.$axios
      .get("/api/retail/list", {
        params: {
          city_id: this.cityCode
        }
      })
      .then(res => {
        // console.log(res);
        // this.storeList = res.data.result;
        for (let key in res.data.result) {
          this.storeList.push(res.data.result[key]);
        }
        // console.log(this.storeList);
      });
    this.$axios
      .get("/api/retail/image-list", {
        params: {
          city_id: this.cityCode
        }
      })
      .then(res => {
        for (let key in res.data.result) {
          this.salesList.push(res.data.result[key]);
        }
        // console.log(this.salesList);
      });
  }
};
</script>

<style lang="scss" scoped>
// 专卖店头部样式
.special-header {
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
    font-size: 16px;
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
// 专卖店主图
.special-img {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  padding-top: 50px;
  background-color: #fff;
  .special-address {
    width: 100%;
    height: 50px;
    background-color: #f7f7f7;
    // background-color: pink;
    .cityName {
      float: left;
      height: 50px;
      line-height: 50px;
      font-size: 14px;
      margin-left: 20px;
      color: #333;
    }
    p {
      float: right;
      font-size: 14px;
      height: 50px;
      line-height: 50px;
      margin-right: 20px;
      color: #333;
    }
  }
}
// 专卖店信息
.special-info {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  padding-top: 30px;
  background-color: #fff;
  .specialStore {
    width: 80%;
    margin: 0 auto;
    padding-top: 30px;
    background-color: #fff;
    li {
      width: 100%;
      height: 150px;
      // background-color: pink;
      &:last-child {
        border-bottom: 1px solid #e4e4e4;
      }
      overflow: hidden;
      .title {
        height: 31px;
        line-height: 31px;
        color: #008cff;
        font-size: 16px;
        margin-top: 10px;
      }
      .address {
        padding: 10px 0;
        color: #333;
        font-size: 14px;
      }
      .addRemark {
        line-height: 20px;
        color: #333;
        font-size: 14px;
      }
      .tel {
        line-height: 20px;
        color: #333;
        font-size: 14px;
      }
    }
  }
  .sales {
    width: 80%;
    margin: 0 auto;
    background-color: #fff;
    padding-top: 10px;
    input {
      width: 100%;
      height: 52px;
      line-height: 52px;
      color: #999;
      font-size: 12px;
      border-top: 2px solid #e4e4e4;
      border-bottom: 2px solid #e4e4e4;
      box-sizing: border-box;
    }
    ul {
      width: 100%;
      background-color: #fff;
      padding-top: 20px;
      li {
        width: 100%;
        // height: 100px;
        overflow: hidden;
        &:last-child {
          border-bottom: 1px solid #e4e4e4;
        }
        .name {
          line-height: 26px;
          color: #333;
          font-size: 16px;
          margin-top: 10px;
        }
        .address {
          line-height: 24px;
          font-size: 14px;
          color: #21c4f3;
        }
        .tel {
          line-height: 24px;
          font-size: 14px;
          color: #21c4f3;
        }
      }
    }
  }
}
// 加盟魅族
.join-meizu {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fff;
  overflow: hidden;
  p {
    width: 70%;
    margin: 0 auto;
    margin-top: 25px;
    line-height: 20px;
    font-size: 16px;
    color: #333;
  }
  button {
    width: 80%;
    margin-left: 10%;
    margin-top: 25px;
    height: 36px;
    line-height: 36px;
    border: 1px solid #008cff;
    color: #008cff;
    font-size: 14px;
    text-align: center;
    background-color: #fff;
    border-radius: 20px;
  }
}
// 底部详情
.footerClass {
  width: 100%;
  height: 116px;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  padding-top: 30px;
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
