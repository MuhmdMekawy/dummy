<script>
export default {
  name: 'DetailedProduct',
  data() {
    return {
      
    }
  },
  computed: {
    getProductId() {
      return this.$route.params.id
    }
  }
}
</script>

<template>
  <div>
    <h1>Welcome in {{ getProductId }} Page</h1>
  </div>
</template>

<style lang="scss" scoped>

</style>