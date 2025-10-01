<script setup>
import portraitImage from '@/assets/portrait.png'
</script>

<template>
  <section id="hero">
    <v-container fluid class="hero-section d-flex align-center">
      <v-row justify="center" align="center">
        
        <v-col cols="12" md="5" class="text-center text-md-left">
          
          <h1 class="text-h2 font-weight-bold mb-4 text-black">
            Web designer & webflow developer
          </h1>

          <p class="text-h6 font-weight-light mb-8 text-grey-lighten-1">
            Diving into the world of design, I've had the privilege of
            working on diverse projects, each leaving a unique mark.
          </p>

          <div class="d-flex align-center justify-center justify-md-start">
            
            

            <div>
              <v-btn icon variant="text" href="#" target="_blank" aria-label="LinkedIn">
                <v-icon size="large">mdi-linkedin</v-icon>
              </v-btn>
            
              <v-btn icon variant="text" href="#" target="_blank" aria-label="Instagram">
                <v-icon size="large">mdi-instagram</v-icon>
              </v-btn>
              <v-btn icon variant="text" href="#" target="_blank" aria-label="Twitter">
                <v-icon size="large">mdi-twitter</v-icon>
              </v-btn>
            </div>
          </div>
        </v-col>

        <v-col cols="12" md="5" class="d-none d-md-flex justify-center">
          <v-img
            :src="portraitImage"
            alt="Foto Portofolio Alvin Saputra"
            class="rounded-lg"
            max-height="650"
            aspect-ratio="4/5"
            cover
          ></v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>



<style scoped>
.hero-section { /* Warna latar belakang gelap */
  min-height: 100vh; /* Tinggi minimal seukuran layar penuh */
}

/* Style tambahan untuk memastikan teks di dalam tombol bulat 
  bisa turun baris (wrap) dengan baik.
*/
.v-btn--rounded {
  white-space: normal;
  line-height: 1.2;
}
</style>