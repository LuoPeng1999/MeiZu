<template>
  <div>
    <!-- 搜索框 -->
    <div class="search-input">
      <div class="goback" @click="$router.go(-1)">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="input">
        <input type="text" @input="search" v-model="searchVal" ref="input" />
        <span class="iconfont iconsousuo icon-search"></span>
        <span
          class="iconfont iconquxiaocopy icon-cancel"
          @click="clearData"
        ></span>
      </div>
      <div class="search" @click="getSearch(null)">
        搜索
      </div>
    </div>

    <!-- 搜索列表 -->
    <div class="search-list" v-if="searchflag">
      <ul>
        <li
          v-for="(item, index) in searchlist"
          :key="index"
          @click="getSearch(index)"
        >
          {{ item[0] }}
        </li>
      </ul>
    </div>

    <!-- 热点搜索 -->
    <div class="search-hot">
      <p>大家都在搜</p>
      <a href="javascript:;" @click="hotSearch">魅族 POP2</a>
    </div>

    <!-- 历史记录 -->
    <div class="search-history">
      <div class="history-title">
        <p>历史记录</p>
        <span
          class="iconfont iconlajitong"
          @click="clearhistory"
          v-show="this.$store.state.search.lists != ''"
        ></span>
      </div>
      <div class="history-content">
        <ul>
          <li v-for="(val, index) in $store.state.search.lists" :key="index">
            {{ val }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchVal: "",
      searchlist: [],
      searchflag: false
    };
  },
  methods: {
    // http://suggest.taobao.com/sug?area=etao&code=utf-8&callback=KISSY.Suggest.callback&q=设计
    search() {
      this.$jsonp("http://suggest.taobao.com/sug", {
        area: "etao",
        code: "utf-8",
        q: this.searchVal
      }).then(json => {
        this.searchlist = json.result;
        if (this.searchlist != "") {
          this.searchflag = true;
        } else {
          this.searchflag = false;
        }
        // console.log(json);
        // console.log(this.searchlist);
      });
    },
    clearData() {
      this.searchVal = "";
      this.searchlist = [];
      this.searchflag = false;
    },
    hotSearch() {
      this.searchVal = "魅族POP2";
      this.search();
    },
    getSearch(index = null) {
      let searchcontent =
        index == null ? this.searchVal : this.searchlist[index][0];
      if (searchcontent == "魅族17") {
        this.$router.push("/meizu17");
      }
      if (searchcontent == "魅族17pro官方") {
        this.$router.push("/meizu17pro");
      }
      if (searchcontent == "魅族16t") {
        this.$router.push("/meizu16t");
      }
      this.$store.commit("search/add", searchcontent);
      this.searchVal = "";
      this.searchlist = [];
      this.searchflag = false;
      // console.log(this.$store.state.search.lists);
      // this.$router.push();
    },
    clearhistory() {
      this.$store.state.search.lists = [];
    }
  }
};
</script>

<style lang="scss" scoped>
// 搜索框样式
.search-input {
  width: 100%;
  height: 44px;
  max-width: 436px;
  min-width: 320px;
  background-color: #fff;
  margin: 0 auto;
  border-bottom: 1px solid #f0f0f0;
  .goback {
    width: 12%;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: left;
    & > span {
      font-size: 20px;
      font-weight: bold;
    }
  }
  .input {
    width: 71%;
    height: 44px;
    float: left;
    position: relative;
    & > input {
      width: 100%;
      height: 30px;
      background-color: #eee;
      margin-top: 7px;
      border-radius: 30px;
      text-indent: 30px;
    }
    .icon-search {
      position: absolute;
      left: 8px;
      top: 9px;
      color: #999;
      font-size: 18px;
    }
    .icon-cancel {
      position: absolute;
      right: 8px;
      top: 9px;
      color: #b5b5b5;
      font-size: 18px;
    }
  }
  .search {
    width: 17%;
    height: 44px;
    text-align: center;
    line-height: 44px;
    float: left;
    font-size: 14px;
    color: #666;
  }
}
// 热点搜索
.search-hot {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  background-color: #fff;
  margin: 0 auto;
  overflow: hidden;
  height: 161.5px;
  p {
    width: 92%;
    height: 20px;
    font-size: 15px;
    color: #333;
    margin: 0 auto;
    margin-top: 20px;
  }
  a {
    display: inline-block;
    width: 102.5px;
    height: 30px;
    margin-left: 4%;
    margin-top: 4%;
    color: #666;
    border: 1px solid #999;
    text-overflow: ellipsis;
    white-space: nowrap;
    line-height: 30px;
    text-align: center;
    border-radius: 30px;
    font-size: 14px;
  }
}
// 搜索列表
.search-list {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  background-color: #fff;
  margin: 0 auto;
  overflow: hidden;
  height: 480px;
  position: absolute;
  left: 0;
  top: 44px;
  ul {
    width: 92%;
    margin: 0 auto;
    li {
      height: 48px;
      line-height: 48px;
      border-bottom: 1px solid #f0f0f0;
      box-sizing: border-box;
      font-size: 14px;
      color: #333;
    }
  }
}
// 历史记录
.search-history {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  background-color: #fff;
  margin: 0 auto;
  overflow: hidden;
  height: 450px;
  margin-top: 10px;
  .history-title {
    width: 92%;
    margin: 0 auto;
    height: 47px;
    line-height: 47px;
    font-size: 15px;
    color: #333;
    border-bottom: 1px solid #f0f0f0;
    p {
      width: 50%;
      float: left;
    }
    span {
      float: right;
      width: 50%;
      text-align: right;
      font-size: 20px;
    }
  }
  .history-content {
    width: 92%;
    margin: 0 auto;
    ul {
      color: #666;
      font-size: 15px;
      li {
        height: 47px;
        line-height: 47px;
        border-bottom: 1px solid #f0f0f0;
      }
    }
  }
}
</style>
