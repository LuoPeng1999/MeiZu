<template>
  <div>
    <!-- 客服头部 -->
    <div class="customer-header">
      <div class="left" @click="$router.go(-1)">
        <span class="iconfont iconright1"></span>
      </div>
    </div>
    <!-- 当前时间 -->
    <div class="nowtime">
      <p>{{ nowTime }}</p>
    </div>
    <!-- 聊天内容界面 -->
    <div class="chatView">
      <ul>
        <li>
          <div class="user-img"></div>
          <p>
            你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好你好
          </p>
        </li>
        <li>
          <div class="customer-img"></div>
          <p class="customer-content">亲 在的呢 请问您有什么需要帮助哒？</p>
        </li>
      </ul>
    </div>

    <!-- 聊天输入框 -->
    <div class="chatInput">
      <input type="text" placeholder="我想问..." />
      <button>发送</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    nowTime() {
      let date = new Date();
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      return `${h}:${m}`;
    }
  }
};
</script>

<style lang="scss" scoped>
// 客服头部样式
.customer-header {
  width: 100%;
  height: 54px;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #f3f3f7;
  & > div:first-child {
    width: 54px;
    height: 54px;
  }
  .left {
    margin-left: 10px;
    & > span {
      display: inline-block;
      font-size: 20px;
      width: 30px;
      height: 30px;
      background-color: #fff;
      border-radius: 50%;
      line-height: 30px;
      text-align: center;
      color: #e56060;
      margin-top: 10px;
    }
  }
}
// 当前时间样式
.nowtime {
  width: 100%;
  height: 25px;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #f3f3f7;
  p {
    color: #999;
    line-height: 25px;
    text-align: center;
  }
}
// 聊天界面样式
.chatView {
  width: 100%;
  height: 537px;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #f3f3f7;
  ul {
    width: 100%;
    height: 100%;
    li {
      width: 100%;
      height: 110px;
      margin-top: 10px;
      .user-img {
        width: 35px;
        height: 35px;
        background: url(../assets/image/recommend/meizuicon.png) no-repeat -308px -12px;
        border-radius: 5px;
        float: right;
        margin-right: 10px;
      }
      p {
        max-width: 240px;
        float: right;
        background-color: #fff;
        margin-right: 15px;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 5px;
        padding: 6px;
        font-size: 14px;
      }
      .customer-img {
        width: 35px;
        height: 35px;
        background: url(../assets/image/recommend/meizuicon.png) no-repeat -308px -54px;
        border-radius: 5px;
        float: left;
        margin-left: 10px;
      }
      .customer-content {
        max-width: 240px;
        float: left;
        background-color: #fff;
        margin-right: 15px;
        border-top-right-radius: 5px;
        border-bottom-left-radius: 5px;
        padding: 6px;
        font-size: 14px;
        margin-left: 15px;
      }
    }
  }
}
// 聊天输入框样式
.chatInput {
  width: 100%;
  height: 41px;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fff;
  input {
    width: 75%;
    height: 30px;
    border: 1px solid rgb(212, 212, 212);
    background-color: #fff;
    margin-top: 5px;
    margin-left: 5px;
    border-radius: 5px;
    font-size: 14px;
    text-indent: 5px;
    color: #333;
    line-height: 30px;
  }
  button {
    outline: none;
    border: none;
    width: 40px;
    height: 30px;
    border-radius: 6px;
    background: rgb(206, 242, 255);
    color: #333;
    text-align: center;
    line-height: 30px;
    margin-left: 20px;
  }
}
</style>
