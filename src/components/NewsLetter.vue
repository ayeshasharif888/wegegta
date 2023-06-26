<script setup>
</script>
<template>
    <div class="grid grid-cols-12 gap-4 py-24 bg-pColor relative items-center">
        <div class="col-start-2 col-span-4 flex flex-col text-white space-y-2">
            <div>Newsletter</div>
            <div class="text-3xl font-bold">Get Weekly Updates</div>
            <div>Lorem ipsum dolor sit amet consectetur. Velit massa viverra viverra sed at at etiam. Nisi vitae.</div>
        </div>
        <div class="col-span-5 flex flex-row gap-1">
            <input type="text" placeholder="Enter your email" class="w-80 h-14 px-2 text-white placeholder-white bg-orange-500 box-border">
            <v-btn class="" color="white" height="55px">Subscribe</v-btn>
        </div>
        <v-img class="absolute bottom-0 left-0" src="../assets/images/ship-1.png"></v-img>
        <v-img class="absolute bottom-0 right-0" src="../assets/images/ship-2.png"></v-img>
    </div>
</template>
<style scoped>
</style>
