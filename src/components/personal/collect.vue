<template>
  <div>
    <!-- 收藏头部 -->
    <div class="collect-header">
      <div class="left" @click="$router.push('/personal')">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span>我的收藏</span>
      </div>
      <div class="right"></div>
    </div>
    <!-- 收藏内容 -->
    <div class="collect-content">
      <ul v-if="$store.state.collect.lists != ''">
        <li v-for="(item, index) in $store.state.collect.lists" :key="index">
          <img :src="item.img" alt />
          <div class="info">
            <div class="name">{{ item.name }}</div>
            <div class="information">{{ item.information }}</div>
            <div class="price">{{ item.price }}</div>
          </div>
          <div class="del" @click="delCollect">
            <span class="iconfont iconlajitong"></span>
          </div>
        </li>
      </ul>
      <p v-if="$store.state.collect.lists == ''">没有更多了</p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    delCollect() {
      this.$store.commit("collect/del", this.$store.state.collect.lists);
      console.log(this.$store.state.collect.lists);
    }
  }
};
</script>

<style lang="scss" scoped>
// 收藏头部样式
.collect-header {
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
// 收藏内容样式
.collect-content {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  margin-top: 10px;
  ul {
    li {
      height: 114px;
      background-color: #fff;
      overflow: hidden;
      position: relative;
      img {
        float: left;
        width: 82px;
        height: 82px;
        margin-left: 10px;
        margin-top: 20px;
      }
      .info {
        // background-color: pink;
        .name {
          font-size: 14px;
          margin-top: 10px;
          margin-left: 110px;
        }
        .information {
          width: 200px;
          font-size: 12px;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          margin-left: 110px;
          margin-top: 5px;
        }
        .price {
          font-size: 12px;
          margin-top: 5px;
          margin-left: 110px;
        }
      }
      .del {
        position: absolute;
        right: 10px;
        bottom: 5px;
      }
    }
  }
  p {
    margin-top: 20px;
    color: #999;
    text-align: center;
  }
}
</style>
