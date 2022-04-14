<template>
<div class="about-page">
  <div class="slide-container">
    <div 
      v-for="(section, index) in sections" 
      :key="section.name"
      class="slide"
      :class=" index === 0 ? 'active-slide' : 'hidden-slide' "
      :ref="`${section.name}`"
    >
      <div class="as-img__wrapper">
        <img :src="require('@/assets/images/' + photos[index])" class="as-img">
      </div>
      <div class="as-content__wrapper">
        <h2>{{ section.statement }}<span style="border-bottom: 1px solid #ddd;">{{ section.name }}</span>.</h2>
        <p>{{ section.blurb }}</p>
        <button>Learn more</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import aboutData from '../data/about.json';

export default {
  name: 'About',
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
    handleWheel: function(e) {
      if (e.deltaY < 0) {
        this.onWheelUp();
      } else if (e.deltaY > 0) {
        e.preventDefault();
        this.onWheelDown();
      }
    },
    onWheelDown: function() {
      this.$refs[this.sectionList[this.sectionIdx]][0].classList.add('hidden-slide');
      this.$refs[this.sectionList[this.sectionIdx]][0].classList.remove('active-slide');
      this.sectionIdx == 2 ? this.sectionIdx = 0 : this.sectionIdx++;
      this.$refs[this.sectionList[this.sectionIdx]][0].classList.add('active-slide');
      this.$refs[this.sectionList[this.sectionIdx]][0].classList.remove('hidden-slide');
    },
    onWheelUp: function() {
      this.$refs[this.sectionList[this.sectionIdx]][0].classList.add('hidden-slide');
      this.$refs[this.sectionList[this.sectionIdx]][0].classList.remove('active-slide');
      this.sectionIdx == 0 ? this.sectionIdx = 2 : this.sectionIdx--;
      this.$refs[this.sectionList[this.sectionIdx]][0].classList.add('active-slide');
      this.$refs[this.sectionList[this.sectionIdx]][0].classList.remove('hidden-slide');
    },
  },
  mounted: function() {
    window.addEventListener("wheel", this.handleWheel, { passive: false });
  },
  unmounted: function() {
    window.removeEventListener("wheel", this.handleWheel);
  }
}
</script>


<style lang="scss" scoped>
.about-page {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #221a17;
}

.slide-container {
  position: absolute;
  height: 100%;
  width: 100%;
}

.slide {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  position: absolute;
}

.active-slide {
  visibility: inherit;
}

.hidden-slide {
  visibility: hidden;
}

.as-img__wrapper {
  height: 100%;
  width: 50%;
  text-align: right;
}

.as-img__wrapper::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  -webkit-box-shadow: inset 0 0 18px 12px #221a17;
  box-shadow: inset 0 0 18px 12px #221a17;
}

.as-img {
  height: 100%;
}

.as-content__wrapper {
  flex: 1;
  padding: 0px 100px;

  h2 {
    color: $timberwolf;
    font-family: "Playfair Display Italic";
    padding-top: 250px;
    padding-left: 50px;
  }

  p {
    color: $timberwolf;
    font-family: "Playfair Display Italic";
    padding: 10px 50px;
  }
  
  button {
    margin-top: 10px;
    margin-left: 50px;
  }
}
</style>