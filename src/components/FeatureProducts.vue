<script setup>
import { ref, watchEffect } from 'vue';
const features = ref([
{
    imageUrl: require("../assets/images/Rectangle11.png"),
    title:"Meat",
    text: "We have the best abattoir and meat, and we send high-quality meat right to your house."
  },
  {
    imageUrl: require("../assets/images/Rectangle12.png"),
    title: "Chicken",
    text: "We have the greatest chicken meat and will deliver it to your house."
  },
  {
    imageUrl: require("../assets/images/Rectangle13.png"),
    title: "Animal Feed",
    text: "We have the greatest animal nutrition ingredients for a variety of livestock & poultry."
  }
]);


</script>
<template>
    <div class="py-12">
        <v-row class="px-12">
            <v-col cols="12">
            <v-sheet class="lg:p-24 md:p-24 sm:p-4 flex flex-col items-center lg:text-center md:text-center sm:text-left">
                <v-img src="../assets/images/cubes.png" alt="Center Image" class="w-20" />
                <div class="text-4xl font-bold text-hColor py-4">Featured Products</div>
                <div class="lg:px-36 md:px-36 sm:px-6">We have produced and manufactured a lot of products under different venture and sectors. Here are the a few products below.</div>
            </v-sheet>
            </v-col>
        </v-row>
        <v-row class="px-12" no-gutters>
        <v-col
            v-for="(feature, index) in features"
            :key="index"
            cols="12"
            lg="4"
            md="4"
            sm="12"
        >
            <v-sheet class="m-5 hover:bg-sColor flex flex-col text-center border-2 border-bColor">
            <div class="p-10">
                <v-img :src="feature.imageUrl"  alt="Card Image" class="h-100"/>
                <div class="text-2xl font-bold text-hColor hover:text-black pt-10 my-4">{{ feature.title }}</div>
                <div class="text-center hover:text-pColor h-12">{{ feature.text }}</div>
            </div>     
            </v-sheet>
        </v-col>
        </v-row>
    </div>  
</template>
<style scoped>

</style>