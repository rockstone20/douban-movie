<template>
  <div class="wrapper">
    <scroll :data="list" class="playing-wrapper" :pullup="true" @scrollToEnd="scrollToEnd">
      <div>
        <Item v-for="(item,index) in list" :item="item" :key="index" @click.native="goDetail(item.id)"></Item>
        <div class="loadmore" v-show="start < total && list.length">正在加载中...</div>
        <div class="loadmore" v-show="start === total && list.length">没有了...</div>
      </div>
      <loading v-if="!list.length"></loading>
    </scroll>

    <transition name="right">
      <router-view></router-view>
    </transition>
  </div>
</template>

<style scoped>
  .wrapper {position:absolute; width:100%; left:0; top:0; bottom:0; }
  .playing-wrapper {position:absolute; width:100%; left:0; top:86px; bottom:88px; overflow:hidden; background:#fff;}
  .loadmore {text-align:center; line-height:64px; color:#999; text-align:center;}
</style>

<script>
  import scroll from '@/components/scroll/scroll'
  import Item from '@/components/film/film'
  import loading from '@/components/loading/loading'
  import jsonp from '@/common/js/jsonp'
  export default {
    data () {
      return {
        list: [],
        start: 0,
        total: 0
      }
    },
    created () {
      this.getFilm()
    },
    methods: {
      goDetail (id) {
        this.$router.push('/home/playing/' + id)
      },
      getFilm () {
        jsonp('https://api.douban.com/v2/movie/in_theaters', {
          start: this.start,
          count: 10
        }).then((data) => {
          console.log(data)
          this.list = this.list.concat(data.subjects)
          this.total = data.total
        })
      },
      scrollToEnd () {
        let len = this.list.length
        this.start = len
        if (this.start === this.total) return
        console.log('加载更多')
        this.getFilm()
      }
    },
    components: {
      scroll,
      Item,
      loading
    }
  }
</script>

