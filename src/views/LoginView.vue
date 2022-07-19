<template>
   <v-row justify="center">
    <v-col
      cols="12"
      sm="10"
      md="8"
      lg="6"
    >

      <v-divider class="mt-12">sfd</v-divider>

      <v-text-field
          ref="nome"
          v-model="login"
          label="Usuário"
          required
        ></v-text-field>

      <v-divider class="mt-6">sfd</v-divider>

      <v-text-field
        ref="senha"
        v-model="senha"
        label="Senha"
        type="passwor2d"
        required
      ></v-text-field>

      <div>
        <v-alert
          :value="alerta"
          color="pink"
          dark
          center
          border="top"
          transition="scale-transition"
        >
        Login ou senha errado!
          <br />
          <v-btn
              :value="alerta"
              color="primary"
              @click="erroSenha"
            >
              OK
          </v-btn>
        </v-alert>
        <div class="text-center mb-4">
          
        </div>
      </div>

      <v-btn
        block
        elevation="2"
        x-large
        @click="logar"
      >Entrar</v-btn>
      <v-divider class="mt-6">sfd</v-divider>

      

    </v-col>
  </v-row>

</template>

<script>

  import Usuario from  '@/services/usuarios'

  export default {

    login: "",
    senha: "",
    usuarioLogado: {},

    data () {
      return {
        login : "",
        senha: "",
        alerta: false, 
        usuarioLogado: {},
      }
    },

    methods:{
      erroSenha(){
        this.alerta = !this.alerta;
      },
      logar(){
        if (this.login != '' && this.senha != ''){
            Usuario.getLogin(this.login, this.senha).then(resposta => {
            if (resposta.data.length > 0){
              console.log('Seta Usuario');
              this.usuarioLogado = resposta.data[0]
              this.$store.logado = true;
              if (this.usuarioLogado.id > 0){
                console.log('Passa home');
                this.$router.push({name: 'home', params: {usuarioLogado: this.usuarioLogado}}); 

              }
            }
            else 
            {
              console.log('Senha errada');
              this.alerta = !this.alerta;
              this.login = '';
              this.senha = '';
            }
          })
          .catch(function (error) {
              console.log(error);
          });
        }
      }
    }

  }
</script>