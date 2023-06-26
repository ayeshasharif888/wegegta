<script setup> 

import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'

const { handleSubmit, handleReset } = useForm({
  validationSchema: {
    name: {
      validate(value) {
        if (value?.length >= 2) return true

        return 'Name needs to be at least 2 characters.'
      },
    },
    phone: {
      validate(value) {
        if (value?.length > 9 && /[0-9-]+/.test(value)) return true

        return 'Phone number needs to be at least 9 digits.'
      },
    },
    email: {
      validate(value) {
        if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

        return 'Must be a valid e-mail.'
      },
    },
    select: {
      validate(value) {
        if (value) return true

        return 'Select an item.'
      },
    },
    checkbox: {
      validate(value) {
        if (value === '1') return true

        return 'Must be checked.'
      },
    },
  },
})

const name = useField('name')
const phone = useField('phone')
const email = useField('email')
const select = useField('select')
const checkbox = useField('checkbox')

const items = ref([
  'Item 1',
  'Item 2',
  'Item 3',
  'Item 4',
])

const submit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2))
})


</script>
<template>
  <div class="pt-24 text-6xl font-extrabold text-pColor ml-8 text-center">Contact Us</div>
  <v-row class="lg:m-28 md:m-28 sm:m-0">
        <v-col lg="6" md="6" sm="12" class="bg-gray-200 py-28 pl-28 pr-16 space-y-10">
          <div class="text-4xl text-pColor font-semibold">Get In<span class="text-4xl text-black font-semibold">Touch</span></div>
          <div>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</div>
  <form @submit.prevent="submit">
    <v-text-field
      v-model="name.value.value"
      :counter="10"
      :error-messages="name.errorMessage.value"
      label="Name"
    ></v-text-field>

    <v-text-field
      v-model="phone.value.value"
      :counter="7"
      :error-messages="phone.errorMessage.value"
      label="Phone Number"
    ></v-text-field>

    <v-text-field
      v-model="email.value.value"
      :error-messages="email.errorMessage.value"
      label="E-mail"
    ></v-text-field>

    <v-select
      v-model="select.value.value"
      :items="items"
      :error-messages="select.errorMessage.value"
      label="How did you find us?"
    ></v-select>

    

    <v-btn
      class="w-full mb-4"
      type="submit"
      color="pColor"
    >
      Send
    </v-btn>

    <!-- <v-btn @click="handleReset" class="w-full">
      Clear
    </v-btn> -->
  </form>
  <v-row class="text-xs">
    <v-col cols="4"><v-row>
      <v-col cols="4"><v-img src="../assets/images/phone.png" class="h-6"></v-img></v-col>
      <v-col cols="8"><div>PHONE</div><div>+25190000000</div></v-col>
    </v-row></v-col>
    <v-col cols="4"><v-row>
      <v-col cols="4"><v-img src="../assets/images/fax.png" class="h-6"></v-img></v-col>
      <v-col cols="8"><div>FAX</div><div>+25190000</div></v-col>
    </v-row></v-col>
    <v-col cols="4"><v-row>
      <v-col cols="4"><v-img src="../assets/images/email.png" class="h-6"></v-img></v-col>
      <v-col cols="8"><div>EMAIL</div><div>info@wegegta.com</div></v-col>
    </v-row></v-col>
  </v-row>
        </v-col>
        <v-col lg="6" md="6" sm="12" class="relative bg-gray-200">
          <div class="absolute inset-y-0 right-0 bg-pColor h-full w-1/3"></div>
          <v-img src="../assets/images/contact.png" class="m-28"></v-img>
        </v-col>
  </v-row>
</template>

  

  