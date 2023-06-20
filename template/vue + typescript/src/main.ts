import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router/router"
import { createPinia } from "pinia"
// 创建根存储库并将其传递给应用程序

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount("#app")
