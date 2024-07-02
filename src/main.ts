import { createApp } from "vue"
import PrimeVue from "primevue/config"
import "./style.scss"
import Aura from "./presets/aura" //import preset
import "primeicons/primeicons.css" // PrimeIcons
import App from "./App.vue"
import router from "./router"

const app = createApp(App)
app.use(PrimeVue, {
	unstyled: true,
	pt: Aura, //apply preset
})
app.use(router)
app.mount("#app")
