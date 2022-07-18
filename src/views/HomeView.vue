<template>
   <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >

    <v-divider class="mt-12">sfd</v-divider>

    <v-btn
      block
      elevation="2"
      @click="abreImovel"
      x-large
    >Imóveis</v-btn>

    <v-divider class="mt-6">sfd</v-divider>

    <v-btn
      block
      elevation="2"
      x-large
      @click="abreObjeto"
    >Objetos</v-btn>

    <v-divider class="mt-16">sfd</v-divider>
    <v-divider class="mt-16">sfd</v-divider>
    <v-divider class="mt-16">sfd</v-divider>

    <v-btn
      block
      elevation="2"
      x-large
      @click="abreUsuario"
    >Usuários</v-btn>
    <v-divider class="mt-6">sfd</v-divider>

    <v-btn
      block
      elevation="2"
      x-large
      @click="sair"
    >Sair</v-btn>

    </v-col>
  </v-row>
</template>

<script>
  export default {

    usuarioLogado: {},

    data () {
      return {
      }     
    },

    mounted(){
      if (!this.$store.logado){
        this.$router.push({name: 'login'}); 
      }
    },

    methods:{
      abreImovel(){
        this.$router.push({name: 'imovelmanutencao'}); 
      },
      abreObjeto(){
        this.$router.push({name: 'objetomanutencao'}); 
      },
      abreUsuario(){
        this.$router.push({name: 'usuariomanutencao'}); 
      },
      sair(){
        this.$store.logado = false;
        this.$router.push({name: 'login'}); 
      }
    }

  }
</script>