<template>
<div id="mydetail">
  <dl>
    <dt>
      <h3>即将上映</h3>
      <h4>更多</h4>
    </dt>
    <dd></dd>
  </dl>
</div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'Details',
  data(){
  	return {
  		arrth:""
  	}
  }, 
  created(){
    // var api  = "../../static/Coming.json"
    Vue.axios.get(api).then((response) => {
      // arrth = response.data.subjects;
      // console.log(arrth)
      return response.data.subjects;
    }).then((data)=>{
      var arr = Array.prototype.slice.call(data);
      var newArr = []
      for(var i=0, len=arr.length; i<len; i++){
        newArr.push(arr[i].images.medium);
      }
      // newArr = Array.prototype.slice.call(newArr);
      this.arrth = newArr;
      console.log(this.arrth)
    })
  }
}

</script>

<style>
#mydetail{
  padding: 0.2rem;
}
#mydetail>dl>dt{
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
}
#mydetail>dl>dt>h3{
  font-size: 0.3rem;
}
#mydetail>dl>dt>h4{
  font-size: 0.26rem;
  font-weight: normal;
  color: green;
}
</style>
