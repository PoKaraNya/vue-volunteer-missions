import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import App from './App.vue'
import router from './router'
import { ToastService } from 'primevue';
import { createI18n } from 'vue-i18n';
import { messages } from '@/localization';

const i18n = createI18n({
  locale: "ua",
  fallbackLocale: "en",
  messages
})

const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(ToastService);

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')
