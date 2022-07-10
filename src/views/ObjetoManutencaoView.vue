<template>
  <v-container fluid class="pa-8">
    Cadastro de Objeto
    <v-row align="center">
      <v-col cols="12">
        <v-select  
          item-text="nome"
          item-value="id"
          v-model="SelectedObjeto"
          :items="objetos"
          prepend-icon="mdi-pencil"
          @click:prepend="cadastroObjeto(SelectedObjeto)"
          append-outer-icon="mdi-plus"
          @click:append-outer="cadastroObjeto(0)"
          single-line
          label="Selecione o usuário ou clique no + para cadastrar"
        ></v-select>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>

  import Objeto from  '@/services/objetos'

  export default {

    objetos: [],
    SelectedObjeto: null,

    data () {
      return {
        objetos: [],
        SelectedObjeto: null,
      }     
    },

    mounted(){
      Objeto.getAll().then(resposta => {
        console.log(resposta.data)
        this.objetos = resposta.data
      })
    },

    methods:{
      cadastroObjeto(SelectedObjeto){
        if (SelectedObjeto != null)
          this.$router.push({name: 'objetoCadastro', params: {id: SelectedObjeto} }); 
      },
    },

  }
</script>