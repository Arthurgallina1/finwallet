<template>
  <div class="container" style="width: 400px">
      
    <line-chart
      v-if="loaded"
      :chartdata="chartdata"
      :options="options"/>
  </div>
</template>

<script>
import LineChart from './LineChart'
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  name: 'LineChartContainer',
  components: { LineChart },
  data: () => ({
    loaded: false,
    chartdata: null,
    options:  null,
    valores: [],
    labels: []
  }),
  computed: {
      ...mapState(['investimentos', 'teste']),
      ...mapGetters(['getTotal', 'getPrecoMedio'])
  },
  methods: {
      ...mapActions(['getInvestimentos'])
  },
  async created() {
     await this.getInvestimentos();
     this.investimentos.map((inv) => {
            this.valores.push(inv.PM);
            this.labels.push(inv.sigla)
        })
    //  this.getInfoGrafico();
   
  },
  async mounted () {
    this.loaded = false
    try {
      const id  = await fetch('https://jsonplaceholder.typicode.com/comments')
      
      this.chartdata = {
    //   labels: ['January', 'February', 'Bla', 'blu'],
      labels: this.labels,
      datasets: [
        {
          label: 'R$ Acumulado',
          backgroundColor: '#3eff11',
          data: this.valores,
        //   fill: false
        },
      ]
    },
    this.options = {
      responsive: true,
      maintainAspectRatio: true,
      fill: false,
      
    }
     
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style scoped>
/* .container {
     background-color: #05386B;
     border: 1px #05386B solid;
    border-radius: 5px;
    color: white;
    box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.75);
} */

</style>