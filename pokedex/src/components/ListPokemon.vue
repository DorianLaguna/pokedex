
<script setup>
    import CardPokemon from '@/components/CardPokemon.vue'
    import { usePokemonStore } from '@/stores/pokemon';

    const pokemonStore = usePokemonStore();

</script>

<template>
    <div class="container-grid">
        <CardPokemon 
            class="card"
            v-for="pokemon in pokemonStore.listadoPokemonActual"
            :key="pokemon.name"
            :pokemon="pokemon"
            />
    </div>
</template>

<style scoped>
    .container-grid {
        background-color: var(--secondary-color);    
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 16px;
        padding: 16px;
        max-width: 100%;
    }
    .card{
        /* background-color: red; */
        border-radius: 0 0 5px 5px;
    }
    .card:hover{
        background-color: var(--secondary-color);    
        scale: 1.2;
        border: 2px;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
        transition: 0.4s;
    }

    @media (max-width: 768px) {
    .container-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    }

    @media (max-width: 480px) {
    .container-grid {
        grid-template-columns: 1fr;
    }
    }
</style>