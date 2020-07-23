<template>
  <div>
    <!-- 云服务头部 -->
    <div class="cloud-header">
      <div class="left" @click="$router.go(-1)">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span>云服务</span>
      </div>
      <div class="right"></div>
    </div>

    <!-- 云服务轮播图 -->
    <div class="could-content">
      <div class="swiper-container couldBannerSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="service">
              <div class="title">
                <img
                  src="https://cloud-res.mzres.com/resources/sync/images/white_logo.png"
                  alt=""
                />
                <p>云服务</p>
              </div>
              <div class="content">
                <p>高效、安全、便捷、您的云端数据管家</p>
              </div>
              <div class="btn">
                <a @click="$router.push('/login')">登录网页端</a>
              </div>
              <div class="icon">
                <img
                  src="https://cloud-res.mzres.com/resources/sync/images/arrow.png"
                  alt=""
                  @click="slideto(1)"
                />
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="data">
              <div class="new">
                <div class="title">
                  <p>高效的数据管理</p>
                </div>
                <div class="content">
                  <p>
                    在任何电脑上登录
                    cloud.flyme.cn，您就能在网页端进行个人数据的管理操作。在线编辑便签、联系人变更、误删数据恢复，Flyme
                    统统帮你搞定。
                  </p>
                </div>
                <div class="icon">
                  <img
                    src="https://cloud-res.mzres.com/resources/sync/images/arrow2.png"
                    alt=""
                    @click="slideto(2)"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="safe">
              <div class="title">
                <p>安全的手机防丢机制</p>
              </div>
              <div class="content">
                <p>
                  开启“查找手机”功能后，可以在线对手机进行定位，手机号码跟踪，挂失后还可以进行锁定手机，自动拍照，禁止刷机等操作，全方位帮助您找回自己的爱机。
                </p>
              </div>
              <div class="map">
                <img
                  src="https://cloud-res.mzres.com/resources/sync/images/sec3_pic.png"
                  alt=""
                />
              </div>
              <div class="icon">
                <img
                  src="https://cloud-res.mzres.com/resources/sync/images/arrow.png"
                  alt=""
                  @click="slideto(3)"
                />
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="migrate">
              <div class="title">
                <p>便捷的个人数据迁移</p>
              </div>
              <div class="content">
                <p>
                  Flyme 让个人数据迁移变得十分简单，只需要登录您的 Flyme
                  账号，所有个人数据从云端一键同步到您的新手机上。老手机上退出账号，可以一键清除所有个人数据，做到不留痕迹。
                </p>
              </div>
              <div class="icon">
                <img
                  src="https://cloud-res.mzres.com/resources/sync/images/arrow2.png"
                  alt=""
                  @click="slideto(4)"
                />
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="features">
              <div class="title">
                <p>如何使用云服务功能 ？</p>
              </div>
              <img
                src="https://cloud-res.mzres.com/resources/sync/images/sec5_pic1.png?v=2"
                alt=""
                class="img1"
              />
              <p class="desc1">
                在魅族手机上登录 Flyme 账号进入云服务, 并根据你的需求设置同步项
              </p>
              <img
                src="https://cloud-res.mzres.com/resources/sync/images/sec5_pic2.png?v=2"
                alt=""
                class="img2"
              />
              <p class="desc2">
                在设置 > 账户与同步中找到云服务，<br />根据你的需求设置同步项
              </p>
              <div class="icon">
                <img
                  src="https://cloud-res.mzres.com/resources/sync/images/back.png"
                  alt=""
                  @click="slideto(0)"
                />
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="start">
              <div class="title">
                <p>
                  现在就开始
                  <br />
                  使用您的Flyme云服务吧
                </p>
              </div>
              <div class="btn">
                <button class="login" @click="$router.push('/login')">
                  登录网页端
                </button>
                <button class="register" @click="$router.push('/register')">
                  马上注册
                </button>
              </div>
              <div class="content">
                <ul>
                  <li>关于魅族</li>
                  <li>联系我们</li>
                  <li>常见问题</li>
                </ul>
                <ul>
                  <li>工作机会</li>
                  <li>法律声明</li>
                </ul>
              </div>
              <div class="tel">
                <p>
                  <span>客服热线</span>
                  <span>400-788-3333</span>
                  <a href="tel:400-788-3333">在线客服</a>
                </p>
              </div>
              <div class="footer">
                <a>经营许可证编号: 粤B2-20130198</a>
                <a>营业执照</a>
                <a>粤公网安备 44049102496258号</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  mounted() {
    new Swiper(".couldBannerSwiper", {
      centeredSlides: true,
      direction: "vertical",
      resistanceRatio: 0
    });
  },
  methods: {
    slideto(index) {
      new Swiper(".couldBannerSwiper", {
        centeredSlides: true,
        direction: "vertical",
        resistanceRatio: 0
      }).slideTo(index, 1000, false);
    }
  }
};
</script>

<style lang="scss" scoped>
//  云服务头部样式
.cloud-header {
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
.couldBannerSwiper {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  height: 613px !important;
  margin: 0 auto;
  // Flyme云服务
  .service {
    width: 100%;
    max-width: 436px;
    min-width: 320px;
    height: 100%;
    margin: 0 auto;
    background: url(../../assets/image/recommend/servicebanner.jpg) no-repeat;
    background-size: contain;
    background-position: 0px 424px;
    background-color: #3987ec;
    text-align: center;
    .title {
      width: 100%;
      margin-top: 200px;
      img {
        display: inline-block;
        width: 130px;
        height: 45px;
        vertical-align: middle;
      }
      p {
        display: inline-block;
        margin-left: 10px;
        font-size: 30px;
        font-weight: bold;
        color: #fff;
      }
    }
    .content {
      margin-top: 15px;
      p {
        font-size: 13px;
        color: rgba($color: #ffffff, $alpha: 0.9);
      }
    }
    .btn {
      margin-top: 40px;
      a {
        display: inline-block;
        border: 1px solid rgba($color: #ffffff, $alpha: 0.9);
        font-size: 13px;
        width: 126px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: rgba($color: #ffffff, $alpha: 0.9);
        background-color: transparent;
        border-radius: 20px;
      }
    }
    .icon {
      width: 100%;
      margin-top: 200px;
      img {
        display: inline-block;
        width: 23px;
        height: 13px;
      }
    }
  }
  .data {
    width: 100%;
    max-width: 436px;
    min-width: 320px;
    height: 100%;
    margin: 0 auto;
    background: url(../../assets/image/recommend/data.png) no-repeat;
    background-size: contain;
    background-position: 0px 220px;
    text-align: center;
    .new {
      width: 100%;
      margin-top: 60px;
      .title {
        p {
          color: #3987ec;
          font-size: 22px;
        }
      }
      .content {
        width: 90%;
        margin-left: 5%;
        margin-top: 20px;
        p {
          color: #3987ec;
          font-size: 15px;
          font-weight: 400;
        }
      }
      .icon {
        width: 100%;
        margin-top: 380px;
        img {
          display: inline-block;
          width: 23px;
          height: 13px;
        }
      }
    }
  }
  .safe {
    width: 100%;
    max-width: 436px;
    min-width: 320px;
    height: 100%;
    margin: 0 auto;
    background: url(../../assets/image/recommend/map.jpg);
    background-size: contain;
    text-align: center;
    .title {
      width: 100%;
      margin-top: 120px;
      p {
        font-size: 24px;
        color: #fff;
      }
    }
    .content {
      width: 100%;
      margin-top: 20px;
      p {
        width: 90%;
        margin: 0 auto;
        font-size: 13px;
        color: rgba($color: #ffffff, $alpha: 0.9);
      }
    }
    .map {
      margin-top: 20px;
      img {
        display: inline-block;
        width: 186px;
        height: 244px;
      }
    }
    .icon {
      width: 100%;
      margin-top: 50px;
      img {
        display: inline-block;
        width: 23px;
        height: 13px;
      }
    }
  }
  .migrate {
    width: 100%;
    max-width: 436px;
    min-width: 320px;
    height: 100%;
    margin: 0 auto;
    background: url(../../assets/image/recommend/migrate.png) no-repeat;
    background-size: 350px;
    background-position: 14px 220px;
    text-align: center;
    .title {
      width: 100%;
      margin-top: 40px;
      p {
        font-size: 24.6px;
        color: #3987ec;
      }
    }
    .content {
      width: 100%;
      margin-top: 20px;
      p {
        width: 90%;
        margin: 0 auto;
        font-size: 13px;
        color: #3987ec;
      }
    }
    .icon {
      width: 100%;
      margin-top: 380px;
      img {
        display: inline-block;
        width: 23px;
        height: 13px;
      }
    }
  }
  .features {
    width: 100%;
    max-width: 436px;
    min-width: 320px;
    height: 100%;
    margin: 0 auto;
    background-color: #3987ec;
    text-align: center;
    .title {
      margin-top: 80px;
      width: 100%;
      p {
        font-size: 24.6px;
        color: #fff;
      }
    }
    .img1 {
      display: inline-block;
      width: 50%;
      margin: 0 auto;
      margin-top: 30px;
    }
    .desc1 {
      width: 94%;
      margin: 0 auto;
      margin-top: 10px;
      font-size: 13px;
      color: rgba($color: #ffffff, $alpha: 0.9);
    }
    .img2 {
      display: inline-block;
      width: 50%;
      margin: 0 auto;
      margin-top: 30px;
    }
    .desc2 {
      width: 94%;
      margin: 0 auto;
      margin-top: 10px;
      font-size: 13px;
      color: rgba($color: #ffffff, $alpha: 0.9);
    }
    .icon {
      width: 100%;
      margin-top: 20px;
      img {
        display: inline-block;
        width: 30px;
        height: 30px;
      }
    }
  }
  .start {
    width: 100%;
    max-width: 436px;
    min-width: 320px;
    height: 100%;
    margin: 0 auto;
    background-color: #fff;
    .title {
      width: 100%;
      margin-top: 80px;
      text-align: center;
      p {
        font-size: 24.6px;
        color: #1788e8;
      }
    }
    .btn {
      width: 100%;
      margin-top: 80px;
      text-align: center;
      button {
        width: 126px;
        height: 40px;
        border: 1px solid #1788e8;
        line-height: 30px;
        text-align: center;
        border-radius: 30px;
        background-color: #fff;
        font-size: 14px;
      }
      .login {
        background-color: #1788e8;
        color: #fff;
      }
      .register {
        color: #1788e8;
        margin-left: 10px;
      }
    }
    .content {
      width: 100%;
      margin-top: 120px;
      // background-color: pink;
      overflow: hidden;
      ul {
        margin: 0 30px;
        float: left;
        li {
          height: 42px;
          line-height: 42px;
          font-size: 14px;
          color: #b0b6b9;
        }
      }
    }
    .tel {
      width: 100%;
      p {
        margin-left: 10px;
        span {
          display: inline-block;
          height: 42px;
          line-height: 42px;
          font-size: 14px;
          color: #b0b6b9;
          margin-left: 10px;
        }
        a {
          display: inline-block;
          width: 66px;
          height: 22px;
          background-color: #1788e8;
          color: #fff;
          font-size: 12px;
          line-height: 22px;
          text-align: center;
          margin-left: 10px;
          border-radius: 5px;
        }
      }
    }
    .footer {
      width: 100%;
      margin-top: 25px;
      a {
        font-size: 10px;
        color: #b0b6b9;
        margin-left: 6px;
        &:last-child {
          background: url(https://cloud-res.mzres.com/resources/sync/images/ghs.png)
            no-repeat;
          background-size: 15px 14px;
          padding-left: 18px;
          background-position-y: center;
        }
      }
    }
  }
}
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  // text-align: center;
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
