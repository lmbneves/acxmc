<template>
  <div class="navigation-container">
    <ul class="nav-menu">
      <li><router-link :to="{ path: '/' }">Home</router-link></li>
      <li><router-link :to="{ path: 'about' }" >About</router-link></li>
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

    }
  }
};
</script>

<style lang="scss" scoped>
.navigation-container {
  position: absolute;
  padding: 25px 35px;
  right: 0;
  top: 0;
  z-index: 10;

  text-align: right;
}

.nav-menu {
  text-align: right;
  display: inline-flex;
  font-family: 'PGF Now Regular', sans-serif;
  text-transform: lowercase;
  color: black;
  position: relative;

  li {
    list-style-type: none;
    font-size: 11pt;
    padding: 0px 10px;
  }

  a {
    text-decoration: none;

    &:visited {
      color: black;
    }
  }
}

// .home-icon {
//   font-family: 'Alcantera Script', sans-serif;
//   -webkit-text-stroke: 1px var(--text-color);
//   z-index: 100;
// }
</style>