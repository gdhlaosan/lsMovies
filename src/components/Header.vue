<template>
  <div class="header">
    <mt-header fixed title="趣 影">
    	<router-link to="/Search" slot="right">
    		<mt-button icon="search"></mt-button>
    	</router-link>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: 'Header'
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
</style>
