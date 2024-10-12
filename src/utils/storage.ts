import type { Lang } from "@/types/data.types";

export const langNames: any = {
    'en-EN': 'en',
    'ru-RU': 'ru',
}

export function getLang(): Lang {
    try {
        const result = localStorage.getItem('lang');
        if(result) return result as Lang;
        else {
            localStorage.setItem('lang', 'en-EN' as Lang);
            return 'en-EN';
        }
    } catch (err) {
        console.error('utils/storage:getLang => ', err);
        throw err;
    }
}

export function getLangForRoute() {
    return langNames[getLang()];
}