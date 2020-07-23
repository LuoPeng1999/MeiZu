<template>
  <div>
    <!-- 手机号查询订单头部 -->
    <div class="tel-header">
      <div class="left" @click="$router.go(-1)">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span>手机号查询订单</span>
      </div>
      <div class="right"></div>
    </div>

    <!-- 表单 -->
    <div class="form">
      <input type="text" class="tel" placeholder="请输入手机号" />
      <div class="verify">
        <input type="text" placeholder="请输入验证码" />
        <button>获取验证码</button>
      </div>
      <button class="find">查询</button>
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
// 手机号查询订单头部样式
.tel-header {
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
.form {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fff;
  border-top: 1px solid #ddd;
  padding-bottom: 30px;
  input,
  button {
    height: 35px;
    line-height: 35px;
    border-radius: 5px;
    border: none;
    display: inline-block;
  }
  .tel {
    width: 94%;
    margin-left: 3%;
    border: 1px solid #ddd;
    padding-left: 10px;
    box-sizing: border-box;
    margin-top: 20px;
    font-size: 12px;
    color: #999;
  }
  .verify {
    width: 94%;
    margin-left: 3%;
    margin-top: 20px;
    input {
      border: 1px solid #ddd;
      width: 196px;
      padding-left: 10px;
      box-sizing: border-box;
      color: #999;
    }
    button {
      width: 140px;
      background-color: #00c3f5;
      color: #fff;
      margin-left: 14px;
      font-size: 14px;
    }
  }
  .find {
    width: 94%;
    margin-top: 20px;
    margin-left: 3%;
    background-color: #ccc;
    font-size: 14px;
    color: white;
    text-align: center;
  }
}
</style>
