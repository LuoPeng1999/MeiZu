<template>
  <div>
    <!-- 登录头部 -->
    <div class="login-header">
      <div class="left" @click="$router.push('/personal')">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span>登录</span>
      </div>
      <div class="right"></div>
    </div>
    <div class="login-content">
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
        <button @click="verify = true" class="click" v-if="!pass">
          点击验证
        </button>
        <button class="click active" v-if="pass">
          验证成功
        </button>
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
      <p @click="$router.push('/register')">注册</p>
    </div>

    <!-- 图片验证弹出框 -->
    <van-popup v-model="verify">
      <div class="verify">
        <drag-verify-img
          ref="dragVerify"
          :isPassing.sync="pass"
          :imgsrc="img"
          handlerIcon="fa fa-angle-double-right"
          successIcon="fa fa-check-circle-o"
          refreshIcon="fa fa-refresh"
          :text="text"
          :successText="successText"
          :background="background"
          :progress-bar-bg="progressBarBg"
          :completed-bg="completedBg"
          :successTip="successText"
          @passcallback="handlePass"
        ></drag-verify-img>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
import dragVerifyImg from "vue-drag-verify-img";
export default {
  data() {
    return {
      username: "",
      password: "",
      // 360 140
      img: require("../../assets/image/recommend/login01.png"),
      verify: false,
      background: "#cccccc",
      progressBarBg: "#44C5FC",
      completedBg: "#66cc66",
      text: "完成拼图验证",
      successText: "验证成功",
      pass: false
    };
  },
  methods: {
    onSubmit(params) {
      let _this = this;
      if (this.pass) {
        // 判断是否传参，修改返回路径
        let path =
          "path" in _this.$route.query ? _this.$route.query.path : "/personal";

        this.$axios
          .get("http://106.53.253.57:3000/login", { params })
          .then(res => {
            console.log(res);
            // 请求数据成功后提示
            if (res.data == "200") {
              Toast({
                message: "登陆成功",
                onOpened() {
                  // 登陆成功用户名存入vuex
                  _this.$store.state.username = _this.username;
                  // 回调跳转路由
                  _this.$router.push(path);
                }
              });
            } else {
              Toast("登陆失败");
            }
          });
      } else {
        Toast.fail("请完成登录验证");
      }
    },
    handlePass() {
      console.log(this);
    }
  },
  components: {
    dragVerifyImg
  }
};
</script>

<style lang="scss" scoped>
// 登录头部样式
.login-header {
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
// 登录内容样式
.login-content {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  margin-top: 30px;
  p {
    width: 100%;
    height: 40px;
    font-size: 16px;
    text-align: center;
    line-height: 40px;
  }
}
.click {
  width: 90%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  height: 44px;
  margin-left: 5%;
  margin-top: 20px;
  border-radius: 20px;
  font-size: 14px;
  background-color: #e5e5e5;
  color: white;
  border: none;
}
.active {
  background-color: #07c160;
}
</style>
