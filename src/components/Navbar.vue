<script>
export default {
  name: 'Navbar',
  
}
</script>

<template>
  <div class="navigate">
    <div class="container">
      <div class="content">
        <div class="left">
          <h5>Dummy Store</h5>
        </div>
        <ul>
          <li><routerLink to="/" title="Home">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
              <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
              <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
            </svg>  
          </routerLink></li>
          <li><routerLink to="/categeory" title="Categories">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bounding-box" viewBox="0 0 16 16">
              <path d="M5 2V0H0v5h2v6H0v5h5v-2h6v2h5v-5h-2V5h2V0h-5v2H5zm6 1v2h2v6h-2v2H5v-2H3V5h2V3h6zm1-2h3v3h-3V1zm3 11v3h-3v-3h3zM4 15H1v-3h3v3zM1 4V1h3v3H1z"/>
            </svg>  
          </routerLink></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.navigate{
  .content{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    ul{
      display: flex;
      flex-direction: row;
      gap:40px;
      align-items: center;
    }
  }
}
</style>