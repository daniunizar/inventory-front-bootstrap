<template>
<Header></Header>
  <div class="container">
    <form class="d-flex flex-column align-items-center py-5">
      <div class="form-group">
        <label for="email">Correo Electrónico</label>
        <input type="email" class="form-control" id="email" v-model="email">
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" class="form-control" id="password" v-model="password">
      </div>
      <button type="submit" class="btn btn-primary mt-3" @click.prevent="submitForm">Iniciar Sesión</button>
      <a href="#" class="mt-3" @click.prevent="showForgotPasswordModal">¿Has olvidado tu contraseña?</a>
    </form>
  </div>
  <Footer></Footer>
</template>

<script>
import { useSessionStore } from "@/stores/session-store";
import AuthService from "@/services/AuthService.js";
import Header from '@/components/partials/Header.vue';
import Footer from '@/components/partials/Footer.vue';
export default {
  components: { Header, Footer },
  setup() {
    const sessionStore = useSessionStore();
      return {
        sessionStore,
      }
  },
  data(){
    return {
      email: "",
      password: "",
    }
  },
  props: {
    token: {
      type: String,
      default: null,
    },
  },
  methods:{
    async submitForm() {
        // Start LOGIN
        try {
          const credentials = {
            email: this.email,
            password: this.password
          };

          await AuthService.login(credentials).then(loginResponse => {
            // Get user and token info from login response
            const user = loginResponse.user;
            const token = loginResponse.token;
            // Update a new state
            this.sessionStore.login(token);
            this.sessionStore.setUser(user);
            // Redirect
            this.$router.push({name: 'home'});
          });
        }
        catch (error) {
          console.log(error);
          console.log("ERROR al hacer login");
        }
      },
      showForgotPasswordModal() {
      // Código para mostrar el modal de "Olvidé mi contraseña"
      console.log("He olvidado mi passowrd");
    }
  }
}
</script>

