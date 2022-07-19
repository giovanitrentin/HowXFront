<template>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-divider class="mt-12"></v-divider>
      <h2 center>Cadastro de Objetos do Imóvel</h2>

      <v-card ref="form">
        <v-divider class="mt-12"></v-divider>
          <v-card-text>
            <v-select  
              item-text="nome"
              item-value="id"
              v-model="objetos.idImovel"
              :items="imoveis"
              single-line
              label="Selecione o imóvel"
            ></v-select>
      
            <v-text-field
              ref="nome"
              v-model="objetos.nome"
              label="Nome do objeto"
              required
            ></v-text-field>
          
            <v-text-field
              ref="quantidade"
              v-model="objetos.quantidade"
              label="Quantidade"
              required
            ></v-text-field>

            <v-textarea
              ref="descricao"
              v-model="objetos.descricao"
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

  import Objeto from  '@/services/objetos'
  import Imovel from  '@/services/imoveis'

  export default {

    usuarioLogado: {},

    data () {          
      return {
        objetos: {},
        imoveis: []
      }     
    },

    mounted(){
      if (!this.$store.logado){
        this.$router.push({name: 'login'}); 
      }

      var idObjeto = this.$route.params.id;
      if (idObjeto == 0){
          console.log(idObjeto)
          this.objetos = {}
      }        
      else{
        console.log(idObjeto)
        Objeto.get(idObjeto).then(resposta => {
          console.log(resposta.data)
          this.objetos = resposta.data
        })
      }
      Imovel.getAll().then(resposta => {
        console.log(resposta.data)
        this.imoveis = resposta.data
      })
    },

    methods:{
      submit(){
        if (this.$route.params.id == 0) {
          Objeto.create(this.objetos)
          setTimeout(() => {            
            this.$router.push({name: 'objetomanutencao'}); }, 1000);
        }        
        else {
          Objeto.update(this.$route.params.id, this.objetos)
          setTimeout(() => {            
            this.$router.push({name: 'objetomanutencao'}); }, 1000);
        } 
      },
      volta(){
          setTimeout(() => {            
            this.$router.push({name: 'objetomanutencao'}); }, 1000);
      }
    }

  }
</script>