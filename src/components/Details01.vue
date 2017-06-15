<template>
  <div id="Dbox01">
      <div class="left">
        <img v-if="passData.images!=null" :src="passData.images.medium">
      </div>
      <div class="right">
        <p>{{passData.title}}</p>
        <p v-if="passData.rating!=null">评分：{{passData.rating.average}}分&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{passData.collect_count}}人评价</p>
        <p v-if="passData.countries!=null">上映时间：{{passData.year}}年&nbsp;&nbsp;&nbsp; {{passData.countries[0]}}</p>
        <p>分类：<span v-for="item in passData.genres">{{item}}&nbsp;&nbsp;  </span></p>
        <p>别名：<span v-for="item in passData.aka">{{item}}&nbsp;&nbsp; </span></p>
      </div>
  </div>
</template>

<script>
import Vue from 'vue'
import jsonp from 'jsonp'
export default {
  props:["passData"],
  name: 'Details01'
}

</script>

<style>
#Dbox01{
  overflow: hidden;
  padding: 0.2rem;
  display: flex;
  justify-content: space-between;
  background: #dcdcdc;
}
/*#Dbox01 .left{
  float: left;
}*/
#Dbox01 .right{
  width: 60%;
  padding-right: 0.2rem;
}
#Dbox01 .right>p{
  padding: 0.1rem 0;
}
#Dbox01 .right>p:nth-child(1){
  font-size: 0.4rem;
}
#Dbox01 .right>p:nth-child(2){
  color: #666;
  font-size: 0.2rem;
}
#Dbox01 .right>p:nth-child(3){
  color: #666;
  font-size: 0.2rem;
}
#Dbox01 .right>p:nth-child(4){
  color: #666;
  font-size: 0.2rem;
}
#Dbox01 .right>p:nth-child(5){
  color: #666;
  font-size: 0.2rem;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
