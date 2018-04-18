<template>
  <div class="film-item" >
    <div class="img"><img v-lazy="item.images.small"/></div>
    <div class="film-msg" v-if="item.title">
      <h2>{{item.title}}</h2>
      <div class="star-box" v-if="item.rating.average"><star :score="item.rating.average" size="24"></star>{{item.rating.average}}</div>
      <div class="star-box" v-else> 暂无评分 </div>
      <p class="ellipsis" >导演：{{item.directors[0].name}}</p>
      <p class="ellipsis2">主演：{{item.casts | Genres}}</p>
    </div>
    <div class="button-box" v-if="showBtn">{{collect(item.collect_count)}}人{{txt}}<a class="BTN">详情</a></div>
  </div>
</template>

<style scoped>
  .film-item {display:flex; padding:24px; flex-wrap: wrap; border-bottom:2px solid #f5f5f5; background:#fff;}
  .film-item .img {width:160px; } .film-item .img img{width:100%; display:block;}
  .film-msg {flex:1; padding-left:32px; color:#999; width:0;}
  .film-msg h2 {font-size:32px; color:#333; margin-bottom:20px;}
  .film-msg .star-box { padding-bottom:16px;}

  .button-box {color:#ffb712; width:160px; text-align:right; padding-top:40px;}
  .button-box .BTN { line-height:48px; color:#ffb712; padding:0 32px; border:2px solid #ffb712; display:inline-block; border-radius:8px; margin-top:16px;}
</style>

<script>
  import star from '@/components/star/star'
  export default {
    props: {
      item: {
        type: Object,
        default: {}
      },
      showBtn: {
        type: Boolean,
        default: true
      }
    },
    methods: {
      collect (num) {
        return num > 9999 ? (Math.floor(num/1000)/10) + '万' : num
      }
    },
    computed: {
      txt () {
        return this.isComing ? '想看' : '看过'
      }
    },
    components: {
      star
    }
  }
</script>

