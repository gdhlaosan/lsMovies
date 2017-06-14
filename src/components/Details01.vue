<template>
  <div>
      <div id="left">
        {{passData}}
      </div>
      <div id="right"></div>
  </div>
</template>

<script>
import Vue from 'vue'
import jsonp from 'jsonp'
export default {
  props:["passData"],
  name: 'Details01'
}

</script>

<style>

</style>
