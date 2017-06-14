<template>
<div id="usbox">
  <div id="title">
    <h3>欧美排行榜</h3>
    <h4>更多</h4>
  </div>
  <ul>
    <li v-for="item in arrusbox">
      <img :src="item.subject.images.small" :alt="item.subject.alt">
      <p>{{ item.subject.title }}</p>
      <!-- 未上映模块，没有评分 -->
      <p class="smallFont">评分：{{ item.subject.rating.average }}分</p>
    </li>
  </ul>
</div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'Usbox',
  data(){
    return {
      arrusbox:""
    }
  }, 
  created(){
    var url  = "../../static/Us_box.json"
    Vue.axios.get(url).then((response) => {
      // console.log(response.data.subjects)
      return response.data.subjects;
    }).then((data)=>{
      var arr = Array.prototype.slice.call(data);
      var newArr = []
      for(var i=0, len=arr.length; i<8; i++){
        newArr.push(arr[i]);
      }
      this.arrusbox = newArr;
      // console.log(this.arrusbox)
    })
  }
}

</script>

<style>
#usbox{
  padding: 0.2rem;
}
#usbox>#title{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding-bottom: 0.1rem;
}
#usbox>#title>h3{
  font-size: 0.3rem;
}
#usbox>#title>h4{
  font-size: 0.26rem;
  font-weight: normal;
  color: #666;
}
#usbox>ul{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
#usbox>ul>li{
  list-style: none;
  width: 25%;
  text-align: center;
  padding-bottom: 0.2rem;
}
#usbox>ul>li>img{

}
#usbox>ul>li>p{
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.25rem;
}
#usbox>ul>li>p.smallFont{
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.1rem;
  color: gray;
}
</style>
