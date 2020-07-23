<template>
  <div>
    <!-- M通道头部 -->
    <div class="mcode-header">
      <div class="left" @click="$router.go(-1)">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span>M码通道</span>
      </div>
      <div class="right"></div>
    </div>

    <!-- M通道内容 -->
    <div class="mcode-content">
      <input type="text" v-model="mcode" placeholder="请输入M码" />
      <!-- 滑块验证 -->
      <div class="slide">
        <drag-verify
          :width="width"
          :height="height"
          :text="text"
          :success-text="successText"
          :background="background"
          :progress-bar-bg="progressBarBg"
          :completed-bg="completedBg"
          :handler-bg="handlerBg"
          :handler-icon="handlerIcon"
          :text-size="textSize"
          :success-icon="successIcon"
          ref="Verify"
          :circle="false"
          :key="verifykey"
        >
        </drag-verify>
      </div>
      <!-- 按钮 -->
      <button @click="alertinfo">下一步</button>
    </div>
    <!-- 规则 -->
    <div class="rule">
      <div class="codeinfo">
        <div class="title">关于M码</div>
        <div class="content">
          M码是魅族为资深热心魅友提供的一项服务，用于魅族商城的新产品优先购买。
        </div>
      </div>
      <div class="qualification">
        <p>获得资格</p>
        <ul>
          <li>
            1.官方不定期开放发码，请随时留意魅族社区动态，后续也将开放兑换机制；
          </li>
          <li>
            2.获得资格取决于帐号贡献度，如魅族社区的注册时长、帐号活跃度、发帖精华数量、版务服务、违规情况、参与魅友家活动等；
          </li>
          <li>
            3.每批次M码对应的产品和可购买数量会有不同，请留意发放当期的说明；
          </li>
          <li>4.当期收到M码，短期内如无特殊情况一般不会再次获得。</li>
        </ul>
      </div>
      <div class="explanation">
        <p>使用说明</p>
        <ul>
          <li>1.有效期内，可以购买限定数量的指定机型。</li>
          <li>
            2.一个M码仅能使用一次，下单后作废，有效期及其他注意事项，请留意每次发布公告。
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// 引入vue-drag-verify 用于登录验证 组件
import dragVerify from "vue-drag-verify";
import { Toast } from "vant";
export default {
  data() {
    return {
      mcode: "",
      width: 340,
      height: 44,
      handlerIcon: "fa fa-angle-double-right",
      successIcon: "fa fa-check",
      background: "#cccccc",
      progressBarBg: "#4b0",
      completedBg: "#66cc66",
      handlerBg: "#fff",
      text: "滑动到右侧进行验证",
      successText: "验证成功",
      textSize: "20px",
      verifykey: 1
    };
  },
  components: {
    dragVerify
  },
  methods: {
    alertinfo() {
      let flag = this.$refs.Verify.isPassing;
      if (this.mcode == "") {
        Toast.fail("请输入M码");
        this.verifykey++;
        return;
      }
      if (flag) {
        console.log("成功验证");
        this.verifykey++; // 重新渲染组件
      } else {
        Toast.fail("请进行验证");
        console.log("请进行验证");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// M码通道头部样式
.mcode-header {
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

.mcode-content {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  text-align: center;
  input {
    display: inline-block;
    width: 340px;
    height: 44px;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 15px;
    border: 1px solid #e5e5e5;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .slide {
    display: inline-block;
  }
  button {
    width: 340px;
    height: 44px;
    border: none;
    background-color: #00c3f5;
    color: #fff;
    line-height: 44px;
    border-radius: 5px;
    text-align: center;
    font-size: 15px;
    margin-top: 10px;
  }
}
.rule {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  .codeinfo {
    width: 340px;
    margin: 0 auto;
    overflow: hidden;
    .title {
      width: 100%;
      margin-top: 10px;
      font-weight: bold;
      color: #666;
    }
    .content {
      color: #999;
    }
  }
  .qualification {
    width: 340px;
    margin: 0 auto;
    overflow: hidden;
    p {
      width: 100%;
      margin-top: 10px;
      font-weight: bold;
      color: #666;
    }
    ul {
      li {
        color: #999;
      }
    }
  }
  .explanation {
    width: 340px;
    margin: 0 auto;
    overflow: hidden;
    p {
      width: 100%;
      margin-top: 10px;
      font-weight: bold;
      color: #666;
    }
    ul {
      li {
        color: #999;
      }
    }
  }
}
</style>
