import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MasonryWall from '@yeger/vue-masonry-wall'
import AOS from 'aos'
import 'aos/dist/aos.css'

var app = createApp(App)

app.use(AOS)
app.use(MasonryWall)
app.use(router)

app.mount('#app')