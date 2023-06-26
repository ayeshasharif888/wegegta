<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const sidebarItems = [
  { value: '/', title: 'Home', icon: 'mdi-view-dashboard' },
  { value: '/about', title: 'About', icon: 'mdi-forum' },
  { value: '/venture', title: 'Venture', icon: 'mdi-domain' },
  { value: '/products', title: 'Products', icon: 'mdi-cart' },
  { value: '/blog', title: 'Blog', icon: 'mdi-newspaper' },
  { value: '/contact', title: 'Contact', icon: 'mdi-email' },
];
</script>
<template>
  <v-main class="p-12">
    <v-app-bar app color="white" class="flex justify-between items-center p-3">
        <div class="flex-initial mr-40 ml-20">
            <v-img src="../assets/images/weblogo.png" alt="Logo" class="h-55 w-55" />
        </div> 
         
        
            <v-toolbar-items class="space-x-4">
                <v-btn
                v-for="item in sidebarItems"
                :key="item.value"
                :to="item.value"
                text
                class="text-gray-600"
                active-class="text-gray-800"
                >
                {{ item.title }}
                </v-btn>
                <div class="flex items-center space-x-2 ml-10">
                    <v-img src="../assets/images/call.png" alt="Prepended Image" class="h-6 w-6" />
                    <span class="text-gray-600">9089897878</span>
                </div>
                <div class="flex items-center ml-5">
                    <v-icon large color="black">mdi-earth</v-icon>
                </div>
                

            </v-toolbar-items>
       
    </v-app-bar>
</v-main>
</template>
  