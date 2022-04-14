<template>
  <div class="mainvisual">
    <div class="main-image">
      <div class="name-container">
        <h2 class="name-script">abagael cheng</h2>
        <h1 class="name">Abagael Cheng</h1>
        <h3 class="titles"><span>Performer</span> <span>Athlete</span> <span>Model</span></h3>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mainvisual {
  width: 100%;
  height: 100vh;
  position: relative;
}

.main-image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;

  background-image: url('~@/assets/images/acxmc.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100%;
  background-position: center;
}

.name-container {
  width: 55%;
  position: absolute;
  top: 30%;
  right: 0;
  text-align: center;
}

.name {
  color: $shark-blue;
  font-family: 'Alcantera Serif';
  font-size: 80pt;
  margin-top: -160px;
}

.name-script {
  color: $coral;
  font-family: 'Alcantera Script';
  font-size: 80pt;
  word-spacing: 20px;
}

.titles {
  color: $shark-blue;
  font-family: 'PGF Now Light';
  font-size: 18pt;
  margin-top: -25px;
  
  span {
    padding: 0px 30px;
  }
}
</style>