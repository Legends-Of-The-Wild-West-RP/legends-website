import { createRouter, createWebHashHistory  } from 'vue-router'
import Home from '../pages/LandingPage.vue'


const router = createRouter({
    history: createWebHashHistory('/legends-website/'),
    routes: [
        { path: '/', name: "Home", component: Home }
    ]
})

export default router;