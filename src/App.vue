<script setup lang="ts">
</script>


<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<style scoped>
.app {
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-areas: 
        "aside header"
        "aside main"
        "aside main"
    ;
    grid-template-columns: var(--aside-width) 1fr;
    grid-template-rows: auto 1fr auto;
}

</style>