<template>
    <Header></Header>
    <main class="container">
        <h1>Registrar nuevo juego</h1>
        <form class="row g-3">
            <div class="col-md-12">
                <label for="label" class="form-label">Nombre del juego</label>
                <input type="text" class="form-control" id="label" name="label">
            </div>
            <div class="col-md-6">
                <label for="publisher" class="form-label">Editorial</label>
                <input type="text" class="form-control" id="publisher" name="publisher">
            </div>
            <div class="col-auto">
                <label for="min_players" class="form-label">Número mínimo de jugadores</label>
                <input type="number" class="form-control" id="min_players" min=1>
            </div>
            <div class="col-auto">
                <label for="max_players" class="form-label">Número máximo de jugadores</label>
                <input type="number" class="form-control" id="max_players" min=1>
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Descripción</label>
                <textarea class="form-control" id="description" name="description" rows="3"></textarea>
            </div>
            <div class="col-12">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck">
                <label class="form-check-label" for="gridCheck">
                    En propiedad
                </label>
                </div>
            </div>
            <div class="col-12">
                <button type="submit" class="btn btn-secondary" @click.prevent="storeBoardgame">Registrar</button>
            </div>
        </form>
    </main>
    <Footer></Footer>
</template>

<script>
import Header from "@/components/partials/Header.vue";
import Footer from "@/components/partials/Footer.vue";
import BoardGameService from "@/services/BoardgameService.js";
export default{
    setup() {
        
    },
    data(){
        return {

        };
    },
    components: {
        Header,
        Footer,
        BoardGameService,
    },
    methods:{
        async storeBoardgame(){
            try{
                console.log("Click en register");
                const payload = {
                    'label':"sample",
                    'description':'sample',
                    'min_players':1,
                    'max_players':1,
                    'publisher':"sample"
                }
                await BoardGameService.storeBoardgame(payload)
                .then(response => {
                    if(response.status == true){
                        this.$router.push({name: 'boardgame.items'});
                    }else{
                        alert("Algo ha fallado");
                    }
                });
            }catch(error){
                console.log(error);
            }
        }
    }

}
</script>
