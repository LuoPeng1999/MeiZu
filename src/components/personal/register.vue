<template>
  <div>
    <!-- 注册头部 -->
    <div class="register-header">
      <div class="left" @click="$router.push('/personal')">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span>注册</span>
      </div>
      <div class="right"></div>
    </div>
    <div class="register-content">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="password2"
          type="password"
          name="password2"
          label="确认密码"
          placeholder="确认密码"
          :rules="[{ required: true, message: '请再次填写密码' }]"
        />
        <van-field
          v-model="tel"
          type="number"
          name="tel"
          label="电话"
          placeholder="电话"
          :rules="[{ required: true, message: '请填写电话' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
      <p>
        用户登录以及注册,表示已同意<span>《Flyme账号服务协议》</span>和<span
          >《隐私权政策》</span
        >
      </p>
      <span class="login" @click="$router.push('/login')">登录</span>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      tel: ""
    };
  },
  methods: {
    onSubmit(params) {
      let that = this;
      console.log(params);
      this.$axios
        .get("http://106.53.253.57:3000/register", { params })
        .then(res => {
          console.log(res);
          // 请求数据成功后提示
          if (res.data == "200") {
            Toast({
              message: "注册成功",
              onOpened() {
                // 回调跳转路由
                that.$router.push("/login");
              }
            });
          } else {
            Toast("注册失败");
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
// 注册头部样式
.register-header {
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
// 注册内容样式
.register-content {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  margin-top: 30px;
  p {
    display: block;
    font-size: 14px;
    width: 80%;
    margin: 20px auto;
    & > span {
      color: #0096ff;
    }
  }
  .login {
    display: inline-block;
    height: 40px;
    width: 100%;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
    color: #333;
  }
}
</style>
