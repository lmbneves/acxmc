<template>
<div class="media-page">
  <div class="media-container"> 
    <masonry-wall :items="images" :ssr-columns="1" :column-width="300" :gap="16">
      <template #default="{ item }">
        <div style="height: 100$">
          <img class="masonry-image" :src="require(`@/assets/images/gallery/${item}`)">
        </div>
      </template>
    </masonry-wall>
  </div>
</div>
</template>

<script>
export default {
  name: 'Media',
  data: function () {
    return {
      images: [
        "IMG5786.jpg",
        "IMG3539.jpg",
        "gallery1.jpg",
        "IMG5781.jpg",
        "IMG5785.jpg",
        "abby-smoke.png",
      ]
    }
  },
}
</script>


<style lang="scss" scoped>
.media-page {
  width: 100%;
  height: 100vh;
  position: relative;
}

.media-container {
  padding: 50px 60px;
  max-width: 100%;
}

.masonry-image {
  width: 300px;
  padding-bottom: 5px;
}
</style>