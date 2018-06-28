<style>
    .main {
        width: 1380px;
        margin: 0 auto;
        position: relative;
    }
    .ivu-card {
        background-color: #F1F1F1 !important;
    }
    /**
     * 轮播
     */
    .banner-carousel {
    }
    .banner {
        width: 100%;
        height: 100%;
    }
    /**
     * 梓图
     */
    .zi-tu-div {
        padding: 0 0 10px 0;
        margin-top: 20px;
        background-color: #fff;
    }
    .zi-tu {
        margin-top: 10px;
    }
    .zi-tu-card {
        width: 335px;
        display: inline-block;
        margin: 5px;
        background-color: #fff !important;
    }
    .zi-tu-card-img {
        margin: 0;
        padding: 0;
        width: 300px;
        height: 210px;
    }
    /**
     * 饭制
     */
    .fan-zhi-div {
        padding: 0 0 10px 0;
        margin-top: 20px;
        background-color: #fff;
    }
    .fan-zhi {
        margin-top: 10px;
    }
    .fan-zhi-card {
        width: 335px;
        display: inline-block;
        margin: 5px;
        background-color: #fff !important;
    }
    /**
     * 手绘梓
     */
    .shou-hui-div {
        padding: 0 0 10px 0;
        margin-top: 20px;
        background-color: #fff;
    }
    .shou-hui {
        margin-top: 10px;
    }
    .shou-hui-card {
        width: 335px;
        display: inline-block;
        margin: 5px;
        background-color: #fff !important;
    }
    .shou-hui-card-img {
        margin: 0;
        padding: 0;
        width: 300px;
        height: 210px;
    }
</style>

<template>
  <div class="main">
      <Carousel height="360px"
                v-model="bannerSetting.startNum"
                :autoplay="bannerSetting.autoplay"
                :autoplay-speed="bannerSetting.autoplaySpeed"
                :dots="bannerSetting.dots"
                :radius-dot="bannerSetting.radiusDot"
                :trigger="bannerSetting.trigger"
                :arrow="bannerSetting.arrow"
                class="banner-carousel">
          <CarouselItem v-for="item in bannerList" :key="item">
              <img :src='item.src' :alt='item.title' class="banner">
          </CarouselItem>
      </Carousel>

      <!-- 暂时只考虑使用走马灯，网易云轮播MARK -->
      <!--<div class="banner">-->
          <!--<barousel :list='bannerList'></barousel>-->
      <!--</div>-->

      <!-- 梓图 -->
      <div class="zi-tu-div">
          <h2 style="border-bottom: 1px solid #e4e4e4; padding: 5px 0 0 0;">
              <span style="font-size: 16px; font-weight: bold; margin: 0 0 0 10px;">梓图</span>
          </h2>
          <div class="zi-tu">
              <Card class="zi-tu-card" v-for="item in ziTuList" :key="item">
                  <div style="text-align:center">
                      <img :src='item.src' :alt='item.title' class="zi-tu-card-img">
                      <span>{{item.title}}</span>
                  </div>
              </Card>
          </div>
      </div>
      <!-- 饭制 -->
      <div class="fan-zhi-div">
          <h2 style="border-bottom: 1px solid #e4e4e4; padding: 5px 0 0 0;">
              <span style="font-size: 16px; font-weight: bold; margin: 0 0 0 10px;">饭制</span>
          </h2>
          <div class="fan-zhi">
              <Card class="fan-zhi-card" v-for="item in fanZhiList" :key="item">
                  <div style="text-align:center">
                      <iframe frameborder="0" width="300" height="210" :src="item.src" allowfullscreen></iframe>
                      <span>{{item.title}}</span>
                  </div>
              </Card>
          </div>
      </div>
      <!-- 手绘梓 -->
      <div class="shou-hui-div">
          <h2 style="border-bottom: 1px solid #e4e4e4; padding: 5px 0 0 0;">
              <span style="font-size: 16px; font-weight: bold; margin: 0 0 0 10px;">手绘梓</span>
          </h2>
          <div class="shou-hui">
              <Card class="shou-hui-card" v-for="item in shouHuiList" :key="item">
                  <div style="text-align:center">
                      <img :src='item.src' :alt='item.title' class="shou-hui-card-img">
                      <span>{{item.title}}</span>
                  </div>
              </Card>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            bannerSetting: {
                startNum: 0,
                autoplay: true,
                autoplaySpeed: 3500,
                dots: 'inside',
                radiusDot: false,
                trigger: 'click',
                arrow: 'hover'
            },
            bannerList: [
                {src: 'https://img-gqz-fans.oss-cn-beijing.aliyuncs.com/banner/banner-3.png?x-oss-process=style/webp', title: '高秋梓'},
                {src: 'https://img-gqz-fans.oss-cn-beijing.aliyuncs.com/banner/banner-2.jpg?x-oss-process=style/webp', title: '高秋梓'}
            ],
            ziTuList: [
                {src: 'https://img-gqz-fans.oss-cn-beijing.aliyuncs.com/banner/banner-1.jpg?x-oss-process=style/webp', title: '高秋梓图片（1）'},
                {src: 'https://img-gqz-fans.oss-cn-beijing.aliyuncs.com/zitu/21.jpg?x-oss-process=style/webp', title: '高秋梓图片（2）'},
                {src: 'https://img-gqz-fans.oss-cn-beijing.aliyuncs.com/zitu/A4CF6D4595E12E834851384DB82A1FAC.jpg?x-oss-process=style/webp', title: '高秋梓图片（3）'},
                {src: 'https://img-gqz-fans.oss-cn-beijing.aliyuncs.com/zitu/7f83aab0gy1fgm5ds6n4oj20ku0rs0ws.jpg?x-oss-process=style/webp', title: '高秋梓图片（4）'},
            ],
            fanZhiList: [
                {src: 'https://v.qq.com/iframe/player.html?vid=u0703hoawgv&tiny=0&auto=0', title: '饭制视频（1）'},
                {src: 'https://v.qq.com/iframe/player.html?vid=u0703hoawgv&tiny=0&auto=0', title: '饭制视频（2）'},
                {src: 'https://v.qq.com/iframe/player.html?vid=u0703hoawgv&tiny=0&auto=0', title: '饭制视频（3）'},
                {src: 'https://v.qq.com/iframe/player.html?vid=u0703hoawgv&tiny=0&auto=0', title: '饭制视频（4）'}
            ],
            shouHuiList: [
                {src: 'https://img-gqz-fans.oss-cn-beijing.aliyuncs.com/shouhui/200.jpg?x-oss-process=style/webp', title: '手绘梓（1）'},
                {src: 'https://img-gqz-fans.oss-cn-beijing.aliyuncs.com/shouhui/dianqian.png?x-oss-process=style/webp', title: '手绘梓（2）'},
                {src: 'https://img-gqz-fans.oss-cn-beijing.aliyuncs.com/shouhui/katong-gqz.png?x-oss-process=style/webp', title: '手绘梓（3）'},
            ]
        };
    },
    created() {
    },
    methods: {
    }
};
</script>

