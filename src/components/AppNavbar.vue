<template>
  <div class="nav" :class="navbarColors[$route.path]">
    <ul class="mininav">
      <li class=""><router-link :to="{ path: 'about' }">About</router-link></li>
      <li class=""><router-link :to="{ path: 'media' }">Media</router-link></li>
    </ul>
    <ul class="mininav" id="logo">
      <li><router-link :to="{ path: '/' }" >AC</router-link></li>
    </ul>
    <ul class="mininav" id="nav2">
      <li class=""><router-link :to="{ path: 'schedule' }">Schedule</router-link></li>
      <li class=""><router-link :to="{ path: 'contact' }">Contact</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
  data: function () {
    return {
      navbarColors: {
        '/': 'navbarLight',
        '/about': 'navbarDark',
        '/media': 'navbarDark',
        '/schedule': 'navbarDark',
        '/contact': 'navbarDark',
      }
    }
  }
};
</script>

<style lang="scss" scoped>
$background--color: $shark-blue;
$icon--color: $shark-blue;
$font--color:#ffffff;
$font--color--active:#fff;
$font--primary:'Fira Sans', sans-serif;
$transition--length: .8;

.nav {
  width: 100%;
  height: 0;
  position: relative;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  font-family: $font--primary;
  text-transform: uppercase;
}
.navbarLight a, .navbarLight a:visited {
  color: #fff;
}
.navbarDark a, .navbarDark a:visited {
  color: $shark-blue;
}
.mininav {
  display: inline-block;
  
  li {
    display: inline-block;
    padding: 30px 100px;
  }

  a {
    text-decoration: none;
  }
}

#logo {
  font-family: "Alcantera Script";
}
</style>