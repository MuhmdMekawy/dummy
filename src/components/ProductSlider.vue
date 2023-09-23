<template>
  <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
    <Slide v-for="slide in JSON.parse(images)" :key="slide">
      <div class="carousel__item Big-Image"><img :src="slide" alt="image" loading="lazy"></div>
    </Slide>
  </Carousel>
<!-- {{ console.log('images from props:' , JSON.parse(images) ) }} -->
  <Carousel
    id="thumbnails"
    :items-to-show="4"
    :wrap-around="true"
    :autoplay="1500"
    v-model="currentSlide"
    ref="carousel"
  >
    <Slide v-for="slide in JSON.parse(images)" :key="slide">
      <div class="carousel__item Small-Image"><img :src="slide" alt="image" loading="lazy"></div>
    </Slide>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'Gallery',
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data: () => ({
    currentSlide: 0,
  }),
  props : ["images"],
  methods: {
    slideTo(val) {
      this.currentSlide = val
    },
  },
})
</script>

<style lang="scss" scoped>
  #gallery{
    border: 1px solid #313866;
    margin-bottom: 20px;
    .Big-Image{
      height: 400px !important;
      img{
        object-fit: contain !important;
      }
    }
  }
  .Small-Image{
    height: 100px !important;
    border: 2px solid #313866;
    width: 100%;
    margin:  0 5px;
    img{
      object-fit: contain !important;
    }
  }
</style>