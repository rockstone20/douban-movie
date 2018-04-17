<template>
  <div class="find-wrapper">
    <div class="search-box">
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" v-model="query" placeholder="请输入 导演/电影"/>
        <i class="iconfont icon-delete" @click="query = ''"></i>
      </div>
    </div>

    <scroll :data="result" class="search-wrapper" :pullup="true" @scrollToEnd="scrollToEnd">
      <div>
        <Item v-for="(item,index) in result" :item="item" :showBtn="false" :key="index"  @click.native="goDetail(item.id)"></Item>
        <div class="loadmore" v-show="start < total && result.length">正在加载中...</div>
        <div class="loadmore" v-show="start === total && result.length">没有了...</div>
      </div>
      <loading v-show="loading"></loading>
    </scroll>

    <transition name="right">
      <router-view></router-view>
    </transition>

  </div>
</template>

<style scoped>
.search-box {padding:10px 18px;}
.search {height:26px; border-radius:4px; background:#f5f5f5; position:relative; display:flex;}
.search i {width:30px; line-height:28px; text-align:center; color:#999;}
.search i.icon-delete {font-size:22px;}
.search input {flex:1; border:0; outline:0; background:none; line-height:28px; height:28px; font-size:14px; color:#666;}

.search-wrapper {position:absolute; left:0; top:44px; right:0; bottom:44px; background:#f5f5f5; overflow:hidden;}
.loadmore {text-align:center; line-height:32px; color:#999; text-align:center;}
::-webkit-input-placeholder{color:#bbb;}
::-moz-placeholder {color:#bbb;}
</style>

<script>
  import jsonp from '@/common/js/jsonp'
  import scroll from '@/components/scroll/scroll'
  import Item from '@/components/film/film'
  import loading from '@/components/loading/loading'

  export default {
    data () {
      return {
        query: '',
        result: [],
        start: 0,
        total: 0,
        loading: false
      }
    },
    watch: {
      query (newVal) {
        if (newVal) {
          if (this.timer) clearTimeout(this.timer)
          this.loading = true
          this.start = 0
          this.total = 0
          this.result = []
          this.timer = setTimeout(() => {
            this._searchFilm()
          }, 500)
        }
      }
    },
    methods: {
      _searchFilm () {
        jsonp('https://api.douban.com/v2/movie/search?q=' + this.query, {
          start: this.start,
          count: 10
        }).then((data) => {
          console.log(data)
          this.result = this.result.concat(data.subjects)
          this.total = data.total
          this.loading = false
        })
      },
      scrollToEnd () {
        let len = this.result.length
        this.start = len
        if (this.start === this.total) return
        console.log('加载更多')
        this._searchFilm()
      },
      goDetail (id) {
        this.$router.push('/find/' + id)
      }
    },
    components: {
      scroll,
      Item,
      loading
    }
  }
</script>

