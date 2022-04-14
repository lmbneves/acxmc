<template>
  <div class="loading-container">
    <div>acxmc</div>
  </div>
</template>

<script>
export default {
  name: 'LoadingScreen',
  data: function () {
    return {
      // data
    }
  },
};
</script>

<style lang="scss" scoped>
.loading-container {
  width: 100vh;
  height: 100vh;
  background-color: $shark-blue;
  position: absolute;
  z-index: 100;
}
</style>