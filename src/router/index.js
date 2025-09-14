import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('../views/NotFound.vue'),
        },
        {
            path: '/',
            name: 'home',
            component: () => import('../views/accueil/Home.vue'),
            meta: { title: 'Clean Connect - Connexion'}
        },
        {
            path: '/signUp',
            name: 'signUp',
            component: () => import('../views/accueil/signUp.vue'),
            meta: {title: 'Clean Connect - Inscription'}
        },
        //PRO
        {
            path: '/homePro',
            name: 'homePro',
            component: () => import('../views/pro/HomePro.vue'),
            meta: {title: 'Clean Connect - Accueil Pro'}
        },
        //PARTICULIER
        {
            path: '/homePart',
            name: 'homePart',
            component: () => import('../views/particulier/HomePart.vue'),
            meta: {title: 'Clean Connect - Accueil Particulier'}
        },
        //LEGAL
        {
            path: '/howItWorks',
            name: 'howItWorks',
            component: () => import('../views/legal/howItWorks.vue'),
            meta: {title: 'Clean Connect - Comment ça marche'}
        },
    ]
})

//Hook de mise à jour du meta name
router.afterEach((to) => {
    if (to.meta && to.meta.title){
        document.title = to.meta.title
    }else {
        document.title = 'Clean Connect'
    }
})

export default router;