<template>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-divider class="mt-12"></v-divider>
      <h2 center>Cadastro de Imóvel</h2>

      <v-card ref="form">
        <v-divider class="mt-6"></v-divider>
        <v-card-text>
          <v-text-field
            ref="nome"
            v-model="imoveis.nome"
            label="Nome Imóvel"
            required
          ></v-text-field>
         
          <v-text-field
            ref="cidade"
            v-model="imoveis.cidade"
            label="Cidade"
            required
          ></v-text-field>          
          
          <v-textarea
            ref="descricao"
            v-model="imoveis.descricao"
            label="Descrição"
            required
          ></v-textarea>
         
        </v-card-text>

        <v-divider class="mt-12"></v-divider>
        
        <v-card-actions>
          <v-btn 
          text
          @click="volta">
            Cancel
          </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip
              left
            >
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn
            color="primary"
            text
            @click="submit"
          >
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>

  import Imovel from  '@/services/imoveis'

  export default {

    usuarioLogado: {},

    data () {          
      return {
        imoveis: {}
      }     
    },

    mounted(){

      if (!this.$store.logado){
        this.$router.push({name: 'login'}); 
      }

      var idImovel = this.$route.params.id;       
      if (idImovel == 0){
          console.log(idImovel)
          this.imoveis = {}
      }
      else
      {
        console.log(idImovel)
        Imovel.get(idImovel).then(resposta => {
          console.log(resposta.data)
          this.imoveis = resposta.data
        })
      }        
    },

    methods:{
      submit(){
        if (this.$route.params.id == 0) {
          Imovel.create(this.imoveis)
          setTimeout(() => {            
            this.$router.push({name: 'imovelmanutencao'}); }, 500);
        }        
        else 
        {
          Imovel.update(this.$route.params.id, this.imoveis)
          setTimeout(() => {            
            this.$router.push({name: 'imovelmanutencao'}); }, 500);
        } 
      },
      volta(){
          setTimeout(() => {            
            this.$router.push({name: 'imovelmanutencao'}); }, 500);
      }
    }

  }
</script>