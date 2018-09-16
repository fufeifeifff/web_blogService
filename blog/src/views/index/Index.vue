<template lang="pug">
    .container
       h1 主页
</template>

<script>
  import API from '@/api/api'
  export default {
    name: 'index.vue',
    data() {
      return {

      }
    },
    methods: {
      list: function() {
        const id = 12
        API.user.get(id).then(() => {
          console.log('asdf')
        }).catch()
      }
    },
    mounted: function() {
      this.list()
    }
  }
</script>

<style scoped>

</style>
