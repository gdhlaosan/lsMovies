<template>
 <div id="morebody">
    <ul
	  v-infinite-scroll="loadMore"
	  infinite-scroll-disabled="loading"
	  infinite-scroll-distance="10">
	  <li v-for="item in list">{{ item }}</li>
	</ul>
 </div>
</template>

<script>
import Vue from 'vue';
export default {
  name: 'Morebody',
  data(){
    return {
      arrmore:"",
      list:[1,]
    }
  },
  methods:{	
	loadMore(){
	  this.loading = true;
	  setTimeout(() => {
	    let last = this.list[this.list.length - 1];
	    for (let i = 1; i <= 10; i++) {
	      this.list.push(last + i);
	    }
	    this.loading = false;
	  }, 200);
	}
  }
}

</script>

<style>


</style>
