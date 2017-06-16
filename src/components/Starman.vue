<template>
  <div id="starman">
    <div>
      <p>导演</p>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in passData.directors">
            <img :src="item.avatars.medium">
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
      <p>演员</p>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-if="passData.casts!=null" v-for="item in passData.casts">
            <img :src="item.avatars.medium">
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  props:["passData"],
  name: 'Starman',
  mounted(){
    setTimeout(()=>{
      var mySwiper = new Swiper('.swiper-container',{
        slidesPerView : 2.8,
        spaceBetween : 20
     })
    },0)
    
  }
}
</script>

<style>
#starman{
  border-top: 1px solid #dcdcdc;
  margin: 0.2rem;
  padding-top: .1rem;
  padding-bottom: .1rem;
}
#starman>div:nth-child(1)>p{
  font-size: 0.3rem;
  color: #666;
  padding: 0.1rem 0;
}
#starman .swiper-container img{
  width: 1.8rem;
  height: 2.5rem;
}
#starman .swiper-slide{
  display: flex;
  flex-flow: column;
}
#starman .swiper-slide p{
  padding-top: 0.1rem;
  font-size: 0.2rem;
  color: #999;
  text-align: center;
}
</style>
