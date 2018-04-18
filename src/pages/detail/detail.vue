<template>
  <div class="detail-wrapper">
    <div class="topbar">
      <div class="back" @click="goBack"> <i class="iconfont icon-xiazai6"></i> </div>
      {{detail.title || '电影'}}
    </div>
    <div class="topbanner"><img :src="detail.images.small" v-if="detail.images"/></div>

    <div class="inside film-msg" v-if="detail.title">
      <div class="msg-box">
        <h1>{{detail.title}}</h1>
        <p>{{detail.year + ' /'}} {{detail.countries | Genres}}  {{detail.genres | Genres}}</p>
        <p>原名：{{detail.original_title}}</p>
        <p>又名：{{detail.aka | Genres}}</p>
      </div>
      <div class="rating-box">
        <p>豆瓣评分</p>
        <h2 v-show="detail.reviews_count != 0">{{detail.rating.average}}</h2>
        <star :score="detail.rating.average" size="16"></star>
        <p v-if="detail.reviews_count != 0">{{detail.ratings_count}}人</p>
        <p v-else>尚未上映</p>
      </div>
    </div>
    <div class="inside">
      <div class="want-btn" :class="{'iswant': isWant}" @click="like"> {{isWant ? '已想看' : '想看'}}</div>
    </div>
    <div class="inside summary">
      <p class="small_title">剧情简介</p>
      <p class="info">{{detail.summary}}</p>
    </div>
    <div class="inside summary" v-if="detail.reviews_count != 0">
      <p class="small_title">影人</p>
      <ul class="casts-wrapper">
        <li v-for="item in detail.casts">
          <img v-lazy="item.avatars.small"/>
          <p class="ellipsis">{{item.name}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
  .detail-wrapper{position:absolute; left:0; top:0; width:100%; background:#f5f5f5; min-height:100%; z-index:99;}
  .topbar {line-height:84px; background:rgba(0,0,0,.8); text-align:center; color:#fff; font-size:32px; position:fixed; left:0; top:0; right:0;}
  .topbar .back {width:80px; position:absolute; left:0; top:0;}
  .topbanner {padding-top:100px; padding-bottom:10px; background:#222; text-align:center; height:640px;}
  .topbanner img{max-height:100%; display:inline-block;}
  .inside {padding:24px 40px;}
  .film-msg {color:#999; line-height:28px; display:flex; font-size:22px; padding-top:44px;}
  .film-msg .msg-box {padding-right:40px; flex:1; }
  .film-msg .msg-box h1{margin-bottom:24px; color:#333;}
  .film-msg .rating-box {width:164px; height:164px; background:#fff; box-shadow:0 0 16px rgba(0,0,0,.1); text-align:center; display:flex; flex-direction:column; justify-content:center;}
  .film-msg .rating-box h2 {color:#333; padding:3px 0;}
  .want-btn {display:block; line-height:72px; border-radius:8px; color:#ffb712;  border:2px solid #ffb712; text-align:center; font-size:28px;}
  .want-btn.iswant {color:#999; border-color:#999;}
  .small_title {color:#999; padding-bottom:12px;}
  .summary .info {font-size:28px;}

  .casts-wrapper {margin-right:-16px; display:flex;}
  .casts-wrapper li {flex:1; width:0; text-align:center; padding-right:16px;}
  .casts-wrapper li img{max-width:100%; display:block; margin-bottom:8px;}
</style>

<script>
  import jsonp from '@/common/js/jsonp'
  import star from '@/components/star/star'

  import { mapMutations, mapGetters } from 'vuex'

  export default {
    data () {
      return {
        detail: {}
      }
    },
    created () {
      this.getDetail()
    },
    computed: {
      isWant () {
        let IDX = this.likes.findIndex((item) => {
          return item.id === this.detail.id
        })
        return IDX >= 0 ? true : false
      },
      ...mapGetters([
        'likes'
      ])
    },
    methods: {
      like () {
        this.setLikes(this.detail)
      },
      getDetail () {
        jsonp('https://api.douban.com/v2/movie/subject/' + this.$route.params.id).then((data) => {
          console.log(data)
          this.detail = data
        })
      },
      goBack () {
        this.$router.go(-1)
      },
      ...mapMutations({
        setLikes: 'SET_LIKE'
      })
    },
    components: {
      star
    }
  }
</script>

