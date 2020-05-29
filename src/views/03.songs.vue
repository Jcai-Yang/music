<template>
  <div class="songs-container">
    <div class="tab-bar">
      <span class="item" @click="tag = 0" :class="{ active: tag == 0 }"
        >全部</span
      >
      <span class="item" @click="tag = 7" :class="{ active: tag == 7 }"
        >华语</span
      >
      <span class="item" @click="tag = 96" :class="{ active: tag == 96 }"
        >欧美</span
      >
      <span class="item" @click="tag = 8" :class="{ active: tag == 8 }"
        >日本</span
      >
      <span class="item" @click="tag = 16" :class="{ active: tag == 16 }"
        >韩国</span
      >
    </div>
    <!-- 底部的table -->
    <table class="el-table playlit-table">
      <thead>
        <th></th>
        <th></th>
        <th>音乐标题</th>
        <th>歌手</th>
        <th>专辑</th>
        <th>时长</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in lists" :key="index" class="el-table__row">
          <td>{{ index + 1 }}</td>
          <td>
            <div class="img-wrap">
              <img :src="item.album.picUrl" alt="" />
              <!-- 播放按钮 -->
              <span
                class="iconfont icon-play"
                @click="playMusic(item.id)"
              ></span>
            </div>
          </td>
          <td>
            <div class="song-wrap">
              <div class="name-wrap">
                <span>{{ item.name }}</span>
                <span class="iconfont icon-mv"></span>
              </div>
              <span></span>
            </div>
          </td>
          <td>{{ item.album.artists["0"].name }}</td>
          <td>{{ item.album.name }}</td>
          <td>06:03</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "songs",
  data() {
    return {
      // 歌曲列表
      lists: [],
      tag: 0
    };
  },
  watch: {
    tag() {
      this.listsData();
    }
  },
  created() {
    // 获取最新音乐数据
    this.listsData();
  },
  methods: {
    // 音乐列表
    listsData() {
      axios({
        url: "https://autumnfish.cn/top/song",
        method: "get",
        params: {
          type: 0
        }
      }).then(res => {
        //console.log(res);
        this.lists = res.data.data;
        // 处理时长 毫秒 转为分秒
        for (let i = 0; i < this.lists.length; i++) {
          // 获取 总毫秒数
          let duration = this.lists[i].duration;
          // 假定 350750 毫秒
          // 秒 350750/1000 350秒
          // 分 350/60
          // 秒 350%60
          let min = parseInt(duration / 1000 / 60);
          if (min < 10) {
            min = "0" + min;
          }
          let sec = parseInt((duration / 1000) % 60);
          if (sec < 10) {
            sec = "0" + sec;
          }
          //console.log(min + "|" + sec);
          this.lists[i].duration = `${min}:${sec}`;
        }
      });
    },
    // 播放音乐
    playMusic(id) {
      console.log(id);
      axios({
        url: "https://autumnfish.cn/song/url/",
        method: "get",
        params: {
          id
        }
      }).then(res => {
        //console.log(res.data.data[0]);
        let url = res.data.data[0].url;
        // 直接获取父组件，可以修改任意的值
        this.$parent.musicUrl = url;
      });
    }
  }
};
</script>

<style></style>
