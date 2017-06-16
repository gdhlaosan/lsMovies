<template>
<div id="usbox">
  <div id="title">
    <h3>欧美排行榜</h3>
    <router-link :to="{name:'More',params:{woxiang:'us_box'}}"><h4>更多</h4></router-link>
  </div>
  <ul>
    <li v-for="item in arrusbox">
      <router-link :to="{name:'Details',params:{id:item.id}}"><img :src="item.images.small" :alt="item.alt"></router-link>
      <p>{{ item.title }}</p>
      <p class="smallFont">评分：{{ item.rating.average }}分</p>
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
    var url  = "../../static/us_box.json"
    //var url = "https://api.douban.com/v2/movie/us_box"
    Vue.axios.get(url).then((response) => {
      // console.log(response.data.subjects)
      return response.data.subjects;
    }).then((data)=>{
      var arr = Array.prototype.slice.call(data);
      var newArr = []
      for(var i=0, len=arr.length; i<8; i++){
        newArr.push(arr[i].subject);
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
  color: #717071;
}
#usbox>#title h4{
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
