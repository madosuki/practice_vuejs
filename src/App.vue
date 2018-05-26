<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  metaInfo: {
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'}
    ]
  }
}
</script>

<style>
@font-face {
    font-family: 'TanukiMagic';
    src: url('./assets/fonts/TanukiMagic.ttf');
}

#app {
  font-family: 'Hiragino Kaku Gothic ProN', 'メイリオ', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
</style>
