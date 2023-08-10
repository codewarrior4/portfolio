import { createApp } from 'vue';
import './bootstrap';
import { createRouter } from 'vue-router';
import Routes from './routes'


const app = createApp([])

const router = createRouter({
    routes: Routes,
    history:createWebHistory()
})

app.use(router)
app.mount('#app')