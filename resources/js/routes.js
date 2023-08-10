import Home from '../js/components/Home.vue'
import About from '../js/components/About.vue'
import Contact from '../js/components/Contact.vue'
import Service from '../js/components/Service.vue'
import Works from '../js/components/Works.vue'

export default[
    {
        path: '/',
        name:'home',
        component : Home,
    },
    {
        path: '/about',
        name:'about',
        component : About,
    },
    {
        path: '/contact',
        name:'contact',
        component : Contact,
    },
    {
        path: '/works',
        name:'works',
        component : Works,
    },
    {
        path: '/service',
        name:'service',
        component : Service,
    },

]