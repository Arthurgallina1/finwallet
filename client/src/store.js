import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    investimentos: [],
    error: '',
    success: '',
    teste: [],
   

  },
  getters: {
    getTotal(state){
      //state.investimentos.reduce((acc, currentVal) => acc + currentVal)
      return state.investimentos.reduce((acc, val) => acc + Number(val.ValorInvestido), 0).toFixed(2) 
    },
 

  },
  mutations: {
    investimentos(state, investimentos){
      state.investimentos = investimentos;
    },
    insereInvestimento(state, investimento){
      state.investimentos.push(investimento)
      state.success = 'SUCCESS!'
      setTimeout(() => state.success = '', 3500)
    },
    gerarError(state){
      state.error = 'ERROR!'
      setTimeout(() => state.error = '', 3500)
    },
    modifyTotal(state, getters){
      //
    },
    // getGrafico(state){
    //     state.teste = []
    //     state.investimentos.map((inv) => {
    //         state.teste.push(inv.PM);
    //     })
    // }

  },
  actions: {
    async getInvestimentos({commit}){
      //let res = await axios.get('https://jsonplaceholder.typicode.com/users');
      let res = await axios.get('http://localhost:5000/api/');
      commit('investimentos', res.data)
    },
    async insertInvestimento({commit, dispatch}, investimento){
      try {
          let res = await axios.post('http://localhost:5000/api/investimentos', {
            nome: investimento.nome,
            qtd: investimento.quantidade,
            valor: investimento.valor,
            categoria: investimento.categoria
          })
          commit('insereInvestimento', investimento)
          dispatch('getInvestimentos')
      } catch(error) {
         commit('gerarError')
      }  
      
    },
    async deletaInvestimento({commit, dispatch}, investimentoSigla){
      try {
        let res = await axios.delete(`http://localhost:5000/api/investimentos/${investimentoSigla}`)
        dispatch('getInvestimentos')
      }catch {
        commit('gerarError')
      }
    },
    async savePatrimonio({commit, dispatch, state}, investimentoSigla){
      try {
        let patrimonioAtual = state.investimentos.reduce((acc, val) => acc + Number(val.ValorInvestido), 0).toFixed(2) 
        let res = await axios.delete(`http://localhost:5000/api//investimentos/historico`, {
          valor: investimentoSigla
        })
        dispatch('getInvestimentos')
      }catch {
        commit('gerarError')
      }
    },

    // getInfoGrafico({commit}){
    //   commit('getGrafico')
    // }

  },
 
})
