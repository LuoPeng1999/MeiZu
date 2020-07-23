<template>
  <div>
    <!-- meizu16t头部 -->
    <div class="meizu16t-header">
      <div class="left" @click="$router.go(-1)">
        <span class="iconfont iconright1"></span>
      </div>
      <div class="center">
        <span
          class="iconfont iconmeizu"
          @click="$router.push('/recommend')"
        ></span>
      </div>
      <div class="right">
        <span
          class="iconfont iconshouye"
          @click="$router.push('/recommend')"
        ></span>
      </div>
    </div>
    <!-- meizu16t轮播图 -->
    <div class="meizu16t-banner">
      <div class="swiper-container meizu16tbannerswiper">
        <div class="swiper-wrapper">
          <div
            class="swiper-slide"
            v-for="(item, index) in meizu16tbannerlist"
            :key="index"
          >
            <img :src="item.img" alt />
          </div>
        </div>
        <div class="swiper-pagination mypoin"></div>
      </div>
    </div>
    <!-- meizu16t详情 -->
    <div
      class="meizu16t-details"
      v-for="(item, index) in meizu16tdetail"
      :key="index"
    >
      <div class="details-top">
        <div class="name">{{ item.name }}</div>
        <div class="price">{{ item.price }}</div>
      </div>
      <div class="details-center">
        <div class="installment">{{ item.installment }}</div>
      </div>
      <div class="details-bottom">
        <div class="information">{{ item.information }}</div>
      </div>
    </div>
    <!-- 单元格--服务 -->
    <div class="cell service" @click="serviceflag = true">
      <div class="left">
        <ul>
          <li>
            <span class="iconfont icongou"></span>
            <p>花呗分期</p>
          </li>
          <li>
            <span class="iconfont icongou"></span>
            <p>顺丰发货</p>
          </li>
          <li>
            <span class="iconfont icongou"></span>
            <p>七天无理由退货 (具体查看详情)</p>
          </li>
        </ul>
      </div>
      <div class="right">
        <span class="iconfont iconright"></span>
      </div>
    </div>
    <!-- 单元格--规格 -->
    <div class="cell specification" @click="specificationflag = true">
      <div class="left">
        <ul>
          <li>已选</li>
          <li>{{ selectGoodsDesc }}</li>
          <li>x{{ num }}</li>
        </ul>
      </div>
      <div class="right">
        <span class="iconfont iconright"></span>
      </div>
    </div>
    <!-- 单元格--配送 -->
    <div class="cell address" @click="addressflag = true">
      <div class="left">
        <ul>
          <li>已选</li>
          <li>{{ province }} {{ city }} {{ country }}</li>
        </ul>
      </div>
      <div class="right">
        <span class="iconfont iconright"></span>
      </div>
    </div>
    <!-- 单元格--售后 -->
    <div class="cell afterSale">
      <p>
        本商品由
        <em>魅族</em>负责发货并提供售后服务
      </p>
    </div>

    <!-- 详情页 -->
    <van-tabs
      v-model="active"
      class="mytagsclass"
      title-active-color="#008cff"
      title-inactive-color="#666"
      color="#008cff"
      swipeable
    >
      <van-tab title="图文详情">
        <img
          src="//openfile.meizu.com/group1/M00/07/C8/Cgbj0V6DJjuAJidQAAREVQbNAZY617.jpg"
        />

        <img
          src="//openfile.meizu.com/group1/M00/07/67/Cgbj0F2v6_aAHX_4AAqp6uaqdVA938.jpg"
        />

        <img
          src="//openfile.meizu.com/group1/M00/07/6A/Cgbj0F2yYkuAIwl0AAPlvDz8ySg479.jpg"
        />

        <img
          class
          src="//openfile.meizu.com/group1/M00/07/6A/Cgbj0F20SIqAN-lQAA9u2qAq5Qs658.jpg"
        />
        <img
          class
          src="//openfile.meizu.com/group1/M00/07/7D/Cgbj0V2v7AWAe7YeAAvrpAA-fls497.jpg"
        />

        <img
          class
          src="//openfile.meizu.com/group1/M00/07/67/Cgbj0F2v7AuAF0xeAAwDzP6NDoI607.jpg"
        />

        <img
          class
          src="//openfile.meizu.com/group1/M00/07/AF/Cgbj0F5zOeGAE2ZXAAuKgmsiyKE968.jpg"
        />

        <img
          class
          src="//openfile.meizu.com/group1/M00/07/67/Cgbj0F2v7BOAT4nbAApiLCMecnA061.jpg"
        />

        <img
          class
          src="//openfile.meizu.com/group1/M00/07/7D/Cgbj0V2v7BeAH4kCAAw4ggZgR48591.jpg"
        />

        <img
          class
          src="//openfile.meizu.com/group1/M00/07/67/Cgbj0F2v7B2ADM83AAu05LPvDw4455.jpg"
        />

        <img
          class
          src="//openfile.meizu.com/group1/M00/07/7D/Cgbj0V2v7CGAG3wsAAxLLP2L3Og625.jpg"
        />

        <img
          class
          src="//openfile.meizu.com/group1/M00/07/7D/Cgbj0V2v7CeACMo5AAsqUs9mZn8869.jpg"
        />
        <!-- <img
          class=""
          src="//openfile.meizu.com/group1/M00/07/D7/Cgbj0F6721eAHjW2AArHQJZc4Xc153.jpg"
        />
        <img
          class=""
          src="//openfile.meizu.com/group1/M00/08/0A/Cgbj0V7gjZmAeZo4AAtuxdjBRNo637.jpg"
        />
        <img
          class=""
          src="//openfile.meizu.com/group1/M00/08/16/Cgbj0V7y51GAUHdwAAxQyEFHjzY211.jpg"
        />
        <img
          class=""
          src="//openfile.meizu.com/group1/M00/08/16/Cgbj0V7y51GAUHdwAAxQyEFHjzY211.jpg"
        /> -->
        <img
          class=""
          src="//openfile.meizu.com/group1/M00/07/F4/Cgbj0V7LIUqAGnsMAAITcgK17lM664.jpg"
        />
        <img
          class=""
          src="//openfile.meizu.com/group1/M00/07/38/Cgbj0F0RecGACWcqAAHJ6iG84Os961.jpg"
        />
      </van-tab>
      <van-tab title="规格参数">
        <table>
          <tbody>
            <tr class="parameter">
              <th colspan="2">基础信息</th>
            </tr>
            <tr>
              <th>品牌</th>
              <td>魅族</td>
            </tr>
            <tr>
              <th>型号</th>
              <td>魅族 16T</td>
            </tr>
            <tr>
              <th>尺寸</th>
              <td>159.63*78.2*8.3mm</td>
            </tr>
            <tr>
              <th>电池容量</th>
              <td>4500mAh</td>
            </tr>
            <tr>
              <th>重量</th>
              <td>183g</td>
            </tr>
            <tr class="parameter">
              <th colspan="2">屏幕</th>
            </tr>
            <tr>
              <th>屏幕尺寸</th>
              <td>6.5英寸</td>
            </tr>
            <tr>
              <th>对比度</th>
              <td>1000000:1</td>
            </tr>
            <tr>
              <th>分辨率</th>
              <td>2232 X 1080</td>
            </tr>
            <tr>
              <th>PPI</th>
              <td>382</td>
            </tr>
            <tr>
              <th>亮度</th>
              <td>430nit（典型值）</td>
            </tr>
            <tr>
              <th>制造工艺</th>
              <td>On-Cell 全贴合</td>
            </tr>
            <tr class="parameter">
              <th colspan="2">容量</th>
            </tr>
            <tr>
              <th>运行内存(RAM)</th>
              <td>6GB/8GB</td>
            </tr>
            <tr>
              <th>机身内存</th>
              <td>128GB<br />256GB</td>
            </tr>
            <tr class="parameter">
              <th colspan="2">处理器</th>
            </tr>
            <tr>
              <th>CPU</th>
              <td>Qualcomm® 骁龙™ 855 8 核心移动平台</td>
            </tr>
            <tr>
              <th>GPU</th>
              <td>
                Adreno™ 640 图形处理器
              </td>
            </tr>
            <tr class="parameter">
              <th colspan="2">摄像</th>
            </tr>
            <tr>
              <th>前置摄像头</th>
              <td>
                1600万像素<br />ƒ/2.2 大光圈<br />5片式定制镜头<br />AI 美颜<br />人像模式<br />人脸识别解锁<br />自动
                HDR<br />自拍超级夜景（后续OTA升级）<br />逆光模式（后续OTA升级）
              </td>
            </tr>
            <tr>
              <th>后置摄像头</th>
              <td>
                主镜头：1200 万像素 + SONY IMX362 + ƒ/1.9 + 等效焦距 24mm + 6
                片式定制镜头<br />副镜头：500 万像素 + Samsung 5E9 + ƒ/1.9 +
                等效焦距 23mm + 4 片式定制镜头<br />超广角镜头：800 万像素 +
                Samsung 4H7 + ƒ/2.2 + 等效焦距 15mm + 5 片式定制镜头<br />手持超级夜景
                / 脚架超级夜景<br />AI 场景识别<br />自动 HDR<br />118°
                超广角<br />超广角录像<br />PDAF 相位对焦<br />2.5cm 微距摄像<br />4K
                60 帧超清录像<br />人像模式<br />240 帧慢动作录像
              </td>
            </tr>
            <tr class="parameter">
              <th colspan="2">mTouch</th>
            </tr>
            <tr>
              <th>响应速度</th>
              <td>
                0.2s
              </td>
            </tr>
            <tr>
              <th>识别角度</th>
              <td>360°</td>
            </tr>
            <tr>
              <th>指纹组数</th>
              <td>5组</td>
            </tr>
            <tr class="parameter">
              <th colspan="2">
                运营商与制式
              </th>
            </tr>
            <tr>
              <th>全网通公开版</th>
              <td>
                GSM：B2/B3/B5/B8 <br />TD-SCDMA：B34/B39
                <br />CDMA：BC0<br />TD-LTE：B34/B38/B39/B40/B41<br />FDD-LTE：B1/B3/B4/B5/B7/B8/B20<br />WCDMA：B1/B2/B4/B5/B8
                <br />VOLTE：移动 / 电信 / 联通
              </td>
            </tr>
            <tr class="parameter">
              <th colspan="2">
                其他参数
              </th>
            </tr>
            <tr>
              <th>WLAN功能</th>
              <td>802.11a/b/g/n/ac 无线网络<br />支持 5GHz 和 2.4GHz 频段</td>
            </tr>
            <tr class="parameter">
              <th colspan="2">
                系统与应用
              </th>
            </tr>
            <tr>
              <th>传感器</th>
              <td>
                重力感应<br />红外距离感应<br />陀螺仪<br />电子罗盘<br />线性马达<br />光敏感应<br />指纹识别
              </td>
            </tr>
            <tr>
              <th>导航定位</th>
              <td>GPS<br />GLONASS<br />BEIDOU</td>
            </tr>
            <tr class="parameter">
              <th colspan="2">
                操作环境
              </th>
            </tr>
            <tr>
              <th>操作环境</th>
              <td>工作环境温度 0 至 35°C<br />存储温度 -20 至 45°C</td>
            </tr>
            <tr class="parameter">
              <th colspan="2">
                包装清单
              </th>
            </tr>
            <tr>
              <th>包装清单</th>
              <td>
                主机 x 1<br />电源适配器 x 1<br />保修证书 x 1<br />SIM卡顶针 x
                1<br />数据线 x 1
              </td>
            </tr>
          </tbody>
        </table>
      </van-tab>
    </van-tabs>

    <!-- 底部导航栏 -->
    <div class="meizu16t-footer">
      <ul>
        <router-link to="/customer" tag="li">
          <span class="iconfont iconkefu"></span>
          <p>客服</p>
        </router-link>
        <li @click="getCollect">
          <span class="iconfont iconshoucang" v-if="isCollect == false"></span>
          <span
            class="iconfont iconshoucang1"
            style="color:red"
            v-if="isCollect == true"
          ></span>
          <p>收藏</p>
        </li>
        <router-link to="/cart" tag="li">
          <span class="iconfont icongouwuche"></span>
          <p>购物车</p>
        </router-link>
        <li @click="specificationflag = true">
          <p>加入购物车</p>
        </li>
        <li @click="specificationflag = true">
          <p>立即购买</p>
        </li>
      </ul>
    </div>

    <!-- 弹窗 -->
    <!-- 服务弹窗 -->
    <van-popup
      v-model="serviceflag"
      closeable
      position="bottom"
      :style="{ height: '70%' }"
    >
      <div class="service-title">服务说明</div>
      <div class="service-content">
        <ul>
          <li>
            <div class="item-title">
              <span class="iconfont iconhuabei1"></span>
              <p>花呗分期</p>
            </div>
            <p>
              花呗分期是由蚂蚁花呗联合魅族商城共同推出的“先购物后付款”的支付体验，支持预支蚂蚁花呗额度，免息期最长可达41天，可选择分3、6、12期还款。
            </p>
          </li>
          <li>
            <div class="item-title">
              <span class="iconfont iconshunfeng1"></span>
              <p>顺丰发货</p>
            </div>
            <p>该商品顺丰发货，顺丰无法到达的地区会安排转寄其他快递。</p>
          </li>
          <li>
            <div class="item-title">
              <span class="iconfont iconicon4"></span>
              <p>七天无理由退货</p>
            </div>
            <p>
              自您的订单签收7个自然日之内（含），在商品完好（手机产品未激活）的情况下，可进行无理由退货。
            </p>
          </li>
        </ul>
      </div>
    </van-popup>
    <!-- 规格弹窗 -->
    <van-sku
      v-model="specificationflag"
      :sku="sku"
      :goods="goods"
      :initial-sku="initialSku"
      ref="goods"
      @add-cart="addCart"
      @sku-selected="getSkuData"
      @stepper-change="getGoodsNum"
      @buy-clicked="onBuy"
    />
    <!-- 配送地址弹框 -->
    <van-popup
      v-model="addressflag"
      position="bottom"
      :style="{ height: '40%' }"
    >
      <van-area
        title="配送至"
        :area-list="areaList"
        @confirm="changeAddress"
        @cancel="changeAddress"
        ref="address"
      />
    </van-popup>
  </div>
</template>

<script>
import Swiper from "swiper";
import areaList from "../../assets/js/erea";
import { Toast } from "vant";
export default {
  data() {
    return {
      meizu16tbannerlist: [
        {
          img:
            "//openfile.meizu.com/group1/M00/07/87/Cgbj0V3U7gOAPBz7AAi2bv3GS9Q690.png480x480.jpg"
        },
        {
          img:
            "//openfile.meizu.com/group1/M00/07/86/Cgbj0V3U5-GAZ8OiAAR7AHDl4qY695.png480x480.jpg"
        },
        {
          img:
            "//openfile.meizu.com/group1/M00/07/7A/Cgbj0V2upy-AHO-iAASbAcADm5w480.png480x480.jpg"
        },
        {
          img:
            "//openfile.meizu.com/group1/M00/07/7A/Cgbj0V2upyeAP-XCAAIGW8_W4LU613.png480x480.jpg"
        }
      ], // meizu16t轮播图
      meizu16tdetail: [
        {
          name: "魅族 16T",
          price: "¥ 2299.00",
          installment: "分期价 ￥ 205.94 x 12期",
          information:
            "【限时领券立省50元】6.5英寸极边全面屏 | 骁龙855旗舰处理器 | 4500mAh续航怪兽 | UFS 3.0 高速闪存 | 「双」·立体声扬声器 | 超广角 AI 三摄 | 线性振动马达 | 全球频段",
          img:
            "//openfile.meizu.com/group1/M00/07/87/Cgbj0V3U7gOAPBz7AAi2bv3GS9Q690.png240x240.jpg"
        }
      ], // meizu16t信息
      serviceflag: false, // 服务弹窗
      specificationflag: false, // 规格弹窗
      sku: {
        tree: [
          {
            k: "网络类型", // skuKeyName：规格类目名称
            keyName: "webType",
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "全网通公开版" // skuValueName：规格值名称
              }
            ],
            k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          },
          {
            k: "颜色分类", // skuKeyName：规格类目名称
            keyName: "color",
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "鲸跃蓝", // skuValueName：规格值名称
                previewImgUrl:
                  "//openfile.meizu.com/group1/M00/07/7A/Cgbj0V2upxqANyVFAAjApUYA58w668.png240x240.jpg"
              },
              {
                id: "2", // skuValueId：规格值 id
                name: "湖光绿", // skuValueName：规格值名称
                previewImgUrl:
                  "//openfile.meizu.com/group1/M00/07/62/Cgbj0F2upwyAKqQSAAlGpvLiEdc809.png240x240.jpg"
              },
              {
                id: "3", // skuValueId：规格值 id
                name: "日光橙", // skuValueName：规格值名称
                previewImgUrl:
                  "//openfile.meizu.com/group1/M00/07/87/Cgbj0V3U7gOAPBz7AAi2bv3GS9Q690.png240x240.jpg"
              }
            ],
            k_s: "s2" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          },
          {
            k: "内存容量", // skuKeyName：规格类目名称
            keyName: "ram",
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "6+128GB" // skuValueName：规格值名称
              },
              {
                id: "2", // skuValueId：规格值 id
                name: "8+128GB" // skuValueName：规格值名称
              },
              {
                id: "3", // skuValueId：规格值 id
                name: "8+256GB" // skuValueName：规格值名称
              }
            ],
            k_s: "s3" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          },
          {
            k: "套餐", // skuKeyName：规格类目名称
            keyName: "package",
            v: [
              {
                id: "1", // skuValueId：规格值 id
                name: "官方标配" // skuValueName：规格值名称
              }
            ],
            k_s: "s4" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          }
        ],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [
          {
            id: 11, // skuId，下单时后端需要
            price: 199900, // 价格（单位分）
            s1: "1",
            s2: "1",
            s3: "1",
            s4: "1",
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 12, // skuId，下单时后端需要
            price: 199900, // 价格（单位分）
            s1: "1",
            s2: "2",
            s3: "1",
            s4: "1",
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 13, // skuId，下单时后端需要
            price: 199900, // 价格（单位分）
            s1: "1",
            s2: "3",
            s3: "1",
            s4: "1",
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 21, // skuId，下单时后端需要
            price: 229900, // 价格（单位分）
            s1: "1",
            s2: "1",
            s3: "2",
            s4: "1",
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 22, // skuId，下单时后端需要
            price: 229900, // 价格（单位分）
            s1: "1",
            s2: "2",
            s3: "2",
            s4: "1",
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 23, // skuId，下单时后端需要
            price: 229900, // 价格（单位分）
            s1: "1",
            s2: "3",
            s3: "2",
            s4: "1",
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 31, // skuId，下单时后端需要
            price: 249900, // 价格（单位分）
            s1: "1",
            s2: "1",
            s3: "3",
            s4: "1",
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 32, // skuId，下单时后端需要
            price: 249900, // 价格（单位分）
            s1: "1",
            s2: "2",
            s3: "3",
            s4: "1",
            stock_num: 110 // 当前 sku 组合对应的库存
          },
          {
            id: 33, // skuId，下单时后端需要
            price: 249900, // 价格（单位分）
            s1: "1",
            s2: "3",
            s3: "3",
            s4: "1",
            stock_num: 110 // 当前 sku 组合对应的库存
          }
        ],
        price: "2299.00", // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        none_sku: false, // 是否无规格商品
        hide_stock: true // 是否隐藏剩余库存
      },
      goods: {
        id: 1,
        webType: "全网通公开版",
        color: "日光橙",
        ram: "8+128GB",
        package: "官方标配",
        price: 2299,
        // 默认商品 sku 缩略图
        picture:
          "//openfile.meizu.com/group1/M00/07/87/Cgbj0V3U7gOAPBz7AAi2bv3GS9Q690.png240x240.jpg"
      },
      initialSku: {
        id: 13, // skuId，下单时后端需要
        price: 229900, // 价格（单位分）
        s1: "1",
        s2: "3",
        s3: "2",
        s4: "1",
        stock_num: 110 // 当前 sku 组合对应的库存
      },
      selectGoodsDesc: "", // 保存用户当前选中商品的信息
      num: 1, // 保存用户购买的数量
      areaList,
      addressflag: false, // 配送地址弹窗
      province: "广东省", // 省份
      city: "广州市", // 城市
      country: "天河区", // 区
      active: 0,
      isCollect: false // 是否收藏
    };
  },
  created() {
    if (this.$store.state.collect.lists) {
      this.$store.state.collect.lists.forEach(item => {
        if (item.name == this.meizu16tdetail[0].name) {
          this.isCollect = item.isCollect;
        }
      });
    }
  },
  mounted() {
    new Swiper(".meizu16tbannerswiper", {
      spaceBetween: 30,
      centeredSlides: true,
      //   autoplay: {
      //     delay: 2500,
      //     disableOnInteraction: false
      //   },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });
  },
  methods: {
    // 添加购物车
    addCart(skuData) {
      console.log(skuData);
      var goods = this.getGoods(skuData.selectedSkuComb);
      // console.log(goods);
      this.$store.commit("cart/add", goods);
      console.log(this.$store.state.cart.lists);
      Toast.success("已成功加入购物车");
      this.specificationflag = false;
    },
    // 立即购买
    onBuy(skuData) {
      var goods = this.getGoods(skuData.selectedSkuComb);
      // console.log(goods);
      this.$store.commit("cart/add", goods);
      this.$router.push("/order");
      this.specificationflag = false;
    },
    // 获取商品信息
    getSkuData() {
      this.selectGoodsDesc = this.$refs.goods.selectedText
        .substr(2)
        .replace(/；/gi, ",");
    },
    // 获取数量
    getGoodsNum(number) {
      this.num = number;
    },
    // 获取配送至信息
    changeAddress(arr) {
      this.province = arr[0].name;
      this.city = arr[1].name;
      this.country = arr[2].name;
      this.addressflag = false;
    },
    // 获取商品信息
    getGoods(data) {
      var newObj = {};
      for (let key in data) {
        this.sku.tree.forEach(item => {
          if (key == item.k_s) {
            item.v.forEach(obj => {
              if (data[key] == obj.id) {
                newObj[item.keyName] = obj.name;
              }
            });
          }
        });
      }
      var obj2 = {};
      // 获取商品图片
      this.sku.tree.forEach(item => {
        item.v.forEach(obj => {
          if (newObj.color == obj.name) {
            obj2 = obj;
          }
        });
      });
      newObj.previewImgUrl = obj2.previewImgUrl;
      newObj.price = data.price / 100;
      newObj.id = data.id;
      newObj.name = "魅族 16T";
      newObj.num = this.num;
      return newObj; // 返回物品信息
    },
    // 是否收藏
    getCollect() {
      this.isCollect = !this.isCollect;
      this.meizu16tdetail[0].isCollect = this.isCollect;
      if (this.isCollect) {
        this.$store.commit("collect/add", this.meizu16tdetail[0]);
        console.log(this.$store.state.collect.lists);
      } else {
        console.log(this.meizu16tdetail[0]);
        console.log(this.$store.state.collect.lists);
        this.$store.commit("collect/del", this.meizu16tdetail[0]);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
// meizu16t头部样式
.meizu16t-header {
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
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
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
    color: #008cff;
    text-align: center;
  }
  .right {
    margin-right: 8px;
    text-align: center;
    span {
      margin-right: 10px;
      font-size: 20px;
    }
  }
}
// 轮播图样式
.meizu16tbannerswiper {
  width: 100%;
  height: 235.5px;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
  padding-bottom: 13.5px;
  margin-top: 54px;
  img {
    display: block;
    width: 235.5px;
    height: 235.5px;
    margin: 0 auto;
  }
}
.mypoin {
  position: absolute;
  bottom: -10px;
  padding-bottom: 13.5px;
}
// meizu16t详情
.meizu16t-details {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 5px;
  .details-top {
    width: 96%;
    margin: 0 auto;
    height: 30px;
    // background-color: pink;
    line-height: 30px;
    font-size: 16px;
    .name {
      float: left;
      margin-left: 5px;
    }
    .price {
      float: right;
      margin-right: 5px;
      color: #f0415f;
    }
  }
  .details-center {
    width: 96%;
    margin: 0 auto;
    height: 24px;
    // background-color: skyblue;
    color: #f0415f;
    line-height: 24px;
    font-size: 16px;
    .installment {
      float: left;
      margin-left: 5px;
    }
  }
  .details-bottom {
    width: 96%;
    margin: 0 auto;
    height: 77px;
    // background-color: lightgreen;
    font-size: 14px;
    color: #f0415f;
    line-height: 24px;
  }
}
// 单元格
.cell {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fff;
  .left {
    width: 91%;
    float: left;
    margin-left: 5px;
  }
  .right {
    float: right;
    margin-right: 5px;
    line-height: 46px;
  }
}
.service {
  margin-top: 2px;
  height: 70px;
  ul {
    width: 190px;
    margin-top: 10px;
    li {
      float: left;
      font-size: 12px;
      span {
        float: left;
        margin-left: 3px;
        color: #008cff;
      }
      p {
        float: left;
        margin-top: 3px;
        color: #666;
        margin-left: 3px;
      }
    }
  }
}
.specification {
  height: 46px;
  margin-top: 10px;
  ul {
    li {
      width: 78%;
      font-size: 13px;
      line-height: 46px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      float: left;
      margin-left: 10px;
      color: #333;
      &:first-child {
        width: 26px;
        color: #999;
      }
      &:last-child {
        width: 14px;
      }
    }
  }
}
.address {
  height: 46px;
  margin-top: 10px;
  ul {
    li {
      width: 78%;
      font-size: 13px;
      line-height: 46px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      float: left;
      margin-left: 10px;
      color: #333;
      &:first-child {
        width: 26px;
        color: #999;
      }
    }
  }
}
.afterSale {
  text-align: center;
  margin-top: 2px;
  height: 46px;
  line-height: 46px;
  p {
    color: #999;
    font-size: 13px;
    em {
      color: #666;
    }
  }
}
// 详情
.mytagsclass {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 46px;
}
table {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  border: 0;
  tr {
    width: 100%;
    background-color: #fff;
    border: 0;
    th {
      width: 40%;
      text-indent: 10px;
      color: #999;
      font-size: 14px;
      text-align: left;
      border: 0;
      height: 40px;
    }
    td {
      width: 60%;
      color: #333;
      font-size: 14px;
      text-align: left;
      border: 0;
      height: 40px;
      line-height: 40px;
    }
  }
}
.parameter {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #f5f5f5;
  height: 40px;
  text-indent: 10px;
  color: #999;
  font-size: 14px;
  text-align: left;
}
// 底部导航栏
.meizu16t-footer {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  background-color: #fff;
  height: 46px;
  position: fixed;
  left: 0;
  bottom: 0;
  border-top: 1px solid #ccc;
  z-index: 10;
  ul {
    width: 100%;
    height: 46px;
    li {
      height: 46px;
      color: #999;
      float: left;
      span {
        font-size: 16px;
        display: inline-block;
        margin-top: 2px;
      }
      &:nth-child(1) {
        width: 46px;
        text-align: center;
        font-size: 12px;
        border-right: 1px solid #ccc;
        span {
          color: #008cff;
        }
      }
      &:nth-child(2) {
        width: 46px;
        text-align: center;
        font-size: 12px;
        border-right: 1px solid #ccc;
      }
      &:nth-child(3) {
        width: 46px;
        text-align: center;
        font-size: 12px;
      }
      &:nth-child(4) {
        width: 117.5px;
        background-color: #008cff;
        color: white;
        line-height: 46px;
        text-align: center;
        font-size: 14px;
      }
      &:nth-child(5) {
        width: 117.5px;
        background-color: #e03d3d;
        color: white;
        line-height: 46px;
        text-align: center;
        font-size: 14px;
      }
    }
  }
}

// service弹窗样式
.service-title {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  height: 54px;
  font-size: 16px;
  font-weight: bold;
  color: #999;
  text-align: center;
  line-height: 54px;
}
.service-content {
  width: 100%;
  max-width: 436px;
  min-width: 320px;
  margin: 0 auto;
  & > ul {
    width: 90%;
    margin: 0 auto;
    li {
      border-top: 1px solid #f0f0f0;
      &:first-child {
        border-top: 0;
      }
      .item-title {
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        & > span {
          float: left;
          font-size: 18px;
          color: #00c3f8;
        }
        & > p {
          float: left;
          margin-left: 5px;
          color: #333;
          font-weight: bold;
        }
      }
      & > p {
        width: 90%;
        color: #999;
        padding: 10px 0px;
        margin-left: 20px;
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
