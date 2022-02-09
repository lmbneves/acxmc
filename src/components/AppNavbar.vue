<template>
  <div class="navigation-container">
    <ul class="nav-menu">
      <li><router-link :to="{ path: 'about' }">About</router-link></li>
      <li><router-link :to="{ path: 'schedule' }">Schedule</router-link></li>
      <li><router-link :to="{ path: 'media' }">Media</router-link></li>
      <li><router-link :to="{ path: 'contact' }">Contact</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
  data: function () {
    return {
      //
    }
  }
};
</script>

<style scoped>
.navigation-container {
  position: absolute;
  top: 40%;
  right: 0;
  z-index: 10;
}

.nav-menu {
  width: 200px;
  text-align: left;
  font-family: 'Questrial', sans-serif;
  text-transform: uppercase;
}

.nav-menu a {
  text-decoration: none;
}

.nav-menu a:visited {
}

.nav-menu li {
 list-style-type: none;
 font-size: 12pt;
 padding-bottom: 20px;
}
</style>