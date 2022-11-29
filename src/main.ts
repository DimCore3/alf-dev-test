import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import components from './components/UI/components'

const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component);
});
app.mount('#app')
