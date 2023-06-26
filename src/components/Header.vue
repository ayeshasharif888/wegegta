<script setup>
import { ref, watchEffect } from 'vue';
import SideBar from './SideBar.vue';
import Menu from './Menu.vue';

const isMobile = ref(false);

watchEffect(() => {
  const mobileQuery = window.matchMedia('(max-width: 767px)');
  isMobile.value = mobileQuery.matches;

  const handleResize = () => {
    isMobile.value = mobileQuery.matches;
  };

  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
});
</script>
<template>
    <header>
        <div v-if="isMobile">
            <SideBar />
        </div>  
        <div v-else> 
            <Menu />
        </div>
    </header>
</template>

