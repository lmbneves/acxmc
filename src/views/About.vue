<template>
<div class="about-page">
  <div class="download-links">
    <a href="/Abagael Cheng Résumé - February 2022.pdf" download>Download résumé</a>
    <a href="/Abagael Cheng Headshot.jpeg" download>Download headshot</a>
    <a href="/Abagael Cheng Bio.pdf" download>Download bio</a>
  </div>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :pagination="{ clickable: true }"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide 
      v-for="(section, index) in sections" 
      :key="section.name" 
      class="slide"
      :class="`slide-${section.name}`"
    >
      <div class="slide-container">
        <div class="about-image__wrapper">
          <img :src="require('@/assets/images/' + photos[index])" class="about-image" />
        </div>
        <div class="about-content__wrapper">
          <h2>{{ section.statement }}<span style="border-bottom: 1px solid #ddd;">{{ section.name }}</span>.</h2>
          <p v-if="section.description" v-html="section.description" />
          <p v-else v-html="section.blurb" class="push-middle" />
        </div>
      </div>
    </swiper-slide>
  </swiper>
</div>
</template>

<script>
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue/swiper-vue.js';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import aboutData from '../data/about.json';

export default {
  name: 'About',
  components: {
    Swiper,
    SwiperSlide,
  },
  data: function () {
    return {
      sections: aboutData,
      sectionList: ["performer", "athlete", "model"],
      sectionIdx: 0,
      photos: [
        "abby-smoke2.png",
        "abby-smoke2.png",
        "abby-smoke2.png"
      ]
    }
  },
  methods: {
    onSlideChange() {
      console.log("slide change");
    },
    handleScroll() {
      console.log("side scroll")
    }
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper);
    };
    return {
      onSwiper,
      modules: [Navigation, Pagination],
    };
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>

<style lang="scss">
.about-page {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #221a17;
  color: $timberwolf;
}

.swiper {
  height: 100%;
  margin: 0 auto;
  text-align: center;
}

.swiper-pagination-bullet-active {
  background-color: $timberwolf;
}

.slide-container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: absolute;
  text-align: left;
}

.slide-performer {
  color: $timberwolf;
  background-color: #221a17;
}

.slide-athlete {
  color: $shark-blue;

  background-color: $timberwolf;
  background-image: url('~@/assets/images/abby-athlete.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100%;
  background-position: top left;

  .about-image { display: none; }
  h2 {
    padding-top: 450px !important;
  }
}

.slide-model {
  color: $shark-blue;

  background-color: white;
  background-image: url('~@/assets/images/abby-model.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: 100%;
  background-position: center;

  .about-image { display: none; }
  h2 {
    padding-top: 250px !important;
  }
}

.about-image__wrapper {
  height: 100%;
  width: 45%;
  text-align: right;
}

.about-image__wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  // -webkit-box-shadow: inset 0 0 18px 12px #221a17;
  // box-shadow: inset 0 0 18px 12px #221a17;
}

.about-image {
  height: 100%;
}

.about-content__wrapper {
  flex: 1;
  padding: 0px 30px;

  h2 {
    padding-top: 40px;
    padding-left: 50px;
  }

  p {
    padding: 10px 50px;
  }
  
  button {
    margin-top: 10px;
    margin-left: 50px;
  }
}

.download-links {
  position: absolute;
  z-index: 200;
  bottom: 0;
  padding: 40px 40px;

  a {
    text-decoration: none;
    color: $timberwolf;
    padding: 10px;
    border: 1px solid $timberwolf;
    margin-right: 10px;
  }
}
</style>