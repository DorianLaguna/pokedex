<script setup>

</script>

<template>
    <header class="header">
        <div class="titulo">
            POKEDEX
        </div>
        <nav>
            <a href="My profile">My profile</a>
        </nav>
    </header>
</template>

<style scoped>
    .titulo{
        font-size: var(--font-medium);
        color: var(--primary-color);
        font-weight: 800;
    }
    .header{
        background-color: var(--secondary-color);
    }
    @media (min-width: 768px){
        .header{
            display: flex;
            justify-content: space-between;
        }
    }
</style>