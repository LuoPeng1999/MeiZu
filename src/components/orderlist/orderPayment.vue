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
          <!-- 待支付 -->
          <van-button size="mini" type="primary" @click="onPay(index)"
            >支付订单</van-button
          >
          <van-button size="mini" type="danger" @click="onDel(index)"
            >删除订单</van-button
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  created() {
    let dataList = this.$store.state.order.lists;
    this.lists = dataList.filter(item => item.type == 1); //类型为一生成新数组
    this.typeList = this.$store.state.order.typeList;
    if (!this.lists.length) {
      Toast("添加商品");
    }
    this.$store.state.orderactive = 1;
  },
  methods: {
    onPay(index) {
      // let index = this.lists.findIndex(item=>item.orderId == orderId);
      this.lists[index].type = 2; //切换支付后收货类型，调用支付接口
      Toast("修改待收货");
    },
    onDel(index) {
      this.lists[index].type = 6; //修改一个没有类型删除
      Toast("删除数据");
    }
  },
  // 组件销毁
  beforeDestroy() {
    if (this.lists.length) {
      this.$store.commit("order/editId", this.lists);
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
</style>
