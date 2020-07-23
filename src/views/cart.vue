<template>
  <div>
    <!-- 购物车头部 -->
    <div class="cart-header">
      <div class="left" @click="$router.push('/recommend')">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span @click="$router.push('/recommend')">购物车</span>
      </div>
      <div class="right">
        <span v-if="delflag == false" @click="delflag = !delflag">编辑</span>
        <span v-if="delflag == true" @click="delflag = !delflag">完成</span>
      </div>
    </div>
    <!-- 购物车空状态 -->
    <div class="cart-empty" v-if="$store.state.cart.lists == ''">
      <p>购物车内还没有商品,赶紧去选购吧~</p>
      <button @click="$router.push('/recommend')">随便逛逛</button>
    </div>
    <!-- vant布局组件 -->
    <van-row class="goods-header" v-if="$store.state.cart.lists != ''">
      <van-col span="3">
        <van-checkbox
          :value="checked"
          @click="checkedAll"
          icon-size="24px"
        ></van-checkbox>
      </van-col>
      <van-col span="2">
        <p>魅族</p>
      </van-col>
      <van-col span="14">
        <p v-show="checked == false">
          再买<font color="#f0415f">￥80.00</font>即可免运费
        </p>
      </van-col>
      <van-col span="5">
        <p v-show="checked == true">已免运费</p>
        <p v-show="checked == false" @click="$router.push('/recommend')">
          去凑单<span class="iconfont iconright"></span>
        </p>
      </van-col>
    </van-row>
    <van-row class="goods-content" v-for="(item, index) in lists" :key="index">
      <van-col span="3">
        <van-checkbox
          :value="item.isSelect"
          icon-size="24px"
          @click="inputselect(index)"
        ></van-checkbox>
      </van-col>
      <van-col span="7">
        <van-image
          height="83"
          width="83"
          fit="cover"
          :src="item.previewImgUrl"
        />
      </van-col>
      <van-col span="14">
        <div class="detail">
          <div class="detail-name">{{ item.name }}</div>
          <div class="detail-info">
            {{ item.webType }} {{ item.color }} {{ item.ram }}
            {{ item.package }}
          </div>
          <div class="detail-price">￥{{ item.price }}</div>
          <div class="detail-num">x{{ item.num }}</div>
        </div>
      </van-col>
    </van-row>

    <!-- 底部结算栏 -->
    <div class="goods-footer" v-if="$store.state.cart.lists != ''">
      <van-checkbox
        :value="checked"
        icon-size="24px"
        @click="checkedAll"
      ></van-checkbox>
      <span>全选</span>
      <div class="total" v-if="delflag == false">
        <span>总计:</span>
        <font color="#f0415f">￥{{ total }}</font>
        <button @click="submit">结算</button>
      </div>
      <button v-if="delflag == true" @click="show = true">删除</button>
    </div>

    <!-- 确定删除弹框 -->
    <van-dialog
      v-model="show"
      title="标题"
      show-cancel-button
      message="您确定要删除选中的商品吗?"
      @confirm="del"
      @cancel="show = false"
    >
    </van-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      total: 0,
      lists: [],
      delflag: false, // 删除状态
      show: false
    };
  },
  methods: {
    del() {
      for (var i = 0; i < this.lists.length; i++) {
        if (this.lists[i].isSelect == true) {
          this.lists.splice(i, 1);
        }
      }
      this.delflag = false;
    },
    // 总价格计算
    sum() {
      this.total = this.lists.reduce((total, item) => {
        if (!item.isSelect) return total;
        return total + parseInt(item.price) * parseInt(item.num); //总价格
      }, 0); //总价格默认值0
    },
    checkedAll() {
      this.lists.forEach(item => {
        item.isSelect = !this.checked;
      });
      this.checked = !this.checked;
    },
    checkboxclick() {
      this.checked = this.lists.every(item => {
        return item.isSelect;
      });
    },
    // 修改商品列表
    inputselect(index) {
      this.lists[index].isSelect = !this.lists[index].isSelect;
      this.checkboxclick();
      this.sum();
    },
    submit() {
      if (this.$store.state.username) {
        this.$router.push("/order");
      } else {
        this.$router.push({
          path: "/login",
          query: {
            path: "/order"
          }
        });
      }
    }
  },
  created() {
    this.lists = this.$store.state.cart.lists;
    this.checkboxclick();
    this.sum();
  },
  beforeUpdate() {
    this.sum();
  },
  beforeDestroy() {
    this.$store.commit("cart/edit", this.lists);
  }
};
</script>

<style lang="scss" scoped>
// 购物车头部样式
.cart-header {
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
// 布局组件添加样式
.goods-header {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  height: 53.6px;
  background-color: #fff;
  margin-top: 10px;
  line-height: 53.6px;
  font-size: 14px;
  color: #666;
  position: relative;
  .van-checkbox {
    position: absolute;
    left: 10px;
    top: 15px;
  }
}
.goods-content {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  height: 108px;
  background-color: #fff;
  position: relative;
  margin-top: 2px;
  .van-checkbox {
    position: absolute;
    left: 10px;
    top: 40px;
  }
  .van-image {
    top: 10px;
  }
  .detail {
    margin-top: 10px;
    .detail-name {
      width: 210px;
      height: 25px;
      font-size: 14px;
      color: #333;
      line-height: 25px;
    }
    .detail-info {
      width: 210px;
      height: 25px;
      font-size: 14px;
      color: #999;
      line-height: 25px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-top: 10px;
    }
    .detail-price {
      margin-top: 10px;
      float: left;
      font-size: 12px;
      color: #f0415f;
    }
    .detail-num {
      margin-top: 10px;
      float: right;
      margin-right: 10px;
      color: #999;
    }
  }
}
.goods-footer {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  height: 53.6px;
  background-color: #fff;
  margin-top: 10px;
  line-height: 53.6px;
  position: absolute;
  left: 0;
  bottom: 0;
  .van-checkbox {
    margin-left: 10px;
    display: inline-block;
    vertical-align: middle;
  }
  span {
    display: inline-block;
    height: 53.6px;
    line-height: 53.6px;
    color: #666;
    font-size: 12px;
    margin-left: 5px;
  }
  .total {
    float: right;
    font {
      margin-right: 20px;
    }
    button {
      width: 115px;
      height: 53.6px;
      border: 0;
      background-color: #f0415f;
      color: white;
      font-size: 14px;
      text-align: center;
      line-height: 53.6px;
    }
  }
  button {
    float: right;
    width: 115px;
    height: 53.6px;
    border: 0;
    background-color: #00c3f5;
    color: white;
    font-size: 14px;
    text-align: center;
    line-height: 53.6px;
  }
}

// 购物车空状态
.cart-empty {
  width: 100%;
  height: 84px;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #f7f7f7;
  text-align: center;
  margin-top: 220px;
  p {
    font-size: 12px;
    color: #666;
  }
  button {
    outline: none;
    border: none;
    width: 114px;
    height: 37px;
    background-color: #00c3f5;
    color: white;
    font-size: 16px;
    text-align: center;
    line-height: 37px;
    border-radius: 5px;
    margin-top: 35px;
  }
}
</style>
