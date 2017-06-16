<template>
 <div id="morebody">
	<router-link :to="{name:'Details',params:{id:item.id}}" v-if="item.images!=null" v-for="item in list" class="list">
		<img :src="item.images.medium">
		<div class="listRight">
			<p class="title">{{ item.title }}</p>
			<p class="rating">
				评分：<span>{{ item.rating.average }}</span>
				<span>{{ item.collect_count }}</span>人评价
			</p>
			<p class="directors">
				导演：<span v-for="diItem in item.directors">{{ diItem.name }} </span>
			</p>
			<p class="genres">
				分类：<span v-for="geItem in item.genres">{{ geItem }} </span>
			</p>
			<p class="casts">
				主演：<span v-for="caItem in item.casts">{{ caItem.name }} </span>
			</p>
		</div>
	</router-link>
	<div v-if="loading" id="loadingImg">
		<!-- <img src="../../static/loading.jpg" alt="loading"> -->
		—————— 别扯了，到底了 ——————
	</div>
 </div>
</template>

<script>
import Vue from 'vue';
import jsonp from 'jsonp';
export default {
  name: 'Morebody',
  data(){
    return {
      loading:true,
      woxiang:[],
      list:[]
    }
  },
  created(){
  	var url = "../../static/"+this.$route.params.woxiang+".json";
  	// jsonp(url,null,(err,data)=>{
   //    if(err){
   //      console.error(err.message);
   //    }else{
   //     console.log(data)
   //     this.woxiang = data;
   //     //console.log(this.obj)  
   //    }
   //  })
   Vue.axios.get(url).then((res)=>{
      //console.log(res.data) 
      return res.data
    }).then((data)=>{
      if(this.$route.params.woxiang == "us_box"){
      	for(var i=0,len=data.subjects;i<len;i++){
      		this.woxiang.push(data.subjects[i])
      	}
      	// this.woxiang = data.subjects;
      	// alert(this.$route.params.woxiang)
      	console.log(this.woxiang)
      }
      this.woxiang = data.subjects;
      for(var i=0,len=this.woxiang.length;i<len;i++){
      	this.list.push(this.woxiang[i])
      }
      console.log(this.list)
    })
  },
  methods:{	
	// loadMore(){
	//   this.loading = true;
	//   setTimeout(() => {
	//     let last = this.list[this.list.length - 1];
	//     for (let i = 1; i <= 10; i++) {
	//       this.list.push(last + i);
	//     }
	//     console.log(this.list)
	//     this.loading = false;
	//   }, 2000000);
	// }
  }
}

</script>

<style>
#morebody>a{
	display: flex;
	flex-flow: row nowrap; 
	justify-content: space-between;
	padding: 0.2rem;
	width: 6rem;
	height: 2.25rem;
	border-top: 1px solid gray;
	border-bottom: 1px solid gray;
	color: black;
}
#morebody>a:nth-last-of-type(1){
	border-bottom: none;
}
#morebody>a>img{
	width: 1.5rem;
	height: 2.25rem;
}
#morebody>a>.listRight{
	padding-left: 0.2rem;
	width: 4.2rem;
}
#morebody>a>.listRight>.title{
	white-space: nowrap;
	width: 4.2rem;
	text-overflow: ellipsis;
	overflow: hidden;
	font-size:0.34rem;
	font-weight: bold;
}
#morebody>a>.listRight>.rating,
#morebody>a>.listRight>.genres,
#morebody>a>.listRight>.directors,
#morebody>a>.listRight>.casts{
	font-size:0.2rem;
	padding: 0.1rem 0 0 0;
	color: gray;
	width: 100%;
	text-overflow: ellipsis;
	overflow:hidden;
	white-space: nowrap;
/*	display: flex;
	justify-content: space-between;*/
}
#morebody>a>.listRight>.rating>span,
#morebody>a>.listRight>.genres>span,
#morebody>a>.listRight>.directors>span,
#morebody>a>.listRight>.casts>span{
	font-weight: bold;
}
#morebody>a>.listRight>.rating>span:nth-of-type(1){
	padding-right: 0.4rem;
	width: 1.4rem;
	display: inline-block;
}

#loadingImg{
	/*width: 0.8rem;
	height: 0.8rem;
	margin: 0.4rem auto;
	padding-bottom: 0.4rem;
	list-style-type: none;*/
	text-align: center;
	font-size: 0.2rem;
	color: #ccc;
	padding: 2rem 0 .5rem;
}
#loadingImg>img{
	width: 100%;
	height: 100%;
}
</style>