<script>
import axios from 'axios'
import Loading from '../components/Loading.vue'
export default {
  name: 'Home', 
  data() {
    return {
      categories : null
    }
  },
  components :{Loading},
  methods: {
    async fetchData() {
      await axios.get('https://dummyjson.com/products/categories').then((res) => {
        return this.categories = res.data
      })
    }  
  }, 
  created() {
    return this.fetchData()
  }
}
</script>

<template>
  <Loading v-if="categories === null" />
  <div class="home-page " v-if="categories !== null">
    <div class="container">
      <div class="content">
        <routerLink :to="'/category/' + category" class="cont"  data-aos='zoom-in' data-aos-easing='ease-out-cubic' data-aos-duration='2000' v-for="category in categories" :key="category">
          <h3>{{ category }}</h3>
        </routerLink>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-page{
  .content{
  display: grid;
  grid-template-columns: repeat( 4 , 1fr);
  gap: 20px;
  padding: 30px 0;
  .cont{
    padding: 50px 0;
    text-align: center;
    background: #141E46;
    color: #fff !important;
    border-radius: 5px;
    transition: 0.3s;
    border: 1px solid #141E46;
    user-select: none;
    &:hover{
      background: transparent;
      color: #141E46 !important;
    }
    h3{
      text-transform: capitalize;
    }
  }
}
}
</style>