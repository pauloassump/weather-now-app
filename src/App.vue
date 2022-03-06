<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from '@/components/Header/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
@import './assets/scss/reset.scss';

#app {
  font-family: Helvetica, Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
  width: 100%;
}
</style>
