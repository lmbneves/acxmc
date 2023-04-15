<template>
<div class="media-page">
  <div class="media-image__wrapper">
    <img :src="require('@/assets/images/abby-media.jpg')" class="media-image" />
  </div>
  <div class="media-container"> 
    <div class="video-container">
      <div class="video">
        <iframe src="https://www.youtube.com/embed/CrStLawvTU0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p><i>L'accordéoniste</i> by Michel Emer</p>
      </div>
      <div class="video">
        <iframe src="https://www.youtube.com/embed/ytYAhwyslQo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p><i>Saying goodbye</i> by Tom Cipullo</p>
      </div>
    </div>
    <div class="video-container">
      <div class="video">
        <iframe src="https://www.youtube.com/embed/-FNKeLj_Q9k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p><i>Non, la fidélité</i> by Germaine Tailleferre</p>
      </div>
      <div class="video">
        <iframe src="https://www.youtube.com/embed/ccyQLxczcW4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p><i>Lied</i> by Isabel Mundry</p>
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
.media-image__wrapper {
  padding: 80px 30px 0px 30px;
}
.media-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  object-position: top center;
}
.media-container {
  padding: 30px;
  max-width: 100%;
}
.video-container {
  .video {
    iframe {
      width: 98%;
      min-height: 320px;
    }
  }
}

.masonry-image {
  width: 300px;
  padding-bottom: 5px;
}

@media only screen and (min-width: 768px) {
  .media-image__wrapper {
    padding: 80px 100px 0px 100px;
  }
  .media-container {
    padding: 80px 100px;
    max-width: 100%;
  }
  .video-container {
  display: flex;

  .video {
    flex: 1;

    iframe {
      width: 98%;
      min-height: 320px;
    }
  }
}
}
</style>