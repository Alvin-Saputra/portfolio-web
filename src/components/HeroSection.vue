<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
  <section id="hero">
    <v-container fluid class="hero-section d-flex align-center">
      <v-row justify="center" align="center">
        <v-col cols="12" md="5" class="text-center">
          <h1>
            MOBILE <br><span class="font-highlight">DEVELOPER</span>
          </h1>
          <div class="d-flex justify-center ga-4">
            <Icon icon="logos:android-icon" width="32" height="32" />
              <Icon icon="material-icon-theme:kotlin" width="32" height="32" />
              <Icon icon="logos:flutter" width="28" height="28" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tiny5&display=swap');

* {
  font-family: "Montserrat", sans-serif;
}



h1 {
  font-size: 5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  line-height: 0.9;
}

.font-highlight {
  font-family: 'Tiny5', sans-serif;
}

.hero-section {
  /* Warna latar belakang gelap */
  
  min-height: 80vh;
   /* background-image: url('/Background2.jpg'); */
  /* Tinggi minimal seukuran layar penuh */
}

/* Style tambahan untuk memastikan teks di dalam tombol bulat 
  bisa turun baris (wrap) dengan baik.
*/
.v-btn--rounded {
  white-space: normal;
  line-height: 1.2;
}

</style>