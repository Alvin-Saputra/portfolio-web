import { createApp } from 'vue'
import App from './App.vue'

// 1. Impor Vuetify dan stylenya
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// 2. Impor style untuk ikon Material Design
import '@mdi/font/css/materialdesignicons.css'
import { Icon } from "@iconify/vue";

// 3. Buat instance Vuetify
const vuetify = createVuetify({
  components,
  directives,
})

// 4. Gunakan Vuetify di aplikasi Anda
const app = createApp(App)
app.use(vuetify) // Ini baris yang paling penting
app.mount('#app')