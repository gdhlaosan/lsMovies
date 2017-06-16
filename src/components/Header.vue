<template>
  <div class="header">
    <mt-button icon="back" @click="routerGo" v-if="flag"></mt-button>
    <div v-else>
      <svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200" width="40" height="40">
        <g xmlns="http://www.w3.org/2000/svg" id="svg-content">
          <g transform="matrix(0.70,0,0,0.70,30,40)">
            <g id="XMLID_349_">
              <path id="XMLID_1123_" fill="#717071" d="M76.5,164.2V200l92.9-12.4c5.4-0.7,6.6-7.9,1.8-10.4L130,155.7c-0.9-0.5-2-0.7-3-0.6   l-45.4,3.7C78.7,158.9,76.5,161.3,76.5,164.2z"/>
              <path id="XMLID_1127_" fill="#C30D23" d="M118.4,55l-37.1,5.5c-2.7,0.4-4.7,2.7-4.7,5.5v73c0,3.2,2.8,5.8,6,5.5l37.1-3   c2.9-0.2,5.1-2.6,5.1-5.5V60.4C124.7,57.1,121.7,54.5,118.4,55z"/>
              <path id="XMLID_1128_" fill="#717071" d="M200,167.2v-118c0-3.4-3-6-6.4-5.5l-50.1,7.5c-2.7,0.4-4.7,2.7-4.7,5.5V141   c0,2.1,1.1,3.9,3,4.9l50.1,26.3C195.6,174.1,200,171.4,200,167.2z"/>
              <path id="XMLID_1129_" fill="#717071" d="M59.6,58.4L10.9,30.6c-3.6-2.1-8.2,0.5-8.3,4.7L0,145c-0.1,3.3,2.7,5.9,6,5.7l51.3-4.1   c2.9-0.2,5.1-2.6,5.1-5.5V63.3C62.4,61.3,61.3,59.4,59.6,58.4z"/>
              <path id="XMLID_1130_" fill="#717071" d="M62.4,200v-33.8c0-3.2-2.8-5.8-6-5.5l-32.2,2.6c-5.3,0.4-7,7.3-2.6,10.2L62.4,200z"/>
              <path id="XMLID_1131_" fill="#717071" d="M163.9,22l-17.2-8c-3.7-1.7-7.9,1-7.9,5v10.5c0,3.4,3,6,6.3,5.5l17.2-2.5   C167.8,31.7,168.9,24.3,163.9,22z"/>
              <path id="XMLID_1132_" fill="#717071" d="M35,27.5l33.3,17.5c1,0.5,2.2,0.8,3.4,0.6l48.4-7c2.7-0.4,4.7-2.7,4.7-5.5V10.5   c0-3.4-3-6-6.4-5.5L36.8,17.2C31.5,18,30.3,25,35,27.5z"/>
            </g>
          </g>
        </g>
      </svg>        
    </div>
    <mt-header fixed title="影趣儿">
    	<router-link to="/Search" slot="right">
    		<mt-button icon="search"></mt-button>
    	</router-link>
    </mt-header>
  </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'Header',
  data(){
    return {
      flag:true
    }
  },
  created(){
    // console.log(this.$route.path)
    if(this.$route.path=="/"){
      this.flag = false;
    }
  },
  methods:{
    routerGo(){
      // alert(this.$route.go)
      this.$router.go(-1)
      // alert(2)
    },

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header{
  height: 0.88rem;
  position: relative;
  z-index: 100;
}
.header .mint-header{
  height: 0.88rem;
  font-size: 0.5rem;
  font-family: cursive;
  background: #333;
  
}
.mint-header-title{
  font-weight: bolder;
}
.header>button:first-child,
.header>div:first-child{
  height: 0.88rem;
  background: #333;
  color: white;
  /*margin-top: -.5rem;*/
  position: fixed;
  z-index: 1000;
  box-shadow: none;
}
.header>div:first-child{  
  top: -0.24rem;
  left: 0.1rem;
  color: white;
}
</style>
