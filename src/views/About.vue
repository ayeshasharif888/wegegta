<script setup>
import OurMission from "@/components/OurMission.vue";
import OurCompanyValues from "@/components/OurCompanyValues.vue";
import { ref, watchEffect } from 'vue';
import ProfessionalWorkingTeam from "@/components/ProfessionalWorkingTeam.vue";


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
  <div v-if="isMobile" class="bg-pColor relative px-10 pt-10 text-white space-y-3">
    <v-img src="../assets/images/ic_outline-grass-white.png" alt="Center Image" class="w-20" color="white" />
            <div class="text-4xl font-bold  py-4">About Us</div>
            <div class="pb-10">At Wegegta, we are passionate about agriculture and the role it plays in our food system. We believe that everyone deserves access to fresh, healthy food, and we are committed to providing our customers with the highest-quality products possible.<br><br>We are a family-owned and operated business that has been in operation for the past years. We are committed to sustainable agriculture practices, and we use only the most natural methods to grow our crops. We also raise our own animals, and we believe that humanely-raised meat and poultry is the best way to ensure that our customers are getting the healthiest possible food. </div>
      <v-img class="" src="../assets/images/circularpics.png"/>
  </div>
    <v-row class="flex align-center text-white" v-else>
      <v-col lg="7" md="7" sm="12" class="bg-pColor py-16 pr-20 relative">
        <v-icon class="absolute right-20 top-2/3 rounded-full border-2 p-4 border-white transform -translate-y-1/2">
          mdi-arrow-down
        </v-icon>
          <v-sheet class="px-20 bg-transparent">
            <v-img src="../assets/images/ic_outline-grass-white.png" alt="Center Image" class="w-20" color="white" />
            <div class="text-4xl font-bold  py-4">About Us</div>
            <div>At Wegegta, we are passionate about agriculture and the role it plays in our food system. We believe that everyone deserves access to fresh, healthy food, and we are committed to providing our customers with the highest-quality products possible.<br><br>We are a family-owned and operated business that has been in operation for the past years. We are committed to sustainable agriculture practices, and we use only the most natural methods to grow our crops. We also raise our own animals, and we believe that humanely-raised meat and poultry is the best way to ensure that our customers are getting the healthiest possible food. </div>
          </v-sheet>
        </v-col>
        <v-col lg="5" md="5" sm="12">
          <v-sheet>
            <v-img src="../assets/images/aboutlogo.png" alt="Center Image" class="h-98 -ml-10" />
          </v-sheet>
        </v-col>
      </v-row>
      <OurMission/>
      <OurCompanyValues/>
      <ProfessionalWorkingTeam/>
</template>
  
  

   