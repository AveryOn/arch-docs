<script setup lang="ts">
import { useDataStore } from '@/stores/dataStore';
import { onMounted } from 'vue';

const dataStore = useDataStore();
onMounted(() => {
    
})
</script>

<template >
    <div class="footer-content">
        <span class="flex gap-2">
            <i class="pi pi-youtube" style="color: red"></i>
            <a class="footer-ps" href="https://www.youtube.com/@koduryem" target="_blank" >
                {{ dataStore.contentRoot.ui.footer['ps'] }}
                <span class="channel-name ml-1">{{ dataStore.contentRoot.ui.footer['channel-name'] }}</span>
            </a>
        </span>
        <p class="footer-copyright">{{ dataStore.contentRoot.ui.footer['copyright'] }}</p>
    </div>
</template>

<style scoped>
.footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--footer-fg);
    font-size: var(--footer-font-size);
}
.footer-ps {
    color: var(--footer-fg);
    transition: color 0.2s !important;
}
.footer-ps:hover {
    color: var(--footer-hover-fg);
    transition: color 0.2s !important;
}
.channel-name {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
}

</style>