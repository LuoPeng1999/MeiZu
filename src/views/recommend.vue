<template>
  <div>
    <publicnav></publicnav>
    <!-- 轮播图 -->
    <div class="recommend-banner">
      <div class="swiper-container meizuSwiperBanner">
        <div class="swiper-wrapper">
          <div class="swiper-slide" @click="$router.push('/banner')">
            <img :src="banner01" alt="" />
          </div>
          <div class="swiper-slide">
            <img :src="banner02" alt="" />
          </div>
          <div class="swiper-slide">
            <img :src="banner03" alt="" />
          </div>
          <div class="swiper-slide">
            <img :src="banner04" alt="" />
          </div>
          <div class="swiper-slide">
            <img :src="banner05" alt="" />
          </div>
          <div class="swiper-slide">
            <img :src="banner06" alt="" />
          </div>
          <div class="swiper-slide">
            <img :src="banner07" alt="" />
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <!-- 热点顶部 -->
    <div class="recommend-hottop">
      <ul>
        <li>
          <span class="iconfont iconm"></span>
          <span>魅族官方直供</span>
        </li>
        <li>
          <span class="iconfont iconyunfei"></span>
          <span>满80免运费</span>
        </li>
        <li>
          <span class="iconfont icon7"></span>
          <span>7天无理由退货</span>
        </li>
      </ul>
    </div>
    <!-- 热点底部 -->
    <div class="recommend-hotbottom">
      <ul>
        <router-link tag="li" to="/banner">
          <img :src="hotbottom01" alt="" />
          <p>魅族开门红</p>
        </router-link>
        <router-link tag="li" to="/banner">
          <img :src="hotbottom02" alt="" />
          <p>配件狂欢购</p>
        </router-link>
        <router-link tag="li" to="/meizu17">
          <img :src="hotbottom03" alt="" />
          <p>魅族17</p>
        </router-link>
        <router-link tag="li" to="/banner">
          <img :src="hotbottom04" alt="" />
          <p>mCycle</p>
        </router-link>
      </ul>
    </div>
    <!-- 热点内容 -->
    <div class="recommend-hotcontent">
      <div class="left">
        <img :src="hotcontent01" alt="" @click="$router.push('/meizu17')" />
      </div>
      <div class="right">
        <img :src="hotcontent02" alt="" @click="$router.push('/meizu17pro')" />
        <img :src="hotcontent03" alt="" />
      </div>
    </div>

    <!-- 智能手机 -->
    <div class="phone">
      <div class="phone-title">
        <h3>智能手机<span></span></h3>
      </div>
      <div class="phone-banner">
        <img :src="phoneBanner" alt="" />
      </div>
      <div class="phone-goodslist">
        <ul>
          <router-link
            tag="li"
            v-for="(item, index) in phonelist"
            :key="index"
            :to="item.to"
          >
            <div class="goodslist-img">
              <img :src="item.img" alt="" />
            </div>
            <div class="goodslist-name">
              <p>{{ item.name }}</p>
            </div>
            <div class="goodslist-title">
              <p :class="{ normal: !item.hotflag }">
                <span v-show="item.hotflag">{{ item.hotword }}</span
                >{{ item.description }}
              </p>
            </div>
            <div class="goodslist-price">
              {{ item.nowprice }}<s>{{ item.oldprice }}</s>
            </div>
          </router-link>
        </ul>
      </div>
    </div>

    <!-- 魅族声学 -->
    <div class="acoustics">
      <div class="acoustics-title">
        <h3>魅族声学<span></span></h3>
      </div>
      <div class="acoustics-banner">
        <ul>
          <li>
            <img :src="acousticsBanner01" alt="" />
          </li>
          <li>
            <div class="headset-name">
              <p>魅族 HD60 降噪耳机</p>
            </div>
            <div class="headset-detail">
              <p>
                索尼主动降噪芯片 | 40mm镀铍振膜 | 触控操作 | USB - C 快充 |
                轻奢品质
              </p>
            </div>
            <div class="headset-price">
              <p><i>￥</i><em>1099</em><s></s></p>
            </div>
          </li>
          <li>
            <div class="headset-name">
              <p>魅族 POP2 真无线蓝牙耳机</p>
            </div>
            <div class="headset-detail">
              <p>
                蓝牙5.0 | 单次8H续航 | 石墨烯振膜 | 双耳通话 | 轻触操作 |
                轻盈舒适
              </p>
            </div>
            <div class="headset-price">
              <p><i>￥</i><em>299</em><s>￥399</s></p>
            </div>
          </li>
          <li>
            <img :src="acousticsBanner02" alt="" />
          </li>
        </ul>
      </div>
      <div class="acoustics-goodslist">
        <ul>
          <li v-for="(item, key) in acousticslist" :key="key">
            <div class="goodslist-img">
              <img :src="item.img" alt="" />
            </div>
            <div class="goodslist-name">
              <p>{{ item.name }}</p>
            </div>
            <div class="goodslist-title">
              <p :class="{ normal: !item.hotflag }">
                <span v-show="item.hotflag">{{ item.hotword }}</span
                >{{ item.description }}
              </p>
            </div>
            <div class="goodslist-price">
              {{ item.nowprice }}<s>{{ item.oldprice }}</s>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 智能配件 -->
    <div class="fitting">
      <div class="fitting-title">
        <h3>智能配件<span></span></h3>
      </div>
      <div class="fitting-banner">
        <ul>
          <li>
            <img :src="fittingBanner01" alt="" />
          </li>
          <li>
            <div class="headset-name">
              <p>魅族无线超充板</p>
            </div>
            <div class="headset-detail">
              <p>
                27W 无线快充 | 主动散热 | 智能静音 | 玉润设计
              </p>
            </div>
            <div class="headset-price">
              <p><i>￥</i><em>169</em><s></s></p>
            </div>
          </li>
          <li>
            <div class="headset-name">
              <p>Pandaer 「17」系列 手机壳</p>
            </div>
            <div class="headset-detail">
              <p>
                Pandaer 家族 | 潮趣个性 | 官方适配
              </p>
            </div>
            <div class="headset-price">
              <p><i>￥</i><em>49</em><s></s></p>
            </div>
          </li>
          <li>
            <img :src="fittingBanner02" alt="" />
          </li>
        </ul>
      </div>
      <div class="fitting-goodslist">
        <ul>
          <li v-for="(item, key) in fittinglist" :key="key">
            <div class="goodslist-img">
              <img :src="item.img" alt="" />
            </div>
            <div class="goodslist-name">
              <p>{{ item.name }}</p>
            </div>
            <div class="goodslist-title">
              <p :class="{ normal: !item.hotflag }">
                <span v-show="item.hotflag">{{ item.hotword }}</span
                >{{ item.description }}
              </p>
            </div>
            <div class="goodslist-price">
              {{ item.nowprice }}<s>{{ item.oldprice }}</s>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 生活周边 -->
    <div class="life">
      <div class="life-title">
        <h3>生活周边<span></span></h3>
      </div>
      <div class="life-banner">
        <ul>
          <li>
            <img :src="lifeBanner01" alt="" />
          </li>
          <li>
            <div class="headset-name">
              <p>魅族 HD60 降噪耳机</p>
            </div>
            <div class="headset-detail">
              <p>
                索尼主动降噪芯片 | 40mm镀铍振膜 | 触控操作 | USB - C 快充 |
                轻奢品质
              </p>
            </div>
            <div class="headset-price">
              <p><i>￥</i><em>1099</em><s></s></p>
            </div>
          </li>
          <li>
            <div class="headset-name">
              <p>Pandaer 「17」系列 T恤</p>
            </div>
            <div class="headset-detail">
              <p>
                潮酷印花 | 丝绸手感 | 100％长绒棉
              </p>
            </div>
            <div class="headset-price">
              <p><i>￥</i><em>269</em><s></s></p>
            </div>
          </li>
          <li>
            <img :src="lifeBanner02" alt="" />
          </li>
        </ul>
      </div>
      <div class="life-goodslist">
        <ul>
          <li v-for="(item, key) in lifelist" :key="key">
            <div class="goodslist-img">
              <img :src="item.img" alt="" />
            </div>
            <div class="goodslist-name">
              <p>{{ item.name }}</p>
            </div>
            <div class="goodslist-title">
              <p :class="{ normal: !item.hotflag }">
                <span v-show="item.hotflag">{{ item.hotword }}</span
                >{{ item.description }}
              </p>
            </div>
            <div class="goodslist-price">
              {{ item.nowprice }}<s>{{ item.oldprice }}</s>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 社区热帖 -->
    <div class="community">
      <div class="community-title">
        <h3>社区热帖<span></span></h3>
      </div>
      <!-- <div class="community-banner">
        <ul>
          <li>
            <img :src="lifeBanner01" alt="" />
          </li>
          <li>
            <div class="headset-name">
              <p>魅族 HD60 降噪耳机</p>
            </div>
            <div class="headset-detail">
              <p>
                索尼主动降噪芯片 | 40mm镀铍振膜 | 触控操作 | USB - C 快充 |
                轻奢品质
              </p>
            </div>
            <div class="headset-price">
              <p><i>￥</i><em>1099</em><s></s></p>
            </div>
          </li>
          <li>
            <div class="headset-name">
              <p>Pandaer 「17」系列 T恤</p>
            </div>
            <div class="headset-detail">
              <p>
                潮酷印花 | 丝绸手感 | 100％长绒棉
              </p>
            </div>
            <div class="headset-price">
              <p><i>￥</i><em>269</em><s></s></p>
            </div>
          </li>
          <li>
            <img :src="lifeBanner02" alt="" />
          </li>
        </ul>
      </div> -->
      <div class="community-goodslist">
        <ul>
          <li v-for="(item, index) in communitylist" :key="index">
            <div class="goodslist-img">
              <img :src="item.communityImg" alt="" />
            </div>
            <div class="user-comment">
              <div class="user-info">
                <div class="user-img">
                  <img :src="item.avatar" alt="" />
                </div>
                <div class="user-name">
                  <p>{{ item.username }}</p>
                </div>
              </div>
              <div class="user-content">
                <p>{{ item.communitycontent }}</p>
              </div>
              <div class="user-phone">
                <p>{{ item.userphone }}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- Flyme -->
    <div class="flyme">
      <div class="flyme-title">
        <h3>Flyme<span></span></h3>
      </div>
      <div class="flyme-goodslist">
        <ul>
          <li v-for="(item, index) in flymelist" :key="index">
            <div class="goodslist-img">
              <img :src="item.flymeImg" alt="" />
            </div>
            <div class="function-comment">
              <p>{{ item.flymecontent }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 精彩视频 -->
    <div class="vedio">
      <div class="vedio-title">
        <h3>精彩视频<span></span></h3>
      </div>
      <div class="vedio-goodslist">
        <ul>
          <li v-for="(item, index) in vediolist" :key="index">
            <div class="goodslist-img">
              <img :src="item.vedioImg" alt="" />
            </div>
            <div class="function-content">
              <p>{{ item.vediocontent }}</p>
              <span>
                <span
                  class="iconfont iconbofangkaobei"
                  @click="audioPlay(index)"
                ></span>
                <audio :src="item.vediofile" ref="audio"></audio>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <!-- 返回顶部 -->
    <div class="gotop" ref="gotop">
      <span @click="gotop">返回顶部</span>
    </div>

    <!-- 底部详情 -->
    <div class="footerClass">
      <div class="footer-top">
        <div class="tel">
          <a href="tel:400-788-3333">
            <span class="iconfont icondianhua"></span>
            <p>400-788-3333</p>
          </a>
        </div>
        <div class="customer" @click="$router.push('/customer')">
          <span class="iconfont iconbianzu"></span>
          <p>在线客服</p>
        </div>
      </div>
      <div class="footer-bottom">
        <ul>
          <li>粤ICP备13003602号-2合字B2-20170010</li>
          <li>营业执照©2018 Meizu All rights reserved</li>
        </ul>
        <div class="changeLuan">
          <ul>
            <li v-for="(item, index) in languagelist" :key="index">
              <img :src="item.img" alt="" />
              <p>{{ item.name }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import publicnav from "../components/public/publicnav";
export default {
  data() {
    return {
      // 手机数据
      phonelist: [
        {
          img: require("../assets/image/recommend/phone01.png"),
          name: "魅族 17",
          hotword: "现货",
          description: "高通骁龙 865 + UFS 3.1 高速闪存",
          nowprice: " ￥3699 ",
          oldprice: "",
          hotflag: true,
          to: "/meizu17"
        },
        {
          img: require("../assets/image/recommend/phone02.png"),
          name: "魅族 17 Pro",
          hotword: "新品",
          description: "高通骁龙 865 + UFS 3.1 + LPDDR5",
          nowprice: " ￥4299 ",
          oldprice: "",
          hotflag: true,
          to: "/meizu17pro"
        },
        {
          img: require("../assets/image/recommend/phone03.png"),
          name: "魅族 17 航母限定版",
          hotword: "新品",
          description: "以梦为舰 热爱起航",
          nowprice: " ￥4299 ",
          oldprice: "",
          hotflag: true,
          to: "/meizu17hm"
        },
        {
          img: require("../assets/image/recommend/phone04.png"),
          name: "魅族 17 Pro 晓芳窑艺术典藏版",
          hotword: "新品",
          description: "这艺术 科技极了",
          nowprice: " ￥9999 ",
          oldprice: "",
          hotflag: true,
          to: "/meizu17proxfy"
        },
        {
          img: require("../assets/image/recommend/phone05.png"),
          name: "魅族 16T",
          hotword: "热卖",
          description:
            "6.5英寸极边全面屏 | 骁龙855旗舰处理器 | 4500mAh续航怪兽 | UFS 3.0 高速闪存 ",
          nowprice: " ￥1999 ",
          oldprice: "",
          hotflag: true,
          to: "/meizu16t"
        },
        {
          img: require("../assets/image/recommend/phone06.png"),
          name: "魅族 16th",
          hotword: "",
          description:
            "骁龙845 | 屏幕下指纹 | 前后2000万像素摄像头 | 6.0英寸屏幕 | mEngine | 超线性双扬声器 |  铜管散热",
          nowprice: " ￥1898 ",
          oldprice: "￥2298",
          hotflag: false,
          to: "/meizu16th"
        },
        {
          img: require("../assets/image/recommend/phone07.png"),
          name: "魅族 16th Plus",
          hotword: "",
          description: "高通骁龙 865 + UFS 3.1 高速闪存",
          nowprice: " ￥2098 ",
          oldprice: "￥2698",
          hotflag: false,
          to: "/meizu16plus"
        },
        {
          img: require("../assets/image/recommend/phone08.png"),
          name: "魅族 X8",
          hotword: "",
          description:
            "骁龙710 | 6.2寸定制浅刘海屏 | 89.6%屏占比 | 旗舰双摄 | 人脸+指纹双解锁",
          nowprice: " ￥1298 ",
          oldprice: "￥1498",
          hotflag: false,
          to: "/meizux8"
        }
      ],
      // 耳机数据
      acousticslist: [
        {
          img: require("../assets/image/recommend/headsetgoodslist01.png"),
          name: "魅族 HD60 头戴式蓝牙耳机",
          hotword: "热卖",
          description:
            "40mm生物振膜  | Type-C充电 | 触控操作 | 蓝牙5.0 | 轻奢品质",
          nowprice: " ￥429 ",
          oldprice: "￥499",
          hotflag: true
        },
        {
          img: require("../assets/image/recommend/headsetgoodslist02.png"),
          name: "魅族 HIFI 解码耳放",
          hotword: "热卖",
          description:
            "高性能DAC芯片 | 纯净HiFi音质 | 600Ω高阻抗推力 | Type-C 转接线",
          nowprice: " ￥199 ",
          oldprice: "￥169",
          hotflag: true
        },
        {
          img: require("../assets/image/recommend/headsetgoodslist03.png"),
          name: "魅族 EP52 Lite 蓝牙耳机",
          hotword: "",
          description: "轻巧亲肤 | 生物纤维振膜 | 8小时续航 | IPX5级防水",
          nowprice: " ￥109 ",
          oldprice: "￥129",
          hotflag: false
        },
        {
          img: require("../assets/image/recommend/headsetgoodslist04.png"),
          name: "魅族 HiFi 解码耳放 PRO",
          hotword: "",
          description:
            "性能DAC芯片 | 超强二级运放 | Hi-Res 认证高解析音质 | 高阻抗推力 | Type-C转接线",
          nowprice: " ￥229 ",
          oldprice: "￥269",
          hotflag: false
        },
        {
          img: require("../assets/image/recommend/headsetgoodslist05.png"),
          name: "魅族 EP2X 耳机",
          hotword: "",
          description: "一体式线控 | 3.5mm接口 | 流线设计",
          nowprice: " ￥69 ",
          oldprice: "￥129",
          hotflag: false
        },
        {
          img: require("../assets/image/recommend/headsetgoodslist06.png"),
          name: "魅族 EP21耳机",
          hotword: "",
          description: "三键一体式线控 | 3.5mm接口 ",
          nowprice: " ￥39 ",
          oldprice: "￥89",
          hotflag: false
        },
        {
          img: require("../assets/image/recommend/headsetgoodslist07.png"),
          name: "魅族 POP2 真无线蓝牙耳机",
          hotword: "",
          description:
            "蓝牙5.0 | 单次8H续航 | 石墨烯振膜 | 双耳通话 | 轻触操作 | 轻盈舒适",
          nowprice: " ￥299 ",
          oldprice: "￥399",
          hotflag: false
        },
        {
          img: require("../assets/image/recommend/headsetgoodslist08.png"),
          name: "魅族 EP63NC 无线降噪耳机",
          hotword: "",
          description:
            "AMS 芯片智能降噪 | Qualcomm apt-X™ 高清音质 | 蓝牙一拖二连接 | 11小时超长续航 | 快充15分钟畅听3小时",
          nowprice: " ￥299 ",
          oldprice: "￥499",
          hotflag: false
        },
        {
          img: require("../assets/image/recommend/headsetgoodslist09.png"),
          name: "魅族 LIVE 四单元动铁耳机",
          hotword: "",
          description: "Knowles四动铁 双通道导音系统 现场级音乐表现",
          nowprice: " ￥899 ",
          oldprice: "￥1299",
          hotflag: false
        },
        {
          img: require("../assets/image/recommend/headsetgoodslist10.png"),
          name: "魅族 HALO 激光蓝牙耳机",
          hotword: "",
          description: "炫酷夜跑神器 随性张扬",
          nowprice: " ￥309 ",
          oldprice: "￥999",
          hotflag: false
        },
        {
          img: require("../assets/image/recommend/headsetgoodslist11.png"),
          name: "魅族蓝牙音频接收器",
          hotword: "",
          description: "独立音频芯片 | 一键控制 | 6小时续航 | 轻巧设计",
          nowprice: " ￥69 ",
          oldprice: "￥89",
          hotflag: false
        },
        {
          img: require("../assets/image/recommend/headsetgoodslist12.png"),
          name: "MEIZU UR 高端定制耳机  预约",
          hotword: "",
          description: "【预约专用】私人定制，为你而声",
          nowprice: " ￥200 ",
          oldprice: "",
          hotflag: false
        }
      ],
      // 配件数据
      fittinglist: [
        {
          img: require("../assets/image/recommend/fittinggoodslist01.png"),
          name: "Lifeme PD 快充线",
          hotword: "新品",
          description:
            "USB - C 转 Lightning | MFi 认证 | 3A 大电流 | PD 快充 | 兼容大部分苹果设备 ",
          nowprice: " ￥69 ",
          oldprice: "",
          hotflag: true
        },
        {
          img: require("../assets/image/recommend/fittinggoodslist02.png"),
          name: "魅族 17 系列 液态硅胶壳",
          hotword: "新品",
          description:
            "魅族 17 / 魅族 17 Pro 适用 | 官方适配 | 魅族手感 | 柔韧保护 ",
          nowprice: " ￥89 ",
          oldprice: "",
          hotflag: true
        },
        {
          img: require("../assets/image/recommend/fittinggoodslist03.png"),
          name: "魅族超充 USB-C 移动电源",
          hotword: "新品",
          description:
            "USB-C 双向超充 | 22.5W 大功率 | 数字电量显示 | 多快充协议支持 ",
          nowprice: " ￥169 ",
          oldprice: "",
          hotflag: true
        },
        {
          img: require("../assets/image/recommend/fittinggoodslist04.png"),
          name: "魅族超充 GaN 三口充电器",
          hotword: "新品",
          description: "GaN芯片 | 65W MAX功率 | 三口输出 | 安全小巧 ",
          nowprice: " ￥199 ",
          oldprice: "",
          hotflag: true
        },
        {
          img: require("../assets/image/recommend/fittinggoodslist05.png"),
          name: "魅族 Type-C 数据线",
          hotword: "新品",
          description: "5A 大电流 | Type-C 接口 | 更快更方便",
          nowprice: " ￥49 ",
          oldprice: "",
          hotflag: true
        },
        {
          img: require("../assets/image/recommend/fittinggoodslist06.png"),
          name: "魅族中国红 Type-C 金属编织线",
          hotword: "",
          description: " Type-C 接口 | 3A大电流 | 耐磨编织材料 ",
          nowprice: " ￥39 ",
          oldprice: "",
          hotflag: false
        },
        {
          img: require("../assets/image/recommend/fittinggoodslist07.png"),
          name: "魅族 Type-C 游戏专用线",
          hotword: "",
          description:
            " Type-C 接口 | 5A大电流 | 弯头专为游戏设计 | 耐磨编织材料 ",
          nowprice: " ￥49 ",
          oldprice: "",
          hotflag: false
        },
        {
          img: require("../assets/image/recommend/fittinggoodslist08.png"),
          name: "魅族移动电源3",
          hotword: "",
          description: " 10000mAh | 18W双向快充 | 12重安全防护 ",
          nowprice: " ￥79 ",
          oldprice: "",
          hotflag: false
        },
        {
          img: require("../assets/image/recommend/fittinggoodslist09.png"),
          name: "快充电源适配器（UP0830S）",
          hotword: "",
          description: " 快速充电 安全无忧 ",
          nowprice: " ￥69 ",
          oldprice: "￥89",
          hotflag: false
        },
        {
          img: require("../assets/image/recommend/fittinggoodslist10.png"),
          name: "魅族无线充电器",
          hotword: "",
          description: " 10W快速充电 无线即放即充 ",
          nowprice: " ￥69 ",
          oldprice: "￥99",
          hotflag: false
        }
      ],
      // 生活周边
      lifelist: [
        {
          img: require("../assets/image/recommend/lifegoodslist01.png"),
          name: "Pandaer 「17」系列 果冻包",
          hotword: "新品",
          description: "潮酷印花 | 超大容量 | 透亮设计",
          nowprice: " ￥99 ",
          oldprice: "",
          hotflag: true
        },
        {
          img: require("../assets/image/recommend/lifegoodslist02.png"),
          name: "Lifeme 相机包",
          hotword: "新品",
          description: "相机包新搭配 | 一机两镜超大容量 | 加厚防冲击材料 ",
          nowprice: " ￥129 ",
          oldprice: "",
          hotflag: true
        },
        {
          img: require("../assets/image/recommend/lifegoodslist03.png"),
          name: "魅族极简都市双肩包",
          hotword: "热卖",
          description:
            "650D高耐磨牛津布 | 人体工学减负设计 | 大容量多功能收纳 | 生活防泼溅 ",
          oldprice: "",
          hotflag: true
        },
        {
          img: require("../assets/image/recommend/lifegoodslist04.png"),
          name: "魅族防飞溅声波电动牙刷",
          hotword: "热卖",
          description:
            "智能压感防飞溅 | 超强震动清洁 | FDA 杜邦软毛 | 30天超长续航 | IPX7 级防水全身防霉防污垢 | 四种模式全面呵护 ",
          nowprice: " ￥249 ",
          oldprice: "￥299",
          hotflag: true
        },
        {
          img: require("../assets/image/recommend/lifegoodslist05.png"),
          name: "Pandaer readnap T恤",
          hotword: "热卖",
          description:
            "潮趣设计 | 100％精织纯棉 | 多重潮流工艺 | Mixcolor混色搭配 | 情侣装 ",
          nowprice: " ￥169 ",
          oldprice: "￥199",
          hotflag: true
        },
        {
          img: require("../assets/image/recommend/lifegoodslist06.png"),
          name: "Lifeme 梨木伞",
          hotword: "",
          description:
            " 高定时装压花伞布 | 隔绝99% UV | 进口环保拒水涂层 | 8骨静音防风伞架 | 千足纯银徽章 | 优质花梨木伞柄 ",
          nowprice: " ￥459 ",
          oldprice: "￥499",
          hotflag: false
        },
        {
          img: require("../assets/image/recommend/lifegoodslist07.png"),
          name: "Flyme 8 暗夜流光卫衣",
          hotword: "",
          description:
            " Flyme原创 | 镭射材料 | 随光而动 | 暗夜微光 | 点亮梦想 | 情侣装 ",
          nowprice: " ￥169 ",
          oldprice: "￥269",
          hotflag: false
        },
        {
          img: require("../assets/image/recommend/lifegoodslist08.png"),
          name: "Pandaer 魔术师帽衫",
          hotword: "",
          description:
            " Magic Pandaer前卫设计 | 100％精梳棉纱 | 潮流款式 挺括有型 | 亲肤内衬 柔顺舒适 | 情侣装 ",
          nowprice: " ￥249 ",
          oldprice: "￥399",
          hotflag: false
        },
        {
          img: require("../assets/image/recommend/lifegoodslist09.png"),
          name: "魅族声波电动牙刷刷头",
          hotword: "",
          description:
            " 【两支装】进口杜邦刷毛 | 立体裁切贴合牙齿牙龈 | 顶部磨圆更舒适 | 紫外线UV杀菌 ",
          nowprice: " ￥59 ",
          oldprice: "",
          hotflag: false
        },
        {
          img: require("../assets/image/recommend/lifegoodslist10.png"),
          name: "Pandaer 鼠年圆领卫衣",
          hotword: "",
          description: " 金鼠限定/ 优质棉料 / 挺括亲肤 / 保暖舒适 / 情侣装 ",
          nowprice: " ￥199 ",
          oldprice: "",
          hotflag: false
        }
      ],
      // 社区热帖
      communitylist: [
        {
          communityImg: require("../assets/image/recommend/communityImg01.png"),
          avatar: require("../assets/image/recommend/userImg01.png"),
          username: "frankm8fans",
          communitycontent:
            "魅族 17Pro 定白率先上手体验，第一感觉就是，这很魅族！",
          userphone: "魅族 17Pro"
        },
        {
          communityImg: require("../assets/image/recommend/communityImg02.png"),
          avatar: require("../assets/image/recommend/userImg02.png"),
          username: "小宇先森08",
          communitycontent: "不只是颜值出众，可谓是秀外慧中。",
          userphone: "魅族 17"
        },
        {
          communityImg: require("../assets/image/recommend/communityImg03.png"),
          avatar: require("../assets/image/recommend/userImg03.png"),
          username: "grayfox77",
          communitycontent:
            " 现在大家对手机拍照质量的需求越来越高，最受关注的就是焦段与画质。 ",
          userphone: "魅族 17Pro 摄影作品"
        },
        {
          communityImg: require("../assets/image/recommend/communityImg04.png"),
          avatar: require("../assets/image/recommend/userImg04.png"),
          username: "明日之新",
          communitycontent: "魅族 17 Pro 6400W 全场景 AR 专业影像系统体验。",
          userphone: "魅族 17 Pro 摄影作品"
        },
        {
          communityImg: require("../assets/image/recommend/communityImg05.png"),
          avatar: require("../assets/image/recommend/userImg05.png"),
          username: "一叶一会",
          communitycontent: "魅族 17 微距摄影，灵动绚烂。",
          userphone: "魅族 17 摄影作品"
        },
        {
          communityImg: require("../assets/image/recommend/communityImg06.png"),
          avatar: require("../assets/image/recommend/userImg04.png"),
          username: "明日之新",
          communitycontent:
            "多一点耐心，多一点发现，多一点想象，去留意身边风景。",
          userphone: "魅族 17 Pro 摄影作品"
        },
        {
          communityImg: require("../assets/image/recommend/communityImg07.png"),
          avatar: require("../assets/image/recommend/userImg06.png"),
          username: "我是魅之神",
          communitycontent:
            "魅族 17 Pro手持超级夜景实拍，镜头里的夜色如此美妙。",
          userphone: "魅族 17Pro 摄影作品"
        },
        {
          communityImg: require("../assets/image/recommend/communityImg08.png"),
          avatar: require("../assets/image/recommend/userImg01.png"),
          username: "frankm8fans",
          communitycontent: "陪你一路风光 陪你一起风光！",
          userphone: "魅族情怀"
        }
      ],
      // Flyme
      flymelist: [
        {
          flymeImg: require("../assets/image/recommend/flyme01.png"),
          flymecontent: "Flyme 8.1 稳定版系统更新"
        },
        {
          flymeImg: require("../assets/image/recommend/flyme02.png"),
          flymecontent: "魅族成为三大运营商 5G 战略合作伙伴"
        },
        {
          flymeImg: require("../assets/image/recommend/flyme03.png"),
          flymecontent: "魅族携手电信，共迎 5G 赋能未来"
        },
        {
          flymeImg: require("../assets/image/recommend/flyme04.png"),
          flymecontent: "全面提升续航能力"
        },
        {
          flymeImg: require("../assets/image/recommend/flyme05.png"),
          flymecontent: "图库新功能"
        },
        {
          flymeImg: require("../assets/image/recommend/flyme06.png"),
          flymecontent: "文档校正模式"
        },
        {
          flymeImg: require("../assets/image/recommend/flyme07.png"),
          flymecontent: "产品建议解答"
        },
        {
          flymeImg: require("../assets/image/recommend/flyme08.png"),
          flymecontent: "管理手机妙招"
        }
      ],
      // 精彩视频
      vediolist: [
        {
          vedioImg: require("../assets/image/recommend/vedioImg01.png"),
          vediocontent: "魅族 17 航母限定版重构热血旗舰：以梦为舰，热爱起航",
          vediofile: "https://www3.res.meizu.com/video/hangmu.mp4"
        },
        {
          vedioImg: require("../assets/image/recommend/vedioImg02.png"),
          vediocontent: "魅族 17 Pro 晓芳窑艺术典藏版：这艺术，科技极了",
          vediofile: "https://www3.res.meizu.com/video/xfy.mp4"
        },
        {
          vedioImg: require("../assets/image/recommend/vedioImg04.png"),
          vediocontent: "魅族 HD60降噪耳机：去噪，去躁",
          vediofile: "https://www3.res.meizu.com/video/HD60降噪.mp4"
        },
        {
          vedioImg: require("../assets/image/recommend/vedioImg04.png"),
          vediocontent: "魅族 16T 大屏娱乐旗舰：玩出我的热爱",
          vediofile: "https://cimg2.res.meizu.com/www/201910/16t-video.mp4"
        },
        {
          vedioImg: require("../assets/image/recommend/vedioImg05.png"),
          vediocontent: "Flyme 8 概念视频",
          vediofile: "https://www3.res.meizu.com/video/Flyme8概念视频.mp4"
        },
        {
          vedioImg: require("../assets/image/recommend/vedioImg06.png"),
          vediocontent: "Flyme 8 功能视频",
          vediofile: "https://www3.res.meizu.com/video/Flyme8功能视频.mp4"
        },
        {
          vedioImg: require("../assets/image/recommend/vedioImg07.png"),
          vediocontent: "Aicy",
          vediofile: "https://www3.res.meizu.com/video/aicy.mp4"
        },
        {
          vedioImg: require("../assets/image/recommend/vedioImg08.png"),
          vediocontent: "安全家庭",
          vediofile: "https://www3.res.meizu.com/video/安全家庭视频_1.mp4"
        }
      ],
      // 语言更替
      languagelist: [
        {
          img:
            "https://fms.res.meizu.com/dms/2017/12/18/1c31db15-ab85-4932-8e6c-edfd6039bc60.png",
          name: "简体中文"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2017/12/18/85fba643-95ca-4db1-991c-43e66f108afb.png",
          name: "繁体中文"
        },
        {
          img:
            "https://www3.res.meizu.com/static/cn/icon-en/f9C63F21yJxwMNvsqRSTpnWlkiahgBue.png",
          name: "English"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2017/12/18/e743e97c-71af-4853-a91d-bd81c2d3a31c.png",
          name: "Русский"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2017/12/20/062710b5-2f96-4402-ad27-822af5b4f993.png",
          name: "Türkiye"
        },
        {
          img:
            "https://fms.res.meizu.com/dms/2017/12/18/1c31db15-ab85-4932-8e6c-edfd6039bc60.png",
          name: "简体中文"
        }
      ],
      banner01: require("../assets/image/recommend/banner01.jpg"),
      banner02: require("../assets/image/recommend/banner02.jpg"),
      banner03: require("../assets/image/recommend/banner03.jpg"),
      banner04: require("../assets/image/recommend/banner04.jpg"),
      banner05: require("../assets/image/recommend/banner05.jpg"),
      banner06: require("../assets/image/recommend/banner06.jpg"),
      banner07: require("../assets/image/recommend/banner07.jpg"),
      hotbottom01: require("../assets/image/recommend/hotbottom01.jpg"),
      hotbottom02: require("../assets/image/recommend/hotbottom02.jpg"),
      hotbottom03: require("../assets/image/recommend/hotbottom03.jpg"),
      hotbottom04: require("../assets/image/recommend/hotbottom04.jpg"),
      hotcontent01: require("../assets/image/recommend/hotcontent01.png"),
      hotcontent02: require("../assets/image/recommend/hotcontent02.png"),
      hotcontent03: require("../assets/image/recommend/hotcontent03.png"),
      phoneBanner: require("../assets/image/recommend/phoneBanner.jpg"),
      acousticsBanner01: require("../assets/image/recommend/acousticsBanner01.jpg"),
      acousticsBanner02: require("../assets/image/recommend/acousticsBanner02.jpg"),
      fittingBanner01: require("../assets/image/recommend/fittingBanner01.jpg"),
      fittingBanner02: require("../assets/image/recommend/fittingBanner02.jpg"),
      lifeBanner01: require("../assets/image/recommend/lifeBanner01.jpg"),
      lifeBanner02: require("../assets/image/recommend/lifeBanner02.jpg"),
      changeluanflag: true
    };
  },
  mounted() {
    new Swiper(".meizuSwiperBanner", {
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true
      }
    });
  },
  methods: {
    audioPlay(index) {
      if (this.$refs.audio[index].paused) {
        for (var i = 0; i < this.$refs.audio.length; i++) {
          this.$refs.audio[i].pause();
        }
        this.$refs.audio[index].play();
      } else {
        this.$refs.audio[index].pause();
      }
    },
    gotop() {
      let top = document.documentElement.scrollTop || document.body.scrollTop;
      // 实现滚动效果
      const timeTop = setInterval(() => {
        document.body.scrollTop = document.documentElement.scrollTop = top -= 200;
        if (top <= 0) {
          clearInterval(timeTop);
        }
      }, 10);
    },
    changeLuan() {
      this.changeluanflag = !this.changeluanflag;
    }
  },
  components: {
    publicnav
  }
};
</script>

<style lang="scss" scoped>
// 轮播图样式
.recommend-banner {
  width: 100%;
  height: 204.5px;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fff;
  img {
    height: 194.5px;
    margin-top: 10px;
  }
}
// 热点顶部样式
.recommend-hottop {
  width: 100%;
  height: 32.5px;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #f7f7f7;
  & > ul {
    width: 100%;
    line-height: 32.5px;
    display: flex;
    li {
      flex: 1;
      text-align: center;
      span {
        font-size: 12px;
        display: inline-block;
        margin-right: 3px;
        vertical-align: middle;
        color: #999;
      }
    }
  }
}
// 热点底部样式
.recommend-hotbottom {
  width: 100%;
  height: 104px;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fff;
  & > ul {
    width: 100%;
    height: 104px;
    display: flex;
    text-align: center;
    li {
      flex: 1;
      img {
        display: inline-block;
        width: 49px;
        margin-top: 15px;
      }
      p {
        margin-top: 5px;
        color: #333;
        font-size: 12px;
      }
    }
  }
}
// 热点内容样式
.recommend-hotcontent {
  width: 100%;
  height: 265px;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 10px;
  & > .left {
    width: 49.5%;
    height: 100%;
    float: left;
    img {
      width: 100%;
      height: 100%;
    }
  }
  & > .right {
    width: 49.5%;
    height: 100%;
    float: left;
    img {
      display: block;
      width: 100%;
      height: 50%;
    }
  }
}
// 智能手机样式
.phone {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #f4f4f4;
  overflow: hidden;
  // margin-top: 10px;
  .phone-title {
    height: 90px;
    line-height: 90px;
    text-align: center;
    & > h3 {
      height: 100%;
      display: block;
      position: relative;
      font-size: 18px;
      color: #333;
      span {
        position: absolute;
        left: 50%;
        margin-left: -10px;
        bottom: 20px;
        display: block;
        width: 20px;
        height: 3px;
        background-color: #008cff;
      }
    }
  }
  .phone-banner {
    height: 160px;
    & > img {
      height: 160px;
    }
  }
  .phone-goodslist {
    margin-top: 10px;
    & > ul {
      li {
        height: 282.5px;
        width: 49%;
        margin-left: 2%;
        float: left;
        background-color: #fff;
        text-align: center;
        margin-top: 2%;
        &:nth-child(2n + 1) {
          margin-left: 0;
        }
        .goodslist-img {
          text-align: center;
          margin-top: 25px;
          img {
            display: inline-block;
            width: 84%;
            height: 84%;
          }
        }
        .goodslist-name {
          text-align: center;
          p {
            width: 94%;
            display: inline-block;
            font-size: 15px;
            color: #333;
            font-weight: 700;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
        .goodslist-title {
          text-align: center;
          margin-top: 10px;
          p {
            display: inline-block;
            width: 94%;
            height: 20px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            color: #c00;
            border: 1px solid #c00;
            padding-left: 40px;
            line-height: 20px;
            box-sizing: border-box;
            position: relative;
            span {
              position: absolute;
              left: 0;
              top: 0;
              height: 22px;
              background-color: #c00;
              color: white;
              padding: 0 5px;
              line-height: 19px;
            }
            &.normal {
              display: inline-block;
              width: 94%;
              height: 20px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              color: #999;
              padding-left: 0;
              border: 0;
              font-size: 12px;
              padding: 0 8px;
            }
          }
        }
        .goodslist-price {
          height: 21px;
          font-size: 14px;
          color: #c00;
          margin-top: 10px;
          s {
            color: #999;
            font-size: 10px;
            margin-left: 3px;
          }
        }
      }
    }
  }
}
// 魅族声学样式
.acoustics {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #f4f4f4;
  overflow: hidden;
  // margin-top: 10px;
  .acoustics-title {
    height: 90px;
    line-height: 90px;
    text-align: center;
    & > h3 {
      height: 100%;
      display: block;
      position: relative;
      font-size: 18px;
      color: #333;
      span {
        position: absolute;
        left: 50%;
        margin-left: -10px;
        bottom: 20px;
        display: block;
        width: 20px;
        height: 3px;
        background-color: #ff6363;
      }
    }
  }
  .acoustics-banner {
    width: 100%;
    height: 334px;
    color: white;
    & > ul {
      width: 100%;
      height: 100%;
      li {
        width: 50%;
        height: 50%;
        float: left;
        &:nth-child(2) {
          width: 50%;
          height: 50%;
          background-color: #7063c9;
          .headset-name {
            margin-top: 15px;
            margin-left: 15px;
            width: 125px;
            height: 44px;
            p {
              display: inline-block;
              font-size: 17.5px;
              line-height: 24px;
            }
          }
          .headset-detail {
            margin-left: 15px;
            margin-top: 5px;
            width: 158.5px;
            height: 52px;
            font-size: 12.5px;
            color: rgba($color: #ffffff, $alpha: 0.7);
            p {
              line-height: 18px;
            }
          }
          .headset-price {
            margin-top: 5px;
            margin-left: 15px;
            width: 125px;
            height: 44px;
            font-size: 18px;
            color: rgba($color: #ffffff, $alpha: 0.7);
          }
        }
        &:nth-child(3) {
          width: 50%;
          height: 50%;
          background-color: #f55c5c;
          .headset-name {
            margin-top: 15px;
            margin-left: 15px;
            width: 125px;
            height: 44px;
            p {
              display: inline-block;
              font-size: 17.5px;
              line-height: 24px;
            }
          }
          .headset-detail {
            margin-left: 15px;
            margin-top: 5px;
            width: 158.5px;
            height: 52px;
            font-size: 12.5px;
            color: rgba($color: #ffffff, $alpha: 0.7);
            p {
              line-height: 18px;
            }
          }
          .headset-price {
            margin-top: 5px;
            margin-left: 15px;
            width: 125px;
            height: 44px;
            font-size: 18px;
            color: rgba($color: #ffffff, $alpha: 0.7);
            s {
              font-size: 10px;
              margin-left: 5px;
            }
          }
        }
        img {
          display: inline-block;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .acoustics-goodslist {
    margin-top: 2px;
    & > ul {
      li {
        height: 282.5px;
        width: 49%;
        margin-left: 2%;
        float: left;
        background-color: #fff;
        text-align: center;
        margin-top: 2%;
        &:nth-child(2n + 1) {
          margin-left: 0;
        }
        .goodslist-img {
          text-align: center;
          margin-top: 25px;
          img {
            display: inline-block;
            width: 84%;
            height: 84%;
          }
        }
        .goodslist-name {
          text-align: center;
          p {
            width: 94%;
            display: inline-block;
            font-size: 15px;
            color: #333;
            font-weight: 700;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
        .goodslist-title {
          text-align: center;
          margin-top: 10px;
          p {
            display: inline-block;
            width: 94%;
            height: 20px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            color: #c00;
            border: 1px solid #c00;
            padding-left: 40px;
            line-height: 20px;
            box-sizing: border-box;
            position: relative;
            span {
              position: absolute;
              left: 0;
              top: 0;
              height: 22px;
              background-color: #c00;
              color: white;
              padding: 0 5px;
              line-height: 19px;
            }
            &.normal {
              display: inline-block;
              width: 94%;
              height: 20px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              color: #999;
              padding-left: 0;
              border: 0;
              font-size: 12px;
              padding: 0 8px;
            }
          }
        }
        .goodslist-price {
          height: 21px;
          font-size: 14px;
          color: #c00;
          margin-top: 10px;
          s {
            color: #999;
            font-size: 10px;
            margin-left: 3px;
          }
        }
      }
    }
  }
}
// 智能配件
.fitting {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #f4f4f4;
  overflow: hidden;
  // margin-top: 10px;
  .fitting-title {
    height: 90px;
    line-height: 90px;
    text-align: center;
    & > h3 {
      height: 100%;
      display: block;
      position: relative;
      font-size: 18px;
      color: #333;
      span {
        position: absolute;
        left: 50%;
        margin-left: -10px;
        bottom: 20px;
        display: block;
        width: 20px;
        height: 3px;
        background-color: #7143ff;
      }
    }
  }
  .fitting-banner {
    width: 100%;
    height: 334px;
    color: white;
    & > ul {
      width: 100%;
      height: 100%;
      li {
        width: 50%;
        height: 50%;
        float: left;
        &:nth-child(2) {
          width: 50%;
          height: 50%;
          background-color: #55c3c3;
          .headset-name {
            margin-top: 15px;
            margin-left: 15px;
            width: 125px;
            // height: 44px;
            p {
              display: inline-block;
              font-size: 17.5px;
              // line-height: 24px;
            }
          }
          .headset-detail {
            margin-left: 15px;
            // margin-top: 5px;
            width: 158.5px;
            height: 52px;
            font-size: 12.5px;
            color: rgba($color: #ffffff, $alpha: 0.7);
            p {
              line-height: 18px;
            }
          }
          .headset-price {
            margin-top: 5px;
            margin-left: 15px;
            width: 125px;
            height: 44px;
            font-size: 18px;
            color: rgba($color: #ffffff, $alpha: 0.7);
          }
        }
        &:nth-child(3) {
          width: 50%;
          height: 50%;
          background-color: #ffae45;
          .headset-name {
            margin-top: 15px;
            margin-left: 15px;
            width: 126px;
            height: 44px;
            p {
              display: inline-block;
              font-size: 17.5px;
              line-height: 24px;
            }
          }
          .headset-detail {
            margin-left: 15px;
            margin-top: 5px;
            width: 158.5px;
            height: 52px;
            font-size: 12.5px;
            color: rgba($color: #ffffff, $alpha: 0.7);
            p {
              line-height: 18px;
            }
          }
          .headset-price {
            margin-top: 5px;
            margin-left: 15px;
            width: 125px;
            height: 44px;
            font-size: 18px;
            color: rgba($color: #ffffff, $alpha: 0.7);
            s {
              font-size: 10px;
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
  .fitting-goodslist {
    margin-top: 2px;
    & > ul {
      li {
        height: 282.5px;
        width: 49%;
        margin-left: 2%;
        float: left;
        background-color: #fff;
        text-align: center;
        margin-top: 2%;
        &:nth-child(2n + 1) {
          margin-left: 0;
        }
        .goodslist-img {
          text-align: center;
          margin-top: 25px;
          img {
            display: inline-block;
            width: 84%;
            height: 84%;
          }
        }
        .goodslist-name {
          text-align: center;
          p {
            width: 94%;
            display: inline-block;
            font-size: 15px;
            color: #333;
            font-weight: 700;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
        .goodslist-title {
          text-align: center;
          margin-top: 10px;
          p {
            display: inline-block;
            width: 94%;
            height: 20px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            color: #c00;
            border: 1px solid #c00;
            padding-left: 40px;
            line-height: 20px;
            box-sizing: border-box;
            position: relative;
            span {
              position: absolute;
              left: 0;
              top: 0;
              height: 22px;
              background-color: #c00;
              color: white;
              padding: 0 5px;
              line-height: 19px;
            }
            &.normal {
              display: inline-block;
              width: 94%;
              height: 20px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              color: #999;
              padding-left: 0;
              border: 0;
              font-size: 12px;
              padding: 0 8px;
            }
          }
        }
        .goodslist-price {
          height: 21px;
          font-size: 14px;
          color: #c00;
          margin-top: 10px;
          s {
            color: #999;
            font-size: 10px;
            margin-left: 3px;
          }
        }
      }
    }
  }
}
// 生活周边
.life {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #f4f4f4;
  overflow: hidden;
  // margin-top: 10px;
  .life-title {
    height: 90px;
    line-height: 90px;
    text-align: center;
    & > h3 {
      height: 100%;
      display: block;
      position: relative;
      font-size: 18px;
      color: #333;
      span {
        position: absolute;
        left: 50%;
        margin-left: -10px;
        bottom: 20px;
        display: block;
        width: 20px;
        height: 3px;
        background-color: #6fdc39;
      }
    }
  }
  .life-banner {
    width: 100%;
    height: 334px;
    color: white;
    & > ul {
      width: 100%;
      height: 100%;
      li {
        width: 50%;
        height: 50%;
        float: left;
        &:nth-child(2) {
          width: 50%;
          height: 50%;
          background-color: #3a73a5;
          .headset-name {
            margin-top: 15px;
            margin-left: 15px;
            width: 125px;
            // height: 44px;
            p {
              display: inline-block;
              font-size: 17.5px;
              // line-height: 24px;
            }
          }
          .headset-detail {
            margin-left: 15px;
            // margin-top: 5px;
            width: 158.5px;
            height: 52px;
            font-size: 12.5px;
            color: rgba($color: #ffffff, $alpha: 0.7);
            p {
              line-height: 18px;
            }
          }
          .headset-price {
            margin-top: 5px;
            margin-left: 15px;
            width: 125px;
            height: 44px;
            font-size: 18px;
            color: rgba($color: #ffffff, $alpha: 0.7);
          }
        }
        &:nth-child(3) {
          width: 50%;
          height: 50%;
          background-color: #f55c5c;
          .headset-name {
            margin-top: 15px;
            margin-left: 15px;
            width: 126px;
            height: 44px;
            p {
              display: inline-block;
              font-size: 17.5px;
              line-height: 24px;
            }
          }
          .headset-detail {
            margin-left: 15px;
            margin-top: 5px;
            width: 158.5px;
            height: 52px;
            font-size: 12.5px;
            color: rgba($color: #ffffff, $alpha: 0.7);
            p {
              line-height: 18px;
            }
          }
          .headset-price {
            margin-top: 5px;
            margin-left: 15px;
            width: 125px;
            height: 44px;
            font-size: 18px;
            color: rgba($color: #ffffff, $alpha: 0.7);
            s {
              font-size: 10px;
              margin-left: 5px;
            }
          }
        }
      }
    }
  }
  .life-goodslist {
    margin-top: 2px;
    & > ul {
      li {
        height: 282.5px;
        width: 49%;
        margin-left: 2%;
        float: left;
        background-color: #fff;
        text-align: center;
        margin-top: 2%;
        &:nth-child(2n + 1) {
          margin-left: 0;
        }
        .goodslist-img {
          text-align: center;
          margin-top: 25px;
          img {
            display: inline-block;
            width: 84%;
            height: 84%;
          }
        }
        .goodslist-name {
          text-align: center;
          p {
            width: 94%;
            display: inline-block;
            font-size: 15px;
            color: #333;
            font-weight: 700;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }
        }
        .goodslist-title {
          text-align: center;
          margin-top: 10px;
          p {
            display: inline-block;
            width: 94%;
            height: 20px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            color: #c00;
            border: 1px solid #c00;
            padding-left: 40px;
            line-height: 20px;
            box-sizing: border-box;
            position: relative;
            span {
              position: absolute;
              left: 0;
              top: 0;
              height: 22px;
              background-color: #c00;
              color: white;
              padding: 0 5px;
              line-height: 19px;
            }
            &.normal {
              display: inline-block;
              width: 94%;
              height: 20px;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              color: #999;
              padding-left: 0;
              border: 0;
              font-size: 12px;
              padding: 0 8px;
            }
          }
        }
        .goodslist-price {
          height: 21px;
          font-size: 14px;
          color: #c00;
          margin-top: 10px;
          s {
            color: #999;
            font-size: 10px;
            margin-left: 3px;
          }
        }
      }
    }
  }
}
// 社区热帖
.community {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #f4f4f4;
  overflow: hidden;
  // margin-top: 10px;
  .community-title {
    height: 90px;
    line-height: 90px;
    text-align: center;
    & > h3 {
      height: 100%;
      display: block;
      position: relative;
      font-size: 18px;
      color: #333;
      span {
        position: absolute;
        left: 50%;
        margin-left: -10px;
        bottom: 20px;
        display: block;
        width: 20px;
        height: 3px;
        background-color: #008cff;
      }
    }
  }
  .community-goodslist {
    margin-top: 2px;
    & > ul {
      li {
        height: 208.5px;
        width: 49%;
        margin-left: 2%;
        float: left;
        background-color: #fff;
        // text-align: center;
        margin-top: 2%;
        &:nth-child(2n + 1) {
          margin-left: 0;
        }
        .goodslist-img {
          height: 110px;
          text-align: center;
          img {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
        .user-comment {
          width: 90%;
          margin: 0 auto;
          .user-info {
            height: 30px;
            // line-height: 25px;
            .user-img {
              width: 20px;
              height: 20px;
              float: left;
              margin-top: 5px;
              img {
                width: 20px;
                height: 20px;
                border-radius: 20px;
              }
            }
            .user-name {
              float: left;
              margin-left: 7px;
              margin-top: 7px;
            }
          }
          .user-content {
            height: 42px;
            text-overflow: ellipsis;
            // white-space: nowrap;
            overflow: hidden;
            p {
              line-height: 15px;
            }
          }
          .user-phone {
            margin-top: 5px;
            p {
              font-size: 10px;
              color: #999;
            }
          }
        }
      }
    }
  }
}
// Flyme
.flyme {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #f4f4f4;
  overflow: hidden;
  // margin-top: 10px;
  .flyme-title {
    height: 90px;
    line-height: 90px;
    text-align: center;
    & > h3 {
      height: 100%;
      display: block;
      position: relative;
      font-size: 18px;
      color: #333;
      span {
        position: absolute;
        left: 50%;
        margin-left: -10px;
        bottom: 20px;
        display: block;
        width: 20px;
        height: 3px;
        background-color: #147df0;
      }
    }
  }
  .flyme-goodslist {
    margin-top: 2px;
    & > ul {
      li {
        height: 145.5px;
        width: 49%;
        margin-left: 2%;
        float: left;
        background-color: #fff;
        // text-align: center;
        margin-top: 2%;
        &:nth-child(2n + 1) {
          margin-left: 0;
        }
        .goodslist-img {
          height: 110px;
          text-align: center;
          img {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
        .function-comment {
          width: 90%;
          margin: 0 auto;
          text-align: center;
          & > p {
            width: 100%;
            display: inline-block;
            padding: 8px 0px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }
      }
    }
  }
}
// 精彩视频
.vedio {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #f4f4f4;
  overflow: hidden;
  // margin-top: 10px;
  .vedio-title {
    height: 90px;
    line-height: 90px;
    text-align: center;
    & > h3 {
      height: 100%;
      display: block;
      position: relative;
      font-size: 18px;
      color: #333;
      span {
        position: absolute;
        left: 50%;
        margin-left: -10px;
        bottom: 20px;
        display: block;
        width: 20px;
        height: 3px;
        background-color: #cd46ff;
      }
    }
  }
  .vedio-goodslist {
    margin-top: 2px;
    & > ul {
      li {
        height: 145.5px;
        width: 49%;
        margin-left: 2%;
        float: left;
        background-color: #fff;
        // text-align: center;
        margin-top: 2%;
        &:nth-child(2n + 1) {
          margin-left: 0;
        }
        .goodslist-img {
          height: 110px;
          text-align: center;
          img {
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
        .function-content {
          width: 90%;
          margin: 0 auto;
          text-align: center;

          & > p {
            width: 90%;
            padding: 8px 0px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            float: left;
          }
          & > span {
            width: 10%;
            height: 10%;
            float: left;
            margin-top: 5px;
          }
        }
      }
    }
  }
}
// 返回顶部
.gotop {
  width: 100%;
  height: 64.5px;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #f4f4f4;
  overflow: hidden;
  text-align: center;
  line-height: 64.5px;
  & > span {
    display: inline-block;
    color: #999;
    font-size: 16px;
  }
}
// 底部详情
.footerClass {
  width: 100%;
  height: 116px;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fff;
  .footer-top {
    width: 100%;
    height: 60px;
    // background-color: #f0f0f0;
    .tel {
      width: 42%;
      height: 36px;
      float: left;
      margin-left: 5.3%;
      background-color: #008cff;
      margin-top: 24px;
      border-radius: 36px;
      font-size: 16px;
      p {
        display: inline-block;
        width: 70%;
        height: 36px;
        color: #fff;
        text-align: center;
        line-height: 36px;
      }
      span {
        display: inline-block;
        color: #fff;
        width: 20px;
        height: 36px;
        text-align: center;
        line-height: 36px;
        margin-left: 10px;
        font-size: 18px;
      }
    }
    .customer {
      width: 42%;
      height: 36px;
      background-color: #008cff;
      float: right;
      margin-right: 5.3%;
      margin-top: 24px;
      border-radius: 36px;
      font-size: 16px;
      & > p {
        display: inline-block;
        width: 50%;
        height: 36px;
        color: #fff;
        text-align: center;
        line-height: 36px;
      }
      & > span {
        display: inline-block;
        color: #fff;
        width: 20px;
        height: 36px;
        text-align: center;
        line-height: 36px;
        margin-left: 30px;
        font-size: 18px;
      }
    }
  }
  .footer-bottom {
    width: 100%;
    height: 56px;
    & > ul {
      height: 28px;
      width: 51%;
      margin-top: 14px;
      margin-left: 14px;
      float: left;
      li {
        height: 14px;
        font-size: 10px;
        color: #999;
        line-height: 14px;
      }
    }
    .changeLuan {
      float: right;
      width: 90px;
      height: 30px;
      margin-top: 12px;
      margin-right: 20px;
      // background-color: pink;
      position: relative;
      overflow: hidden;
      & > ul {
        width: 100%;
        height: 180px;
        position: absolute;
        left: 0;
        bottom: 0;
        background-color: #fff;
        z-index: 10;
        // border: 1px solid #f0f0f0;
        // box-sizing: border-box;
        &.active {
          overflow: hidden;
        }
        li {
          width: 100%;
          height: 30px;
          // border-bottom: 1px solid #f0f0f0;
          box-sizing: border-box;
          &:last-child {
            border-bottom: 0;
          }
          &.active {
            background-color: #fff;
            border: none;
          }
          img {
            float: left;
            width: 18px;
            margin-left: 6px;
            margin-top: 6px;
          }
          p {
            float: left;
            font-size: 14px;
            margin-left: 3px;
            margin-top: 5px;
          }
        }
      }
    }
  }
}
// swiper插件样式
.swiper-container {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
</style>
