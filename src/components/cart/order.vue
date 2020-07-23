<template>
  <div>
    <!-- 订单头部 -->
    <div class="order-header">
      <div class="left" @click="cartvue">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span>结算</span>
      </div>
      <div class="right"></div>
    </div>
    <!-- 地址联系人 -->
    <div @click="addressfun" class="address">
      <van-contact-card
        :type="cardType"
        :name="name"
        :tel="tel"
        add-text="添加联系人"
        :editable="false"
      />
    </div>
    <!-- 订单 -->
    <!-- 供货商 -->
    <div class="cell supplier">
      <div class="left">
        <div class="supplier-title">供应商:</div>
        <div class="supplier-content">魅族</div>
      </div>
      <div class="right">
        <!-- <span class="iconfont iconright"></span> -->
      </div>
    </div>
    <!-- 购买信息 -->
    <div class="cell phoneInfo" v-for="(item, index) in lists" :key="index">
      <div class="left">
        <img :src="item.previewImgUrl" alt="" />
        <ul>
          <li>{{ item.name }}</li>
          <li>
            {{ item.webType }} {{ item.color }} {{ item.ram }}
            {{ item.package }}
          </li>
          <li>￥{{ item.price }}</li>
        </ul>
        <div class="phoneInfo-num">x{{ item.num }}</div>
      </div>
      <div class="right">
        <!-- <span class="iconfont iconright"></span> -->
      </div>
    </div>
    <!-- 配送方式 -->
    <div class="cell delivery">
      <div class="left">
        <div class="delivery-title">配送方式</div>
        <div class="delivery-content">快递配送(运费￥0.00)</div>
      </div>
      <div class="right">
        <!-- <span class="iconfont iconright"></span> -->
      </div>
    </div>
    <!-- 发票类型 -->
    <div class="cell invoice">
      <div class="left">
        <div class="invoice-title">发票类型<font color="red">*</font></div>
      </div>
      <div class="right" @click="invoiceflag = true">
        <!-- <span class="iconfont iconright"></span> -->
        <div class="invoice-content">
          电子发票<span class="iconfont iconzhuyi"></span>
        </div>
      </div>
    </div>
    <!-- 发票抬头 -->
    <div class="cell look">
      <div class="left">
        <div class="look-title">发票抬头<font color="red">*</font></div>
      </div>
      <div class="right">
        <!-- <span class="iconfont iconright"></span> -->
        <div class="look-content">
          {{ lookuser }}
          <!-- <span class="iconfont iconright"></span> -->
        </div>
      </div>
    </div>
    <!-- 抬头全称 -->
    <div class="cell lookname">
      <div class="left">
        <div class="lookname-title">抬头全称<font color="red">*</font></div>
        <div class="lookname-content">
          {{ name }}
        </div>
      </div>
      <div class="right">
        <!-- <span class="iconfont iconright"></span> -->
      </div>
    </div>
    <!-- 合计 -->
    <div class="cell total">
      <div class="left"></div>
      <div class="right">
        <!-- <span class="iconfont iconright"></span> -->
        <div class="total-price">合计: ￥{{ total }}</div>
        <div class="total-num">共{{ num }}件商品</div>
      </div>
    </div>
    <!-- 选择支付方式 -->
    <div class="payWay">
      <dl>
        <dt>选择支付方式：</dt>
        <dd>
          <img :src="zhifubao" alt="" />
          <div class="payName">支付宝支付</div>
          <van-checkbox
            v-model="zhifubaoPay"
            @click="zhifubaoPayCheck"
            icon-size="24px"
          ></van-checkbox>
        </dd>
        <dd>
          <img :src="weixin" alt="" />
          <div class="payName">微信支付</div>
          <van-checkbox
            v-model="weixinPay"
            @click="weixinPayCheck"
            icon-size="24px"
          ></van-checkbox>
        </dd>
      </dl>
    </div>
    <!-- 订单底部 -->
    <div class="order-footer">
      <p>
        总计:<span>￥{{ total }}</span>
      </p>
      <button @click="submit">下单并支付</button>
    </div>

    <!-- 弹窗提示 -->
    <van-popup
      v-model="invoiceflag"
      closeable
      position="bottom"
      :style="{ height: '50%' }"
    >
      <div class="eleInvoice">
        <div class="title">电子发票</div>
        <div class="content">
          电子发票是税务局认可的有效凭证，与传统纸质发票具有同等法律效力，可在证明保修资格以及申请维修时使用。如需纸质发票可自行下载打印。电子发票将在订单发货后，发送到收货人手机上。如未收到，请联系客服获取。
        </div>
        <div class="btn" @click="invoiceflag = false">确定</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data() {
    return {
      name: "",
      tel: "",
      total: 0,
      lists: [],
      num: 0,
      invoiceflag: false, // 电子发票弹窗
      lookuser: "个人", // 抬头单位
      zhifubaoPay: true, // 支付宝方式
      weixinPay: false, // 微信方式
      zhifubao: require("../../assets/image/recommend/zhifubao.png"),
      weixin: require("../../assets/image/recommend/weixin.png")
    };
  },
  methods: {
    sum() {
      // 总价格计算
      // total 累加值
      this.total = this.lists.reduce((total, item) => {
        // 判断选项选中计算价格
        if (!item.isSelect) return total; //返回默认价格
        return total + parseInt(item.price) * parseInt(item.num); //总价格
      }, 0); //总价格默认值0
      this.total = this.total.toFixed(2);
      this.lists.forEach(item => {
        this.num = this.num + item.num;
      });
    },
    addressfun() {
      // 如果地址没有数据，直接跳转地址添加页面
      if (this.$store.state.address.lists.length == 0) {
        this.$router.push("/addressAdd");
      } else {
        this.$router.push("/address");
      }
    },
    zhifubaoPayCheck() {
      if (this.zhifubaoPay == true) {
        this.weixinPay = false;
      } else {
        this.weixinPay = true;
      }
    },
    weixinPayCheck() {
      if (this.weixinPay == true) {
        this.zhifubaoPay = false;
      } else {
        this.zhifubaoPay = true;
      }
    },
    cartvue() {
      // 保存订单数据
      let order = {
        orderId: new Date().getTime(),
        address: this.address,
        goodsList: this.lists,
        dateTime: new Date(),
        total: this.total,
        num: this.num,
        type: 1 //未支付
      };
      // 调用vuex订单数据状态
      this.$store.commit("order/add", order);
      // 清空购物车
      this.$store.state.cart.lists = [];
      this.$store.state.cart.num = 0;
      this.$router.push("/cart");
    },
    submit() {
      let order = {
        orderId: new Date().getTime(),
        address: this.address,
        goodsList: this.lists,
        dateTime: new Date(),
        total: this.total,
        num: this.num,
        type: 2 //已支付
      };

      // console.log(this.$store.state.order.lists);
      const toast = Toast.loading({
        duration: 0, // 持续展示 toast
        forbidClick: true,
        message: "正在支付中"
      });
      let second = 4;
      const timer = setInterval(() => {
        second--;
        if (second > 1) {
          toast.message = `正在支付中`;
        } else if (second == 1) {
          toast.message = `支付成功`;
        } else {
          clearInterval(timer);
          // 手动清除 Toast
          Toast.clear();
          // 调用vuex订单数据状态
          this.$store.commit("order/add", order);
          // 清空购物车
          this.$store.state.cart.lists = [];
          this.$store.state.cart.num = 0;
          this.$router.push("/orderlist/orderAll");
        }
      }, 1000);
    }
  },
  computed: {
    cardType() {
      return this.$store.state.address.lists.length == 0 ? "add" : "edit";
    }
  },
  created() {
    // 获取地址数据
    let data = this.$store.state.address.lists.find(item => item.isDefault);
    if (data) {
      this.name = data.name;
      this.tel = data.tel;
      this.address = data; // 定义地址对象
    }
    this.lists = this.$store.state.cart.lists;
    this.sum(); //计算总价格
  }
};
</script>

<style lang="scss" scoped>
// 订单头部样式
.order-header {
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
// 地址
.address {
  margin-top: 2px;
}
// 单元格
.cell {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fff;
  .left {
    // width: 91%;
    float: left;
    margin-left: 5px;
  }
  .right {
    float: right;
    margin-right: 5px;
  }
}
// 供应商
.supplier {
  height: 46px;
  margin-top: 10px;
  line-height: 46px;
  font-size: 15px;
  .supplier-title {
    float: left;
    color: #999;
    margin-left: 10px;
  }
  .supplier-content {
    float: left;
    color: #333;
    margin-left: 5px;
  }
}
// 订单信息
.phoneInfo {
  margin-top: 1px;
  height: 107px;
  img {
    width: 82px;
    height: 82px;
    margin-left: 10px;
    margin-top: 10px;
    float: left;
  }
  ul {
    height: 90px;
    width: 220px;
    float: left;
    margin-top: 10px;
    li {
      height: 30px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 15px;
      line-height: 30px;
      margin-left: 5px;
      &:first-child {
        color: #333;
      }
      &:nth-child(2) {
        color: #999;
      }
      &:last-child {
        color: #f04360;
      }
    }
  }
  .phoneInfo-num {
    font-size: 15px;
    color: #999;
    float: left;
    margin-top: 10px;
    margin-left: 10px;
  }
}
// 配送方式
.delivery {
  height: 48px;
  margin-top: 1px;
  line-height: 48px;
  font-size: 12.5px;
  .delivery-title {
    float: left;
    color: #999;
    margin-left: 10px;
  }
  .delivery-content {
    float: left;
    color: #333;
    margin-left: 20px;
  }
}
// 发票类型
.invoice {
  height: 48px;
  line-height: 48px;
  margin-top: 1px;
  .invoice-title {
    color: #999;
    margin-left: 10px;
  }
  .invoice-content {
    // float: right;
    color: #666;
    margin-right: 10px;
    span {
      margin-left: 3px;
    }
  }
}
// 发票抬头
.look {
  height: 48px;
  line-height: 48px;
  margin-top: 1px;
  position: relative;
  .look-title {
    color: #999;
    margin-left: 10px;
  }
  .look-content {
    position: absolute;
    right: 4px;
    top: 0;
    color: #666;
    margin-right: 10px;
    span {
      margin-left: 3px;
    }
  }
}
// 发票类型
.lookname {
  height: 48px;
  line-height: 48px;
  margin-top: 1px;
  .lookname-title {
    float: left;
    color: #999;
    margin-left: 10px;
  }
  .lookname-content {
    float: left;
    color: #999;
    margin-left: 10px;
    span {
      margin-left: 3px;
    }
  }
}
// 合计
.total {
  height: 48px;
  line-height: 48px;
  margin-top: 1px;
  font-size: 13px;
  color: #333;
  .total-price {
    float: right;
    margin-right: 5px;
  }
  .total-num {
    float: right;
    margin-right: 5px;
  }
}
// 支付方式
.payWay {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fff;
  margin-bottom: 70px;
  dl {
    dt {
      width: 100%;
      height: 25px;
      background-color: #f7f7f7;
      line-height: 25px;
      text-indent: 16px;
    }
    dd {
      height: 50px;
      line-height: 50px;
      border-top: 2px solid #f7f7f7;
      position: relative;
      img {
        float: left;
        width: 30px;
        height: 30px;
        margin-top: 10px;
        margin-left: 10px;
      }
      .payName {
        float: left;
        margin-left: 10px;
        color: #333;
        font-size: 14px;
      }
      .van-checkbox {
        position: absolute;
        top: 14px;
        right: 10px;
      }
    }
  }
}
// 订单底部
.order-footer {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  p {
    height: 52px;
    float: left;
    line-height: 52px;
    margin-left: 10px;
    font-size: 16px;
    span {
      margin-left: 3px;
      color: #f0415f;
    }
  }
  button {
    width: 115px;
    height: 52px;
    float: right;
    background-color: #f0415f;
    color: white;
    font-size: 16px;
    text-align: center;
    line-height: 52px;
    border: 0;
  }
}
.eleInvoice {
  width: 100%;
  height: 100%;
  font-size: 14px;
  position: relative;
  .title {
    height: 30px;
    line-height: 50px;
    text-align: center;
    color: #333;
  }
  .content {
    padding: 12px;
    color: #666;
    line-height: 28px;
  }
  .btn {
    width: 100%;
    height: 44px;
    position: absolute;
    bottom: 0;
    background-color: #00c3f5;
    color: white;
    text-align: center;
    line-height: 44px;
  }
}
</style>
