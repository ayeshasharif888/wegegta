<template>
  <v-app>
    <Header />
    <div>
      <router-view />
    </div>
    <Footer />
  </v-app>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>

<style>
/* Add any custom styles here */
</style>
