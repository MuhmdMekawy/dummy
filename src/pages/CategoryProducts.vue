<script>
import axios from 'axios'
import Loading from '../components/Loading.vue'

export default {
    name: 'CategoryProduct',
    data() {
      return {
        products: null
      };
    },
    computed: {
      getCateName() {
        return this.$route.params.name;
      }
    },
    methods: {
      async fetchData() {
        await axios.get(`https://dummyjson.com/products/category/${this.getCateName}`).then((res) => {
            return this.products = res.data.products;
        });
      }
    },
    created() {
      return this.fetchData();
    },
    components: { Loading }
}
</script>


<template>
  <Loading   v-if="products === null"/>
  <div class="products" v-if="products !== null">
    <div class="container">
      <h2><span>{{ getCateName }}</span> Section</h2>
      <div class="content">
        <RouterLink :to="'/product/'+ product.id"  class="cont" v-if="products !== null" v-for="product in products" :key="product.id">
          <div class="image"><img :src="product.thumbnail" alt="product" loading="lazy"></div>
          <h3>{{ product.title }}</h3>
        </RouterLink >
      </div>
    </div>
  </div>
  <!-- {{ console.log(products) }} -->
</template>

<style lang="scss" scoped>
.products{
  h2{
    font-size: 30px;
    font-weight: 600;
    span{
      text-transform: capitalize;
      color: #F6635C;
    }
  }
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
      overflow: hidden;
      &:hover{
        h3{
          background: #C23373 !important;
          color: #fff !important;
        }
      }
      h3{
        font-size: 12px;
        margin-bottom: 10px;
        text-align: center;
        padding: 10px 0;
        margin-bottom: 0;
        color: #313866;
        transition: 0.3s;
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