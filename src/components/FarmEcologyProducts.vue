<script setup>
import { ref, watchEffect } from 'vue';
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
  }
]);


</script>
<template>
      <v-row class="lg:px-14 md:px-12 sm:px-6 lg:py-8 md:py-8 sm:py-10 flex text-left lg:items-center md:items-center ">
        <v-col cols="3">
          <v-sheet class="pa-3">
            <v-img src="../assets/images/ic_outline-grass.png" alt="Center Image" class="lg:w-1/4 md:w-1/4 sm:w-2/4" />
            <div class="lg:text-4xl md:text-4xl sm:text-1xl font-bold text-hColor">Farm Ecology Products</div>
          </v-sheet>
        </v-col>
        <v-col cols="3" sm="2">
          <v-sheet class="lg:pa-3 md:pa-3 sm:mt-10 lg:mt-0 md:mt-0">
            <div class="border-t-4 border-gray mx-auto"></div>
          </v-sheet>
        </v-col>
        <v-col cols="6">
          <v-sheet class="pa-3">
            Farm ecology products are a type of agricultural input that is designed to improve the health and productivity of soil and crops. They can be used to reduce the use of synthetic fertilizers and pesticides, and to improve the sustainability of agricultural production.
          </v-sheet>
        </v-col>
      </v-row>
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