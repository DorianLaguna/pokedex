import apiPokemon from "@/lib/axios";

export default {
    getListPokemons(limit, offset){
        return apiPokemon(`pokemon?limit=${limit}&offset=${offset}`);
    },
    getPokemon(id){
        return apiPokemon(`pokemon/${id}`)
    }
}