<template>
<div class="flex flex-col min-h-screen">
  <Header/>
  <main class="flex-1 p-4">
    <h2 class="text-2xl font-medium mb-2">En construcción</h2>
    <button @click="goto('home')" class="bg-blue-500 border hover:bg-blue-300 text-white mt-2 p-2">Volver</button>
  </main>
  <Footer></Footer>
</div>

</template>

<script>
import { useSessionStore } from "@/stores/session-store";
import Header from "../../partials/Header.vue"
import Footer from '../../partials/Footer.vue';
export default {
  components:{
    Header,
    Footer,
  },
  setup() {
    const sessionStore = useSessionStore();
      return {
        sessionStore,
      }
  },
  methods:{
    goto(code) {
      console.log("Has clicado");
      try{
        switch (code) {
          case 'home':
            this.$router.push({ name: 'home' });
            break;      
          default:
            break;
        }
      }catch(error){
        console.log(error);
      }
    }
  },
}
</script>

