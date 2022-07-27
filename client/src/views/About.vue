<template>
<div class="about-page">
  <div class="download-links">
    <a href="/Abagael Cheng Résumé - February 2022.pdf" download><span>RÉSUMÉ</span></a>
    <a href="/Abagael Cheng Headshot.jpeg" download><span>HEADSHOT</span></a>
    <a href="/Abagael Cheng Bio.pdf" download><span>BIO</span></a>
  </div>
  <div class="about-wrapper">
    <div class="about-inner flex-content">
      <div class="about-title">
        <h4 
          class="a-heading iama"
          :style="'transform: translate3d(0px, -' + scrollPositionModifier + 'px, 0px) skew(0deg, 0deg);'"
          >I AM A</h4>
        <h4 
          class="a-heading performer"
          data-aos="fade-left" data-aos-delay="400"
          >PERFORMER</h4>
        <h4 
          class="a-heading singer"
          data-aos="fade-right" data-aos-delay="800"
          >SINGER</h4>
        <h4 
          class="a-heading artist"
          data-aos="fade-left" data-aos-delay="1200"
          >& ARTIST</h4>
      </div>
      <div class="about-content">
        <div class="a-image" data-aos="fade-up" data-aos-delay="1400">
          <img :src="require('@/assets/images/abby-performer1.jpg')"  />
        </div>
        <div class="a-text">
          <p>
            East Asian American soprano Abagael Cheng is a singing artist who strives to break the boundaries of 
            traditional performance art and bring social activism to the forefront of her work. Ms. Cheng sees her 
            role in social justice and performance art to be one and the same: that of a storyteller.
          </p>

          <p>
            She works towards deepening relationships within and between communities by engaging audiences with 
            relatable narratives and centering collaboration in her productions.
          </p>

          <p>
            During the 2021-22 season, she will appear as Chocholka the Hen and the Blue Dragonfly in Janáček's 
            <em>The Cunning Little Vixen</em>, at Bard College Conservatory of Music, directed by Doug Fitch. 
            Previous season highlights include a debut as Monica in Menotti's <em>The Medium</em> at Oberlin 
            Conservatory; performing in Handel's <em>Ariodante</em> as Dalinda, conducted by Miah Im; and taking 
            on the role of Fraulein Kost in Kandor's <em>Cabaret</em>, directed by Paul Moser.
          </p>
        </div>
        <div class="b-text">
          <p>
            Ms. Cheng curates her own productions as a form of ultimate collaboration in all aspects of the art, combining song and poetry to create unique 
            narratives. This discovery began with her degree recital, <em>Giving her a voice</em>, at Oberlin Conservatory, the 
            purpose of which was to promote and celebrate women composers, featuring only works by Clara Schumann, Alma 
            Mahler, Lili Boulanger, and Libby Larsen. Furthermore, this project sought to bring the audience's attention 
            to local women-owned businesses in the town of Oberlin, in order to materially support women in their community. 
            During the pandemic, she produced her own recital, <em>Spirals</em>, at the Greenwich House Music School, which was 
            developed as a processing tool for a personal experience of anxiety, isolation, and grief. The production 
            demonstrates the journey of creating one's own sense of closure, exploring how the work of healing can generate 
            a new and empowered sense of self.
          </p>

          <p>
            Ms. Cheng's particular interest in contemporary music has led her 
            to work closely with up-and-coming composers. As part of the collaborative effort in <em>Spirals</em>, she premiered an 
            original work for electronics and voice by composer Kari Watson called <em>Facing Shadows</em>, with text by Ms. Cheng's 
            aunt about their shared experience of societal shaming of women's bodies. Ms. Cheng combines her connection to 
            contemporary music with that of the Baroque genre. Consequently, concert highlights include Bach's Cantata BWV 
            147, “Herz und Mund und Tat und Leben,” with the Bard Baroque Ensemble, conducted by Renée Anne Louprette; Vessel 
            by Kati Agócs, with the Oberlin Sinfonietta, conducted by Timothy Weiss; and the soprano solo and mezzo solo of 
            Bach's Cantata BWV 150, “Nach dir, Herr, verlanget mich,” conducted by Jana Ballard.
          </p>

          <p>
            A New York City-based artist, Ms. Cheng holds a Bachelor of Music in Vocal Performance and a Bachelor 
            of Arts in Mathematics from Oberlin College & Conservatory. She is currently pursuing her Master's degree 
            in the Graduate Vocal Arts Program at Bard College Conservatory of Music, where she studies under the 
            tutelage of Stephanie Blythe, Kayo Iwama, Erika Switzer, and Lucy Fitz Gibbon.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import AOS from 'aos'
import _ from 'lodash';

export default {
  name: 'About',
  data: function () {
    return {
      scrollPositionModifier: 0,
      lastScrollPosition: 0
    }
  },
  methods: {
    throttleScroll:_.throttle( function() {
      this.handleScroll()
    }, 10),
    handleScroll() {
      // const currentScrollPosition = document.documentElement.scrollTop;
      // const viewportHeight = document.documentElement.clientHeight;
      // console.log(e);
      // // const elementScrollPosition = e.offsetHeight

      // if ((currentScrollPosition + viewportHeight) > 0) {
      //   const moveDelta = (currentScrollPosition + viewportHeight - 0) * 0.8;
      //   this.scrollPositionModifier += moveDelta;
      //   console.log(this.scrollPositionModifier)
      // }
    }
  },
  mounted () {
    AOS.init();
  },
  created () {
    window.addEventListener('scroll', this.throttleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.throttleScroll);
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;800&family=Vidaloka&display=swap');
.flex-content {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.about-page {
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: $bright-gray;
  color: $shark-blue;
}

.about-wrapper {
  min-height: 100vh;
  position: relative;
  padding: 0;
}

.about-inner {
  padding-top: 80px;
}

.about-title {
  width: 100%;
}

.a-heading {
  height: 114px;
  margin-bottom: 22px;
  font-size: 160px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;

  &.iama {
    padding-left: 80px;
    font-size: 120px;
    margin-bottom: -10px;
  }

  &.performer {
    font-family: 'Vidolka', 'serif';
    padding-left: 80px;
  }

  &.singer {
    text-align: right;
    padding-right: 80px;
  }

  &.artist {
    font-family: 'Vidolka', 'serif';
    text-align: right;
    padding-right: 80px;
  }
}

.a-image {
  position: absolute; 
  top: 390px;
  padding: 0;

  img {
    width: 504px;
    height: 756px;
  }
}

.a-text {
  margin-top: 100px;
  margin-left: 35%;
  padding: 0 100px;

  p {
    font-size: 18px;
    line-height: 1.45em;
  }
}

.b-text {
  margin-top: 60px;
  padding: 0 100px;
  p {
    font-size: 18px;
    line-height: 1.45em;
  }
}

.download-links {
  display: none;
  position: absolute;
  z-index: 200;
  bottom: 0;
  padding: 40px 40px;

  a {
    text-decoration: none;
    color: $timberwolf;
    padding: 10px;
    border: 1px solid $timberwolf;
    border-radius: 20px;
    margin-right: 10px;
    transition: all 0.5s;
    cursor: pointer;

    span {
      cursor: pointer;
      display: inline-block;
      position: relative;
      transition: 0.5s;
    }

    span:after {
      content: "";
      background-image: url('~@/assets/icons/download.png');
      background-size: 16px 16px;
      background-repeat: no-repeat;
      height: 16px;
      display: inline-block;
      position: absolute;
      opacity: 0;
      transition: 0.5s;
      top: 3px;
    }

    &:hover span {
      padding-right: 20px;
    }

    &:hover span:after {
      width: 16px;
      opacity: 1;
      right: 0;
    }
  }
}

@media (min-width: 768px) {

}
</style>