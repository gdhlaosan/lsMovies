<template>
  <div id="search">
  	<div id="SearchBox">
	  	<mt-search v-model="value" cancel-text="取消" placeholder="搜索">
        <mt-cell v-for="item in result" :title="item.title"></mt-cell>
      </mt-search>
  	</div>
   <!--  <button @click="get">炸了</button>  -->
  </div>
</template>

<script>
import Vue from 'vue'
import jsonp from 'jsonp'
export default {
  name: 'Search',
  data(){
  	return {
  		result:"",
      value:""
  	}
  },
  created(){
    var url = "../../static/search.json"
    //var url = "https://api.douban.com/v2/movie/search?q="+this.value
    Vue.axios.get(url).then((res) => {
      return res.data.subjects
    }).then((data)=>{
      this.result = data;
      console.log(this.result)
    })
    // jsonp(url,null,(err,data)=>{
    //   if(err){
    //     console.error(err.message);
    //   }else{
    //    console.log(data)
    //    this.result = data.subjects; 
    //   }
    // })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mint-searchbar-cancel{
	font-size: 0.24rem!important;
}
</style>