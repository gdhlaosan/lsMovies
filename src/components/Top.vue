<template>
 <div id="top">
    <div id="title">
      <h3>TOP250</h3>
      <router-link :to="{name:'More',params:{woxiang:'top250'}}"><h4>更多</h4></router-link>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in arr">
          <router-link :to="{name:'Details',params:{id:item.id}}">
            <img v-if="item.images!=null" :src="item.images.large">
          </router-link>
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
import jsonp from 'jsonp'
import Swiper from 'swiper'
export default {
  name: 'Theaters',
  data(){
    return {
      arr:""
    }
  },
  created(){
     // var mySwiper1 = new Swiper('.swiper-container1',{
     //      slidesPerView : 3,
     //      spaceBetween : 10,
     //    }) 
    // 和config/index.js 配合解决跨域问题（不推荐，特别不安全且low，建议用后台cros解决跨域）
    // var url = "/v2/movie/top250";
    var url = "../../static/top250.json"
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

    // 跨域写法
    // var url = "https://api.douban.com/v2/movie/top250"
    // new Promise((resolve, reject)=> {
    //   jsonp(url,null,(err,data)=>{
    //     if(err){
    //       console.error(err.message);
    //     }else{
    //       // console.log(data.subjects);
    //       this.arr = data.subjects;
    //     }
    //   })
    // }).then(()=>{
    //   var mySwiper = new Swiper('.swiper-container',{
    //     slidesPerView : 3,
    //     spaceBetween : 10,
    //   })
    // })
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
  font-size: 0.3rem;
  color: #717071;
}
#top #title h4{
  width: .7rem;
  height: .32rem;
  background: rgb(195,13,35);
  font-size: 0.14rem;
  color: white;
  text-align: center;
  line-height: .32rem;
  font-weight: normal;
  border-radius: .12rem; /*慧君说这个好看，不准改*/
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
  font-size: 0.2rem;
  text-align: center;
  width: 100%;
  color: #dcdcdc;
  padding: 1rem 0 .5rem 0;
}
</style>
