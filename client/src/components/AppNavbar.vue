<template>
  <div class="navigation">
    <ul class="nav-menu">
      <router-link :to="{ path: 'about' }"><li>About</li></router-link>
      <li>Projects</li>
      <li>News</li>
      <li>Media</li>
      <li>Contact</li>
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
.navigation {
  position: absolute;
}

.nav-menu {
  width: 200px;
  text-align: left;
  color: white;
  padding-top: 20px;
}

.nav-menu a {
  text-decoration: none;
}

.nav-menu a:visited {
  color: white;
}

.nav-menu li {
 list-style-type: none;
 padding-bottom: 12px;
}
</style>