<template>
  <v-container fluid class="pa-8">
    Cadastro de Usuário
    <v-row align="center">
      <v-col cols="12">
        <v-select   
          item-text="nome"
          item-value="id"
          v-model="devSelected"
          :items="usuarios"
          prepend-icon="mdi-pencil"
          @click:prepend="cadastroUsuario(devSelected)"
          append-outer-icon="mdi-plus"
          @click:append-outer="cadastroUsuario(0)"          
          single-line
          label="Selecione o usuário ou clique no + para cadastrar"
        ></v-select>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>

  import Usuario from  '@/services/usuarios'

  export default {

    usuarios: [],
    devSelected: null,
    usuarioLogado: {},

    data () {
      return {
        usuarios: [],
        devSelected: null,
      }     
    },

    mounted(){
      if (!this.$store.logado){
        this.$router.push({name: 'login'}); 
      }

      Usuario.getAll().then(resposta => {
        console.log(resposta.data)
        this.usuarios = resposta.data
      })
    },

    methods:{
      cadastroUsuario(item){
        if (item != null)
          this.$router.push({name: 'usuarioCadastro', params: {id: item}}); 
      }
    }

  }
</script>