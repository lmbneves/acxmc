<template>
  <div class="mainvisual">
    <div class="main-image">
      <img src="@/assets/images/abby-alone-rotate.png">
    </div>
    <div class="name-container">
      <div class="name">
        <h2>Abagael</h2>
        <h1>Cheng</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
}

.main-image img {
  height: 100%;
  padding-right: 45%;
}

.name-container {
  width: 50%;
  position: absolute;
  top: 0;
  left: 0;
}

.name {
  padding: 80px;
  text-align: left;
}

.name h1 {
  margin: 0;
  font-size: 160pt;
  padding-left: 40px;
}

.name h2 {
  margin: 0;
  font-size: 120pt;
  margin-bottom: -80px;
}
</style>