import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'

//Pinia : une mini base de données côté front qui sert à centraliser :
// L’état de connexion d’un utilisateur (connecté ou non, rôle, token, etc.)
    // Un panier d’achat dans un e-commerce
    // Des préférences utilisateur (thème clair/sombre, langue, etc.)
    // Des données partagées (liste de produits, missions, notifications, etc.)

createApp(App).use(router).use(createPinia()).mount('#app')
