<template>
  <div class="playlist-container">
    <div class="top-wrap">
      <div class="img-wrap">
        <!-- 封面 -->
        <img :src="playlist.coverImgUrl" alt="" />
      </div>
      <div class="info-wrap">
        <!-- 名字 -->
        <p class="title">{{ playlist.name }}</p>
        <div class="author-wrap">
          <!-- 头像 -->
          <img class="avatar" :src="avatarUrl" alt="" />
          <span class="name">{{ nickname }}</span>
          <span class="time">{{ playlist.createTime }} 创建</span>
        </div>
        <div class="play-wrap"  @click="play()">
          <span class="iconfont icon-circle-play"></span>
          <span class="text">播放全部</span>
        </div>
        <div class="tag-wrap">
          <span class="title">标签:</span>
          <!-- 分类标签 -->
          <ul>
            <li v-for="(item, index) in playlist.tags" :key="index">
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="desc-wrap">
          <span class="title">简介:</span>
          <span class="desc">{{ playlist.description }}</span>
        </div>
      </div>
    </div>
    <el-tabs v-model="activeIndex">
      <el-tab-pane label="歌曲列表" name="1">
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
            <tr
              class="el-table__row"
              v-for="(item, index) in tracks"
              :key="index"
            >
              <td>1</td>
              <td>
                <div class="img-wrap" @click="playMusic(item.id)">
                  <img :src="item.al.picUrl" alt="" />
                  <span class="iconfont icon-play"></span>
                </div>
              </td>
              <td>
                <div class="song-wrap">
                  <div class="name-wrap">
                    <span>{{ item.name }}</span>
                    <span class="iconfont icon-mv"></span>
                  </div>
                  <span>{{ item.name }}</span>
                </div>
              </td>
              <td>{{ item.ar[0].name }}</td>
              <td>{{ item.al.name }}</td>
              <td>06:03</td>
            </tr>
          </tbody>
        </table>
      </el-tab-pane>
      <el-tab-pane label="评论(66)" name="2">
        <!-- 精彩评论 -->
        <div class="comment-wrap">
          <p class="title">精彩评论<span class="number">(666)</span></p>
          <div class="comments-wrap">
            <div class="item">
              <div class="icon-wrap">
                <img src="../assets/avatar.jpg" alt="" />
              </div>
              <div class="content-wrap">
                <div class="content">
                  <span class="name">爱斯基摩：</span>
                  <span class="comment">谁说的，长大了依旧可爱哈</span>
                </div>
                <div class="re-content">
                  <span class="name">小苹果：</span>
                  <span class="comment">还是小时候比较可爱</span>
                </div>
                <div class="date">2020-02-12 17:26:11</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 最新评论 -->
        <div class="comment-wrap">
          <p class="title">最新评论<span class="number">(666)</span></p>
          <div class="comments-wrap">
            <div class="item">
              <div class="icon-wrap">
                <img src="../assets/avatar.jpg" alt="" />
              </div>
              <div class="content-wrap">
                <div class="content">
                  <span class="name">爱斯基摩：</span>
                  <span class="comment">谁说的，长大了依旧可爱哈</span>
                </div>
                <div class="re-content">
                  <span class="name">小苹果：</span>
                  <span class="comment">还是小时候比较可爱</span>
                </div>
                <div class="date">2020-02-12 17:26:11</div>
              </div>
            </div>
            <div class="item">
              <div class="icon-wrap">
                <img src="../assets/avatar.jpg" alt="" />
              </div>
              <div class="content-wrap">
                <div class="content">
                  <span class="name">爱斯基摩：</span>
                  <span class="comment">谁说的，长大了依旧可爱哈</span>
                </div>
                <div class="re-content">
                  <span class="name">小苹果：</span>
                  <span class="comment">还是小时候比较可爱</span>
                </div>
                <div class="date">2020-02-12 17:26:11</div>
              </div>
            </div>
            <div class="item">
              <div class="icon-wrap">
                <img src="../assets/avatar.jpg" alt="" />
              </div>
              <div class="content-wrap">
                <div class="content">
                  <span class="name">爱斯基摩：</span>
                  <span class="comment">谁说的，长大了依旧可爱哈</span>
                </div>
                <div class="re-content">
                  <span class="name">小苹果：</span>
                  <span class="comment">还是小时候比较可爱</span>
                </div>
                <div class="date">2020-02-12 17:26:11</div>
              </div>
            </div>
          </div>
        </div>
        <!-- 分页器 -->
        <el-pagination
          @current-change="handleCurrentChange"
          background
          layout="prev, pager, next"
          :total="total"
          :current-page="page"
          :page-size="5"
        >
        </el-pagination>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "playlist",
  data() {
    return {
      activeIndex: "1",
      // 总条数
      total: 0,
      // 歌曲列表
      tracks: [],
      // 页码
      page: 1,
      playlist: {},
      avatarUrl: "",
      nickname: ""
    };
  },
  methods: {
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
    },
    play() {
      let id = this.tracks[0].id;
      this.playMusic(id);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    getPlay(id) {
      axios({
        url: "https://autumnfish.cn/playlist/detail",
        method: "get",
        params: {
          id
        }
      }).then(res => {
        console.log(res.data.playlist);
        this.playlist = res.data.playlist;
        this.tracks = res.data.playlist.tracks;
        console.log(this.tracks);
        this.avatarUrl = this.playlist.creator.avatarUrl;
        this.nickname = this.playlist.creator.nickname;
      });
    }
  },
  created() {
    //console.log(this.$route.query.q);
    // axios({
    //   url: "https://autumnfish.cn/playlist/detail",
    //   method: "get",
    //   params: {
    //     id: this.$route.query.q
    //   }
    // }).then(res => {
    //   console.log(res.data.playlist);
    //   this.playlist = res.data.playlist;
    //   this.tracks = res.data.playlist.tracks;
    //   console.log(this.tracks);
    //   this.avatarUrl = this.playlist.creator.avatarUrl;
    //   this.nickname = this.playlist.creator.nickname;
    // });
    this.getPlay(this.$route.query.q);
  }
};
</script>

<style></style>
