<template>
 <div id="top">
    <div id="title">
      <h3>TOP250</h3>
      <h4>更多</h4>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in arr">
          <router-link :to="{name:'Details',params:{id:item.id}}"><img :src="item.images.large"></router-link>
          <p>{{item.title}}</p>
          <p class="smallFont">评分：{{item.rating.average}}分</p>
        </div>
      </div>
    </div>
    <p id="bottom">—————— 我也是有底线的 ——————</p>
 </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'Theaters',
  data(){
    return {
      arr:""
    }
  },
  created(){
    var url = "../../static/Top.json"
    Vue.axios.get(url).then((res) => {
      //console.log(res.data.subjects)
      return res.data.subjects
    }).then((data)=>{
      var newData = Array.prototype.slice.call(data);
      var limitarr = []
      for(var i=0, len=8;i<len; i++){
        limitarr.push(newData[i]);
      }
      this.arr = limitarr
     // console.log(this.arr)
    }).then(()=>{
      var mySwiper = new Swiper('.swiper-container',{
        slidesPerView : 3,
        spaceBetween : 10,
      })
    })
  }
}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#top{
  padding: 0.2rem 0.2rem;
}
#top #title{
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.2rem;
}
#top #title h3{
  font-size: 0.3rem!important;
}
#top #title h4{
  font-size: 0.26rem;
  font-weight: normal;
  color: #666;
}
/*#top .swiper-slide{
  width:1.88rem; 
}*/
#top .swiper-slide img{
  width: 100%;
  height: 2.8rem;
}
#top .swiper-slide p{
  font-size: 0.25rem;
  text-align: center;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#top .smallFont{
  font-size: 0.1rem;
  color: gray;
}
#bottom{
  font-size: 0.1rem;
  text-align: center;
  width: 100%;
  color: #dcdcdc;
  padding: 1rem 0 .5rem 0;
}
</style>
