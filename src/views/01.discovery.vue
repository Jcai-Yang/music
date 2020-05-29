<template>
  <div class="discovery-container">
    <!-- 轮播图 -->
    <el-carousel class="" :interval="4000" type="card">
      <el-carousel-item v-for="(item, index) in banners" :key="index">
        <img :src="item.imageUrl" alt="" />
      </el-carousel-item>
    </el-carousel>
    <!-- 推荐歌单 -->
    <div class="recommend">
      <h3 class="title">
        推荐歌单
      </h3>
      <div class="items">
        <div class="item" v-for="(item, index) in list" :key="item.id">
          <div class="img-wrap">
            <div class="desc-wrap">
              <span class="desc">{{ item.copywriter }}</span>
            </div>
            <img :src="item.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
          </div>
          <p class="name">{{ item.name }}</p>
        </div>
      </div>
    </div>
    <!-- 最新音乐 -->
    <div class="news">
      <h3 class="title">
        最新音乐
      </h3>
      <div class="items">
        <div class="item" v-for="(item, index) in songs" :key="index">
          <div class="img-wrap">
            <!-- 封面 -->
            <img :src="item.picUrl" alt="" />
            <span @click="playMusic(item.id)" class="iconfont icon-play"></span>
          </div>
          <div class="song-wrap">
            <!-- 歌名 -->
            <div class="song-name">{{ item.name }}</div>
            <!-- 歌手 -->
            <div class="singer">{{ item.song.album.artists[0].name }}</div>
          </div>
        </div>
      </div>
    </div>
    <!-- 推荐MV -->
    <div class="mvs">
      <h3 class="title">推荐MV</h3>
      <div class="items">
        <div class="item" v-for="(item,index) in mvs" :key="index">
          <div class="img-wrap">
            <img :src="item.picUrl" alt="" />
            <span class="iconfont icon-play"></span>
            <div class="num-wrap">
              <div class="iconfont icon-play"></div>
              <div class="num">{{item.playCount}}</div>
            </div>
          </div>
          <div class="info-wrap">
            <div class="name">{{item.name}}</div>
            <div class="singer">{{item.artistsName}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入 axios
import axios from "axios";
export default {
  name: "discovery",
  data() {
    return {
      // 轮播图
      banners: [],
      // 推荐歌单
      list: [],
      // 最新音乐
      songs: [],
      // 推荐MV
      mvs: []
    };
  },
  created() {
    // 轮播图
    axios({
      url: "https://autumnfish.cn/banner",
      method: "get"
    }).then(res => {
      this.banners = res.data.banners;
      //console.log(this.banners);
    });
    // 推荐歌单
    axios({
      url: "https://autumnfish.cn/personalized",
      method: "get",
      params: {
        // 获取的数据量
        limit: 10
      }
    }).then(res => {
      this.list = res.data.result;
    });
    // 最新音乐
    axios({
      url: "https://autumnfish.cn/personalized/newsong",
      method: "get"
    }).then(res => {
      this.songs = res.data.result;
    });
    // 推荐mv
    axios({
      url: "https://autumnfish.cn/personalized/mv",
      method: "get"
    }).then(res => {
      this.mvs = res.data.result;
    });
  },
  methods: {
    playMusic(id) {
      //console.log(id)
      axios({
        url: "https://autumnfish.cn/song/url",
        method: "get",
        params: {
          id
        }
      }).then(res => {
        let url = res.data.data[0].url;
        // console.log(this.$parent.musicUrl);
        // 设置给父组件的播放地址
        this.$parent.musicUrl = url;
      });
    }
  }
};
</script>

<style></style>
