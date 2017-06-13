<template>
<div>
    <router-view name="Header"></router-view> 
    <router-view name="Swipe"></router-view>
    <router-view name="Coming"></router-view>
    <router-view name="Theater"></router-view>
    <router-view name="Usbox"></router-view>
    <router-view name="Top"></router-view>
    <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
html{
  font-size: 15.625vw;
}

</style>
