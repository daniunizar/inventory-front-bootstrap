<template>
  <div class="bg-gray-900 min-h-screen">
    <header class="bg-gray-800 p-6 text-white text-center">Header</header>
    <main class="flex items-center justify-center">
      <form class="bg-white p-6 rounded-lg shadow-md w-full md:w-3/4 lg:w-1/2">
        <input v-model="user_name" class="block my-4 p-2 rounded-lg border border-gray-400 w-full" type="text" placeholder="Nombre de Usuario" />
        <input v-model="email" class="block my-4 p-2 rounded-lg border border-gray-400 w-full" type="email" placeholder="Email" />
        <input v-model="password" class="block my-4 p-2 rounded-lg border border-gray-400 w-full" type="password" placeholder="Contraseña" />
        <input v-model="password_confirmation" class="block my-4 p-2 rounded-lg border border-gray-400 w-full" type="password" placeholder="Repite la contraseña" />
        <button @click.prevent="register" class="block my-4 p-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900">Registrarme</button>
      </form>
      <div class="mt-4 text-center">
        <a class="text-gray-600 hover:text-gray-800" href="#">Ya tengo una cuenta</a>
      </div>
    </main>
    <footer class="bg-gray-800 p-6 text-white text-center">Footer</footer>
  </div>
</template>

<script>
import { useSessionStore } from "@/stores/session-store";
import AuthService from "@/services/AuthService.js";

export default {
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
      password_confirmation: "",
      user_name: "",
    }
  },
  props: {
    token: {
      type: String,
      default: null,
    },
  },
  methods:{
    async register() {
        // Start REGISTER
        try {
          const credentials = {
            email: this.email,
            password: this.password,
            password_confirmation: this.password_confirmation,
            user_name: this.user_name
          };

          await AuthService.register(credentials).then(registerResponse => {
            if(registerResponse.status == true){
              // Redirect
              this.$router.push({name: 'login'});
            }else{
              alert("Algo ha fallado");
            }
          });
        }
        catch (error) {
          console.log(error);
          console.log("ERROR al register nuevo usuario");
        }
      },
  }
}
</script>

