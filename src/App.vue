<script>
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Navbar from './components/Navbar.vue'

import './assets/style/style.css'
export default {
  name: 'App',
  components: {Navbar}
}
</script>

<template>
<div>
  <Navbar />
  <RouterView />
</div>
</template>
