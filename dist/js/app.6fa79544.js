(function(t){function a(a){for(var i,c,l=a[0],r=a[1],o=a[2],p=0,u=[];p<l.length;p++)c=l[p],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&u.push(n[c][0]),n[c]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);v&&v(a);while(u.length)u.shift()();return e.push.apply(e,o||[]),s()}function s(){for(var t,a=0;a<e.length;a++){for(var s=e[a],i=!0,l=1;l<s.length;l++){var r=s[l];0!==n[r]&&(i=!1)}i&&(e.splice(a--,1),t=c(c.s=s[0]))}return t}var i={},n={app:0},e=[];function c(a){if(i[a])return i[a].exports;var s=i[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=i,c.d=function(t,a,s){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var i in t)c.d(s,i,function(a){return t[a]}.bind(null,i));return s},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],r=l.push.bind(l);l.push=a,l=l.slice();for(var o=0;o<l.length;o++)a(l[o]);var v=r;e.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("top"),s("index")],1)},e=[],c=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"top-container"},[t._m(0),s("div",{staticClass:"right-box"},[s("div",{staticClass:"el-input el-input--small el-input--prefix"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputVal,expression:"inputVal"}],staticClass:"el-input__inner",attrs:{type:"text",autocomplete:"off",placeholder:"搜索"},domProps:{value:t.inputVal},on:{keyup:function(a){return!a.type.indexOf("key")&&t._k(a.keyCode,"enter",13,a.key,"Enter")?null:t.toResult(a)},input:function(a){a.target.composing||(t.inputVal=a.target.value)}}}),t._m(1)])])])},l=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"left-box"},[s("div",{staticClass:"icon-wrapper"},[s("span",{staticClass:"iconfont icon-home"}),s("span",{staticClass:"iconfont icon-sami-select"}),s("span",{staticClass:"iconfont icon-full-screen"})]),s("div",{staticClass:"history-wrapper"},[s("span",{staticClass:"iconfont icon-arrow-lift"}),s("span",{staticClass:"iconfont icon-arrow-right"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("span",{staticClass:"el-input__prefix"},[s("i",{staticClass:"el-input__icon el-icon-search"})])}],r={name:"top",data:function(){return{inputVal:""}},methods:{toResult:function(){""==this.inputVal?this.$message.warning("请输入内容"):this.$router.push("/result?q="+this.inputVal)}}},o=r,v=s("2877"),p=Object(v["a"])(o,c,l,!1,null,"08cf5a7f",null),u=p.exports,m=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"index-container"},[s("div",{staticClass:"nav"},[s("ul",[s("li",[s("router-link",{attrs:{to:"/discovery"}},[s("span",{staticClass:"iconfont icon-find-music"}),t._v(" 发现音乐 ")])],1),s("li",[s("router-link",{attrs:{to:"/playlists"}},[s("span",{staticClass:"iconfont icon-music-list"}),t._v(" 推荐歌单 ")])],1),s("li",[s("router-link",{attrs:{to:"/songs"}},[s("span",{staticClass:"iconfont icon-music"}),t._v(" 最新音乐 ")])],1),s("li",[s("router-link",{attrs:{to:"/mvs"}},[s("span",{staticClass:"iconfont icon-mv"}),t._v(" 最新MV ")])],1)])]),s("div",{staticClass:"main"},[s("router-view")],1),s("div",{staticClass:"player"},[s("audio",{attrs:{src:t.musicUrl,controls:"",autoplay:""}})])])},d=[],C={name:"index",data:function(){return{musicUrl:""}}},f=C,_=Object(v["a"])(f,m,d,!1,null,null,null),h=_.exports,g={name:"app",components:{top:u,index:h}},y=g,b=Object(v["a"])(y,n,e,!1,null,null,null),w=b.exports,k=s("5c96"),x=s.n(k),I=(s("0fae"),s("d940c"),s("8c4f")),$=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"discovery-container"},[s("el-carousel",{attrs:{interval:4e3,type:"card"}},t._l(t.banners,(function(t,a){return s("el-carousel-item",{key:a},[s("img",{attrs:{src:t.imageUrl,alt:""}})])})),1),s("div",{staticClass:"recommend"},[s("h3",{staticClass:"title"},[t._v(" 推荐歌单 ")]),s("div",{staticClass:"items"},t._l(t.list,(function(a,i){return s("div",{key:a.id,staticClass:"item"},[s("div",{staticClass:"img-wrap"},[s("div",{staticClass:"desc-wrap"},[s("span",{staticClass:"desc"},[t._v(t._s(a.copywriter))])]),s("img",{attrs:{src:a.picUrl,alt:""}}),s("span",{staticClass:"iconfont icon-play"})]),s("p",{staticClass:"name"},[t._v(t._s(a.name))])])})),0)]),s("div",{staticClass:"news"},[s("h3",{staticClass:"title"},[t._v(" 最新音乐 ")]),s("div",{staticClass:"items"},t._l(t.songs,(function(a,i){return s("div",{key:i,staticClass:"item"},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:a.picUrl,alt:""}}),s("span",{staticClass:"iconfont icon-play",on:{click:function(s){return t.playMusic(a.id)}}})]),s("div",{staticClass:"song-wrap"},[s("div",{staticClass:"song-name"},[t._v(t._s(a.name))]),s("div",{staticClass:"singer"},[t._v(t._s(a.song.album.artists[0].name))])])])})),0)]),s("div",{staticClass:"mvs"},[s("h3",{staticClass:"title"},[t._v("推荐MV")]),s("div",{staticClass:"items"},t._l(t.mvs,(function(a,i){return s("div",{key:i,staticClass:"item"},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:a.picUrl,alt:""}}),s("span",{staticClass:"iconfont icon-play"}),s("div",{staticClass:"num-wrap"},[s("div",{staticClass:"iconfont icon-play"}),s("div",{staticClass:"num"},[t._v(t._s(a.playCount))])])]),s("div",{staticClass:"info-wrap"},[s("div",{staticClass:"name"},[t._v(t._s(a.name))]),s("div",{staticClass:"singer"},[t._v(t._s(a.artistsName))])])])})),0)])],1)},L=[],M=s("bc3a"),O=s.n(M),U={name:"discovery",data:function(){return{banners:[],list:[],songs:[],mvs:[]}},created:function(){var t=this;O()({url:"https://autumnfish.cn/banner",method:"get"}).then((function(a){t.banners=a.data.banners})),O()({url:"https://autumnfish.cn/personalized",method:"get",params:{limit:10}}).then((function(a){t.list=a.data.result})),O()({url:"https://autumnfish.cn/personalized/newsong",method:"get"}).then((function(a){t.songs=a.data.result})),O()({url:"https://autumnfish.cn/personalized/mv",method:"get"}).then((function(a){t.mvs=a.data.result}))},methods:{playMusic:function(t){var a=this;O()({url:"https://autumnfish.cn/song/url",method:"get",params:{id:t}}).then((function(t){var s=t.data.data[0].url;a.$parent.musicUrl=s}))}}},j=U,q=Object(v["a"])(j,$,L,!1,null,null,null),E=q.exports,V=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"playlists-container"},[s("div",{staticClass:"top-card"},[s("div",{staticClass:"icon-wrap"},[s("img",{attrs:{src:t.topList.coverImgUrl,alt:""}})]),s("div",{staticClass:"content-wrap"},[s("div",{staticClass:"tag"},[t._v("精品歌单")]),s("div",{staticClass:"title"},[t._v(" "+t._s(t.topList.name)+" ")]),s("div",{staticClass:"info"},[t._v(" "+t._s(t.topList.description)+" ")])]),s("img",{staticClass:"bg",attrs:{src:t.topList.coverImgUrl,alt:""}}),s("div",{staticClass:"bg-mask"})]),s("div",{staticClass:"tab-container"},[s("div",{staticClass:"tab-bar"},[s("span",{staticClass:"item",class:{active:"全部"==t.tag},on:{click:function(a){t.tag="全部"}}},[t._v("全部")]),s("span",{staticClass:"item",class:{active:"欧美"==t.tag},on:{click:function(a){t.tag="欧美"}}},[t._v("欧美")]),s("span",{staticClass:"item",class:{active:"华语"==t.tag},on:{click:function(a){t.tag="华语"}}},[t._v("华语")]),s("span",{staticClass:"item",class:{active:"流行"==t.tag},on:{click:function(a){t.tag="流行"}}},[t._v("流行")]),s("span",{staticClass:"item",class:{active:"说唱"==t.tag},on:{click:function(a){t.tag="说唱"}}},[t._v("说唱")]),s("span",{staticClass:"item",class:{active:"摇滚"==t.tag},on:{click:function(a){t.tag="摇滚"}}},[t._v("摇滚")]),s("span",{staticClass:"item",class:{active:"民谣"==t.tag},on:{click:function(a){t.tag="民谣"}}},[t._v("民谣")]),s("span",{staticClass:"item",class:{active:"电子"==t.tag},on:{click:function(a){t.tag="电子"}}},[t._v("电子")]),s("span",{staticClass:"item",class:{active:"轻音乐"==t.tag},on:{click:function(a){t.tag="轻音乐"}}},[t._v("轻音乐")]),s("span",{staticClass:"item",class:{active:"影视原声"==t.tag},on:{click:function(a){t.tag="影视原声"}}},[t._v("影视原声")]),s("span",{staticClass:"item",class:{active:"ACG"==t.tag},on:{click:function(a){t.tag="ACG"}}},[t._v("ACG")]),s("span",{staticClass:"item",class:{active:"怀旧"==t.tag},on:{click:function(a){t.tag="怀旧"}}},[t._v("怀旧")]),s("span",{staticClass:"item",class:{active:"治愈"==t.tag},on:{click:function(a){t.tag="治愈"}}},[t._v("治愈")]),s("span",{staticClass:"item",class:{active:"旅行"==t.tag},on:{click:function(a){t.tag="旅行"}}},[t._v("旅行")])]),s("div",{staticClass:"tab-content"},[s("div",{staticClass:"items"},t._l(t.list,(function(a,i){return s("div",{key:i,staticClass:"item"},[s("div",{staticClass:"img-wrap"},[s("div",{staticClass:"num-wrap"},[t._v(" 播放量: "),s("span",{staticClass:"num"},[t._v(t._s(a.playCount))])]),s("img",{attrs:{src:a.coverImgUrl,alt:""}}),s("span",{staticClass:"iconfont icon-play"})]),s("p",{staticClass:"name"},[t._v(t._s(a.name))])])})),0)])]),s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":10},on:{"current-change":t.handleCurrentChange}})],1)},D=[],P={name:"recommend",data:function(){return{total:0,page:1,topList:{},list:[],tag:"全部"}},watch:{tag:function(){this.page=1,this.topData(),this.listData()}},created:function(){this.topData(),this.listData()},methods:{topData:function(){var t=this;O()({url:"https://autumnfish.cn/top/playlist/highquality",methods:"get",params:{limit:1,cat:this.tag}}).then((function(a){t.topList=a.data.playlists[0]}))},listData:function(){var t=this;O()({url:"https://autumnfish.cn/top/playlist/",methods:"get",params:{limit:10,offset:10*(this.page-1),cat:this.tag}}).then((function(a){t.total=a.data.total,t.list=a.data.playlists}))},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.page=t,this.listData()}}},z=P,N=Object(v["a"])(z,V,D,!1,null,null,null),S=N.exports,T=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"songs-container"},[s("div",{staticClass:"tab-bar"},[s("span",{staticClass:"item",class:{active:0==t.tag},on:{click:function(a){t.tag=0}}},[t._v("全部")]),s("span",{staticClass:"item",class:{active:7==t.tag},on:{click:function(a){t.tag=7}}},[t._v("华语")]),s("span",{staticClass:"item",class:{active:96==t.tag},on:{click:function(a){t.tag=96}}},[t._v("欧美")]),s("span",{staticClass:"item",class:{active:8==t.tag},on:{click:function(a){t.tag=8}}},[t._v("日本")]),s("span",{staticClass:"item",class:{active:16==t.tag},on:{click:function(a){t.tag=16}}},[t._v("韩国")])]),s("table",{staticClass:"el-table playlit-table"},[t._m(0),s("tbody",t._l(t.lists,(function(a,i){return s("tr",{key:i,staticClass:"el-table__row"},[s("td",[t._v(t._s(i+1))]),s("td",[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:a.album.picUrl,alt:""}}),s("span",{staticClass:"iconfont icon-play",on:{click:function(s){return t.playMusic(a.id)}}})])]),s("td",[s("div",{staticClass:"song-wrap"},[s("div",{staticClass:"name-wrap"},[s("span",[t._v(t._s(a.name))]),s("span",{staticClass:"iconfont icon-mv"})]),s("span")])]),s("td",[t._v(t._s(a.album.artists["0"].name))]),s("td",[t._v(t._s(a.album.name))]),s("td",[t._v("06:03")])])})),0)])])},A=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("thead",[s("th"),s("th"),s("th",[t._v("音乐标题")]),s("th",[t._v("歌手")]),s("th",[t._v("专辑")]),s("th",[t._v("时长")])])}],G=(s("99af"),{name:"songs",data:function(){return{lists:[],tag:0}},watch:{tag:function(){this.listsData()}},created:function(){this.listsData()},methods:{listsData:function(){var t=this;O()({url:"https://autumnfish.cn/top/song",method:"get",params:{type:0}}).then((function(a){t.lists=a.data.data;for(var s=0;s<t.lists.length;s++){var i=t.lists[s].duration,n=parseInt(i/1e3/60);n<10&&(n="0"+n);var e=parseInt(i/1e3%60);e<10&&(e="0"+e),t.lists[s].duration="".concat(n,":").concat(e)}}))},playMusic:function(t){var a=this;console.log(t),O()({url:"https://autumnfish.cn/song/url/",method:"get",params:{id:t}}).then((function(t){var s=t.data.data[0].url;a.$parent.musicUrl=s}))}}}),J=G,R=Object(v["a"])(J,T,A,!1,null,null,null),B=R.exports,F=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mvs-container"},[s("div",{staticClass:"filter-wrap"},[s("div",{staticClass:"seciton-wrap"},[s("span",{staticClass:"section-type"},[t._v("地区:")]),s("ul",{staticClass:"tabs-wrap"},[s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"全部"==t.area},on:{click:function(a){t.area="全部"}}},[t._v("全部")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"内地"==t.area},on:{click:function(a){t.area="内地"}}},[t._v("内地")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"港台"==t.area},on:{click:function(a){t.area="港台"}}},[t._v("港台")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"欧美"==t.area},on:{click:function(a){t.area="欧美"}}},[t._v("欧美")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"日本"==t.area},on:{click:function(a){t.area="日本"}}},[t._v("日本")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"韩国"==t.area},on:{click:function(a){t.area="韩国"}}},[t._v("韩国")])])])]),s("div",{staticClass:"type-wrap"},[s("span",{staticClass:"type-type"},[t._v("类型:")]),s("ul",{staticClass:"tabs-wrap"},[s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"全部"==t.type},on:{click:function(a){t.type="全部"}}},[t._v("全部")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"官方版"==t.type},on:{click:function(a){t.type="官方版"}}},[t._v("官方版")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"原声"==t.type},on:{click:function(a){t.type="原声"}}},[t._v("原声")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"现场版"==t.type},on:{click:function(a){t.type="现场版"}}},[t._v("现场版")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"网易出品"==t.type},on:{click:function(a){t.type="网易出品"}}},[t._v("网易出品")])])])]),s("div",{staticClass:"order-wrap"},[s("span",{staticClass:"order-type"},[t._v("排序:")]),s("ul",{staticClass:"tabs-wrap"},[s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"上升最快"==t.order},on:{click:function(a){t.order="上升最快"}}},[t._v("上升最快")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"最热"==t.order},on:{click:function(a){t.order="最热"}}},[t._v("最热")])]),s("li",{staticClass:"tab"},[s("span",{staticClass:"title",class:{active:"最新"==t.order},on:{click:function(a){t.order="最新"}}},[t._v("最新")])])])])]),s("div",{staticClass:"mvs"},[s("div",{staticClass:"items"},t._l(t.mvs,(function(a,i){return s("div",{key:i,staticClass:"item",on:{click:function(s){return t.toMv(a.id)}}},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:a.cover,alt:""}}),s("div",{staticClass:"num-wrap"},[s("div",{staticClass:"iconfont icon-play"}),s("div",{staticClass:"num"},[t._v(t._s(a.playCount))])])]),s("div",{staticClass:"info-wrap"},[s("div",{staticClass:"name"},[t._v(t._s(a.name))]),s("div",{staticClass:"singer"},[t._v(t._s(a.artistName))])])])})),0),s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":5,limit:t.limit},on:{"current-change":t.handleCurrentChange}})],1)])},H=[],K={name:"mvs",data:function(){return{total:20,page:1,limit:8,area:"全部",type:"全部",order:"上升最快",mvs:[]}},watch:{area:function(){this.page=1,this.getList()},type:function(){this.page=1,this.getList()},order:function(){this.page=1,this.getList()}},created:function(){this.getList()},methods:{getList:function(){var t=this;O()({url:"https://autumnfish.cn/mv/all",method:"get",params:{area:this.area,type:this.type,order:this.order,limit:this.limit,offset:(this.page-1)*this.limit}}).then((function(a){t.mvs=a.data.data;for(var s=0;s<t.mvs.length;s++)t.mvs[s].playCount>1e5&&(t.mvs[s].playCount=parseInt(t.mvs[s].playCount/1e4)+"万");a.data.count&&(t.total=a.data.count)}))},toMv:function(t){this.$router.push("/mv?id=".concat(t))},handleCurrentChange:function(t){console.log("当前页: ".concat(t)),this.page=t,this.getList()}}},Q=K,W=Object(v["a"])(Q,F,H,!1,null,null,null),X=W.exports,Y=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"result-container"},[s("div",{staticClass:"title-wrap"},[s("h2",{staticClass:"title"},[t._v(t._s(t.$route.query.q))]),s("span",{staticClass:"sub-title"},[t._v("找到"+t._s(t.count)+"个结果")])]),s("el-tabs",{model:{value:t.activeIndex,callback:function(a){t.activeIndex=a},expression:"activeIndex"}},[s("el-tab-pane",{attrs:{label:"歌曲",name:"songs"}},[s("table",{staticClass:"el-table"},[s("thead",[s("th"),s("th",[t._v("音乐标题")]),s("th",[t._v("歌手")]),s("th",[t._v("专辑")]),s("th",[t._v("时长")])]),s("tbody",t._l(t.songList,(function(a,i){return s("tr",{key:i,staticClass:"el-table__row",on:{dblclick:function(s){return t.playMusic(a.id)}}},[s("td",[t._v("1")]),s("td",[s("div",{staticClass:"song-wrap"},[s("div",{staticClass:"name-wrap"},[s("span",[t._v(t._s(a.name))]),0!=a.mvid?s("span",{staticClass:"iconfont icon-mv"}):t._e()]),0!=a.alias.length?s("span",[t._v(t._s(a.alias[0]))]):t._e()])]),s("td",[t._v(t._s(a.artists[0].name))]),s("td",[t._v(t._s(a.album.name))]),s("td",[t._v(t._s(a.duration))])])})),0)])]),s("el-tab-pane",{attrs:{label:"歌单",name:"lists"}},[s("div",{staticClass:"items"},t._l(t.playlists,(function(a,i){return s("div",{key:i,staticClass:"item",on:{click:function(s){return t.toplayList(a.id)}}},[s("div",{staticClass:"img-wrap"},[s("div",{staticClass:"num-wrap"},[t._v(" 播放量: "),s("span",{staticClass:"num"},[t._v(t._s(a.playCount))])]),s("img",{attrs:{src:a.coverImgUrl,alt:""}}),s("span",{staticClass:"iconfont icon-play"})]),s("p",{staticClass:"name"},[t._v(t._s(a.name))])])})),0)]),s("el-tab-pane",{attrs:{label:"MV",name:"mv"}},[s("div",{staticClass:"items mv"},t._l(t.mv,(function(a,i){return s("div",{key:i,staticClass:"item",on:{click:function(s){return t.toMV(a.id)}}},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:a.cover,alt:""}}),s("span",{staticClass:"iconfont icon-play"}),s("div",{staticClass:"num-wrap"},[s("div",{staticClass:"iconfont icon-play"}),s("div",{staticClass:"num"},[t._v(t._s(a.playCount))])]),s("span",{staticClass:"time"},[t._v(t._s(a.duration))])]),s("div",{staticClass:"info-wrap"},[s("div",{staticClass:"name"},[t._v(t._s(a.name))]),s("div",{staticClass:"singer"},[t._v(t._s(a.artistName))])])])})),0)])],1)],1)},Z=[],tt={name:"result",data:function(){return{activeIndex:"songs",songList:[],playlists:[],mv:[],count:0}},watch:{activeIndex:function(){var t=this,a=1,s=10;switch(this.activeIndex){case"songs":a=1,s=10;break;case"lists":a=1e3,s=10;break;case"mv":a=1004,s=8;break}O()({url:"https://autumnfish.cn/search",method:"get",params:{keywords:this.$route.query.q,type:a,limit:s}}).then((function(s){if(1==a){t.songList=s.data.result.songs;for(var i=0;i<t.songList.length;i++){var n=parseInt(t.songList[i].duration/1e3/60),e=parseInt(t.songList[i].duration/1e3%60);n<10&&(n="0"+n),e<10&&(e="0"+e),t.songList[i].duration=n+":"+e}t.count=s.data.result.songCount}else if(1e3==a){t.playlists=s.data.result.playlists,t.count=s.data.result.playlistCount;for(var c=0;c<t.playlists.length;c++)t.playlists[c].playCount>1e5&&(t.playlists[c].playCount=parseInt(t.playlists[c].playCount/1e4)+"万")}else if(1004==a){t.mv=s.data.result.mvs,t.count=s.data.result.mvCount;for(var l=0;l<t.mv.length;l++){var r=parseInt(t.mv[l].duration/1e3/60),o=parseInt(t.mv[l].duration/1e3%60);r<10&&(r="0"+r),o<10&&(o="0"+o),t.mv[l].duration=r+":"+o,t.mv[l].playCount>1e5&&(t.mv[l].playCount=parseInt(t.mv[l].playCount/1e4)+"万")}}}))}},methods:{toplayList:function(t){this.$router.push("/playlist?q="+t)},playMusic:function(t){var a=this;O()({url:"https://autumnfish.cn/song/url",method:"get",params:{id:t}}).then((function(t){var s=t.data.data[0].url;a.$parent.musicUrl=s}))},toMV:function(t){this.$router.push("/mv?q=".concat(t))}},created:function(){var t=this;O()({url:"https://autumnfish.cn/search",method:"get",params:{keywords:this.$route.query.q,type:1,limit:10}}).then((function(a){t.songList=a.data.result.songs;for(var s=0;s<t.songList.length;s++){var i=parseInt(t.songList[s].duration/1e3/60),n=parseInt(t.songList[s].duration/1e3%60);i<10&&(i="0"+i),n<10&&(n="0"+n),t.songList[s].duration=i+":"+n}t.count=a.data.result.songCount}))}},at=tt,st=Object(v["a"])(at,Y,Z,!1,null,null,null),it=st.exports,nt=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"playlist-container"},[i("div",{staticClass:"top-wrap"},[i("div",{staticClass:"img-wrap"},[i("img",{attrs:{src:t.playlist.coverImgUrl,alt:""}})]),i("div",{staticClass:"info-wrap"},[i("p",{staticClass:"title"},[t._v(t._s(t.playlist.name))]),i("div",{staticClass:"author-wrap"},[i("img",{staticClass:"avatar",attrs:{src:t.avatarUrl,alt:""}}),i("span",{staticClass:"name"},[t._v(t._s(t.nickname))]),i("span",{staticClass:"time"},[t._v(t._s(t.playlist.createTime)+" 创建")])]),i("div",{staticClass:"play-wrap",on:{click:function(a){return t.play()}}},[i("span",{staticClass:"iconfont icon-circle-play"}),i("span",{staticClass:"text"},[t._v("播放全部")])]),i("div",{staticClass:"tag-wrap"},[i("span",{staticClass:"title"},[t._v("标签:")]),i("ul",t._l(t.playlist.tags,(function(a,s){return i("li",{key:s},[t._v(" "+t._s(a)+" ")])})),0)]),i("div",{staticClass:"desc-wrap"},[i("span",{staticClass:"title"},[t._v("简介:")]),i("span",{staticClass:"desc"},[t._v(t._s(t.playlist.description))])])])]),i("el-tabs",{model:{value:t.activeIndex,callback:function(a){t.activeIndex=a},expression:"activeIndex"}},[i("el-tab-pane",{attrs:{label:"歌曲列表",name:"1"}},[i("table",{staticClass:"el-table playlit-table"},[i("thead",[i("th"),i("th"),i("th",[t._v("音乐标题")]),i("th",[t._v("歌手")]),i("th",[t._v("专辑")]),i("th",[t._v("时长")])]),i("tbody",t._l(t.tracks,(function(a,s){return i("tr",{key:s,staticClass:"el-table__row"},[i("td",[t._v("1")]),i("td",[i("div",{staticClass:"img-wrap",on:{click:function(s){return t.playMusic(a.id)}}},[i("img",{attrs:{src:a.al.picUrl,alt:""}}),i("span",{staticClass:"iconfont icon-play"})])]),i("td",[i("div",{staticClass:"song-wrap"},[i("div",{staticClass:"name-wrap"},[i("span",[t._v(t._s(a.name))]),i("span",{staticClass:"iconfont icon-mv"})]),i("span",[t._v(t._s(a.name))])])]),i("td",[t._v(t._s(a.ar[0].name))]),i("td",[t._v(t._s(a.al.name))]),i("td",[t._v("06:03")])])})),0)])]),i("el-tab-pane",{attrs:{label:"评论(66)",name:"2"}},[i("div",{staticClass:"comment-wrap"},[i("p",{staticClass:"title"},[t._v("精彩评论"),i("span",{staticClass:"number"},[t._v("(666)")])]),i("div",{staticClass:"comments-wrap"},[i("div",{staticClass:"item"},[i("div",{staticClass:"icon-wrap"},[i("img",{attrs:{src:s("915e"),alt:""}})]),i("div",{staticClass:"content-wrap"},[i("div",{staticClass:"content"},[i("span",{staticClass:"name"},[t._v("爱斯基摩：")]),i("span",{staticClass:"comment"},[t._v("谁说的，长大了依旧可爱哈")])]),i("div",{staticClass:"re-content"},[i("span",{staticClass:"name"},[t._v("小苹果：")]),i("span",{staticClass:"comment"},[t._v("还是小时候比较可爱")])]),i("div",{staticClass:"date"},[t._v("2020-02-12 17:26:11")])])])])]),i("div",{staticClass:"comment-wrap"},[i("p",{staticClass:"title"},[t._v("最新评论"),i("span",{staticClass:"number"},[t._v("(666)")])]),i("div",{staticClass:"comments-wrap"},[i("div",{staticClass:"item"},[i("div",{staticClass:"icon-wrap"},[i("img",{attrs:{src:s("915e"),alt:""}})]),i("div",{staticClass:"content-wrap"},[i("div",{staticClass:"content"},[i("span",{staticClass:"name"},[t._v("爱斯基摩：")]),i("span",{staticClass:"comment"},[t._v("谁说的，长大了依旧可爱哈")])]),i("div",{staticClass:"re-content"},[i("span",{staticClass:"name"},[t._v("小苹果：")]),i("span",{staticClass:"comment"},[t._v("还是小时候比较可爱")])]),i("div",{staticClass:"date"},[t._v("2020-02-12 17:26:11")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"icon-wrap"},[i("img",{attrs:{src:s("915e"),alt:""}})]),i("div",{staticClass:"content-wrap"},[i("div",{staticClass:"content"},[i("span",{staticClass:"name"},[t._v("爱斯基摩：")]),i("span",{staticClass:"comment"},[t._v("谁说的，长大了依旧可爱哈")])]),i("div",{staticClass:"re-content"},[i("span",{staticClass:"name"},[t._v("小苹果：")]),i("span",{staticClass:"comment"},[t._v("还是小时候比较可爱")])]),i("div",{staticClass:"date"},[t._v("2020-02-12 17:26:11")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"icon-wrap"},[i("img",{attrs:{src:s("915e"),alt:""}})]),i("div",{staticClass:"content-wrap"},[i("div",{staticClass:"content"},[i("span",{staticClass:"name"},[t._v("爱斯基摩：")]),i("span",{staticClass:"comment"},[t._v("谁说的，长大了依旧可爱哈")])]),i("div",{staticClass:"re-content"},[i("span",{staticClass:"name"},[t._v("小苹果：")]),i("span",{staticClass:"comment"},[t._v("还是小时候比较可爱")])]),i("div",{staticClass:"date"},[t._v("2020-02-12 17:26:11")])])])])]),i("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":5},on:{"current-change":t.handleCurrentChange}})],1)],1)],1)},et=[],ct={name:"playlist",data:function(){return{activeIndex:"1",total:0,tracks:[],page:1,playlist:{},avatarUrl:"",nickname:""}},methods:{playMusic:function(t){var a=this;console.log(t),O()({url:"https://autumnfish.cn/song/url/",method:"get",params:{id:t}}).then((function(t){var s=t.data.data[0].url;a.$parent.musicUrl=s}))},play:function(){var t=this.tracks[0].id;this.playMusic(t)},handleCurrentChange:function(t){console.log("当前页: ".concat(t))},getPlay:function(t){var a=this;O()({url:"https://autumnfish.cn/playlist/detail",method:"get",params:{id:t}}).then((function(t){console.log(t.data.playlist),a.playlist=t.data.playlist,a.tracks=t.data.playlist.tracks,console.log(a.tracks),a.avatarUrl=a.playlist.creator.avatarUrl,a.nickname=a.playlist.creator.nickname}))}},created:function(){this.getPlay(this.$route.query.q)}},lt=ct,rt=Object(v["a"])(lt,nt,et,!1,null,null,null),ot=rt.exports,vt=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"mv-container"},[s("div",{staticClass:"mv-wrap"},[s("h3",{staticClass:"title"},[t._v("mv详情")]),s("div",{staticClass:"video-wrap"},[s("video",{attrs:{autoplay:"",controls:"",src:t.url}})]),s("div",{staticClass:"info-wrap"},[s("div",{staticClass:"singer-info"},[s("div",{staticClass:"avatar-wrap"},[s("img",{attrs:{src:t.icon,alt:""}})]),s("span",{staticClass:"name"},[t._v(t._s(t.mvInfo.artistName))])]),s("div",{staticClass:"mv-info"},[s("h2",{staticClass:"title"},[t._v(t._s(t.mvInfo.name))]),s("span",{staticClass:"date"},[t._v("发布：2014-11-04")]),s("span",{staticClass:"number"},[t._v("播放："+t._s(t.mvInfo.playCount)+"次")]),s("p",{staticClass:"desc"},[t._v(" "+t._s(t.mvInfo.desc)+" ")])])]),t._m(0),t._m(1),s("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.total,"current-page":t.page,"page-size":5,limit:t.limit},on:{"current-change":t.handleCurrentChange}})],1),s("div",{staticClass:"mv-recommend"},[s("h3",{staticClass:"title"},[t._v("相关推荐")]),s("div",{staticClass:"mvs"},[s("div",{staticClass:"items"},t._l(t.mvs,(function(a,i){return s("div",{key:i,staticClass:"item",on:{click:function(s){return t.getMv(a.id)}}},[s("div",{staticClass:"img-wrap"},[s("img",{attrs:{src:a.cover,alt:""}}),s("span",{staticClass:"iconfont icon-play"}),s("div",{staticClass:"num-wrap"},[s("div",{staticClass:"iconfont icon-play"}),s("div",{staticClass:"num"},[t._v(t._s(a.playCount))])]),s("span",{staticClass:"time"},[t._v(t._s(a.duration))])]),s("div",{staticClass:"info-wrap"},[s("div",{staticClass:"name"},[t._v(t._s(a.name))]),s("div",{staticClass:"singer"},[t._v(t._s(a.artist))])])])})),0)])])])},pt=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"comment-wrap"},[i("p",{staticClass:"title"},[t._v("精彩评论"),i("span",{staticClass:"number"},[t._v("(666)")])]),i("div",{staticClass:"comments-wrap"},[i("div",{staticClass:"item"},[i("div",{staticClass:"icon-wrap"},[i("img",{attrs:{src:s("915e"),alt:""}})]),i("div",{staticClass:"content-wrap"},[i("div",{staticClass:"content"},[i("span",{staticClass:"name"},[t._v("爱斯基摩：")]),i("span",{staticClass:"comment"},[t._v("谁说的，长大了依旧可爱哈")])]),i("div",{staticClass:"re-content"},[i("span",{staticClass:"name"},[t._v("小苹果：")]),i("span",{staticClass:"comment"},[t._v("还是小时候比较可爱")])]),i("div",{staticClass:"date"},[t._v("2020-02-12 17:26:11")])])])])])},function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"comment-wrap"},[i("p",{staticClass:"title"},[t._v("最新评论"),i("span",{staticClass:"number"},[t._v("(666)")])]),i("div",{staticClass:"comments-wrap"},[i("div",{staticClass:"item"},[i("div",{staticClass:"icon-wrap"},[i("img",{attrs:{src:s("915e"),alt:""}})]),i("div",{staticClass:"content-wrap"},[i("div",{staticClass:"content"},[i("span",{staticClass:"name"},[t._v("爱斯基摩：")]),i("span",{staticClass:"comment"},[t._v("谁说的，长大了依旧可爱哈")])]),i("div",{staticClass:"re-content"},[i("span",{staticClass:"name"},[t._v("小苹果：")]),i("span",{staticClass:"comment"},[t._v("还是小时候比较可爱")])]),i("div",{staticClass:"date"},[t._v("2020-02-12 17:26:11")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"icon-wrap"},[i("img",{attrs:{src:s("915e"),alt:""}})]),i("div",{staticClass:"content-wrap"},[i("div",{staticClass:"content"},[i("span",{staticClass:"name"},[t._v("爱斯基摩：")]),i("span",{staticClass:"comment"},[t._v("谁说的，长大了依旧可爱哈")])]),i("div",{staticClass:"re-content"},[i("span",{staticClass:"name"},[t._v("小苹果：")]),i("span",{staticClass:"comment"},[t._v("还是小时候比较可爱")])]),i("div",{staticClass:"date"},[t._v("2020-02-12 17:26:11")])])]),i("div",{staticClass:"item"},[i("div",{staticClass:"icon-wrap"},[i("img",{attrs:{src:s("915e"),alt:""}})]),i("div",{staticClass:"content-wrap"},[i("div",{staticClass:"content"},[i("span",{staticClass:"name"},[t._v("爱斯基摩：")]),i("span",{staticClass:"comment"},[t._v("谁说的，长大了依旧可爱哈")])]),i("div",{staticClass:"re-content"},[i("span",{staticClass:"name"},[t._v("小苹果：")]),i("span",{staticClass:"comment"},[t._v("还是小时候比较可爱")])]),i("div",{staticClass:"date"},[t._v("2020-02-12 17:26:11")])])])])])}],ut={name:"mv",data:function(){return{total:20,page:1,limit:10,url:"",mvs:[],mvInfo:{},icon:""}},methods:{getMv:function(t){var a=this;O()({url:"https://autumnfish.cn/mv/url",method:"get",params:{id:t}}).then((function(t){a.url=t.data.data.url}))},handleCurrentChange:function(t){console.log("当前页: ".concat(t))}},created:function(){var t=this;this.getMv(this.$route.query.q),O()({url:"https://autumnfish.cn/simi/mv",method:"get",params:{mvid:this.$route.query.q}}).then((function(a){t.mvs=a.data.mvs})),O()({url:" https://autumnfish.cn/mv/detail",method:"get",params:{mvid:this.$route.query.q}}).then((function(a){t.mvInfo=a.data.data,O()({url:"https://autumnfish.cn/artists",method:"get",params:{id:t.mvInfo.artists[0].id}}).then((function(a){console.log(a),t.icon=a.data.artist.picUrl}))}))}},mt=ut,dt=Object(v["a"])(mt,vt,pt,!1,null,null,null),Ct=dt.exports;i["default"].use(x.a),i["default"].use(I["a"]);var ft=new I["a"]({routes:[{path:"/",redirect:"/discovery"},{path:"/discovery",component:E},{path:"/playlists",component:S},{path:"/playlist",component:ot},{path:"/songs",component:B},{path:"/mvs",component:X},{path:"/mv",component:Ct},{path:"/result",component:it}]});i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(w)},router:ft}).$mount("#app")},"915e":function(t,a,s){t.exports=s.p+"img/avatar.f154384d.jpg"},d940c:function(t,a,s){}});
//# sourceMappingURL=app.6fa79544.js.map