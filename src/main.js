import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MasonryWall from '@yeger/vue-masonry-wall'

var app = createApp(App)

app.use(MasonryWall)
app.use(router)

app.mount('#app')