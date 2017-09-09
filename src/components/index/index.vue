<template>
  <div class="page_index">
    <div class="message_box">
      <div class="news">
        <div class="left">
          <i class="el el-shouye-lanse-3 color_ffb124"></i>
        </div>
        <span>恭喜您已完成实名验证</span>
        <div class="right" id="newsClose">
          <i class="el el-shouye-lanse-2 color_ffb124"></i>
        </div>
      </div>
      <div class="headDiv">
        <div class="layer">
          <div class="fl w25" >
            <div class="imgDiv"><i class="el el-scan"></i></div>
            <div class="text">扫一扫</div>
          </div>
          <div class="fl w25">
            <div class="imgDiv"><i class="el el-qrcode"></i></div>
            <div class="text">付款码</div>
          </div>
          <div class="fl w25">
            <div class="imgDiv"><i class="el el-sweep-card"></i></div>
            <div class="text">扫卡查余额</div>
          </div>
          <div class="fl w25">
            <div class="imgDiv"><i class="el el-transfer"></i></div>
            <div class="text">卡卡转账</div>
          </div>
          <div class="clear_f"></div>
        </div>
      </div>
    </div>
    <div class="content" style="background-color: white;">
      <ul>
        <li>
          <a>
            <div class="imgDiv">
              <i class="el el-shouye-lanse- color_16a8a1 bold"></i>
            </div>
            <div class="title">会员信息</div>
          </a>
        </li>
        <li>
          <a>
            <div class="imgDiv">
              <i class="el el-weibiaoti--9 color_6ab03d "></i>
            </div>
            <div class="title">卡片充值</div>
          </a>
        </li>
        <li>
          <a>
            <div class="imgDiv">
              <i class="el el-weibiaoti-- color_ffb21e "></i>
            </div>
            <div class="title">车队卡管理</div>
          </a>
        </li>
        <li>
          <a>
            <div class="imgDiv">
              <i class="el el-weibiaoti--6 color_478fd1 bold"></i>
            </div>
            <div class="title">商户网点</div>
          </a>
        </li>
        <li>
          <router-link to="/list">
           <a>
              <div class="imgDiv">
                <i class="el el-weibiaoti--8 color_478fd1 bold"></i>
              </div>
              <div class="title">交易记录</div>
          </a>
          </router-link>
        </li>
        <li>
          <a>
            <div class="imgDiv">
              <i class="el el-shouye-lanse-1 color_ffb21e"></i>
            </div>
            <div class="title">卡包</div>
          </a>
        </li>
        <li>
          <a>
            <div class="imgDiv">
              <i class="el el-weibiaoti--1 color_16a8a1"></i>
            </div>
            <div class="title">手机</div>
          </a>
        </li>
        <li>
          <a>
            <div class="imgDiv">
              <i class="el el-weibiaoti--2 color_f1705e"></i>
            </div>
            <div class="title">保险</div>
          </a>
        </li>
      </ul>
      <div class="clear_f"></div>
    </div>
    <div class="h10"></div>
    <div class="amountDiv">
    <div class="all">
        <div class="allamount">
          <div class="text"><label>账户总余额</label></div>
          <div class="money">{{newsListShow[0].money+newsListShow[0].integral}}元</div>
        </div>
        <div class="detail">
          <div class="fl amount"><label class="text">现金金额：</label><label class="money">{{newsListShow[0].money}} 元</label></div>
          <div class="fl score"><label class="text">账户积分：</label><label class="money">{{newsListShow[0].integral}}分</label></div>
          <div class="clear_f"></div>
        </div>
      </div>
  </div>
    <div class="h10"></div>
    <div class="last">
      <div class="top">
        <div class="fl imgDiv">
          <i class="el el-recently-a-deal" style="font-size:34px;color:#9cdfaf"></i>
        </div>
        <div class="fl show">
          <div class="title">最后一笔交易记录</div>
          <div class="time last_time">{{newsListShow[0].date}}</div>
        </div>
        <div class="clear_f"></div>
      </div>
      <div class="bottom">
        <div class="money last_money"><span>¥ {{newsListShow[0].Newmoney}}</span></div>
        <div class="text last_text">易捷乐购手机</div>
      </div>
    </div>
  </div>
</template>
<script>
  import api from '../../axios/apii'
  export default {
    data () {
       return {
           newsListShow: {},
      }
    },
    created() {
      this.setNewsApi();
    },
    methods:{
      setNewsApi: function() {
        api.JH_news('http://el.szeltec.com/dev/wxapi', 'type=top&key=123456')
          .then(res => {
            console.log(res);
            this.newsListShow = res.articles;
          });
      },
    }
//    created () {
//      this.send()
//      console.log(this.newsListShow)
//    },
//    methods: {
//      send () {
//        this.$htttp.get('https://api.github.com/users/tangyang8942')
//          .then(resp => {
//            this.newsListShow = resp.data
//            console.log(resp.data)
//          }).catch(err => {
//            console.log('dffff', err)
//          })
//      }
//    }
  }
</script>
<style>
  body{
    background-color: #f2f2f4;
    color: #333;
  }
  .page_index .news {
    width: 100%;
    background: #fefced;
    padding: 7px 0;
    height: 20px;
  }
  .page_index .news .left {
    float: left;
    width: 10%;
    box-sizing: border-box;
    padding: 0 0 0 3%;
    margin-top: 2px;
  }
  .page_index .news .left i {
    font-size: 16px;
    color: #f46932;
  }
  .page_index .news > span {
    display: inline-block;
    color: #f46932;
    font-size: 1.1em;
    padding: 0 0 0 5px;
    float: left;
    width: 80%;
    box-sizing: border-box;
    margin-top: 3px;
  }
  .page_index .news .right {
    float: right;
    width: 10%;
    text-align: center;
    box-sizing: border-box;
    padding: 0 2% 0 0;
    margin-top: 2px;
  }
  .page_index .news .right i {
    font-size: 14px;
  }
  .page_index .color_ffb124 {
    color: #f46932;
  }
  .page_index .headDiv {
    position: relative;
    width: 100%;
    /* min-height: 200px; */
    color: #fff;
    background: -webkit-linear-gradient(bottom, #2c2421, #3e3a39);
    background: -o-linear-gradient(bottom, #2c2421, #3e3a39);
    background: -moz-linear-gradient(bottom, #2c2421, #3e3a39);
    background: linear-gradient(bottom, #2c2421, #3e3a39);
  }
  .page_index .headDiv .layer {
    background: #1e82d2;
    width: 100%;
    padding: 23px 0;
  }
  .page_index .headDiv .layer .w25 {
    width: 25%;
    text-align: center;
  }
  .fl{float: left}
  .clear_f {
    clear: both;
    height: 0px;
    padding: 0px;
    margin: 0px;
    display: block;
    _display: inherit;
  }
  .page_index .amountDiv{
    background-color: white;
  }
  .page_index .amountDiv .all {
    padding: 0 5%;
  }
  .page_index .amountDiv .all .allamount {
    padding-top: 20px;
    border-bottom: 1px solid #f0f0f0;
  }
  .page_index .amountDiv .all .allamount .text label {
    font-weight: 600;
  }
  .page_index .amountDiv .all .detail {
    padding: 15px 0;
  }
  .page_index .amountDiv .all .detail .amount {
    width: 55%;
  }
  .page_index .amountDiv .all .detail .text {
    font-family: "微软雅黑";
    font-size: 1.2em;
  }
  .page_index .amountDiv .all .detail .money {
    font-size: 1.2em;
  }
  .page_index .amountDiv .all .detail .score {
    width: 45%;
    text-align: right;
    /* margin-left: 5%; */
  }
  .page_index .amountDiv .all .allamount .money {
    font-family: '微软雅黑';
    font-size: 2.3em;
    text-align: center;
    padding: 10px 0;
  }
  .h10 {
    height: 10px;
    overflow: hidden;
    clear: both;
  }
  .page_index .last {
    width: 90%;
    background: #fff;
    padding: 0px 5%;
    border-bottom: 1px solid #efefef;
    border-top: 1px solid #efefef;
  }
  .page_index .last .top {
    width: 100%;
    padding-top: 10px;
    position: relative;
  }
  .page_index .last .top .show {
    margin-left: 10px;
  }
  .page_index .last .bottom {
    padding: 10px 0;
  }
  .page_index .last .bottom .money {
    text-align: center;
    font-size: 2.3rem;
    margin: 10px 0 0 0;
    font-family: '微软雅黑';
  }
  .page_index .last .bottom .text {
    color: #b5b5b5;
    text-align: center;
    font-size: 1rem;
    margin-top: 1rem;
  }
  .page_index .last .top .show .time {
    position: absolute;
    bottom: 0;
    font-size: 1.2rem;
  }
  .page_index .content ul li {
    float: left;
    width: 25%;
    text-align: center;
    padding-top: 20px;
  }
  .page_index .content ul li a .imgDiv {
    text-align: center;
  }
  .page_index .content ul li a .imgDiv i {
    font-size: 30px;
  }
  .page_index .bold {
    font-weight: bold;
  }
  .page_index .headDiv .layer .imgDiv i {
    font-size: 22px;
  }
  .page_index .headDiv .layer .text {
    margin-top: 10px;
  }
  .page_index .content ul li a .title {
    font-size: 1.1em;
    line-height: 41px;
  }
  .page_index .color_478fd1 {
    color: #478fd1;
  }
  .page_index .color_ffb21e {
    color: #ffb21e;
  }
  .page_index .color_16a8a1 {
    color: #16a8a1;
  }
  .page_index .color_6ab03d {
    color: #6ab03d;
  }
</style>
