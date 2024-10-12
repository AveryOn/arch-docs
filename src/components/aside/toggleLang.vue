<script setup lang="ts">
import { useDataStore } from '@/stores/dataStore';

const dataStore = useDataStore();

</script>

<template>
    <span class="aside-toggle-lang">
        <span class="lang lang-en">{{ dataStore.contentRoot.ui.aside['toggle-lang']['lang-en'] }}</span> | 
        <span class="lang lang-ru">{{ dataStore.contentRoot.ui.aside['toggle-lang']['lang-ru'] }}</span> 
    </span>
</template>

<style scoped>
.aside-toggle-lang {
    font-family: var(--font);
    color: var(--aside-toggle-lang-fg);
}
.lang {
    color: var(--aside-toggle-lang-fg);
    cursor: pointer;
}
.lang:hover {
    color: var(--aside-toggle-lang-hover-fg);
}
</style>