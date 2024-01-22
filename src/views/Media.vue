<template>
<div class="media-page">
  <div class="media-image__wrapper">
    <img :src="require('@/assets/images/abby-media.jpg')" class="media-image" />
  </div>
  <div class="media-container"> 
    <div class="video-container">
      <div 
        v-for="(video, index) of videos"
        :key="index"
        class="video" 
      >
        <iframe :src="video.src" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p><i>{{ video.title }}</i> {{ video.method }} {{ video.composer }}</p>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import videos from '../data/videos.json'

export default {
  name: 'Media',
  data: function () {
    return {
      videos: videos
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
  object-position: center;
}
.media-container {
  padding: 30px;
  max-width: 100%;
}
.video-container {
  .video {
    iframe {
      width: 100%;
      min-height: 340px;
    }
  }
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
  flex-wrap: wrap;
  gap: 20px;

  .video {
    flex: 35%;
    width: 100%;

    iframe {
      width: 100%;
      min-height: 340px;
    }
  }
}
}
</style>