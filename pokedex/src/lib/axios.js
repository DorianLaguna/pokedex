import axios from "axios";

const url_pokemon = 'https://pokeapi.co/api/v2/'

const apiPokemon = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export default apiPokemon;