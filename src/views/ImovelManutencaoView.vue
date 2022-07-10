<template>
  <v-container fluid class="pa-8">
    Cadastro de Imoveis
    <v-row align="center">
      <v-col cols="12">
        <v-select  
          item-text="nome"
          item-value="id"
          v-model="Selected"
          :items="imoveis"
          prepend-icon="mdi-pencil"
          @click:prepend="cadastroImovel(Selected)"
          append-outer-icon="mdi-plus"
          @click:append-outer="cadastroImovel(0)"          
          single-line
          label="Selecione o imóvel ou clique no + para cadastrar"
        ></v-select>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>

  import Imovel from  '@/services/imoveis'

  export default {

    imoveis: [],
    Selected: null,

    data () {
      return {
        imoveis: [],
        Selected: null,
      }     
    },

    mounted(){
      Imovel.getAll().then(resposta => {
        console.log(resposta.data)
        this.imoveis = resposta.data
      })
    },

    methods:{
      cadastroImovel(item){
        if (item != null)
          this.$router.push({name: 'imovelCadastro', params: {id: item}}); 
      }
    }

  }
</script>