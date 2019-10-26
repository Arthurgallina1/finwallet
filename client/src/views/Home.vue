<template>
  <div class="home">
    <Adiciona />
    <Investimento />

  </div>
</template>

<script>
import Investimento from '@/components/Investimento'
import Adiciona from '@/components/Adiciona'
export default {
  name: 'home',
  components: {
    Investimento,
    Adiciona
  }
}
</script>
