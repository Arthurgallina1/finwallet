<template>
  <div class="adiconar text-center mt-3">
      <h1>Minha Carteira</h1>
      <div class="alert alert-danger" v-if="error"><strong>ERROR AO ADICIONAR!</strong></div>
      <div class="alert alert-success" v-if="success"><strong>Investimento adicionado com sucesso!</strong> </div>
       <button class="add" @click="toggle()">{{ btnText }}</button>
      <transition name="fade">
        <div class="inputs" v-if="mostrar">    
                <form  @submit.prevent="insereInvestimento"  autocomplete="off" >
                    
                    <input type="text" name="sigla" v-model="investimento.nome" class="form" placeholder="Nome Ação">   
                    <input type="text" v-model="investimento.valor" class="form" placeholder="Valor">                   
                    <input type="text" v-model="investimento.quantidade" class="form" placeholder="Quantidade"> 
                     <select class="form" v-model="investimento.categoria" name="" id="">
                        <option disabled value="">Escolha uma opção</option>
                        <option>Ações</option>
                        <option>CDB</option>
                        <option>FIIs</option>
                        <option>Bitcoin</option>
                    </select>
                    <button>Adicionar</button>
                </form>
            </div>
        </transition > 
        <hr>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Adiciona',
  data() {
      return {
          investimento: {},
          mostrar: false,
          btnText: '+',
      }
  },
  computed: {
      ...mapState(['error', 'success']),
    
  },
  methods: {
      ...mapActions(['insertInvestimento']),
      insereInvestimento(){
          this.insertInvestimento(this.investimento)
          this.investimento = {}
      },
      toggle(){
            this.mostrar = !this.mostrar;
            this.btnText = (this.mostrar) ? '-' : '+';        
        }
  },
};
</script>

<style scoped>
    .form{
        padding: 5px;
        margin: 10px;
        border-radius: 4px;
        box-shadow: none;
        
    }
    .adicionar {
        text-align: center;
    }
    .form {
        background-color: #05386Bee;
        border: 1px solid #05386Bee;
        color: white;
        height: 30px;
        width: 185px;
    }
    input, select {
        padding: 10px;
        margin: 2.5px;
    }
    hr {
        display: block; 
        height: 1px;
        border: 0; border-top: 1px solid #05386Bee;
        margin: 1em 10px; padding: 0; 
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .55s linear;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }   
    button {
        margin-top: 10px;
        margin-bottom: 10px;
        margin-left: 15px;
        padding: 10px 18px;
        background: #05386Bee;
        color: white;
        border-radius: 30px;
        border: none;
    }

    .alert {
        /* border: #05386Bee 1px solid;  */
        background-color: #05386Bee;
        color: #00d312;
    }
    .alert-danger{
        color: red;
    }
    
</style>