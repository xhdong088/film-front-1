<template>
  <div class="home-container">
    <div class="content">
      <div class="aside">
        <Today :boxRanking="homeData.boxRanking"></Today>
        <div class="box-total-wrapper clearfix">
          <h3>今日大盘</h3>
          <div>
            <p>
              <span class="num">
                <span class="stonefont">2868.9</span>
              </span>万
              <a class="more" data-act="moreDayTip-click" href="">查看更多
                <span class="panel-arrow panel-arrow-red"></span>
              </a>
            </p>
            <p class="meta-info">
              北京时间 10:04:53
              <span class="pull-right">猫眼专业版实时票房数据</span>
            </p>
          </div>
        </div>
        <div class="most-expect-wrapper">
          <Expect :expectRanking="homeData.expectRanking"></Expect>
        </div>
        <div class="top100-wrapper">
          <Top100 :top100="homeData.top100"></Top100>
        </div>
      </div>
      <div class="main">
        <div class="movie-grid">
          <Hot :hotFilms="homeData.hotFilms"></Hot>
          <Recent :soonFilms="homeData.soonFilms"></Recent>
          <Hot-movie :boxRanking="homeData.boxRanking"></Hot-movie>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Today from '~/components/index/Today.vue'
  import Expect from '~/components/index/Expect.vue'
  import Top100 from '~/components/index/Top100.vue'
  import Hot from '~/components/index/Hot.vue'
  import Recent from '~/components/index/Recent.vue'
  import HotMovie from '~/components/index/HotMovie.vue'

  export default {
    name: 'Container',
    props: {
      homeData: {
        type: Object,
        default: () => {}
      }
    },
    components: {
      Today,
      Expect,
      Top100,
      Hot,
      Recent,
      HotMovie,
    }
  }

</script>
<style lang="scss" scoped>
  .home-container {
    background-color: #fff;
    .content {
      width: 1200px;
      margin: 0 auto;
      &:after {
        content: '';
        display: table;
        clear: both;
      }
      .main {
        padding: 0 18px;
        margin-right: 363px;
      }
      .aside {
        float: right;
        width: 360px;
        .most-expect-wrapper {
          margin-top: 80px;
        }
        .box-total-wrapper {
          margin-top: 29px;
          padding-bottom: 11px;
          background-color: #fdfdfd;
          border: 1px solid #efefef;
          padding-right: 15px;
          box-sizing: content-box;
          &.pull-right {
            float: right !important;
          }
          > div {
            font-size: 14px;
            margin-left: 54px;
            color: #ef4238;
            padding-top: 20px;
            box-sizing: content-box;
            a.more[href] {
              color: #ef4238;
              margin-top: 13px;
              float: right;
              line-height: 16px;
            }
            .meta-info {
              color: #999;
              margin-top: 6px;
            }
            .num {
              font-size: 30px;
              font-weight: 700;
              margin-right: 2px;
            }
          }
          h3 {
            box-sizing: content-box;
            float: left;
            width: 20px;
            height: 83px;
            padding: 10px;
            color: #fff;
            background-color: #ef4238;
            text-align: center;
            font-weight: 400;
            font-size: 17px;
            line-height: 21px;
          }
        }
      }
    }
  }



</style>
