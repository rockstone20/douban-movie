<template>
  <div>
    <div class="top">
      <div class="face"><img src="https://cn.vuejs.org/images/logo.png"/></div>
    </div>
    <div class="want">我想看的:</div>
    <div class="wrapper">
      <Item v-for="(item,index) in likes" :item="item" :showBtn="false" :key="index"  @click.native="Detail(item.id)"></Item>
    </div>

    <router-view></router-view>
  </div>
</template>

<style scoped>
.top{height:120px; background:#00b4aa; display:flex; flex-direction: column; justify-content:center; align-items:center;}
.face {width:60px; height:60px; padding:10px; border-radius:50%; overflow:hidden; background:#fff; border:1px solid #fff;}
.face img{max-width:100%;}
.want{line-height:40px; padding:0 12px; color:#999; background:#fff; font-size:14px;}

.wrapper {background:#f5f5f5; position:absolute; left:0; right:0; top:160px; bottom:45px; padding-top:10px;}

</style>

<script>
  import { mapGetters } from 'vuex'
  import Item from '@/components/film/film'
  import star from '@/components/star/star'

  export default {
    created () {
      console.log(this.likes)
    },
    methods: {
      Detail (id) {
        this.$router.push('/member/' + id)
      }
    },
    computed: {
      ...mapGetters([
        'likes'
      ])
    },
    components: {
      Item,
      star
    }
  }
</script>

