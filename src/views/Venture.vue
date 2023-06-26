<script setup>
import { ref, watchEffect } from 'vue';
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
const cards = ref([
  {
    imageUrl: require("../assets/images/cow.png"),
    text: "Abattoir & Milk"
  },
  {
    imageUrl: require("../assets/images/chicken.png"),
    text: "Poultry feed"
  },
  {
    imageUrl: require("../assets/images/fish.png"),
    text: "Fishery"
  },
  {
    imageUrl: require("../assets/images/house.png"),
    text: "Safe Storage"
  },
  {
    imageUrl: require("../assets/images/cow.png"),
    text: "Abattoir & Milk"
  },
  {
    imageUrl: require("../assets/images/chicken.png"),
    text: "Poultry feed"
  },
  {
    imageUrl: require("../assets/images/fish.png"),
    text: "Fishery"
  },
  {
    imageUrl: require("../assets/images/house.png"),
    text: "Safe Storage"
  }
]);
</script>
<template>
    <div v-if="isMobile" class="bg-pColor relative px-10 pt-10 text-white space-y-3">
    <v-img src="../assets/images/ic_outline-grass-white.png" alt="Center Image" class="w-20" color="white" />
            <div class="text-4xl font-bold  py-4">Business Ventures</div>
            <div class="pb-10">An agri-business venture is a business that is involved in the production, processing, or distribution of agricultural products. Agri-business ventures can range in size from small family farms to large multinational corporations.<br><br>
Agri-business ventures play an important role in the global economy. They provide food and fiber for the world's population, and they support millions of jobs. Agri-business ventures are also important contributors to economic development in rural areas.</div>
      <v-img class="" src="../assets/images/circularpics.png"/>
  </div>
  <div v-else class="bg-pColor relative px-20 pt-12 text-white space-y-3">
    <v-row>
      <v-col cols="6" class="relative pr-28">
        <v-icon class="absolute right-20 top-2/3 rounded-full border-2 p-4 border-white transform -translate-y-1/2">
          mdi-arrow-down
        </v-icon>
        <v-img src="../assets/images/ic_outline-grass-white.png" alt="Center Image" class="w-20" color="white" />
            <div class="text-4xl font-bold  py-4">Business Ventures</div>
            <div class="pb-10">An agri-business venture is a business that is involved in the production, processing, or distribution of agricultural products. Agri-business ventures can range in size from small family farms to large multinational corporations.<br><br>
Agri-business ventures play an important role in the global economy. They provide food and fiber for the world's population, and they support millions of jobs. Agri-business ventures are also important contributors to economic development in rural areas.</div>
      
      </v-col>
      <v-col cols="6">
        <v-img class="" src="../assets/images/circularpics.png"/>
      </v-col>
      
    </v-row>
   
  </div>
  <v-row class="px-12 py-6" no-gutters>
      <v-col
        v-for="(card, index) in cards"
        :key="index"
        sm="6"
        md="3"
        lg="3"
      >
        <v-sheet class="ml-10 mr-10 mt-4 mb-4 pa-2 bg-bgcColor hover:bg-sColor py-14">
            <v-img :src="card.imageUrl"  alt="Card Image" class="h-20"/>
          <div class="text-center pt-10 hover:text-pColor">{{ card.text }}</div>
        </v-sheet>
      </v-col>
    </v-row>
</template>

  