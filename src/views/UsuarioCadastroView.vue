<template>
  <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >
      <v-divider class="mt-12"></v-divider>
      <h2 center>Cadastro de Usuário</h2>

      <v-card ref="form">
        <v-divider class="mt-6"></v-divider>
        <v-card-text>
          <v-text-field
            ref="nome"
            v-model="usuarios.nome"
            label="Nome completo"
            required
          ></v-text-field>
         
          <v-text-field
            ref="login"
            v-model="usuarios.login"
            label="Login"
            required
          ></v-text-field>

          <v-text-field
            ref="senha"
            v-model="usuarios.senha"
            label="Senha"
            required
          ></v-text-field>
          
          <v-text-field
            ref="cell"
            v-model="usuarios.cell"
            label="Celular"
            required
          ></v-text-field>
         
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

  import Usuario from  '@/services/usuarios'

  export default {

    data () {          
      return {
        usuarios: {}
      }     
    },

    mounted(){
      var idUsuario = this.$route.params.id;
      if (idUsuario == 0){
          console.log(idUsuario)
          this.usuarios = {}
      }        
      else{
        console.log(idUsuario)
        Usuario.get(idUsuario).then(resposta => {
          console.log(resposta.data)
          this.usuarios = resposta.data
        })
      }        
    },

    methods:{
      submit(){
        if (this.$route.params.id == 0) {
          Usuario.create(this.usuarios)
          this.$router.push({name: 'usuariomanutencao'}); 
        }        
        else {
          Usuario.update(this.$route.params.id, this.usuarios)
          this.$router.push({name: 'usuariomanutencao'}); 
        } 
      },
      volta(){
        this.$router.push({name: 'usuariomanutencao'}); 
      }
    }

  }
</script>