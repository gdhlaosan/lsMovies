<template>
 <div id="theater">
    <div id="title">
      <h3>影院热映</h3>
      <router-link :to="{name:'More',params:{woxiang:'in_theaters'}}"><h4>更多</h4></router-link>
    </div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in arr">
          <router-link :to="{name:'Details',params:{id:item.id}}">
            <img :src="item.images.medium">
          </router-link>
          <p>{{item.title}}</p>
          <p class="smallFont">评分：{{item.rating.average}}分</p>
        </div>
      </div>
    </div>
 </div>
</template>

<script scoped>
import Vue from 'vue'
export default {
  name: 'Theaters',
  data(){
    return {
      arr:""
    }
  },
  created(){
    var url = "../../static/in_theaters.json"
    Vue.axios.get(url).then((res) => {
      //console.log(res.data.subjects)
      return res.data.subjects
    }).then((data)=>{
      var newData = Array.prototype.slice.call(data);
      var limitarr = []
      for(var i=9, len=17;i<len; i++){
        limitarr.push(newData[i]);
      }
      this.arr = limitarr
      //console.log(this.arr)
    }).then(()=>{
      var mySwiper = new Swiper('.swiper-container',{
        slidesPerView : 3,
        spaceBetween : 10
      })
    })
    //  setTimeout(function () {
    //   var mySwiper = new Swiper('.swiper-container',{
    //     slidesPerView : 3,
    //     spaceBetween : 10
    //   })
    // },0)
  }
}
 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#theater{
  padding: 0.2rem;
}
#theater #title{
  display: flex;
  justify-content: space-between;
  padding-bottom: 0.2rem;
}
#theater #title h3{
  font-size: 0.3rem!important;
}
#theater #title h4{
  font-size: 0.26rem;
  font-weight: normal;
  color: #666;
}
/*#theater .swiper-slide{
  width:33.333%; 
}*/
/*#theater .swiper-slide a{
  display: inline-block;
  width: 100%;
}*/
#theater .swiper-slide img{
  width: 100%;
  height: 2.8rem;
}
#theater .swiper-slide p{
  font-size: 0.25rem;
  text-align: center;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#theater .smallFont{
  font-size: 0.1rem;
  color: gray;
}

</style>
