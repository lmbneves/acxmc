<template>
  <!-- <LoadingScreen v-if="isLoading" /> -->
  <AppNavbar v-if="!isLoading" />
  <router-view v-if="!isLoading"></router-view>
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
      // isLoading: true
    }
  },
  // mounted () {
  //   setTimeout(() => {
  //     this.isLoading = false
  //   }, 4000)
  // }
}
</script>

<style lang="scss">
@font-face {
  font-family: "PGF Now Regular";
  src: local("PGFNow-Regular"),
    url(./fonts/PGFNow-Regular.otf) format("opentype");
}

@font-face {
  font-family: "PGF Now Light";
  src: local("PGFNow-Light"),
    url(./fonts/PGFNow-Light.otf) format("opentype");
}

@font-face {
  font-family: "Alcantera Serif";
  src: local("Alcantera-Serif"),
    url(./fonts/Alcantera-Serif.ttf) format("truetype");
}

@font-face {
  font-family: "Alcantera Script";
  src: local("Alcantera-Script"),
    url(./fonts/Alcantera-Script.ttf) format("truetype");
}

@font-face {
  font-family: "Roboto Condensed Bold";
  src: local("Roboto Condensed Bold"),
    url(./fonts/RobotoCondensedBold.ttf) format("truetype");
}

@font-face {
  font-family: "Playfair Display Italic";
  src: local("Playfair Display Italic"),
    url(./fonts/PlayfairDisplay-Italic.ttf) format("truetype");
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>