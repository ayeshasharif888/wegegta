// File: app.js

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Venture from './views/Venture.vue';
import Products from './views/Products.vue';
import Blog from './views/Blog.vue';
import Contact from './views/Contact.vue';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import './assets/tailwind.css';
import VueScrollTo from 'vue-scrollto';
loadFonts();

const routes = [
  { path: '/', component: Home, meta: { breadcrumb: 'Home' } },
  { path: '/about', component: About, meta: { breadcrumb: 'About' } },
  { path: '/venture', component: Venture, meta: { breadcrumb: 'Venture' } },
  { path: '/products', component: Products, meta: { breadcrumb: 'Products' } },
  { path: '/blog', component: Blog, meta: { breadcrumb: 'Blog' } },
  { path: '/contact', component: Contact, meta: { breadcrumb: 'Contact' } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .use(vuetify)
  .use(VueScrollTo, {
    duration: 800, // Duration of the scroll animation in milliseconds
    easing: 'ease', // Easing function to use for the scroll animation
  })
  .mount('#app');
