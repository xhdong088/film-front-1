<template>
  <section class="container">
    <div>
      <div class="header-placeholder" style="height: 81px;"></div>
      <Banner :banners="homeData.banners"></Banner>
      <Container :homeData="homeData"></Container>
    </div>
  </section>
</template>
<script>
  import Container from '~/components/index/Container.vue'
  import Banner from '~/components/index/Banner.vue'
  import API from '../api/home/home'

  export default {
    head () {
      return {
        title: '首页',
        meta: [
          { hid: '首页', name: '首页', content: '首页' }
        ]
      }
    },
    components: {
      Banner,
      Container,
    },
    data (){
      return {
        homeData:{
          banners: []
        }
      }
    },
    asyncData () {
      return API.getIndex().then((res) => {
        if (res) {
          if (res.status == 0) {
            if (res.data) {
              return { homeData: res.data }
            }
          } else {
            if (res.msg) {
              alert(res.msg)
            }
          }
        }
      })
      .catch((e) => {
        // error({ statusCode: 404, message: 'Post not found' })
      })
    }
  }

</script>

<style lang="scss" scoped>
</style>
