<template>
  <div class="performer-page">
    <div class="performer-image__wrapper">
      <img :src="require('@/assets/images/IMG5785.jpg')" class="performer-image" />
    </div>
    <p>
      East Asian American soprano Abagael Cheng is a singing artist who strives to break the boundaries of 
      traditional performance art and bring social activism to the forefront of her work. Ms. Cheng sees her 
      role in social justice and performance art to be one and the same: that of a storyteller. She works 
      towards deepening relationships within and between communities by engaging audiences with relatable narratives 
      and centering collaboration in her productions.<br /><br />During the 2021-22 season, she will appear as 
      Chocholka the Hen and the Blue Dragonfly in Janáček's The Cunning Little Vixen, at Bard College Conservatory of 
      Music, directed by Doug Fitch. Previous season highlights include a debut as Monica in Menotti's The Medium at 
      Oberlin Conservatory; performing in Handel's Ariodante as Dalinda, conducted by Miah Im; and taking on the role 
      of Fraulein Kost in Kandor's Cabaret, directed by Paul Moser.<br /><br />Ms. Cheng curates her own productions 
      as a form of ultimate collaboration in all aspects of the art, combining song and poetry to create unique 
      narratives. This discovery began with her degree recital, Giving her a voice, at Oberlin Conservatory, the 
      purpose of which was to promote and celebrate women composers, featuring only works by Clara Schumann, Alma 
      Mahler, Lili Boulanger, and Libby Larsen. Furthermore, this project sought to bring the audience's attention 
      to local women-owned businesses in the town of Oberlin, in order to materially support women in their community. 
      During the pandemic, she produced her own recital, Spirals, at the Greenwich House Music School, which was 
      developed as a processing tool for a personal experience of anxiety, isolation, and grief. The production 
      demonstrates the journey of creating one's own sense of closure, exploring how the work of healing can generate 
      a new and empowered sense of self.<br /><br />Ms. Cheng's particular interest in contemporary music has led her 
      to work closely with up-and-coming composers. As part of the collaborative effort in Spirals, she premiered an 
      original work for electronics and voice by composer Kari Watson called Facing Shadows, with text by Ms. Cheng's 
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
</template>

<script>
export default {
  name: 'Performer',
  data: function () {
    return {
      //
    }
  },
}
</script>


<style lang="scss" scoped>
.performer-page {
  padding: 50px 55px;
  color: $timberwolf;
}

.performer-image__wrapper {
  width: 100%;
  padding-bottom: 20px;
}

.performer-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
</style>