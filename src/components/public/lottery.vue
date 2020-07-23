<template>
  <div>
    <ul>
      <li :class="[index == 0 ? 'active' : '']">
        <img
          src="https://openfile.meizu.com/group1/M00/02/37/Cgbj0VnDdZaACwBwAAA_aOg5-Ag865.png"
          alt=""
        />
        <p>谢谢参与</p>
      </li>
      <li :class="[index == 1 ? 'active' : '']">
        <img
          src="https://openfile.meizu.com/group1/M00/06/F2/Cgbj0FxIJf6AXN1oAAWcJXHezNc434.png"
          alt=""
        />
        <p>5000元免单名额</p>
      </li>
      <li :class="[index == 2 ? 'active' : '']">
        <img
          src="https://openfile.meizu.com/group1/M00/07/D9/Cgbj0V6yoymASKVdAAkWaMa8W2U967.png"
          alt=""
        />
        <p>17周年鼠标垫</p>
      </li>
      <li :class="[index == 3 ? 'active' : '']">
        <img
          src="https://openfile.meizu.com/group1/M00/07/16/Cgbj0VyQRWKAHUA1AADNwjUY8Jw855.png"
          alt=""
        />
        <p>魅族太空杯</p>
      </li>
      <a @click="startRoll">
        <p>立即抽奖</p>
        <span v-if="$store.state.username == null">先登录再抽奖</span>
      </a>
      <li :class="[index == 4 ? 'active' : '']">
        <img
          src="https://openfile.meizu.com/group1/M00/07/23/Cgbj0Vy2hY2AZsSzAA0erfWb5l0521.png"
          alt=""
        />
        <p>魅族颈部靠枕</p>
      </li>
      <li :class="[index == 5 ? 'active' : '']">
        <img
          src="https://openfile.meizu.com/group1/M00/06/F2/Cgbj0FxIJf6AXN1oAAWcJXHezNc434.png"
          alt=""
        />
        <p>299元免单名额</p>
      </li>
      <li :class="[index == 6 ? 'active' : '']">
        <img
          src="https://openfile.meizu.com/group1/M00/07/D8/Cgbj0V6v0omAXJBsAAXyIINJHWI802.png"
          alt=""
        />
        <p>17周年笔记本</p>
      </li>
      <li :class="[index == 7 ? 'active' : '']">
        <img
          src="https://openfile.meizu.com/group1/M00/06/F2/Cgbj0FxIJf6AXN1oAAWcJXHezNc434.png"
          alt=""
        />
        <p>618免单名额</p>
      </li>
      <ol class="border-lightTop">
        <li>
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmL0mGADy2aAAAKKUoqMJs498.png"
            alt=""
            v-if="lightflag == false"
          />
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmLzZ6AFXj9AAAQ0kSOJDQ996.png"
            alt=""
            v-if="lightflag == true"
          />
        </li>
        <li>
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmL0mGADy2aAAAKKUoqMJs498.png"
            alt=""
            v-if="lightflag == true"
          />
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmLzZ6AFXj9AAAQ0kSOJDQ996.png"
            alt=""
            v-if="lightflag == false"
          />
        </li>
        <li>
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmL0mGADy2aAAAKKUoqMJs498.png"
            alt=""
            v-if="lightflag == false"
          />
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmLzZ6AFXj9AAAQ0kSOJDQ996.png"
            alt=""
            v-if="lightflag == true"
          />
        </li>
        <li>
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmL0mGADy2aAAAKKUoqMJs498.png"
            alt=""
            v-if="lightflag == true"
          />
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmLzZ6AFXj9AAAQ0kSOJDQ996.png"
            alt=""
            v-if="lightflag == false"
          />
        </li>
        <li>
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmL0mGADy2aAAAKKUoqMJs498.png"
            alt=""
            v-if="lightflag == false"
          />
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmLzZ6AFXj9AAAQ0kSOJDQ996.png"
            alt=""
            v-if="lightflag == true"
          />
        </li>
      </ol>
      <ol class="border-lightLeft">
        <li>
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmL0mGADy2aAAAKKUoqMJs498.png"
            alt=""
            v-if="lightflag == true"
          />
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmLzZ6AFXj9AAAQ0kSOJDQ996.png"
            alt=""
            v-if="lightflag == false"
          />
        </li>
        <li>
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmL0mGADy2aAAAKKUoqMJs498.png"
            alt=""
            v-if="lightflag == false"
          />
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmLzZ6AFXj9AAAQ0kSOJDQ996.png"
            alt=""
            v-if="lightflag == true"
          />
        </li>
      </ol>
      <ol class="border-lightRight">
        <li>
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmL0mGADy2aAAAKKUoqMJs498.png"
            alt=""
            v-if="lightflag == true"
          />
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmLzZ6AFXj9AAAQ0kSOJDQ996.png"
            alt=""
            v-if="lightflag == false"
          />
        </li>
        <li>
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmL0mGADy2aAAAKKUoqMJs498.png"
            alt=""
            v-if="lightflag == false"
          />
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmLzZ6AFXj9AAAQ0kSOJDQ996.png"
            alt=""
            v-if="lightflag == true"
          />
        </li>
      </ol>
      <ol class="border-lightBottom">
        <li>
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmL0mGADy2aAAAKKUoqMJs498.png"
            alt=""
            v-if="lightflag == true"
          />
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmLzZ6AFXj9AAAQ0kSOJDQ996.png"
            alt=""
            v-if="lightflag == false"
          />
        </li>
        <li>
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmL0mGADy2aAAAKKUoqMJs498.png"
            alt=""
            v-if="lightflag == false"
          />
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmLzZ6AFXj9AAAQ0kSOJDQ996.png"
            alt=""
            v-if="lightflag == true"
          />
        </li>
        <li>
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmL0mGADy2aAAAKKUoqMJs498.png"
            alt=""
            v-if="lightflag == true"
          />
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmLzZ6AFXj9AAAQ0kSOJDQ996.png"
            alt=""
            v-if="lightflag == false"
          />
        </li>
        <li>
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmL0mGADy2aAAAKKUoqMJs498.png"
            alt=""
            v-if="lightflag == false"
          />
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmLzZ6AFXj9AAAQ0kSOJDQ996.png"
            alt=""
            v-if="lightflag == true"
          />
        </li>
        <li>
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmL0mGADy2aAAAKKUoqMJs498.png"
            alt=""
            v-if="lightflag == true"
          />
          <img
            src="//openfile.meizu.com/group1/M00/01/D4/Cgbj0VmLzZ6AFXj9AAAQ0kSOJDQ996.png"
            alt=""
            v-if="lightflag == false"
          />
        </li>
      </ol>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: -1, // 当前转动到哪个位置，起点位置
      count: 8, //总共有多少位置
      timer: 0, //每次转动定时器
      speed: 200, //初始转动速度
      times: 0, // 转动次数
      cycle: 3, //转动基数：至少需要转动多少次再进入抽奖环节
      prize: 0, //中奖位置,
      num: 0,
      lightflag: true // 控制跑马灯显示效果
    };
  },
  methods: {
    // 开始抽奖
    startRoll: function() {
      if (this.$store.state.username) {
        this.times += 1; //转动次数
        this.oneRoll(); // 转动过程调用的每一次转动方法，这里是第一次调用初始化
        this.usePrize();
        this.prize = Math.floor(Math.random() * 8);
      } else {
        this.$router.push({
          path: "/login",
          query: {
            path: "/order"
          }
        });
      }
    },
    // 转动的方法
    oneRoll: function() {
      let index = this.index; //当前转动到的位置
      const count = 8; //总共的位置
      index += 1;
      if (index > count - 1) {
        index = 0;
      }
      this.index = index;
    },
    //判断是否转到中奖位置，如果是，停止，如果不是，继续转动
    usePrize: function() {
      // 判断是否达到转动次数要求且转到的位置是中奖位置
      if (this.times > this.cycle + 10 && this.prize === this.index) {
        clearTimeout(this.timer); //清除定时器，转动停止
        this.times = 0;
        this.giftopen = true; //显示开奖界面
        // alert('恭喜你，中奖了')
      } else {
        //否则继续转动
        if (this.times < this.cycle) {
          this.speed -= 5;
        }
        this.timer = setTimeout(this.startRoll, this.speed);
      }
    }
  },
  created() {
    // 控制跑马灯
    let that = this;
    setInterval(() => {
      that.num++;
      if (that.num % 2 == 0) {
        that.lightflag = false;
      } else {
        that.lightflag = true;
      }
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  width: 312px;
  height: 200px;
  background-color: #ac1f2a;
  position: relative;
  margin: auto;
  .border-lightTop {
    width: 348px;
    height: 18px;
    position: absolute;
    left: -18px;
    top: -18px;
    display: flex;
    & > li {
      height: 18px;
      flex: 1;
      background-color: #f95f5f;
      text-align: center;
      & > img {
        display: inline-block;
        width: 18px;
        height: 18px;
      }
    }
  }
  .border-lightLeft {
    position: absolute;
    width: 18px;
    height: 200px;
    top: 0;
    left: -18px;
    & > li {
      width: 18px;
      height: 100px;
      background-color: #f95f5f;
      line-height: 100px;
      & > img {
        display: inline-block;
        width: 20px;
        height: 20px;
      }
    }
  }
  .border-lightRight {
    position: absolute;
    width: 18px;
    height: 200px;
    top: 0;
    right: -18px;
    & > li {
      width: 18px;
      height: 100px;
      line-height: 100px;
      background-color: #f95f5f;
      & > img {
        display: inline-block;
        width: 18px;
        height: 18px;
      }
    }
  }
  .border-lightBottom {
    width: 348px;
    height: 18px;
    position: absolute;
    left: -18px;
    bottom: -18px;
    display: flex;
    & > li {
      height: 18px;
      flex: 1;
      text-align: center;
      background-color: #f95f5f;
      & > img {
        display: inline-block;
        width: 18px;
        height: 18px;
      }
    }
  }
  & > li {
    width: 97.5px;
    height: 60px;
    // border: 1px solid #565656;
    float: left;
    text-align: center;
    margin-left: 5px;
    margin-top: 5px;
    background-color: #fdefed;
    &.active {
      border: 3px solid #f59936;
      background-color: #fff;
      box-sizing: border-box;
    }
    & > img {
      display: inline-block;
      width: 31px;
      height: 31px;
      margin-top: 5px;
    }
    & > p {
      width: 90%;
      color: #e63a44;
      font-size: 10px;
      margin: 0 auto;
    }
  }
  a {
    width: 97.5px;
    height: 60px;
    float: left;
    text-align: center;
    margin-left: 5px;
    margin-top: 5px;
    background-color: #feda57;
    box-shadow: -2px -2px 0px 1px inset #de9d24;
    & > p {
      display: inline-block;
      color: #e63a44;
      font-size: 14px;
      margin-top: 18px;
      font-weight: bold;
    }
    & > span {
      display: inline-block;
      color: white;
    }
  }
}
</style>
