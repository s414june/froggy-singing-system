import "./style.scss"
import { createApp } from "vue"
import PrimeVue from "primevue/config"
import App from "./App.vue"
import router from "./router"
import "primeicons/primeicons.css" // PrimeIcons

const app = createApp(App)

app.use(PrimeVue)
app.use(router)
app.mount("#app")
