<template>
  <v-row class="">
    <v-col cols="12" class="flex justify-center items-center my-16">
    <div><v-img src="../assets/images/cubes.png" class="h-20 w-20"></v-img></div>
    <div class="text-6xl font-extrabold text-pColor ml-8">Products</div>
    </v-col>
  </v-row>

    <v-row class="flex justify-center mt-48 mb-8">
    <v-list class="border-2 rounded-full lg:mx-48 md:mx-48 sm:mx-8 flex flex-row justify-between lg:space-x-12 md:space-x-12 sm:space-x-2">
      <v-list-item>
        <v-btn @click="selectedCategory = 'All'; currentPage = 1">All</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn @click="selectedCategory = 'Poultry'; currentPage = 1">Poultry</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn @click="selectedCategory = 'Dairy'; currentPage = 1">Dairy</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn @click="selectedCategory = 'Farm'; currentPage = 1">Farm</v-btn>
      </v-list-item>
      <v-list-item>
        <v-btn @click="selectedCategory = 'New'; currentPage = 1">New</v-btn>
      </v-list-item>
    </v-list>
  </v-row>
  <v-item-group multiple>
    <v-container>
      <v-row>
        <v-col v-for="(item, index) in filteredItems" :key="index" cols="12" md="4">
          <v-item v-slot="{ isSelected, toggle }">
            <v-card @click="toggle" class="">
              <div class="relative">
                <v-img :src="item.src"></v-img>
                <div class="absolute bottom-0 left-0 right-0 flex items-center justify-center">
                  <v-btn color="white">{{ item.text }}</v-btn>
                </div>
              </div>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
  
  <v-row class="flex justify-center my-4">
    <v-pagination
      v-model="currentPage"
      :length="totalPages"
      :total-visible="5"
      prev-icon="mdi-chevron-left"
      next-icon="mdi-chevron-right"
      @input="changePage"
    ></v-pagination>
  </v-row>
</template>

<script setup>
import { ref, computed } from 'vue';

const itemsPerPage = 6;

const items = [
  {
    src: require("../assets/images/it1.png"),
    text: "Coffee Farm.",
    category: "Farm",
  },
  {
    src: require("../assets/images/it2.png"),
    text: "Fishery",
    category: "Farm",
  },
  {
    src: require("../assets/images/it3.png"),
    text: "Egg",
    category: "Poultry",
  },
  {
    src: require("../assets/images/it3.png"),
    text: "Egg",
    category: "New",
  },
  {
    src: require("../assets/images/it2.png"),
    text: "Fishery",
    category: "Farm",
  },
  {
    src: require("../assets/images/it1.png"),
    text: "Coffee Farm",
    category: "Dairy",
  },
  {
    src: require("../assets/images/it1.png"),
    text: "Coffee Farm.",
    category: "Farm",
  },
  {
    src: require("../assets/images/it2.png"),
    text: "Fishery",
    category: "Farm",
  },
  {
    src: require("../assets/images/it3.png"),
    text: "Egg",
    category: "Poultry",
  },
  {
    src: require("../assets/images/it3.png"),
    text: "Egg",
    category: "New",
  },
  {
    src: require("../assets/images/it2.png"),
    text: "Fishery",
    category: "Farm",
  },
  {
    src: require("../assets/images/it1.png"),
    text: "Coffee Farm",
    category: "Dairy",
  },
  {
    src: require("../assets/images/it3.png"),
    text: "Egg",
    category: "New",
  },
  {
    src: require("../assets/images/it2.png"),
    text: "Fishery",
    category: "Farm",
  },
  {
    src: require("../assets/images/it1.png"),
    text: "Coffee Farm",
    category: "Dairy",
  },
  
];

const selectedCategory = ref("All");
const currentPage = ref(1);

// Filtered items based on the selected category and current page
const filteredItems = computed(() => {
  let filtered = items;
  if (selectedCategory.value !== "All") {
    filtered = filtered.filter(item => item.category === selectedCategory.value);
  }
  
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  return filtered.slice(startIndex, startIndex + itemsPerPage);
});

// Total number of pages
const totalPages = computed(() => {
  let filtered = items;
  if (selectedCategory.value !== "All") {
    filtered = filtered.filter(item => item.category === selectedCategory.value);
  }
  
  return Math.ceil(filtered.length / itemsPerPage);
});

// Change current page
function changePage(page) {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
}
</script>

