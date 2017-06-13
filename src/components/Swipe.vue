<template>
<div id="myswipe">
  <mt-swipe :auto="3000" :show-indicators="false">
	  <mt-swipe-item>
		<a href=""><img :src="arrth[0]"></a>
		<a href=""><img :src="arrth[1]"></a>
		<a href=""><img :src="arrth[2]"></a>
	  </mt-swipe-item>
	  <mt-swipe-item>
		<a href=""><img :src="arrth[3]"></a>
		<a href=""><img :src="arrth[4]"></a>
		<a href=""><img :src="arrth[5]"></a>
	  </mt-swipe-item>
	  <mt-swipe-item>
		<a href=""><img :src="arrth[6]"></a>
		<a href=""><img :src="arrth[7]"></a>
		<a href=""><img :src="arrth[8]"></a>
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
export default {
  name: 'Swipe',
  data(){
  	return {
  		arrth:""
  	}
  },
  created(){
		var api  = "../../static/Theater.json"
		Vue.axios.get(api).then((response) => {
		  // arrth = response.data.subjects;
		  // console.log(arrth)
		  return response.data.subjects;
		}).then((data)=>{
			var arr = Array.prototype.slice.call(data);
			var newArr = []
			for(var i=0, len=arr.length; i<len; i++){
				newArr.push(arr[i].images.medium);
			}
			// newArr = Array.prototype.slice.call(newArr);
			this.arrth = newArr;
			// console.log(this.arrth)
		})
	},
  computed: {
	  evenNumbers: function () {
	    return this.arrth.filter(function (number) {
	    	// var len = arrth.length;
	    	// for()
	      return number.images;
	    })
	  }
	}
}
// window.onload = function(){
// 	var mySwiper = new Swiper('.swiper-container', {
// 		autoplay: 1000,//可选选项，自动滑动
// 		loop : true,
// 		// slidesPerView : 3,
// 		// slidesPerGroup : 3,
// 	})
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
*{margin: 0;padding: 0;}
#myswipe{
	width: 100%;
	height: 3.2rem;
	/*background: rgba(0,0,0,0.4)*/
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
