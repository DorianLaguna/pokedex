import { ref, computed, onMounted } from 'vue'
import { defineStore } from 'pinia'
import APIService from '@/services/APIService'

export const usePokemonStore = defineStore('pokemon', () => {
  const pokemonActual = ref({})
  const listadoPokemonActual = ref([]);

  const limit = ref(8);
  const offset = ref(1)

  onMounted(async function(){
      try {
        const requests = [];
        for (let i = 0; i < limit.value; i++) {
            const id = offset.value + i // Ajustar el offset para cada solicitud
            requests.push(APIService.getPokemon(id));  // Petición con limit=1 y un offset distinto
        }
        // Esperar a que todas las promesas se resuelvan
        const responses = await Promise.all(requests);

        // Mapear las respuestas y extraer los resultados
        const allPokemons = responses.map(response => {
            return {
                name: response.data.name,
                image: response.data.sprites.front_default ?? response.data.front_shiny,
                stats: response.data.stats,
                types: response.data.types,
                height: response.data.height,
                weight: response.data.weight
            }
        })
        listadoPokemonActual.value = allPokemons;

    } catch (error) {
        console.error("Error al obtener los pokemones:", error);
    }
      
  })



  return { 
    listadoPokemonActual,
    pokemonActual
   }
})
