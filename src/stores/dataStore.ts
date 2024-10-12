
import { contentENG, uiENG } from "@/data/content.en";
import { contentRUS, uiRUS } from "@/data/content.ru";
import type { ContentMain } from "@/types/data.types";
import { defineStore } from "pinia";
import { reactive, type Reactive } from "vue";
import { useMainStore } from "./mainStore";

export const useDataStore = defineStore('dataState', () => {
    const store = useMainStore();

    const contentTree = reactive<Reactive<ContentMain>>({
        "en-EN": {
            content: contentENG,
            ui: uiENG,
        },
        "ru-RU": {
            content: contentRUS,
            ui: uiRUS,
        }
    })

    return {
        contentRoot: contentTree[store.lang],
    }
})