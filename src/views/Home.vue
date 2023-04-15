<template>
  <div class="home-page">
    <div class="home-image__wrapper">
      <img :src="require('@/assets/images/abby-home.jpg')" class="home-image" />
    </div>
    <div class="home-text__wrapper">
      <div class="title">
        <h3>Abagael</h3>
        <h1>Cheng</h1>
      </div>
      <div>
        <p class="bio">East Asian American soprano Abagael Cheng is a singing artist who strives to break the 
        boundaries of traditional performance art and bring social activism to the forefront of her work. 
        Ms. Cheng sees her role in social justice and performance art to be one and the same: that of a storyteller. 
        She works towards deepening relationships within and between communities by engaging audiences with 
        relatable narratives and centering collaboration in her productions.</p>
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
.home-image__wrapper {
  width: 100%;
}

.home-image {
  width: 100%;
  margin-bottom: -10px;
}

.bio {

}

@media only screen and (min-width: 768px) {
  .home-image__wrapper {
    width: 45%;
    float: left;
  }
  .home-image {
    height: 100%;
    // object-fit: cover;
    // object-position: -20% 0;
  }
  .home-text__wrapper {
    width: 55%;
    padding-left: 45%;
  }
  .title {
    padding: 100px 0px 0px 120px;

    h1 {
      font-family: 'Display';
      font-size: 120pt;
      margin: 0;
      margin-top: -50px;
    }
    h3 {
      font-family: 'Display';
      font-size: 80pt;
      margin: 0;
      padding-left: 10px;
    }
  }
  .bio {
    width: 60%;
    padding: 60px 130px;
    line-height: 24pt;
  }
}
</style>