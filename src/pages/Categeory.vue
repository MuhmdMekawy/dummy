<script>
import axios from 'axios'
export default {
  name: 'Categeory',
  data() {
    return {
      products : null
    }
  },
  methods: {
    async fetchData(skip) {
      await axios.get(`https://dummyjson.com/products?limit=25&skip=${skip * 25}`).then((res) => {
        return this.products = res.data.products
      })
    }
  }, 
  created() {
    return this.fetchData(0)
  }
}
</script>

<template>
  <div class="category-page">
    <h1 class="navigate">Welcome in our Store</h1>
    <div class="container">
      <div class="content">
        <RouterLink :to="'/product/'+ product.id" class="cont" v-for="product in products" :key="product.id">
          <div class="image"><img :src="product.thumbnail" alt="product" loading="lazy"></div>
          <h3>{{ product.title }}</h3>
          <h4 class="badge bg-warning">{{ product.category }}</h4>
        </RouterLink >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .category-page{
    .content{
      display: grid;
      grid-template-columns: repeat( 5 , 1fr);
      gap: 20px;
      padding: 20px 0;
      @media (max-width : 1200px){
        grid-template-columns: repeat( 4 , 1fr);
      }
      @media (max-width : 991px){
        grid-template-columns: repeat( 3 , 1fr);
      }
      @media (max-width : 767px){
        grid-template-columns: repeat( 2 , 1fr);
      }
      @media (max-width : 450px){
        grid-template-columns: repeat( 1 , 1fr);
        margin: 0 30px;
      }
      .cont{
        border: 2px solid #313866;
        border-radius: 5px;
        padding: 0;
        position: relative;
        h3{
          font-size: 14px;
          margin-bottom: 10px;
          text-align: center;
          padding: 10px 0;
          margin-bottom: 0;
        }
        h4{
          font-size: 14px;
          position: absolute;
          right: 5px;
          top: 10px;
        }
        .image{
          height: 230px;
          img{
            object-position: center;
          }
        }
      }
    }
  }
</style>