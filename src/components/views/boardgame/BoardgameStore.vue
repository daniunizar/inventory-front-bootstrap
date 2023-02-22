<template>
  <div>
    <Header />
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h1>Buscador de juegos de mesa</h1>
            <div class="input-group mb-3">
              <input type="text" class="form-control" placeholder="Buscar juego" v-model="query" @keyup.enter="searchGames">
              <button class="btn btn-primary" type="button" @click="searchGames">Buscar</button>
            </div>
          </div>
        </div>
        <div class="row">
          <div v-for="(game, index) in games" :key="index" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <div class="card">
              <img :src="game.image_url" class="card-img-top" alt="Game cover image">
              <div class="card-body">
                <h5 class="card-title">{{ game.name }}</h5>
                <button class="btn btn-primary" @click="selectGame(game.id, game.name)">Seleccionar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Footer />
  </div>
</template>

<script>
  console.log("Unicorns!");
import Header from '@/components/partials/Header.vue';
import Footer from '@/components/partials/Footer.vue';
import BoardgameService from '@/services/BoardgameService';
import { useSessionStore } from "@/stores/session-store";
import axios from 'axios';

export default {
  name: 'NewBoardgame',
  components: {
    Header,
    Footer
  },
  data() {
    return {
      boardgames: [],
      games: [],
      // client_id : import.meta.env.BOARD_GAME_ATLAS_CLIENT_ID,
      client_id : "F7crcvmptI",
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
    searchGames() {
      axios.get(`https://api.boardgameatlas.com/api/search?name=${this.query}&client_id=${this.client_id}`)
        .then(response => {
          this.games = response.data.games;
        })
        .catch(error => {
          console.log(error);
        });
    },
    selectGame(id, name) {
      // Aquí podrías enviar una request al backend con los datos del juego seleccionado
      console.log(`Juego seleccionado: ID=${id}, Nombre=${name}`);
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