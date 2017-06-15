<template>
  <div>
     {{passData}}
  </div>
</template>

<script>
import Vue from 'vue'
import jsonp from 'jsonp'
export default {
  props:["passData"],
  name: 'Comments',
  created(){
    var url = "https://m.douban.com/rexxar/api/v2/movie/20451290/interests"
    jsonp(url,null,(err,data)=>{
      if(err){
        console.error(err.message);
      }else{
       console.log(data)
       this.obj = data;
       //console.log(this.obj)  
      }
    })
  }
}

</script>

<style>

</style>
