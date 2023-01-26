import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.css'
import boostrap from 'bootstrap/dist/js/bootstrap.bundle'
import axios from 'axios'
import VueAxios from 'vue-axios'
const app = createApp(App)

app.use(router, boostrap, axios, VueAxios)

app.mount('#app')
