<template>
<Header></Header>
  <section>
    <div class="container">
      <h2 class="text-center my-5">Nuestros servicios</h2>
      <div class="row">
        <div class="col-md-4 mb-5">
          <div class="card">
            <img src="@/assets/images/books.jpg" class="card-img-top" alt="Mi biblioteca">
            <div class="card-body">
              <h5 class="card-title">Mi biblioteca</h5>
              <p class="card-text">Organiza y controla tus libros de manera eficiente. Mantén un registro de tus lecturas, calificaciones y reseñas, y accede a ellas desde cualquier lugar.</p>
              <router-link :to="{ name: 'book.items' }" class="btn btn-primary">Acceder</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-5">
          <div class="card">
            <img src="@/assets/images/board_games.jpg" class="card-img-top" alt="Mi ludoteca">
            <div class="card-body">
              <h5 class="card-title">Mi ludoteca</h5>
              <p class="card-text">Lleva un control de tus juegos de mesa y asegúrate de tener siempre una noche de diversión planificada. Comparte tu colección con amigos y familiares y descubre nuevos juegos</p>
              <router-link :to="{ name: 'boardgame.items' }" class="btn btn-primary">Acceder</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-5">
          <div class="card">
            <img src="@/assets/images/recipes.jpg" class="card-img-top" alt="Mi recetario">
            <div class="card-body">
              <h5 class="card-title">Mi recetario</h5>
              <p class="card-text">Crea y guarda tus recetas favoritas en un solo lugar. Encuentra nuevas ideas de cocina, califica tus recetas y compártelas con amigos y familiares. Ahorra tiempo y nunca más olvides un ingrediente importante.</p>
              <router-link :to="{ name: 'recipe.items' }" class="btn btn-primary">Acceder</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <Footer></Footer>
</template>

<script>
import { useSessionStore } from "@/stores/session-store";
import Header from '../components/partials/Header.vue';
import Footer from '../components/partials/Footer.vue';

export default {
  components: { Header, Footer },
  setup() {
    const sessionStore = useSessionStore();
      return {
        sessionStore,
      }
  },
  methods:{
  },
}
</script>

