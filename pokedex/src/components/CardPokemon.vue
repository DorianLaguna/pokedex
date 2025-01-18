<script setup>
import { defineProps } from 'vue';
console.log("asdf")
const props = defineProps({
    pokemon: Object
})


</script>

<template>
    <div class="container">
        <h3 id="name">
            {{ pokemon.name }}
        </h3>
        <img :src="pokemon.image" :alt="pokemon.name">
    </div>
</template>

<style scoped>
    #name{
        text-align: center;
        text-transform: capitalize;
    }
    .container{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

</style>