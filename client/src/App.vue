<template>
  <div id="app">
   
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/metricas">metricas</router-link>
    </div> -->
    <TheNavBar/>
    <router-view/>
  </div>
</template>

<script>
import TheNavBar from './components/TheNavBar'

export default {
    components: {
      TheNavBar
    }
}
</script>
<style>
@font-face{
    font-family: "Roboto Mono";
    src: url("./fonts/RobotoMono-Thin.ttf");
}
* {
    font-family: 'Roboto Mono', monospace;
    font-weight: bold;
    box-sizing: border-box;
    font-size: 14px;
    margin: 0;
    padding: 0;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  height: 100vh;
  color: #ffffff;
  background: #0F2027;  /* fallback for old browsers */
  background: linear-gradient(to bottom right, rgb(255, 123, 0), rgb(255, 120, 58));
  background-size: cover;
}

.pagina-enter , .pagina-leave-active {
    opacity: 0;
}

.pagina-enter-active, .pagina-leave-active {
    transition: opacity 0.4s;
}
#nav a.router-link-exact-active {
  color: #42b983;
}



@media screen and (max-width: 1228px)  {
    * {
      font-size: 13px;
    }
    
  
}
</style>
