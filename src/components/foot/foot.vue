<template>
<div class="footer">
  <router-link to="/home"><i class="iconfont icon-dianying1"></i><br/>热映</router-link>
  <router-link to="/find"><i class="iconfont icon-yanjing"></i><br/> 找片</router-link>
  <router-link to="/member"><i class="iconfont icon-weibiaoti2fuzhi12"></i><br/> 我的</router-link>
</div>
</template>
<style scoped>
.footer {display:flex; background:#f5f5f5; border-top:1px solid #d5d5d5; position:absolute; left:0; bottom:0; right:0; z-index:9;}
.footer a {flex:1; text-align:center; height:44px; padding-top:6px; line-height:16px; color:#999;}
.footer .router-link-active {color:#333;}
.iconfont {font-size:24px;}
</style>
<script>
  export default {
    data () {
      return {}
    }
  }
</script>

