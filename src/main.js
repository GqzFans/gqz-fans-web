import Vue from 'vue';
import App from './App';
// Router
import VueRouter from 'vue-router';
import routes from './router';
// iView
import iView from 'iview';
import 'iview/dist/styles/iview.css';
// Banner
import VueBarousel from 'vue-barousel';

Vue.use(VueRouter);
Vue.use(iView);
Vue.use(VueBarousel);

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    next();
});

router.afterEach(route => {
    iView.LoadingBar.finish();
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
