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
.top{height:240px; background:#00b4aa; display:flex; flex-direction: column; justify-content:center; align-items:center;}
.face {width:120px; height:120px; padding:20px; border-radius:50%; overflow:hidden; background:#fff; border:2px solid #fff;}
.face img{max-width:100%;}
.want{line-height:80px; padding:0 24px; color:#999; background:#fff; font-size:28px;}

.wrapper {background:#f5f5f5; position:absolute; left:0; right:0; top:320px; bottom:90px; padding-top:20px;}

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

