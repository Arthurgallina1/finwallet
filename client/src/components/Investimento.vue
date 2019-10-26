<template>
  <div class="investimentos">
     <div class="container-fluid">
         <div class="d-flex row justify-content-center flex-wrap align-content-start">          
              <div class="investimento-info col-6 col-sm-6 col-md-5 col-lg-3" v-for="inv in investimentos" :key="inv.Nome">
                  <div class="row">
                      <div class="col-8 col-sm-8 col-md-8 col-lg-10">{{ inv.sigla }} </div>
                      <div class="col-2 text-right"><button @click="deletaInvestimento(inv.sigla)" class="remove">X</button></div>
                  </div>
                  <div class="row">
                      <div class="col-7">Quantidade<br> {{ inv.TotalQtd }}</div>
                      <div class="col-5">Preço Médio<br>R$ {{ inv.PM }}</div>                 
                  </div>
           
                  <div class="row">
                      <div class="col-7">Investido<br>R$ {{ inv.ValorInvestido }}</div>
                      <div class="col-5">Saldo Bruto<br><a href=""></a></div>
                  </div>
              </div>       
         </div>
         <div class="row justify-content-center">
             <div class="col-4">
                  <div class="investimento-info text-center" v-if="getTotal != 0">
                      Patrimônio investido <br> R$  {{ getTotal }} <br>
                      Patrimônio atual <br> R$  X <br>
                      Balanço <br> R$  X <br> +x% <br> 
                    </div>
             </div>
            
         </div>
         
         
     </div>    
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
export default {
  name: 'Investimento',
  data() {
      return {
          total: '',
      }
  },
  computed: {
      ...mapState(['investimentos']),
      ...mapGetters(['getTotal']),
      
  },
  methods: {
      ...mapActions(['getInvestimentos', 'deletaInvestimento']),
      async salvaPatrimonio(){
        
      }
      
     

  },
  async created() {
      await this.getInvestimentos();

    
    //  this.total = this.investimentos.reduce((acc, val) => acc + Number(val.ValorInvestido), 0)
      
  },

  mounted() {
     

  }
};
</script>

<style scoped>
.investimentos {
      background: linear-gradient(to bottom right, rgb(255, 123, 0), rgb(255, 120, 58));
  background-size: cover;
}
.container {
    margin: 10px;
}
.investimento-info {
    background-color: #05386B;
   
    color: white;
    box-shadow: 0px 3px 10px -1px rgba(0,0,0,0.75);
    margin: 5px;
    padding: 10px;
    border: 1px #05386B solid;
    border-radius: 5px;
}


.investimento-info:hover{
    background-color: rgb(0, 88, 177);
    border: 1px rgb(0, 88, 177) solid;
}

.remove {
  background: transparent;
  color: rgb(255, 123, 0);
  font-weight: bold;
  font-size: 1.05rem;
  border: none;
  transition: all 0.5s ease-in-out;
}
</style>
