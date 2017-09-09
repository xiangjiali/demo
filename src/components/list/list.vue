<template>
  <div class="page_tradeindex">
    <ul  v-infinite-scroll="loadMore" infinite-scroll-disabled="loading"  infinite-scroll-distance="10">
      <li  v-for="arr in newsListShow">
        <div>
          <i class="fist" style="color:#ffb200;position: relative;top:3px"> <img :src="arr.thumbnail_pic_s" width="40" height="40">
          </i>
          <span>{{arr.title}}</span>
          <i class="el el-right-arrow two"></i>
        </div>
      </li>
    </ul>
  </div>
</template>
<script type="text/ecmascript-6">
  import api from '../../axios/apii'
  import { InfiniteScroll } from 'mint-ui';
  import { Indicator } from 'mint-ui';
  export default {
    data(){
      return {
        newsListShow:{},
        loading:false
      }
    },
    created() {
      this.setNewsApi();
    },
    methods: {
      setNewsApi: function() {
        api.JH_news('http://el.szeltec.com/dev/wxapi1', 'type=top&key=123456')
          .then(res => {
            console.log(res.articles1);
            this.newsListShow = res.articles1;

          });

      },
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.newsListShow[this.newsListShow.length - 1];
          for (let i = 1; i <= 10; i++) {
            this.newsListShow.push(last);
          }
          this.loading = false;
        }, 2500);
      }
    }
  }
</script>
<style scoped>
  @import './list.css';
</style>

