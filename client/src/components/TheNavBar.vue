<template>
  <nav>
      <span class="logo">FinWallet</span>
      <ul>
          <li>
              <router-link to="/" class="nav-link"><a>Minha carteira</a></router-link>
          </li>
          <li>
                <router-link to="/metricas" class="nav-link"><a>Métricas</a></router-link>
          </li>
      </ul>
  </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #05386Bee;
}

ul{
    display: flex;
    justify-content: center;
    margin-right: 25px;

}
li {
    list-style-type: none;
     padding: 10px 10px 5px 10px;
    color: white;
    
    
}
li a{
        color: white;
        text-decoration: none !important;

}
li:hover{
        background-color: rgb(0, 88, 177);
        text-decoration: none !important;

}
.logo {
  letter-spacing: .45rem;
  margin: 0 0 0 1.25em;
  text-decoration: none;
}
</style>