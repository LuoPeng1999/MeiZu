<template>
  <div>
    <!-- 意见反馈头部 -->
    <div class="feedback-header">
      <div class="left" @click="$router.go(-1)">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span>意见反馈</span>
      </div>
      <div class="right"></div>
    </div>

    <div class="feedback-content">
      <div class="type">
        <div class="title">请选择反馈类型<i>*</i></div>
        <ul>
          <li
            v-for="(item, index) in tabs"
            :key="index"
            @click="addClassName(index)"
          >
            <img :src="item.img" alt="" v-if="activeNum != index" />
            <img :src="item.active" alt="" v-if="activeNum == index" />
            <p :class="{ active: activeNum == index }">{{ item.text }}</p>
          </li>
        </ul>
      </div>
      <div class="desc">
        <div class="title">问题描述<i>*</i></div>
        <textarea
          name=""
          id=""
          maxlength="150"
          minlength="10"
          @input="descInput"
          v-model="desc"
          placeholder="问题描述需要10-150字"
        ></textarea>
        <span>{{ strLength }} 字</span>
        <button :class="{ btnActive: 150 - strLength >= 10 }" @click="submit">
          提交
        </button>
      </div>
    </div>

    <div class="feedback-footer">
      <ol>
        <p>
          如果您的问题急需处理，您可以
        </p>
        <li>
          <span @click="$router.push('/customer')">咨询在线客服</span>
          ，服务热线：
          <a href="tel:400-788-3333">400-788-3333</a>
        </li>
        <li>客服在线时间：周一至周日 8:00-20:00</li>
      </ol>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      activeNum: 0,
      tabs: [
        {
          text: "购物体验",
          img: require("../../assets/image/recommend/type10.png"),
          active: require("../../assets/image/recommend/type11.png")
        },
        {
          text: "支付流程",
          img: require("../../assets/image/recommend/type20.png"),
          active: require("../../assets/image/recommend/type21.png")
        },
        {
          text: "活动建议",
          img: require("../../assets/image/recommend/type30.png"),
          active: require("../../assets/image/recommend/type31.png")
        },
        {
          text: "商品建议",
          img: require("../../assets/image/recommend/type40.png"),
          active: require("../../assets/image/recommend/type41.png")
        },
        {
          text: "其他建议",
          img: require("../../assets/image/recommend/type50.png"),
          active: require("../../assets/image/recommend/type51.png")
        }
      ],
      strLength: 150,
      desc: ""
    };
  },
  methods: {
    addClassName(index) {
      this.activeNum = index;
    },
    descInput() {
      var txtVal = this.desc.length;
      this.strLength = 150 - txtVal;
    },
    submit() {
      if (this.$store.state.username != null) {
        if (150 - this.strLength >= 10) {
          Toast.success("提交成功");
        } else {
          Toast.fail("问题描述需要10-150字");
        }
      } else {
        Toast.fail("请先登录");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
//  意见反馈头部样式
.feedback-header {
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

.feedback-content {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  background-color: #fff;
  padding-bottom: 20px;
  .type {
    width: 90%;
    margin-left: 5%;
    margin: 0 auto;
    border-top: 1px solid #f0f0f0;
    border-bottom: 1px solid #f0f0f0;
    .title {
      height: 20px;
      line-height: 20px;
      font-size: 15px;
      color: #444;
      position: relative;
      margin-top: 20px;
      i {
        color: #ff5d5d;
        position: absolute;
        top: -5%;
      }
    }
    ul {
      width: 100%;
      height: 95px;
      display: flex;
      margin-top: 15px;
      li {
        flex: 1;
        text-align: center;
        img {
          display: inline-block;
          width: 45px;
          height: 45px;
          margin-top: 10px;
        }
        p {
          color: #666;
          font-size: 12px;
        }
        p.active {
          color: #00c3f5;
        }
      }
    }
  }
  .desc {
    width: 90%;
    margin-left: 5%;
    position: relative;
    .title {
      height: 20px;
      line-height: 20px;
      font-size: 15px;
      color: #444;
      position: relative;
      margin-top: 20px;
      i {
        color: #ff5d5d;
        position: absolute;
        top: -5%;
      }
    }
    textarea {
      width: 100%;
      height: 165px;
      border: 1px solid #ddd;
      display: block;
      border-radius: 5px;
      margin: 10px auto;
      color: #666;
      text-indent: 8px;
      padding-top: 8px;
      box-sizing: border-box;
      resize: none;
    }
    span {
      color: #999;
      position: absolute;
      top: 68%;
      right: 3%;
    }
    button {
      width: 100%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      background-color: #e5e5e5;
      color: white;
      font-size: 16px;
      border: none;
      margin-top: 10px;
      border-radius: 5px;
    }
    button.btnActive {
      background-color: #00c3f5;
    }
  }
}

.feedback-footer {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  padding-top: 10px;
  background-color: #fff;
  padding-bottom: 10px;
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
      span {
        text-decoration: underline;
      }
      a {
        text-decoration: underline;
      }
    }
  }
}
</style>
