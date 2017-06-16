<template>
  <div id="comments">
     <p>{{passObj.title}}的短评({{obj.total}})</p>
     <div id="contents">
       <ul>
         <li v-for="item in obj.interests">
           <div class="person">
                  <img :src="item.user.avatar">
                <p>
                  <span>{{item.user.name}}</span>
                  <i>{{item.create_time}}</i>
                </p> 
           </div>
           <div class="content">
             <p>{{item.comment}}</p>
             <p>
               <span class="iconfont icon-zan">{{item.vote_count}}</span>
               <span class="iconfont icon-eclips-horizonal-copy" @click="popup">
                 <mt-popup v-model="flag" popup-transition="popup-fade">
                 举报
                 </mt-popup>
               </span>
             </p>
           </div>
         </li>
       </ul>
       <!-- <div id="pag">
         <ol>
           <li v-if="obj.interests!=null" v-for="item in obj.interests.length">1</li>
         </ol>
       </div> -->
     </div>
  </div>
</template>

<script>
import Vue from 'vue'
import jsonp from 'jsonp'
export default {
  props:["passId","passObj"],
  name: 'Comments',
  data(){
    return {
      obj:"",
      flag:false
    }
  },
  methods:{
    popup(){
      this.flag = !this.flag;
    }
  },
  created(){
    var url = "https://m.douban.com/rexxar/api/v2/movie/"+this.passId+"/interests?count=100000"
    //var url = 
    jsonp(url,null,(err,data)=>{
      if(err){
        console.error(err.message);
      }else{
       console.log(data)
       this.obj = data; 
      }
    })
  }
}

</script>

<style>
#comments{
  border-top: 1px solid #dcdcdc;
  margin: 0.2rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}
#comments ul li{
  list-style: none;
  padding: 0.3rem 0;
} 
#comments>p{
  font-size: 0.3rem;
  color: #666;
}
#contents .person{
  overflow: hidden;
  padding-bottom: .1rem;
}
#contents .person>a{
  float: left;
}
#contents .person>img{
  float: left;
  height: 0.72rem;
  width: 0.72rem;
  border-radius: 100%;
}
#contents .person>p{
  float: left;
  font-size: 0.3rem;
  padding-left: .3rem;
}
#contents .person p span{
  display: block;
  font-weight: bold;
}
#contents .person p i{
  font-size: 0.2rem;
  font-style: normal;
  color: #666;
}
#contents .content{
  padding-left: 1rem;
  line-height: 0.5rem;
}
#contents .content p:nth-child(1){
  font-size: 0.3rem;
  color: #666;
}
#contents .content p:nth-child(2){
  display: flex;
  justify-content: space-between;
}
#contents .content p:nth-child(2)>span{
  font-size: 0.3rem;
  color: #666;
}
#contents .content p:nth-child(2) .icon-eclips-horizonal-copy{
  font-size: 0.5rem;
  color: #666;
}
</style>
