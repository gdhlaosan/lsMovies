<template>
<div id="introduce">
  <p>{{passData.title}}的剧情简介</p>
  <p id="open">
    <span>{{passData.summary}}</span>
    <i @click="open">展开</i>
  </p>
</div>
</template>

<script>
import Vue from 'vue'
export default {
  props:["passData"],
  name: 'Introduce',
  methods:{
    open:function(){

      var p = document.getElementById("open")
      p.style.height = "auto";
      p.children[1].style.display = "none"
    }
  }
}

</script>

<style>
#introduce{
  padding: 0.2rem;
}
#introduce p:nth-child(1){
  font-size: 0.3rem;
  color: #999;
  padding: 0.1rem 0;
}
#introduce p:nth-child(2){
  font-size: 0.3rem;
  color: #333;
  line-height: .5rem;
  height: 4rem;
  overflow:hidden;
  position: relative;
}
#introduce p:nth-child(2) i{
  font-style: normal;
  position: absolute;
  right: 0;
  bottom: 0.06rem;
  display: inline-block;
  width: 1rem;
  height: 0.4rem;
  text-align: center;
  line-height: 0.4rem;
  background: #dcdcdc;
  border-radius: 20%;
}
</style>
