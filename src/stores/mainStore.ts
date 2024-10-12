
import type { Lang } from "@/types/data.types";
import { defineStore } from "pinia";
import { ref, type Ref } from "vue";

export const useMainStore = defineStore('mainState', () => {

    const lang: Ref<Lang> = ref('en-EN');

    function setLang(inputLang: Lang) {
        try {
            localStorage.setItem('lang', inputLang);
            inputLang
            return lang.value = inputLang;
        } catch (err) {
            console.error('store/mainStore:setLang => ', err);
            throw err;
        }
    }

    return {
        lang,
    }
})