<script setup>

const items = [
    {
        src: require("../assets/images/blog1.png"),
        date: "Feb 09, 2023",
        title: "Wegegta Fishery & Ethiopia market",
        text: "The fishery and Ethiopian market is a growing industry. Ethiopia has a large population and a growing economy, which is creating a demand for fish. The country also has a number of natural resources that are conducive to fish production, such as rivers, lakes, and reservoirs."
    },
    {
        src: require("../assets/images/blog2.png"),
        date: "Feb 10, 2023",
        title: "Roasted Coffee  Export",
        text: "Ethiopia is the birthplace of coffee, and it is still one of the world's leading producers of green coffee beans.The Ethiopian coffee industry is worth an estimated $3 billion per year.The majority of Ethiopia's coffee is exported, with the United States, Germany, and Japan being the largest markets."
    },
    {
        src: require("../assets/images/blog1.png"),
        date: "Feb 09, 2023",
        title: "Wegegta Fishery & Ethiopia market",
        text: "I would highly recommend Wegegta to any farmer who is looking to improve their operation. They can provide you with the resources and expertise you need to succeed in today's competitive agricultural market."
    },
    {
        src: require("../assets/images/blog2.png"),
        date: "Feb 11, 2023",
        title: "Roasted Coffee  Export",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, minus. Minus, dignissimos aliquid quia aspernatur voluptatum quae modi, quidem impedit nihil perspiciatis vero eos commodi deleniti, tempore doloribus sed quo harum. Dicta quia nam maxime tempore expedita, commodi voluptas delectus quis atque voluptate laudantium tenetur, nihil dolores? Provident, maiores animi?"
    },
];
</script>

<template>
    <v-row class="pt-8">
        <v-col lg="4" md="4" sm="12" class="">
          <v-sheet class="lg:p-16 md:p-16 sm:p-16 flex flex-col items-center text-left">
            <v-img src="../assets/images/ic_outline-grass.png" alt="Center Image" class="w-20" />
            <div class="text-4xl font-bold text-hColor py-4">Blog Insights</div>
            <div>These are just a few examples of how agri businesses are using technology to address the challenges facing the agricultural industry. As these technologies continue to develop, agri businesses will be well-positioned to meet the growing demand for food and agricultural products.</div>
          </v-sheet>
        </v-col>
        <v-col lg="8" md="8" sm="12">
            <div class="lg:p-36 md:p-36 sm:p-16 relative">
                <div class="absolute inset-y-0 right-0 bg-pColor h-full w-1/4"></div>
                <div class="-mr-20">
                    <v-carousel hide-delimiters>
                        <template v-slot:prev="{ props }">
                    <v-icon
                    variant="elevated"
                        color="grey"
                        class="lg:mt-24 md:mt-24 sm:mt-14 border-2 border-gray lg:px-8 md:px-8 sm:px-6 lg:py-4 md:py-4 sm:py-6 bg-white"
                        @click="props.onClick" >mdi-arrow-left</v-icon>
                    </template>
                    <template v-slot:next="{ props }">
                    <v-icon
                    variant="elevated"
                        color="grey"
                        class="lg:mt-24 md:mt-24 sm:mt-14 border-2 border-gray lg:px-8 md:px-8 sm:px-6 lg:py-4 md:py-4 sm:py-6 bg-white"
                        @click="props.onClick">mdi-arrow-right</v-icon>
                    </template>
                    <v-carousel-item v-for="(item, i) in items" :key="i">
                        <v-card
                            class="mx-auto"
                            max-width="500"
                        >
                            <v-img
                            :src="item.src"
                            height="200px"
                            cover
                            ></v-img>

                            <v-card-title>
                            {{ item.title}}
                            </v-card-title>

                            <v-card-subtitle>
                            {{item.date}}
                            </v-card-subtitle>
                            <v-card-text>
                                {{ item.text }}
                            </v-card-text>

                            <v-card-actions>
                            <v-btn
                                color="orange-lighten-2"
                                variant="text"
                            >
                                Read More
                            </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-carousel-item>
                    </v-carousel>
                </div>
                    
            </div>
        </v-col>
    </v-row>
</template>
