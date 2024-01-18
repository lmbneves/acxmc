<template>
  <div class="home__container">
    <div class="titles">
      <h1>Abagael Cheng</h1>
      <div class="subtitles">
        <h3>Artist</h3>
        <h3>Athlete</h3>
        <h3>Activist</h3>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      //
    }
  },
}
</script>

<style lang="scss" scoped>
.home__container {
  width: 100%;
  height: 100vh;
  background: url("~@/assets/images/acxmc.png");
  background-size: 105%;
  background-position: top right;
  position: relative;
}
.titles {
  width: 100%;
  height: 30vh;
  position: absolute;
  display: inline;
  align-items: end;
  text-align: center;
  bottom: 0;

  h1 {
    color: white;
    font-size: 64pt;
    font-family: 'Display', 'sans-serif';
    width: 100%;
  }
}
.subtitles {
  h3 { 
    color: white;
    display: inline;
    font-size: 14pt;
    text-transform: uppercase;
    padding: 0px 20px;
    width: 100%;
  }
}

@media only screen and (min-width: 768px) {

}
</style>