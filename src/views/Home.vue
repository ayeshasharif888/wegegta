<script setup>
import ValueAndMission from '../components/ValueAndMission.vue';
import FarmEcologyProducts from '../components/FarmEcologyProducts.vue';
import BVenture from '../components/BVenture.vue'
import NewsLetter from '@/components/NewsLetter.vue';
import FeatureProducts from '@/components/FeatureProducts.vue';
import QuoteCarousel from '@/components/QuoteCarousel.vue'
import BlogInsights from '@/components/BlogInsights.vue'



</script>
<template>
  <v-img src="../assets/images/hero-pic.png" alt="Banner Image" class="relative">
    <div class="absolute inset-0 flex-initial items-center justify-center">
      <v-img src="../assets/images/shape1.png" alt="Center Image" class="w-2/4" />
    </div>
  </v-img>
  <farm-ecology-products />
  <value-and-mission />
  <BVenture/>
  <NewsLetter/>
  <FeatureProducts/>
  <QuoteCarousel/>
  <BlogInsights/>
  
</template>

  
  