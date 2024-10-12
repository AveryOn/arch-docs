<script setup>
import { getLangForRoute } from '@/utils/storage';
import { onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

onBeforeMount(() => {
    const pathMatch = route.params.pathMatch;
    if(pathMatch[0] === 'main' && !pathMatch[1]) {
        router.push({ name: 'main', params: { lang: getLangForRoute() } })
    }
})

</script>

<template>
    <h1>NOT FOUND</h1>
</template>

<style scoped>
    
</style>