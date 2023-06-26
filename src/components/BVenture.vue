<script setup>
import { ref, watchEffect } from 'vue';
const features = ref([
{
    imageUrl: require("../assets/images/features1.png"),
    title:"The Best Animal Ingredient",
    text: "We have the best animal nutrition ingredient to all our customers around the country."
  },
  {
    imageUrl: require("../assets/images/features2.png"),
    title: "The Best Farm Equipment",
    text: "We provide the greatest farm equipment and machinery to all of our customers throughout the country."
  },
  {
    imageUrl: require("../assets/images/features3.png"),
    title: "The Best Chicken & Egg",
    text: "We have the best Poultry meat and egg production to distribute to every corner."
  }
]);


</script>
<template>
      <v-row class="px-12">
        <v-col cols="12">
          <v-sheet class="lg:p-24 md:p-24 sm:p-4 flex flex-col items-center lg:text-center md:text-center sm:text-left">
            <v-img src="../assets/images/venture.png" alt="Center Image" class="w-20" />
            <div class="text-4xl font-bold text-hColor py-4">Our Business Venture</div>
            <div class="lg:px-36 md:px-36 sm:px-6">A business venture is a new business or business activity, especially one that involves risk. Business ventures can be started by individuals, groups, or organizations. They can be small or large, and they can operate in a variety of industries.</div>
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
          <div class="p-8">
            <v-img :src="feature.imageUrl"  alt="Card Image" class="h-28"/>
            <div class="text-2xl font-bold text-hColor hover:text-black pt-10 my-4">{{ feature.title }}</div>
            <div class="text-center hover:text-pColor h-12">{{ feature.text }}</div>
          </div>
          <div class="border-t-2 border-bColor w-100"></div>
          <div class="space-x-48 my-4">
            <a href="#">Read More</a>  
            <v-icon>mdi-arrow-right</v-icon>
          </div>      
        </v-sheet>
      </v-col>
    </v-row>
</template>
<style scoped>

</style>