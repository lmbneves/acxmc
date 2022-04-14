<template>
  <div class="model-page">
    <masonry-wall :items="images" :ssr-columns="1" :column-width="300" :gap="16">
      <template #default="{ item }">
        <div style="height: 100$">
          <img class="masonry-image" :src="require(`@/assets/images/model/${item}`)">
        </div>
      </template>
    </masonry-wall>
  </div>
</template>

<script>
export default {
  name: 'Model',
  data: function () {
    return {
      images: [
        "abby-smoke.png",
        "model1.jpg",
        "model2.jpg",
        "model3.jpg",
        "model4.jpg",
        "model5.jpg",
        "model6.jpg",
        "model7.jpg"
      ]
    }
  },
}
</script>


<style lang="scss" scoped>
.model-page {
  padding: 50px 55px;
  color: $timberwolf;
}

.model-image__wrapper {
  width: 100%;
  padding-bottom: 20px;
}

.model-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
}

.masonry-image {
  width: 300px;
  padding-bottom: 10px;
}
</style>