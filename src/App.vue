<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import ----------------------


// export ----------------------
export default {
  name: 'App',
}

</script>

<style lang="scss">
@import url(./style/reset.css);
@import url('https://fonts.cdnfonts.com/css/uber-move-text');
@import url(./style/spacer.css);

#app {
  font-family: 'Uber Move Text', sans-serif;
}
</style>
