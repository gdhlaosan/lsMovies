<template>
<div id="myswipe">
  <mt-swipe :auto="3000" :show-indicators="false">
	  <mt-swipe-item>
		<router-link v-if="arrth[0]!=null" :to="{ name: 'Details', params: { id: arrth[0].id }}"><img :src="arrth[0].images.large"></router-link>
		<router-link v-if="arrth[1]!=null" :to="{ name: 'Details', params: { id: arrth[1].id }}"><img :src="arrth[1].images.large"></router-link>
		<router-link v-if="arrth[2]!=null" :to="{ name: 'Details', params: { id: arrth[2].id }}"><img :src="arrth[2].images.large"></router-link>
	  </mt-swipe-item>
	  <mt-swipe-item>
		<router-link v-if="arrth[3]!=null" :to="{ name: 'Details', params: { id: arrth[3].id }}"><img :src="arrth[3].images.large"></router-link>
		<router-link v-if="arrth[4]!=null" :to="{ name: 'Details', params: { id: arrth[4].id }}"><img :src="arrth[4].images.large"></router-link>
		<router-link v-if="arrth[5]!=null" :to="{ name: 'Details', params: { id: arrth[5].id }}"><img :src="arrth[5].images.large"></router-link>
	  </mt-swipe-item>
	  <mt-swipe-item>
		<router-link v-if="arrth[6]!=null" :to="{ name: 'Details', params: { id: arrth[6].id }}"><img :src="arrth[6].images.large"></router-link>
		<router-link v-if="arrth[7]!=null" :to="{ name: 'Details', params: { id: arrth[7].id }}"><img :src="arrth[7].images.large"></router-link>
		<router-link v-if="arrth[8]!=null" :to="{ name: 'Details', params: { id: arrth[8].id }}"><img :src="arrth[8].images.large"></router-link>
	  </mt-swipe-item>
	</mt-swipe>
	<!-- <div class="swiper-container">
	  <div class="swiper-wrapper">
	    <div class="swiper-slide" v-for="item in arrth ">
	    	<img :src="item.images.medium">
	    </div>
	  </div>
	</div> -->
</div>
</template>

<script>
import Vue from 'vue'
import jsonp from 'jsonp'
export default {
  name: 'Swipe',
  data(){
  	return {
  		arrth:""
  	}
  },
  created(){
		var api  = "../../static/in_theaters.json"
		Vue.axios.get(api).then((response) => {
		  this.arrth = Array.prototype.slice.call(response.data.subjects);
		})

		// 跨域方式
		// var url = "https://api.doubai.com/v2/movie/in_theaters";
		// jsonp(url,null,(err,data)=>{
		// 	if(err){
		// 	  console.error(err.message);
		// 	}else{
		// 	  console.log(data.subjects);
		// 	  this.arrth = data.subjects;
		// 	}
		// })
	},

}
</script>

<style>
*{margin: 0;padding: 0;}
#myswipe{
	width: 100%;
	height: 3.2rem;
}
#myswipe .swiper-container {
    width: 100%;
    height: 3rem;
}
#myswipe .mint-swipe-item{
	width: 100%;
	display: flex!important;
	/*flex-flow: row nowrap;
	justify-content: space-around;*/
	overflow: hidden;
}
#myswipe .mint-swipe-item>a{
	display: block;
	width: 2.066rem;
	/*flex: 1;*/
}
#myswipe .mint-swipe-item img{	
	width: 100%;
	height: 3rem;
	border: 0.1rem solid #666;
}
</style>
