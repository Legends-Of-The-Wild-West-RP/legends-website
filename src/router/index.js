import { createRouter, createWebHashHistory  } from 'vue-router'
import Home from '../pages/LandingPage.vue'
import ServerGuide from '../pages/ServerGuide.vue';
import RulesPage from '../pages/RulesPage.vue';


const router = createRouter({
    history: createWebHashHistory('/legends-website/'),
    routes: [
        { path: '/', name: "Home", component: Home },
        { path: '/server-guide', name: "ServerGuide", component: ServerGuide },
        { path: '/rules', name: "RulesPage", component: RulesPage }
    ]
})

export default router;