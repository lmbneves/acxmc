<template>
  <div class="navigation-container" :class="{ 'open-navbar-overlay': showNavbar }" :style="'--text-color: ' + this.navbarColors[this.$route.path]">
    <div class="logo-container">
      <router-link :to="{ path: '/' }" >axcmc</router-link>
    </div>
    <div class="burger">
      <div class="x-icon" @click="toggleNavigation">X</div>
      <div class="mobile-nav" :class="{ 'open-mobile-nav': showNavbar }">
        <ul class="nav-menu">
          <li><router-link :to="{ path: 'about' }" >About</router-link></li>
          <li><router-link :to="{ path: 'schedule' }">Schedule</router-link></li>
          <li><router-link :to="{ path: 'contact' }">Connect</router-link></li>
          <li><router-link :to="{ path: 'media' }">Media</router-link></li>
        </ul>
      </div>
      <div class="desktop-nav">
        <ul class="nav-menu nav-menu-one">
          <li><router-link :to="{ path: 'about' }" >About</router-link></li>
          <li><router-link :to="{ path: 'schedule' }">Schedule</router-link></li>
        </ul>
        <ul class="nav-menu nav-menu-two">
          <li><router-link :to="{ path: 'media' }">Media</router-link></li>
          <li><router-link :to="{ path: 'contact' }">Connect</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
  data: function () {
    return {
      showNavbar: false,
      navbarColors: {
        '/' : "#191E23",
        '/about' : "#191E23",
        '/schedule' : "#191E23",
        '/contact' : "#D3D0CB",
        '/media': "#D3D0CB",
        '/performer' : "#D3D0CB",
        '/athlete' : "#D3D0CB",
        '/model' : "#D3D0CB",
      }
    }
  },
  methods: {
    toggleNavigation() {
      this.showNavbar = !this.showNavbar;
    }
  },
  watch:{
    $route(){
      this.showNavbar = false;
    }
  } 
};
</script>

<style lang="scss" scoped>
.navigation-container {
  position: fixed;
  padding: 15px 20px;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  box-sizing: border-box;
}

.logo-container {
  font-family: 'Alcantera Script', sans-serif;
  font-size: 64pt;
  -webkit-text-stroke: 1px var(--text-color);
  z-index: 100;
  width: 100%;
  height: 60px;
  margin-top: -60px;
  padding: 12px;
  text-align: left;
  
  a { 
    text-decoration: none; 
    color: var(--text-color);

    &:visited {
      color: var(--text-color);
    }
  }
}

.burger {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 100%;
}

.x-icon {
  font-family: 'Alcantera Script', sans-serif;
  -webkit-text-stroke: 2px var(--text-color);
  z-index: 100;
  cursor: pointer;
  width: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
}

.open-navbar-overlay {
  width: 100%;
  height: 100vh;
  background-color: $bright-gray;
  opacity: 100%;
  transition: opacity 1s;
}

.desktop-nav {
  display: none;
}

.open-desktop-nav {
  display: block;
}

.mobile-nav {
  width: 100%;
  display: none;
}

.open-mobile-nav {
  display: block;
  padding-left: 15px;
}

.nav-menu {
  padding-top: 60px;
  text-align: center;
  font-family: 'Roboto Condensed Bold', sans-serif;
  text-transform: uppercase;

  li {
    list-style-type: none;
    font-size: 18pt;
    padding: 10px;
  }

  a { 
    text-decoration: none; 
    color: $shark-blue;

    &:visited {
      color: $shark-blue;
    }
  }
}

@media (min-width: 768px) {
  .x-icon {
    position: initial;
    pointer-events: none;
  }
  .desktop-nav {
    display: block;
  }

  .mobile-nav {
    display: none;
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
      &:visited {
        color: var(--text-color);
      }
    }
  }

  .burger {
    top: 30px;
    right: 30px;
  }

  .nav-menu-one {
    position: absolute;
    margin: 0;
    padding: 0;
    top: 2px;
    right: 40px;
  }

  .nav-menu-two {
    position: absolute;
    margin: 0;
    padding: 0;
    transform: rotate(90deg);
    top: 85px;
    right: -48px;
  }
}
</style>