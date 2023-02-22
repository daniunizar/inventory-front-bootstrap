<template>
  <div>
    <Header />
    <main class="container mt-5">
      <h1 class="text-center mb-5">Mi Ludoteca</h1>
       <div class="d-flex justify-content-between">
        <router-link :to="{name: 'boardgame.item.store'}" class="btn btn-primary">Registrar nuevo juego en mi colección</router-link>
        <router-link to="/" class="btn btn-secondary">Volver</router-link>
      </div>
      <table class="table table-bordered table-striped mt-5">
        <thead>
          <tr>
            <th>Nombre del juego</th>
            <th>Mínimo de jugadores</th>
            <th>Máximo de jugadores</th>
            <th>Editorial</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="boardgame in boardgames" :key="boardgame.id">
            <td>{{ boardgame.label }}</td>
            <td>{{ boardgame.min_players }}</td>
            <td>{{ boardgame.max_players }}</td>
            <td>{{ boardgame.editorial }}</td>
            <td>
              <router-link :to="{ name: 'detalle-juego', params: { id: juego.id } }">
                <i class="fas fa-eye"></i>
              </router-link>
              <button class="btn btn-danger" @click="deleteBoardgame(boardgame.id)">
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
    <Footer />
  </div>
</template>

<script>
  console.log("Unicorns!");
import Header from '@/components/partials/Header.vue';
import Footer from '@/components/partials/Footer.vue';
import BoardgameService from '@/services/BoardgameService';
import { useSessionStore } from "@/stores/session-store";

export default {
  name: 'JuegosDeMesa',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      boardgames: []
    };
  },
  created() {
    const { state } = useSessionStore();
console.log("Estado del usuario");
    // Obtener los juegos de la base de datos y asignarlos a la variable boardgames
console.log(state);
    BoardgameService.getUserBoardgames(1)
      .then(boardgames => {
        this.boardgames = boardgames;
      })
      .catch(error => {
        console.error(error);
      });
  },
  methods: {
    deleteBoardgame(id) {
      // Lógica para eliminar el juego de la base de datos
    }
  }
};
</script>

<style>
  .tabla {
    margin-top: 1rem;
  }
  .tabla thead tr th {
    background-color: #343a40;
    color: #ffffff;
    font-weight: bold;
    text-align: center;
  }
  .tabla tbody tr td {
    text-align: center;
  }
  .tabla tbody tr td button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }
  .tabla tbody tr td .fa-eye {
    color: #495057;
  }
  .tabla tbody tr td .fa-trash {
    color: #dc3545;
  }
  .btn-volver,
  .btn-nuevo {
    margin-top: 1rem;
  }
</style>