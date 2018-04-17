<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      data: {
        type: Array,
        default: null
      },
      listenScroll: {
        type: Boolean,
        default:false
      },
      pullup: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      setTimeout(() => {
        this.initScroll()
      },20)
    },
    methods: {
      initScroll () {
        if (!this.$refs.wrapper) {
          return
        }

        this.scroll = new BScroll(this.$refs.wrapper, {
          click: true,
          probeType: this.probeType
        })

        this.scroll.on('scroll',(e) => {
          this.$emit('scroll',e.y)   //probeType 设为3才能实时派发滚动时间
        })

        if (this.pullup) {
          this.scroll.on('scrollEnd', () => {
            if (this.scroll.y <= (this.scroll.maxScrollY + 30)) {
              this.$emit('scrollToEnd')
            }
          })
        }
      }
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    watch: {
      data () {
        setTimeout(() => {
          this.scroll.refresh()
        },50)
      }
    }
  }
</script>

<style scoped>
</style>
