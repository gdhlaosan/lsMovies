<template>
  <div class="header">
    <mt-button icon="back" @click="routerGo" v-if="flag"></mt-button>
    <mt-header fixed title="趣 影">
      <!-- <router-link to="/" @click="routerGo" slot="left"> -->
      <!-- </router-link> -->
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
.header>button:first-child{
  background: #333;
  color: white;
  /*margin-top: -.5rem;*/
  position: fixed;
  /*top: -0.5rem;*/
  z-index: 1000;
  box-shadow: none;
}
</style>
