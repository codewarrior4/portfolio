import { createApp } from 'vue/dist/vue.esm-bundler'; 
import './bootstrap'
import '../../public/assets/js/jquery-3.6.4.js'
// import '../../public/assets/js/bootstrap' 
import { createRouter, createWebHistory } from 'vue-router';
import '../../public/assets/js/main.js' 
import Routes from './routes'


const app = createApp([])

const router = createRouter({
    routes: Routes,
    history:createWebHistory()
})

app.use(router)
app.mount('#app')

