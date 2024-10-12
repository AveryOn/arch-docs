import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import RootView from '@/views/RootView.vue'
import { getLang, getLangForRoute } from '@/utils/storage'



const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'root',
            redirect: { name: 'main', params: { lang: getLangForRoute() } },
            children: [
                {
                    path: '/main/:lang',
                    name: 'main',
                    component: RootView,
                },

                
            ]
        },
        {
            path: '/:pathMatch(.*)*', 
            name: 'NotFound', 
            component: NotFoundView,
        }

    ]
})


router.beforeEach((to, from, next) => {
    next()
})
export default router;
