<script>
import axios from 'axios'
import Loading from '../components/Loading.vue'
import ProductSlider from '../components/ProductSlider.vue';
import Swal from 'sweetalert2'
export default {
  name: 'DetailedProduct',
  data() {
    return {
      items: null,
      products: null,
      productId: null,
      productCount: 1,
      showPopUp : false
    };
  },
  computed: {
    getProductId() {
      return this.$route.params.id 
    },
    getFullPrice() {
      return this.items.price * Number(this.productCount)
    }
  },
  methods: {
    async fetchData(ProductId) {
      await axios.get(`https://dummyjson.com/products/${ProductId}`).then((res) => {
        return this.items = res.data;
      });
    },
    async fetchProductsData() {
      await axios.get(`https://dummyjson.com/products?limit=10&skip=${this.getProductId}`).then((res) => {
        return this.products = res.data.products
      });
    },
    buyProduct() {
      return this.showPopUp = false ,
      Swal.fire({
        icon: 'success',
        text: 'Order will be deivered within 3 days',
        showConfirmButton : false
      })
    }
  },
  watch: {
    getProductId(oldVal , newVal){
      if (oldVal !== newVal) {
        window.location.reload()
      }
    }
  },
  created() {
    this.fetchData(this.getProductId), this.fetchProductsData()
  },
  components: { Loading, ProductSlider }
}
</script>

<template>
  <Loading v-if="items === null"/>
  <div class="popup" v-if="showPopUp === true">
    <div class="close"><button @click="showPopUp = false">X</button></div>
    <div class="image"><div class="badge bg-warning">{{ items.rating }}</div><img :src="items.thumbnail" alt="product image" loading="lazy"></div>
    <div class="text">
      <h4>{{ items.title }}</h4>
      <div class="buttons">
        <button :disabled="productCount === 5 ? 'disabled' : null" @click="productCount++">+</button>
        <span>{{ productCount }}</span>
        <button  :disabled="productCount === 1 ? 'disabled' : null" @click="productCount--">-</button>
      </div>
      <h5>Total : {{ getFullPrice }}</h5>
      <button @click="buyProduct">Buy</button>
    </div>
  </div>
  <div class="product"  v-if="items !== null" :style="showPopUp === true ? 'filter: blur(5px)' : ''">
    <div class="container">
      <div class="content">
        <div class="image">
          <ProductSlider :images=JSON.stringify(items.images) />
        </div>
        <div class="text">
          <div class="title">
            <h3>{{ items.title }}</h3>
            <div class="badges">
              <div class="badge bg-success">{{ items.category }}</div>
            </div>
          </div>
          <p>{{ items.description }}</p>
          <h4>Price : <span>{{ items.price }}$</span></h4>
          <h5>Rating : <span>{{ items.rating }}</span></h5>
          <h5>Brand : <span>{{ items.brand }}</span></h5>
          <h6>Stock : <span>{{ items.stock }}</span></h6>
          <div class="buttons">
            <button @click="showPopUp = true">Purchase</button>
            <button><routerLink to="/">Back To Home</routerLink></button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="recommendedProducts" v-if="items !== null & products !== null" :style="showPopUp === true ? 'filter: blur(5px)' : ''">
    <div class="container">
      <hr>
      <h4>Recommended Products</h4>
      <div class="content">
        <RouterLink :to="'/product/'+ product.id" class="cont" v-for="product in products" :key="product.id">
          <div class="image"><img :src="product.thumbnail" alt="product-image" loading="lazy"></div>
          <h3>{{ product.title }}</h3>
        </RouterLink>
      </div>
    </div>
  </div>
  <!-- {{ console.log(items) }} -->
</template>

<style lang="scss" scoped>
.popup{
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50% , -50%);
  z-index: 99;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  background: #461959;
  color: #fff;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 0 5px #2f111e;
  overflow-y: scroll;
  max-height: 700px;

  .close{
    position: absolute;
    right: 10px;
    top: 10px;
    color: #461959;
    font-size: 20px;
    z-index: 9;
    button{
      padding: 5px 8px;
      transition: 0.3s;
      background: #313866;
      color: #fff;
      border: 1px solid;
      &:hover{
        background-color: transparent;
        border: 1px solid #313866;
      }
    }
  }
  @media (max-width : 500px){
    flex-direction: column;
  }
  .image{
    width: 100%;
    position: relative;
    img{
      object-fit: contain;
    }
    .badge{
      position: absolute;
      left: 10px;
      top: 10px;
      font-size: 14px;
    }
  }
  .text{
    padding: 10px;
    h4{
      font-size: 25px;
      margin-bottom: 20px; 
      text-transform: capitalize;
    }
    .buttons{
      display: flex;
      flex-direction: row;
      gap: 8px;
      align-items: center;
      margin-bottom: 10px;
      button{
        width: 60px;
        padding: 5px;
        font-size: 25px;
      }
    }
    h5{
      margin-bottom: 20px;
      font-size: 25px;
      text-transform: capitalize;
      + button{
        width: 100%;
        padding: 10px;
        background-color: #C23373;
        border: none;
        color: #fff;
        border-radius: 5px;
        &:hover{
          background-color: #fff;
          color: #F11A7B;
        }
      }
    }
    @media (max-width : 500px){
      h4{
        font-size: 20px;
      }
    }
  }
}
.product{
  .content{
    display: grid;
    grid-template-columns: 0.8fr 1.2fr;
    gap: 20px;
    padding: 10px 0;
    @media (max-width : 991px) {
      grid-template-columns: repeat(1 , 1fr);
      gap: 40px;
    }
    .text{
      .title{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 15px;
        margin-bottom: 30px;
        h3{
          font-size: 40px;
        }
        .badges{
          display: flex;
          flex-direction: row;
          gap: 20px;
          .badge{
            font-size: 25px;
            text-transform: uppercase;
          }
        }
        @media (max-width : 500px) {
          h3{
            font-size: 21px;
          }
          .badge{
            font-size: 16px !important;
          }
        }
      }
      h4{
        margin-bottom: 30px;
        font-size: 30px;
        span{
          color: #F11A7B;
        }
      }
      h5{
        margin-bottom: 30px;
        font-size: 25px;
        span{
          color: #F11A7B;
        }
      }
      p{
        font-size: 20px;
        margin-bottom: 30px;
      }
      h6{
        margin-bottom: 30px;
        font-size: 25px;
        span{
          color: #F11A7B;
        }
      }
      @media (max-width : 500px) {
          h4 , h5 ,h6{
            font-size: 21px;
          }
          p{
            font-size: 14px;
          }
        }
      .buttons{
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 300px;
        button{
          height: 50px;
          border: none;
          background: #461959;
          color: #fff;
          border-radius: 5px;
          position: relative;
          overflow: hidden;
          z-index: 2;
          &::after{
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 0%;
            height: 100%;
            background: #F11A7B;
            z-index: -1;
            transition: 0.6s;
          }
          &:hover{
            &::after{
              width: 100%;
            }
          }
        }
      }
    }
    // .image{

    // }
  }
}
hr{
  margin: 60px 0 !important;
}
.recommendedProducts{
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