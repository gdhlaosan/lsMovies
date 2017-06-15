<template>
 <div id="more">
 	<router-view name="Header"></router-view>
	<router-view name="Morebody"></router-view>
 </div>
</template>

<script>
import Vue from 'vue';
// import InfiniteScroll from 'InfiniteScroll';
export default {
  name: 'More',
  data(){
    return {
    	arr:""
    }
  }
}

</script>

<style>


</style>
