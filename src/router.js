import vueRouter from 'vue-router'

import App from './App'
import Portada from './components/Portada'
import Recientes from './components/Recientes'
import Autor from './components/Autor'
import Perfil from './components/Perfil'
import NuevaResena from './components/NuevaResena'
import Resena from './components/Resena'
import Home from './components/Home'
import Coleccion from './components/Coleccion'
import Somos from './components/Somos'

const router = new vueRouter({
    mode: 'history',
    base: __dirname,

    routes: [
        {
            path: '/',
            name: "root",
            component: App
        },
        {
            path: '/home',
            name: "home",
            component: Home
        },
        {
            path: '/login',
            name: "login",
            component: Autor
        },       
        {
            path: 'autor/perfil/:username',
            name: "perfil",
            component: Perfil
        },        
        {
            path: '/resena/:id',
            name: "resena",
            component: Resena
        },
        {
            path: '/new',
            name: "new",
            component: NuevaResena
        },
        {
            path: '/recientes',
            name: "recientes",
            component: Recientes
        },
        {
            path: '/coleccion',
            name: "coleccion",
            component: Coleccion
        },     
        {
            path: '/somos',
            name: "somos",
            component: Somos
        }                                                
    ]

});

export default router;

