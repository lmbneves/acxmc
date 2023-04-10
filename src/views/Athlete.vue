<template>
  <div id="box">
    <p id="slide" ref="slide" :style="{top: slideTop + 'px'}">Some text</p>  <!-- This slideUp when scrolling down -->
    <div id="static" ref="static" :style="{opacity: staticOpacity}">This box is static</div>
  </div>
</template>

<script>
export default {
  name: 'Athlete',
  data: function () {
    return {
      slideTop: '180',
      staticOpacity: '1',
    }
  },
  methods: {
    handleScroll() {
      this.slideTop = Math.max(180 - 0.5*window.scrollY, 0);
      this.staticOpacity = Math.max(1 - 0.004*window.scrollY, 0);
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>


<style lang="scss" scoped>
p, body {
  margin:0;
  padding:0;
}
body {
  height:5000px !important;
  font-family:sans-serif;
}

#slide {
  color:black;
  font-weight: 600;
  font-size: 80px;
  position:absolute;
  // top: 180px;
  left: 40px;
  z-index: 10;
}
#static {
  width: 400px;
  height: 200px;
  background-color:orange;
  float: right;
  margin-top: 150px;
  margin-right: 80px;
  color: black;
  text-align: right;
  font-size: 12px;
}
</style>