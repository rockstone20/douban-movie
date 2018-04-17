<template>
  <div id="app">
    <router-view/>
    <Foot></Foot>
  </div>
</template>

<script>
  import Foot from '@/components/foot/foot'
  export default {
    name: 'App',
    components: {
      Foot
    }
  }
</script>
