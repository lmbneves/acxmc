<template>
<div class="about-page">
  <!-- <div class="download-links">
    <a href="/Abagael Cheng Résumé - February 2022.pdf" download><span>RÉSUMÉ</span></a>
    <a href="/Abagael Cheng Headshot.jpeg" download><span>HEADSHOT</span></a>
    <a href="/Abagael Cheng Bio.pdf" download><span>BIO</span></a>
  </div> -->
  <div class="about-title">
    <h2 v-bind:style="windowWidth < 768 ? { top: 0 } : { top: slideTitle + 'px' }">ABAGAEL CHENG</h2>
    <h3 class="t1" v-bind:style="windowWidth < 768 ? { top: 0 } : { top: slideSubtitle + 'px' }">PERFORMER</h3>
    <!-- <h3 class="t2">SINGER</h3>
    <h3 class="t3">ARTIST</h3> -->
  </div>
  <div class="about-image">
    <img :src="require('@/assets/images/abby-about.jpg')">
  </div>
  <div class="about-text" :style="{ top: slideText + 'px' }">
    <p>
      East Asian American soprano Abagael Cheng is a singing artist who strives to break the boundaries of 
      traditional performance art and bring social activism to the forefront of her work. Ms. Cheng sees her 
      role in social justice and performance art to be one and the same: that of a storyteller. She works 
      towards deepening relationships within and between communities by engaging audiences with relatable narratives 
      and centering collaboration in her productions.<br /><br />Ms. Cheng curates her own productions 
      as a form of ultimate collaboration in all aspects of the art, combining song and poetry to create unique 
      narratives. This discovery began with her degree recital, <em>Giving her a voice</em>, at Oberlin Conservatory, the 
      purpose of which was to promote and celebrate women composers, featuring only works by Clara Schumann, Alma 
      Mahler, Lili Boulanger, and Libby Larsen. Furthermore, this project sought to bring the audience's attention 
      to local women-owned businesses in the town of Oberlin, in order to materially support women in their community. 
      During the pandemic, she produced her own recital, <em>Spirals</em>, at the Greenwich House Music School, which was 
      developed as a processing tool for a personal experience of anxiety, isolation, and grief. The production 
      demonstrates the journey of creating one's own sense of closure, exploring how the work of healing can generate 
      a new and empowered sense of self.<br /><br />Ms. Cheng's particular interest in contemporary music has led her 
      to work closely with up-and-coming composers. As part of the collaborative effort in <em>Spirals</em>, she premiered an 
      original work for electronics and voice by composer Kari Watson called <em>Facing Shadows</em>, with text by Ms. Cheng's 
      aunt about their shared experience of societal shaming of women's bodies. Ms. Cheng combines her connection to 
      contemporary music with that of the Baroque genre. Consequently, concert highlights include Bach's Cantata BWV 
      147, “Herz und Mund und Tat und Leben,” with the Bard Baroque Ensemble, conducted by Renée Anne Louprette; Vessel 
      by Kati Agócs, with the Oberlin Sinfonietta, conducted by Timothy Weiss; and the soprano solo and mezzo solo of 
      Bach's Cantata BWV 150, “Nach dir, Herr, verlanget mich,” conducted by Jana Ballard.<br /><br />A New York 
      City-based artist, Ms. Cheng holds a Bachelor of Music in Vocal Performance and a Bachelor of Arts in Mathematics 
      from Oberlin College & Conservatory. She is currently pursuing her Master's degree in the Graduate Vocal Arts 
      Program at Bard College Conservatory of Music, where she studies under the tutelage of Stephanie Blythe, Kayo 
      Iwama, Erika Switzer, and Lucy Fitz Gibbon.
    </p>
  </div>
</div>
</template>

<script>
export default {
  name: 'About',
  data: function () {
    return {
      windowWidth: window.innerWidth,
      slideTitle: '120',
      slideSubtitle: '250',
      slideText: '350'
    }
  },
  methods: {
    handleScroll() {
      this.slideTitle = Math.max(120 - 0.7*window.scrollY, 0);
      this.slideSubtitle = Math.max(250 - 0.6*window.scrollY, 0);
      this.slideText = Math.max(350 - 0.5*window.scrollY, 0);
    },
    onResize() { this.windowWidth = window.innerWidth; }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.onResize);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.onResize);
  },
}
</script>

<style lang="scss">
$content-base: 13%;

.about-page {
  width: 100%;
  height: 100vh;
  padding-top: 125px;
  position: absolute;
  color: $shark-blue;
}

.about-image img {
  width: 100%;
  top: $content-base + 10%;
  position: absolute;
}

.about-title {
  width: 100%;

  h2 {
    width: 100%;
    position: relative;
    margin: 0;
    z-index: 10;

    font-size: 10vw;
    line-height: 10vw;
    font-family: "Archivo Black";
  }

  h3 {
    width: 100%;
    position: relative;
    margin: 0;
    z-index: 10;

    font-size: 8vw;
    line-height: 8vw;
    text-align: right;
  }
}

.about-text {
  width: 90%;
  margin-top: 800px;
  padding: 0px 20px;

  font-size: 12pt;
}

@media only screen and (min-width: 768px) {
  .about-page {
    padding-top: 175px;
    position: absolute;
  }

  .about-image img {
    width: 40%;
    top: $content-base + 10%;
  }

  .about-title {
    h2 {
      position: absolute;
    }

    h3 {
      position: absolute;
    }
  }

  .about-text {
    width: 50%;
    position: absolute;
    margin-top: 100px;
    margin-left: 43%;

    font-size: 14pt;
  }
}

// .download-links {
//   position: absolute;
//   z-index: 200;
//   bottom: 0;
//   padding: 40px 40px;

//   a {
//     text-decoration: none;
//     color: $timberwolf;
//     padding: 10px;
//     border: 1px solid $timberwolf;
//     border-radius: 20px;
//     margin-right: 10px;
//     transition: all 0.5s;
//     cursor: pointer;

//     span {
//       cursor: pointer;
//       display: inline-block;
//       position: relative;
//       transition: 0.5s;
//     }

//     span:after {
//       content: "";
//       background-image: url('~@/assets/icons/download.png');
//       background-size: 16px 16px;
//       background-repeat: no-repeat;
//       height: 16px;
//       display: inline-block;
//       position: absolute;
//       opacity: 0;
//       transition: 0.5s;
//       top: 3px;
//     }

//     &:hover span {
//       padding-right: 20px;
//     }

//     &:hover span:after {
//       width: 16px;
//       opacity: 1;
//       right: 0;
//     }
//   }
// }
</style>