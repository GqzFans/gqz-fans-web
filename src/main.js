import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import routes from './router';
Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes
});

const components = [
];

components.map(component => {
    Vue.component(component.name, component);
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
