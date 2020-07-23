<template>
  <div>
    <!-- 联系客服头部 -->
    <div class="contact-header">
      <div class="left" @click="$router.go(-1)">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span>联系客服</span>
      </div>
      <div class="right"></div>
    </div>

    <div class="contact-content">
      <ul>
        <router-link tag="li" to="/customer">
          <a href="javascript:;">
            <img
              src="https://mall.res.meizu.com/member/img/wechat-b174bad.png"
              alt=""
            />
          </a>
        </router-link>
        <li>
          <a href="tel:400-788-3333">
            <img
              src="https://mall.res.meizu.com/member/img/phone-9ecfdb8.png"
              alt=""
            />
          </a>
        </li>
        <router-link tag="li" to="problem">
          <a href="javascript:;">
            <img
              src="https://mall.res.meizu.com/member/img/person-8a6c6f8.png"
              alt=""
            />
          </a>
        </router-link>
      </ul>
    </div>

    <div class="contact-footer">
      <ol>
        <p>您还可以</p>
        <li>关注“魅族科技”微信公众号，直接对话微信客服</li>
        <li>关注“魅族care”微博，了解资讯</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
//  联系客服头部样式
.contact-header {
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
.contact-content {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  ul {
    width: 50%;
    margin-left: 25%;
    text-align: center;
    li {
      width: 60%;
      margin-left: 20%;
      height: 100px;
      margin-top: 40px;
      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        img {
          display: inline-block;
        }
      }
    }
  }
}
.contact-footer {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  margin-top: 100px;
  ol {
    width: 90%;
    margin-left: 5%;
    p {
      height: 25px;
      line-height: 25px;
      color: #999;
    }
    li {
      height: 25px;
      line-height: 25px;
      color: #999;
      position: relative;
      text-indent: 10px;
      &::before {
        content: "";
        display: inline-block;
        width: 5px;
        height: 5px;
        border-radius: 5px;
        background-color: #999;
        position: absolute;
        top: 50%;
        margin-top: -2.5px;
        left: 0;
      }
    }
  }
}
</style>
