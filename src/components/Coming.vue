<template>
<div id="coming">
  <div id="title">
    <h3>即将上映</h3>
    <h4>更多</h4>
  </div>
  <ul>
    <li v-for="item in arrcoming">
      <router-link :to="{name:'Details', params:{id:item.id}}"><img :src="item.images.small" :alt="item.alt"></router-link>
      <p>{{ item.title }}</p>
      <!-- 未上映模块，没有评分 -->
      <p class="smallFont">暂无评分</p>
    </li>
  </ul>
</div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'Coming',
  data(){
    return {
      arrcoming:""
    }
  }, 
  created(){
    var url  = "../../static/Coming_soon.json"
    Vue.axios.get(url).then((response) => {
      // console.log(response.data.subjects)
      return response.data.subjects;
    }).then((data)=>{
      var arr = Array.prototype.slice.call(data);
      var newArr = []
      for(var i=0, len=arr.length; i<8; i++){
        newArr.push(arr[i]);
      }

      this.arrcoming = newArr;
      // console.log(this.arrcoming)
    })
  }
}


</script>

<style>
#coming{
  padding: 0.2rem;
}
#coming>#title{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-bottom: 0.1rem;
}
#coming>#title>h3{
  font-size: 0.3rem;
}
#coming>#title>h4{
  font-size: 0.26rem;
  font-weight: normal;
  color: #666;
}
#coming>ul{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
#coming>ul>li{
  list-style: none;
  width: 25%;
  text-align: center;
  padding-bottom: 0.2rem;
}
#coming>ul>li>p{
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.25rem;
}
#coming>ul>li>p.smallFont{
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.1rem;
  color: gray;
}
</style>
