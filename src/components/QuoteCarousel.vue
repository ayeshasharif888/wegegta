<script setup>

const items = [
    {
        src: require("../assets/images/carouselimg.png"),
        text: "I would highly recommend Wegegta to any farmer who is looking to improve their operation. They can provide you with the resources and expertise you need to succeed in today's competitive agricultural market."
    },
    {
        src: require("../assets/images/carouselimg.png"),
        text: "I would highly recommend Wegegta to any farmer who is looking to improve their operation. They can provide you with the resources and expertise you need to succeed in today's competitive agricultural market."
    },
    {
        src: require("../assets/images/carouselimg.png"),
        text: "I would highly recommend Wegegta to any farmer who is looking to improve their operation. They can provide you with the resources and expertise you need to succeed in today's competitive agricultural market."
    },
    {
        src: require("../assets/images/carouselimg.png"),
        text: "I would highly recommend Wegegta to any farmer who is looking to improve their operation. They can provide you with the resources and expertise you need to succeed in today's competitive agricultural market."
    },
];
</script>

<template>
    <div class="lg:p-36 md:p-36 sm:p-16 relative">
        <div class="absolute inset-x-0 bottom-0 bg-pColor h-1/2"></div>
        <v-carousel hide-delimiters>     
            <template v-slot:prev="{ props }">
            <v-icon
            variant="elevated"
                color="grey"
                class="lg:ml-24 md:ml-24 sm:ml-14 border-2 border-gray lg:px-8 md:px-8 sm:px-6 lg:py-4 md:py-4 sm:py-6 bg-white"
                @click="props.onClick" >mdi-arrow-left</v-icon>
            </template>
            <template v-slot:next="{ props }">
            <v-icon
            variant="elevated"
                color="grey"
                class="lg:mr-24 md:mr-24 sm:mr-14 border-2 border-gray lg:px-8 md:px-8 sm:px-6 lg:py-4 md:py-4 sm:py-6 bg-white"
                @click="props.onClick">mdi-arrow-right</v-icon>
            </template>
            <v-carousel-item v-for="(item, i) in items" :key="i" cover :src="item.src">
                <div class="relative">
                    <div class="absolute lg:inset-36 md:inset-36 sm:inset-24">
                        <div class="lg:p-16 md:p-16 sm:p-8 bg-white relative">
                            <v-img class="absolute bottom-0 left-0 h-12" src="../assets/images/commas.png"></v-img>
                            <div class="text-xl font-bold">{{ item.text }}</div>
                        </div>
                    </div>
                </div>
            </v-carousel-item>
        </v-carousel> 
    </div>
</template>
