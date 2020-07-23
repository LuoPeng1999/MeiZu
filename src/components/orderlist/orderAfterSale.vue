<template>
  <div>
    <ul class="orderAll">
      <li v-for="(item, index) in lists" :key="index">
        <div class="orderAll-header">
          <ul>
            <li>
              <p>
                订单日期:<span>{{ item.dateTime | dataFormat }}</span>
              </p>
            </li>
            <li>
              <p>
                订单编号:<span>{{ item.orderId }}</span>
              </p>
            </li>
          </ul>
          <div class="order-state">{{ typeList[item.type] }}</div>
        </div>
        <div
          class="orderAll-content"
          v-for="(value, key) in item.goodsList"
          :key="key"
        >
          <img :src="value.previewImgUrl" alt="" />
          <p class="name">
            <span>{{ value.name }}</span>
          </p>
          <p>
            <span class="webType">{{ value.webType }}</span>
            <span class="color">{{ value.color }}</span>
            <span class="ram">{{ value.ram }}</span>
            <span class="package">{{ value.package }}</span>
          </p>
        </div>
        <div class="orderAll-footer">
          <div class="orderAll-price">
            实付金额: ￥<span>{{ item.total }}</span
            >元
          </div>
          <div class="orderAll-num">共{{ item.num }}件商品</div>
        </div>
        <div class="orderAll-btn">
          <!-- 已完成 -->
          <van-button size="mini" @click="evaluate = true">商品评价</van-button>
        </div>
      </li>
    </ul>

    <!-- 评价功能 -->
    <van-popup
      v-model="evaluate"
      position="bottom"
      round
      :style="{ height: '50%' }"
    >
      <div class="content">
        <textarea
          name=""
          id=""
          maxlength="150"
          minlength="10"
          @input="descInput"
          v-model="desc"
          placeholder="评价内容需要10-150字"
        ></textarea>
        <span>{{ strLength }} 字</span>
        <ul>
          <li>
            宝贝与描述相符:<van-rate
              v-model="descValue"
              allow-half
              void-icon="star"
              void-color="#eee"
            />
          </li>
          <li>
            卖家的服务态度:<van-rate
              v-model="serviceValue"
              allow-half
              void-icon="star"
              void-color="#eee"
            />
          </li>
          <li>
            卖家发货的速度:<van-rate
              v-model="speedValue"
              allow-half
              void-icon="star"
              void-color="#eee"
            />
          </li>
          <li>
            物流公司的服务:<van-rate
              v-model="Logisticsalue"
              allow-half
              void-icon="star"
              void-color="#eee"
            />
          </li>
        </ul>
        <button :class="{ btnActive: 150 - strLength >= 10 }" @click="submit">
          提交
        </button>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      evaluate: false,
      strLength: 150,
      desc: "",
      descValue: 0,
      serviceValue: 0,
      speedValue: 0,
      Logisticsalue: 0
    };
  },
  created() {
    let dataList = this.$store.state.order.lists;
    this.lists = dataList.filter(item => item.type == 3); //类型为一生成新数组
    this.typeList = this.$store.state.order.typeList;
    console.log(this.lists.length);
    if (!this.lists.length) {
      Toast("添加商品");
    }
    this.$store.state.orderactive = 3;
  },
  methods: {
    descInput() {
      var txtVal = this.desc.length;
      this.strLength = 150 - txtVal;
    },
    submit() {
      if (this.$store.state.username != null) {
        if (150 - this.strLength >= 10) {
          if (
            this.descValue > 0 &&
            this.serviceValue > 0 &&
            this.speedValue > 0 &&
            this.Logisticsalue > 0
          ) {
            Toast.success("评价成功");
            this.evaluate = false;
            this.desc = "";
          } else {
            Toast.fail("请给予评分");
          }
        } else {
          Toast.fail("问题描述需要10-150字");
        }
      } else {
        Toast.fail("请先登录");
      }
    }
  },
  filters: {
    dataFormat(dataString) {
      console.log(dataString);

      var dd = new Date();

      // 获取 年 月 日
      var y = dd.getFullYear();
      var m = dd.getMonth() + 1;
      var d = dd.getDate();

      // 获取 时 分 秒
      var hh = dd.getHours();
      var mm = dd.getMinutes();
      //   var ss = dd.getSeconds();

      return `${y}-${m}-${d} ${hh}:${mm}`;
    },
    dataText(data) {
      var arr = ["天", "一", "二", "三", "四", "五", "六"];
      var week = new Date().getDay();
      return data + "星期" + arr[week];
    }
  }
};
</script>

<style lang="scss" scoped>
.orderAll {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  & > li {
    background-color: #fff;
    margin-top: 20px;
    .orderAll-header {
      height: 60px;
      //   background-color: pink;
      border-bottom: 1px solid #f0f0f0;
      box-sizing: border-box;
      & > ul {
        width: 70%;
        float: left;
        margin-top: 10px;
        margin-left: 10px;
        li {
          width: 100%;
          p {
            width: 100%;
            span {
              margin-left: 10px;
            }
          }
          &:first-child {
            font-size: 16px;
            color: #333;
          }
          &:last-child {
            font-size: 12px;
            color: #999;
          }
        }
      }
      .order-state {
        float: right;
        font-size: 16px;
        color: #ff5722;
        margin-top: 10px;
        margin-right: 10px;
      }
    }
    .orderAll-content {
      height: 72px;
      border-bottom: 1px solid #f0f0f0;
      box-sizing: border-box;
      img {
        float: left;
        width: 52px;
        height: 52px;
        background-color: pink;
        margin-left: 10px;
        margin-top: 10px;
      }
      .name {
        float: left;
        margin-top: 10px;
        margin-left: 10px;
        font-size: 16px;
      }
      p {
        width: 240px;
        float: left;
        margin-left: 10px;
        font-size: 13px;
        margin-top: 8px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        span {
          margin-left: 5px;
        }
      }
    }
    .orderAll-footer {
      height: 40px;
      line-height: 40px;
      font-size: 13px;
      color: #666;
      .orderAll-price {
        float: right;
        margin-right: 10px;
        span {
          font-size: 16px;
        }
      }
      .orderAll-num {
        float: right;
        margin-right: 10px;
      }
    }
    .orderAll-btn {
      height: 30px;
      line-height: 30px;
      text-align: right;
      text-indent: 158px;
      padding: 0px 16px 10px 16px;
    }
  }
}

.content {
  width: 90%;
  height: 100%;
  margin-left: 5%;
  position: relative;
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
    top: 42%;
    right: 3%;
  }

  ul {
    width: 100%;
    li {
      height: 25px;
      font-size: 15px;
      color: #666;
      position: relative;
      .van-rate {
        margin-left: 8px;
        position: absolute;
        left: 40%;
        top: 0;
      }
    }
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
    margin-top: 5px;
    border-radius: 5px;
  }
  button.btnActive {
    background-color: #00c3f5;
  }
}
</style>
