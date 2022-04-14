<template>
  <div class="athlete-page">
    <div class="athlete-image__wrapper">
      <div class="video">
        <iframe width="100%" height="600" src="https://www.youtube.com/embed/IDgolhcyBqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    <p>
      Abby started playing ultimate in NYC and went on to play with and captain the Oberlin College Preying Manti, who won the 2019 D-III National title (the first athletic national title in Oberlin's history). In the club division, Abby has played with NY BENT and XIST. Abby played on the USA U24 National Women's Team in 2019, and she received the 2020 Donovan Award. She currently plays for Bard College Big Bird. Abby is looking forward to her second season with NY Gridlock in 2022!
    </p>
  </div>
</template>

<script>
export default {
  name: 'Athlete',
  data: function () {
    return {
      //
    }
  },
}
</script>


<style lang="scss" scoped>
.athlete-page {
  padding: 50px 55px;
  color: $timberwolf;
}

.athlete-image__wrapper {
  width: 100%;
  padding-bottom: 20px;
}

.athlete-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
</style>