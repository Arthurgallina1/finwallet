<template>
  <div class="metricas text-center mt-3">
    <h1>Metricas da carteira</h1>
    <Grafico />
  </div>
</template>

<script>
import Grafico from '../components/Grafico'
export default {
  name: 'metricas',
  components: {
    Grafico
  }
};
</script>

<style scoped>


</style>
