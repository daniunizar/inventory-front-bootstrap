import axios from 'axios';
const url = import.meta.env.VITE_BACKEND_URL;

const BoardgameService = {
  getUserBoardgames(user_id) {
    return axios
      .get(url+'/api/boardgame/items/'+user_id)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        throw error;
      });
  },
  storeBoardgame(payload){
    return axios
      .post(url+'/api/boardgame/item/create', payload)
      .then(response => response.data)
      .catch(error => {
        console.error(error);
        throw error;
      });
  }
};

export default BoardgameService;
