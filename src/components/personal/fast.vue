<template>
  <div>
    <!-- 百城速达头部 -->
    <div class="fast-header">
      <div class="left" @click="$router.go(-1)">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span>百城速达</span>
      </div>
      <div class="right"></div>
    </div>

    <div class="page-one">
      <img
        src="//mall.res.meizu.com/20160323/img/mobile/arrive.png"
        alt=""
        v-class="'animated bounceInDown'"
      />
      <p v-class="'animated zoomInRight'" class="title">百城速达，真「快」递</p>
      <div v-class="'content  animated zoomInRight'" class="">
        我们与快递行业翘楚深入合作，升级服务，
        <br />
        带来全新的快递体验。
        <br />
        最晚次日即可送达，覆盖全国 107 个城市。
        <br />
        一键购买下单，即刻享受服务，美好的事物不用等待。
      </div>
    </div>
    <div class="page-two">
      <div v-class="'title animated slideInDown'">全程快速响应</div>
      <div v-class="'content animated slideInUp'">
        无论发货、运输还是派送，我们保证在每一个环节
        <br />
        都以最快速度进行。
        <br />
        全力以赴，只为满足更多期待。
      </div>
    </div>
    <div class="page-three">
      <div v-class="'title animated fadeInLeft'">一键式简单操作</div>
      <div v-class="'content animated fadeInRight'">
        只需按照正常流程挑选购买，无需任何多余的步骤。
        <br />
        当你的地址在「百城速达」的范围内时，系统会自动
        <br />

        安排快速派送。
      </div>
      <div class="nav">
        <ul>
          <li>
            <img
              src="https://mall.res.meizu.com/marrive/img/mobile/step-1.png"
              alt=""
              v-class="'animated bounce'"
            />
            <p>选择商品</p>
          </li>
          <li>
            <img
              src="https://mall.res.meizu.com/marrive/img/mobile/step-2.png"
              alt=""
              v-class="'animated bounce'"
            />
            <p>选择地址</p>
          </li>
          <li>
            <img
              src="https://mall.res.meizu.com/marrive/img/mobile/step-3.png"
              alt=""
              v-class="'animated bounce'"
            />
            <p>立即购买</p>
          </li>
          <li>
            <img
              src="https://mall.res.meizu.com/marrive/img/mobile/step-4.png"
              alt=""
              v-class="'animated bounce'"
            />
            <p>快速配送</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="page-four">
      <div v-class="'title animated flipInYDiy'">已支持全国 107 个城市</div>
      <div v-class="'content animated flipInYDiy'">
        北京、上海、广州、武汉和成都，全国五大仓储中心，辐射
        <br />
        周边12个城市，最快可当天送达， 107 个城市次日送达，
        <br />
        更多城市支持正在计划中。
      </div>
      <div class="city">
        <ul>
          <li>北京</li>
          <li>广东</li>
          <li>江西</li>
          <li>河北</li>
        </ul>
        <ul>
          <li>天津</li>
          <li>湖北</li>
          <li>四川</li>
        </ul>
        <ul>
          <li>浙江</li>
          <li>湖南</li>
          <li>重庆</li>
        </ul>
        <ul>
          <li>福建</li>
          <li>安徽</li>
          <li>广西</li>
        </ul>
        <ul>
          <li>上海</li>
          <li>江苏</li>
          <li>河南</li>
        </ul>
      </div>
    </div>
    <div class="page-five">
      <div v-class="'title animated fadeInUp'">时刻准备着</div>
      <div v-class="'content animated fadeInUp'">
        我们与快递行业佼佼者合作，全年 365 天，
        <br />

        不分节假日提供服务。
        <br />

        随时都处于待命状态，随时下单，随时发货。
      </div>
    </div>

    <div class="problem">
      <div class="title">Q&A 常见问题</div>
      <div class="content">
        <ul>
          <li>
            a. 12 个城市支持当日送达，107
            个城市支持次日送达，派送实现仅限市区，服务范围<a href="#">请点击</a>
          </li>
          <li>b. 百城速达服务具体以购买商品付款后提示信息为准。</li>
          <li>
            c.
            由于业务发展变化、行政区域更名等因素，百城速达配送区域可能会不时有扩大、变更或调整，具体区域请以网站中公布信息为准。
          </li>
          <li>d. 非魅族发货商品暂不支持百城速达服务。</li>
        </ul>
      </div>
      <div class="matter-list">
        *注意事项
        <br />
        如遇交通管制、大雨雪、洪涝、冰灾、地震、节假日、618、双十一活动、停电等因素，
        <br />
        不可预料延时派送除外，由于客户原因地址不详、电话不准确、申请退款等均不在百城速达服务范围内。
      </div>
    </div>
    <div class="footer">
      <p>©2018 Meizu Telecom Equipment Co., Ltd.</p>
      <p>All rights reserved.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
// 百城速达头部样式
.fast-header {
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
    color: #333;
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

.page-one {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  height: 519px;
  margin: 0 auto;
  border-top: 1px solid #f0f0f0;
  background: url(https://mall.res.meizu.com/marrive/img/mobile/bg-1.jpg)
    no-repeat;
  background-size: 100%;
  text-align: center;
  img {
    display: inline-block;
    width: 112.5px;
    height: 45px;
    margin-top: 80px;
  }
  .title {
    font: 300 24px/50px "Hiragino Sans GB", "Microsoft Yahei";
    margin-top: 20px;
  }
  .content {
    font-size: 12px;
    color: #515151;
  }
}
.page-two {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  height: 425px;
  margin: 0 auto;
  background: url(https://mall.res.meizu.com/marrive/img/mobile/bg-2.jpg)
    no-repeat;
  background-size: 100%;
  text-align: center;
  .title {
    font: 300 24px/50px "Hiragino Sans GB", "Microsoft Yahei";
    color: #fff;
    margin-top: 30px;
  }
  .content {
    color: #fff;
    font-size: 12px;
    margin-top: 20px;
  }
}
.page-three {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  height: 330px;
  margin: 0 auto;
  .title {
    font: 300 24px/50px "Hiragino Sans GB", "Microsoft Yahei";
    margin-top: 30px;
    text-align: center;
  }
  .content {
    font-size: 12px;
    margin-top: 20px;
    text-align: center;
  }
  .nav {
    width: 90%;
    margin-left: 5%;
    margin-top: 20px;
    ul {
      display: flex;
      height: 86px;
      li {
        flex: 1;
        text-align: center;
        img {
          display: inline-block;
          width: 45px;
          height: 45px;
        }
        p {
          color: #515151;
          font-size: 12px;
          margin-top: 15px;
        }
      }
    }
  }
}
.page-four {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  height: 678px;
  margin: 0 auto;
  background: url(https://mall.res.meizu.com/marrive/img/mobile/bg-4.jpg)
    no-repeat;
  background-color: #253150;
  background-size: 100%;
  text-align: center;
  overflow: hidden;
  .title {
    font: 300 24px/50px "Hiragino Sans GB", "Microsoft Yahei";
    color: #fff;
    margin-top: 400px;
  }
  .content {
    color: #fff;
    font-size: 12px;
    margin-top: 20px;
  }
  .city {
    width: 100%;
    display: flex;
    height: 120px;
    margin-top: 34px;
    ul {
      flex: 1;
      margin-top: 10px;
      li {
        height: 25px;
        line-height: 25px;
        font-size: 14px;
        color: #fff;
      }
    }
  }
}
.page-five {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  height: 375px;
  margin: 0 auto;
  background: url(https://mall.res.meizu.com/marrive/img/mobile/bg-5.jpg)
    no-repeat;
  background-size: 100%;
  text-align: center;
  overflow: hidden;
  .title {
    font: 300 24px/50px "Hiragino Sans GB", "Microsoft Yahei";
    margin-top: 30px;
  }
  .content {
    font-size: 12px;
    margin-top: 20px;
  }
}
.problem {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  height: 380px;
  margin: 0 auto;
  .title {
    width: 90%;
    margin-left: 5%;
    font: 300 24px/1.6 "Hiragino Sans GB", "Microsoft Yahei";
    margin-top: 50px;
  }
  .content {
    width: 90%;
    margin-left: 5%;
    margin-top: 30px;
    ul {
      li {
        line-height: 22px;
        color: #515151;
        font-size: 12px;
      }
    }
  }
  .matter-list {
    width: 90%;
    margin-left: 5%;
    margin-top: 30px;
    color: #515151;
    font-size: 12px;
  }
}
.footer {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  height: 50px;
  margin: 0 auto;
  background-color: #fff;
  text-align: center;
  overflow: hidden;
  p {
    color: #999;
    margin-top: 5px;
    font-size: 12px;
  }
}
</style>
