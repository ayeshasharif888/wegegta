<script setup>

</script>
  <template>
    <v-footer class="d-flex flex-column px-0 py-0">
      <v-container fluid class="px-0 py-0 text-left">
      <v-row>
        
        <v-col cols="12" sm="6" md="4" class="bg-pColor px-0">
          <div class="py-44 px-14 space-y-3">
            <h1 class="text-3xl text-white">About Us</h1>
            <p class="text-white space-y-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas facilis harum at hic incidunt vel et fugit recusandae. Sit, accusantium.</p>
          </div>
        </v-col>

        
        <v-col cols="12" sm="6" md="8" class="bg-sColor px-0">
          <v-row>
            
            <v-col cols="12" sm="6">
              <div class="pt-44 px-14 space-y-3">
                <h2 class="text-3xl text-pColor">Service</h2>
                <ul class="space-y-2">
                  <li class="hover:text-pColor">Abattoir</li>
                  <li class="hover:text-pColor">Dairy</li>
                  <li class="hover:text-pColor">Fishery</li>
                  <li class="hover:text-pColor">Poultry</li>
                  <li class="hover:text-pColor">Animal Feed</li>
                  <li class="hover:text-pColor">Safe Storage</li>
                </ul>
              </div>
            </v-col>

            
            <v-col cols="12" sm="6" class="pr-0">
              <div class="pt-44 px-14 space-y-3">
                <h2 class="text-3xl text-pColor">Useful Pages</h2>
                <ul class="space-y-2">
                  <li class="hover:text-pColor">About</li>
                  <li class="hover:text-pColor">Venture</li>
                  <li class="hover:text-pColor">Products</li>
                  <li class="hover:text-pColor">Blog</li>
                  <li class="hover:text-pColor">Contact Us</li>
                </ul>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
      <div class="absolute top-0 left-0 w-full flex justify-center">
        <v-img src="../assets/images/footer.png" alt="Footer Image" class="h-24 mt-10 ml-16"></v-img>
      </div>
    </v-container>
      <div class="bg-hColor text-white d-flex w-100 justify-between px-14 py-2">
        <div class="hover:text-pColor">copyright © 2023</div>
        <div>
          <v-icon class="px-5 hover:text-pColor">mdi-facebook</v-icon>
          <v-icon class="px-5 hover:text-pColor">mdi-twitter</v-icon>
          <v-icon class="px-5 hover:text-pColor">mdi-instagram</v-icon>
          <v-icon class="px-5 hover:text-pColor">mdi-linkedin</v-icon>
        </div>
      </div>
    </v-footer>
  </template>
  