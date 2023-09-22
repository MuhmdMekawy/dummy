<script>
import axios from 'axios'

export default {
  name: 'Home', 
  data() {
    return {
      categories : null
    }
  },
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
  <div class="home-page">
    <h1 class="navigate">Welcome in our Store</h1>
    <div class="container">
      <div class="content">
        <div class="cont" v-if="categories !== null" v-for="category in categories" :key="category">
          <h3>{{ category }}</h3>
        </div>
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
    color: #fff;
    border-radius: 5px;
    transition: 0.3s;
    border: 1px solid #141E46;
    user-select: none;
    &:hover{
      background: transparent;
      color: #141E46;
    }
    h3{
      text-transform: capitalize;
    }
  }
}
}
</style>