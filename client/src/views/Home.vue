<template>
  <div class="mainvisual">
    <div class="main-image">
      <div class="name-container">
        <h1 class="name">Abagael Cheng</h1>
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

  background-image: url('~@/assets/images/acxmc-mobile.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

.name-container {
  width: 100%;
  position: absolute;
  top: 15%;
  text-align: center;
}

.name {
  color: white;
  font-family: 'Archivo Black';
  font-size: 50pt;
  line-height: 45pt;
  text-transform: uppercase;
}

@media only screen and (min-width: 768px) {
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
    right: 4%;
    text-align: right;
  }
  .name {
    font-size: 90pt;
    line-height: 80pt;
  }
}
</style>