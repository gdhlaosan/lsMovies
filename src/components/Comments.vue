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
       <div id="pag">
         <ol>
           <li @click="prevPage">上一页</li>
           <li @click="nextPage">下一页</li>
         </ol>
       </div>
     </div>
     <div id="footer">
        <p>免注册，免费用，随便查</p>
        <p>版权所有&copy;<span>siting.com</span></p>
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
      num:0,
      flag:false
    }
  },
  created(){
    var url = "https://m.douban.com/rexxar/api/v2/movie/"+this.passId+"/interests?count=10&start=0"
    jsonp(url,null,(err,data)=>{
      if(err){
        console.error(err.message);
      }else{
       //console.log(data)
       this.obj = data; 
      }
    })
  },
  methods:{
    popup(){
      this.flag = !this.flag;
    },
    prevPage(){
      if(this.num>0){
        this.num-=10;
        document.getElementById("comments").scrollIntoView();
      }else{
        this.num = 0;

      }  
      var url = "https://m.douban.com/rexxar/api/v2/movie/"+this.passId+"/interests?count=10&start="+this.num
      jsonp(url,null,(err,data)=>{
        if(err){
          console.error(err.message);
        }else{
        // console.log(data)
         this.obj = data; 
        }
      }) 
      
    },
    nextPage(){
      this.num += 10;    
      var url = "https://m.douban.com/rexxar/api/v2/movie/"+this.passId+"/interests?count=10&start="+this.num
      jsonp(url,null,(err,data)=>{
        if(err){
          console.error(err.message);
        }else{
         //console.log(data)
         this.obj = data; 
        }
      })
      document.getElementById("comments").scrollIntoView();
    }
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
#pag{
  font-size: .3rem;
  padding-top: .2rem;
}
#pag ol{
  display: flex;
  justify-content: space-around;
}
#pag ol li{
  height: .5rem;
  width: 1.3rem;
  text-align: center;
  line-height: .5rem;
  list-style: none;
  border: 1px solid #999;
}
#footer{
  padding: 1.5rem 0 .5rem 0;
}
#footer p{
  font-size: .2rem;
  text-align: center;
  color: #999;
}
</style>
