<script>
export default {
  name : 'NotFound'
}
</script>

<template>
  <div class="image">
    <img src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png" alt="image" loading=" lazy">
    <RouterLink to="/"><button>Back to Home</button></RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.image{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #d84c7e;
  a{
    position: fixed;
    left: 50%;
    top: 35%;
    transform: translate(-50% , -50%);
  }
  button{
    padding: 15px 25px;
    border: none;
    color: #d84c7e;
    border: 1px solid;
    &:hover{
      border: 1px solid #fff;
      color: #fff;
      background: #d84c7e;
    }
  }
  img{
    object-fit: contain;
  }
}
</style>