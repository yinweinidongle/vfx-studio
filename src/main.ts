import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import '@fontsource/instrument-sans/400.css'
import '@fontsource/instrument-sans/600.css'
import '@fontsource/syne/700.css'
import '@fontsource/syne/800.css'
import './styles/studio.css'

createApp(App).use(router).mount('#app')
