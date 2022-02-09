<template>
  <AppNavbar />
  <router-view></router-view>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'

export default {
  name: 'App',
  components: { 
    AppNavbar,
  },
  data: function () {
    return {
      //
    }
  }
}
</script>

<style>
@font-face {
  font-family: "Questrial";
  src: local("Questrial"),
   url(./fonts/Questrial-Regular.ttf) format("truetype");
}

#app {
  font-family: Playfair Display, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>