<script setup lang="ts">
import footerContent from '../components/footer/footerContent.vue';
import toggleLang from '../components/aside/toggleLang.vue';
import { useDataStore } from '../stores/dataStore';
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

const dataStore = useDataStore();
const route = useRoute();

function toggleDarkMode() {
    const element = document.querySelector('html');
    if(element) {
        element.classList.toggle('theme-dark');
    }
}

onBeforeMount(() => {
    if(route.params.lang === 'en')  {
        console.log('Загружен английский язык')
    }
})

</script>


<template>
    <header>example / example <button @click="toggleDarkMode">Click</button></header>
    <aside>
        <h1 class="aside-top-title">{{ dataStore.contentRoot.ui.header['top-title'] }}</h1>
        <toggleLang class="mt-auto"/>
    </aside>
    <main>
        <RouterView />
        <footer>
            <footerContent />
        </footer>
    </main>
</template>


<style scoped>
header {
    width: var(--header-width);
    height: var(--header-heigth);
    grid-area: header;
    background-color: var(--header-bg);
    color: var(--header-text-fg);
    font-size: var(--header-font-size);
    padding: 10px;
}

aside {
    display: flex;
    padding: 1rem 6px;
    flex-direction: column;
    align-items: center;
    width: var(--aside-width);
    height: var(--aside-height);
    grid-area: aside;
    background-color: #f4f4f4;
    background-color: var(--colorful-bg);
    border-right: 1px solid var(--aside-border-color);
}
.aside-top-title {
    font-family: var(--font);
    color: var(--aside-top-fg);
}

main {
    grid-area: main;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--main-bg);
    overflow: auto;
}

footer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    width: var(--footer-width);
    height: var(--footer-heigth);
    width: 100%;
    background-color: var(--colorful-bg);
    padding: 10px;
}
</style>