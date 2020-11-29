import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/style.css'
import './registerServiceWorker'
import router from './router'
import store from './store'

import axios from 'axios'

export default axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        "Content-type": "application/json"
    }
})

axios.defaults.baseURL = 'http://localhost:3000'

createApp(App).use(store).use(router).mount('#app')
