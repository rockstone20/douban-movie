<template>
  <div class="home-wrapper">
    <div class="tab-wrapper">
      <router-link to="playing">正在热映</router-link>
      <router-link to="coming">即将上映</router-link>
    </div>

    <transition :name="transitionName">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </transition>
  </div>
</template>

<style scoped>
.home-wrapper {min-height:100%;}
.tab-wrapper {line-height:84px; display:flex; border-bottom:1px solid #e5e5e5; position:absolute; left:0; top:0; right:0; z-index:9;}
.tab-wrapper a{flex:1; text-align:center; font-size:28px; color:#999;}
.tab-wrapper a.router-link-active {color:#333; position:relative;}
.tab-wrapper a.router-link-active::after {content:""; display:block; width:100%; height:4px; background:#666; position:absolute; left:0; bottom:0;}
</style>

<script>
  import Foot from '@/components/foot/foot'
  export default {
    data () {
      return {
        transitionName: 'left'
      }
    },
    watch: {
      '$route' (to ,form) {
        this.transitionName =  to.path.indexOf('playing') > 0 ? 'left' : 'right'
      }
    },
    components: {
      Foot
    }
  }
</script>

