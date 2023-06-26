   <template>
    <div>
      <v-menu
        open-on-click
      >
        <template v-slot:activator="{ props }">
          <div class="flex flex-row items-center">
            <v-col cols="6">
              <v-img src="../assets/images/weblogo.png" class="h-30 float-left"/>
            </v-col>
            <v-col cols="6">
              <v-icon
            color="black"
            v-bind="props"
            class="float-right text-6xl"
          >
            mdi-menu
          </v-icon>
            </v-col>
          </div> 
        </template>
  
        <v-list class="w-screen mt-8">
          <router-link
          v-for="(item, index) in items"
          :key="index"
          :to="item.value"
          custom
        >
        <template v-slot="{ navigate, href }">
            <v-list-item @click="navigate" class="flex justify-between space-x-6 space-y-4 text-2xl">
          <!-- <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon> -->
            <v-list-item-content class="ml-4">{{ item.title }}</v-list-item-content>
          </v-list-item>
        
        </template>
          </router-link>
          <div class="space-x-10 space-y-4 text-2xl">
            <div class="text-3xl text-pColor pl-10 pt-12 pb-8">
              Contact Info
            </div>
            <v-list-item>
            <v-list-item-icon>
                <v-icon class="text-hColor mr-6">mdi-map-marker </v-icon>
                </v-list-item-icon>
            <v-list-item-content >Addis Ababa</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
                <v-icon class="text-hColor mr-6">mdi-phone</v-icon>
                </v-list-item-icon>
            <v-list-item-content >+251900001111</v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon>
                <v-icon class="text-hColor mr-6">mdi-email</v-icon>
                </v-list-item-icon>
            <v-list-item-content >Contact@wegegta.com</v-list-item-content>
          </v-list-item>
          </div>
          <v-list-item>
            <v-list-item-icon class="flex flex-row py-10 space-x-2 text-pColor text-4xl justify-center">
                <v-icon>mdi-facebook</v-icon>
                <v-icon>mdi-instagram</v-icon>
                <v-icon>mdi-youtube</v-icon>
                <v-icon>mdi-linkedin</v-icon>
                </v-list-item-icon>
          </v-list-item>
          <v-list-item>
            <v-list-item-icon class="flex flex-row py-10 space-x-2 text-orange-600 items-center text-4xl ml-6">
                <v-icon>mdi-earth</v-icon>
                <div class="text-2xl text-orange-600 ml-6">AMH</div>
                
                </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </template>
  <script setup>
  import { ref } from 'vue';
  import { useRoute } from 'vue-router';
  const items = [
  { value: '/', title: 'Home', icon: 'mdi-view-dashboard' },
  { value: '/about', title: 'About', icon: 'mdi-forum' },
  { value: '/venture', title: 'Venture', icon: 'mdi-domain' },
  { value: '/products', title: 'Products', icon: 'mdi-cart' },
  { value: '/blog', title: 'Blog', icon: 'mdi-newspaper' },
  { value: '/contact', title: 'Contact', icon: 'mdi-email' },
];
  </script>