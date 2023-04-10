<template>
<div class="media-page">
  <div class="media-container"> 
    <div class="video-container">
      <div class="video">
        <iframe src="https://www.youtube.com/embed/P3qtLIw8-Jc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video">
        <iframe src="https://www.youtube.com/embed/yw3xI2Ivfx0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="video"> 
        <iframe src="https://www.youtube.com/embed/kAq7bQmjkp0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <!-- <masonry-wall :items="images" :ssr-columns="1" :column-width="300" :gap="16">
      <template #default="{ item }">
        <div style="height: 100$">
          <img class="masonry-image" :src="require(`@/assets/images/gallery/${item}`)">
        </div>
      </template>
    </masonry-wall> -->
  </div>
</div>
</template>

<script>
export default {
  name: 'Media',
  data: function () {
    return {
      images: [
        // "IMG5786.jpg",
        // "IMG3539.jpg",
        // "gallery1.jpg",
        // "IMG5781.jpg",
        // "IMG5785.jpg",
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

.video-container {
  display: flex;
  padding-bottom: 20px;

  .video {
    flex: 1;

    iframe {
      width: 93%;
      min-height: 300px;
    }
  }
}

.masonry-image {
  width: 300px;
  padding-bottom: 5px;
}
</style>