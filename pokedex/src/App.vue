<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'

</script>

<template>

  <Header class="header"/>

  <RouterView class="container" />

  <footer>

  </footer>

</template>

<style scoped>
  .header{
    width: 100%;
    padding: 20px;
    background-color: var(--secundary-color);
  }
  .container{
    max-width: 900px;
    margin: 0 auto;
    background-color: var(--primary-color);
  }
  main {
    margin: 0 auto;  
    min-height: 10vh;
    height: auto;
    display: flex;
    flex-direction: column;
  }
  footer {
    margin-top: auto;
  }

</style>
