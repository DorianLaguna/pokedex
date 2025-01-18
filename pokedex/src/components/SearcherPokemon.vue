
<script setup>
    import { ref } from 'vue'

    const formData = ref({
        search: ''
    })
</script>

<template>
    <div>
        Search your pokemon
        <form >
            <div>
                <label for="name">Nombre:</label>
                <input type="text" id="name" v-model="formData.search" required />
            </div>
        </form>
    </div>

</template>

<style scoped>
    
</style>