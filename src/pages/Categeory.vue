<script>
import axios from 'axios'
import Loading from '../components/Loading.vue'

export default {
  name: 'Categeory',
  data() {
    return {
      products: null,
      activePagination : '1'
    }
  },
  components : {Loading},
  methods: {
    async fetchData(skip) {
      window.scrollTo(0,0)
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
  <Loading v-if="products === null"/>
  <div class="category-page" v-if="products !== null">
    <div class="container">
      <div class="content">
        <RouterLink :to="'/product/'+ product.id" class="cont" data-aos='zoom-in' data-aos-easing='ease-out-cubic' data-aos-duration='1000' v-for="product in products" :key="product.id">
          <div class="image"><img :src="product.thumbnail" alt="product" loading="lazy"></div>
          <h3>{{ product.title }}</h3>
          <h4 class="badge bg-danger">{{ product.category }}</h4>
        </RouterLink >
      </div>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li :class="'page-item '+ (activePagination === '1' ? 'active' : '')" @click="fetchData(0), activePagination ='1'"><p class="page-link">1</p></li>
          <li :class="'page-item '+ (activePagination === '2' ? 'active' : '')" @click="fetchData(1) ,activePagination ='2'"><p class="page-link">2</p></li>
          <li :class="'page-item '+ (activePagination === '3' ? 'active' : '')" @click="fetchData(2), activePagination ='3'"><p class="page-link">3</p></li>
          <li :class="'page-item '+ (activePagination === '4' ? 'active' : '')" @click="fetchData(3), activePagination ='4'"><p class="page-link">4</p></li>
        </ul>
      </nav>
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
    .pagination{
      justify-content: center;
      margin: 20px 0;
      .page-item{
        .page-link{
          cursor: pointer;
          user-select: none;
          transition: 0.3s;
          &:hover{
            background: #313866 !important;
            color: #fff !important;
          }
        }
      }
    }
  }
</style>