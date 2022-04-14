<template>
  <div class="navigation-container" :style="'--text-color: ' + this.navbarColors[this.$route.path]">
    <ul class="nav-menu nav-menu-one">
      <li><router-link :to="{ path: '/' }" class="home-icon">X</router-link></li>
      <li><router-link :to="{ path: 'about' }" >About</router-link></li>
      <li><router-link :to="{ path: 'schedule' }">Schedule</router-link></li>
    </ul>
    <ul class="nav-menu nav-menu-two">
      <li><router-link :to="{ path: 'contact' }">Connect</router-link></li>
      <li><router-link :to="{ path: 'media' }">Media</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
  data: function () {
    return {
      navbarColors: {
        '/' : "#191E23",
        '/about' : "#D3D0CB",
        '/schedule' : "#D3D0CB",
        '/contact' : "#D3D0CB",
        '/media': "#D3D0CB"
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.navigation-container {
  position: absolute;
  padding: 15px 20px;
  left: 0;
  top: 0;
  z-index: 10;
}

.nav-menu {
  text-align: left;
  display: inline-flex;
  font-family: 'Roboto Condensed Bold', sans-serif;
  text-transform: uppercase;
  color: var(--text-color);
  position: relative;

  li {
    list-style-type: none;
    font-size: 11pt;
    padding: 0px 10px;
  }

  a {
    text-decoration: none;

    &:visited {
      color: var(--text-color);
    }
  }
}

.nav-menu-one {
  position: absolute;
}

.nav-menu-two {
  transform: rotate(-90deg);
  margin-top: 80px;
  margin-left: -50px;
}

.home-icon {
  font-family: 'Alcantera Script', sans-serif;
  -webkit-text-stroke: 1px var(--text-color);
  z-index: 100;
}
</style>