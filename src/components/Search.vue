<template>
  <div id="search">
  	<div id="SearchBox">
	  	<mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>
  	</div>

  </div>
</template>

<script>
export default {
  name: 'Search',
  data(){
  	return {
  		value:""
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mint-searchbar-cancel{
	font-size: 0.24rem!important;
}
</style>