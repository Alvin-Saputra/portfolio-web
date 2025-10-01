<template>
  <section id="hero">
    <v-container fluid class="hero-section d-flex align-center">
      <v-row justify="center" align="center">
        <v-col cols="12" md="5" class="text-center">
          <h1>
            MOBILE <br><span class="font-highlight">DEVELOPER</span>
          </h1>
          <div class="d-flex justify-center ga-4 my-4">
            <Icon icon="logos:android-icon" width="25" height="25" />
              <Icon icon="logos:android-icon" width="25" height="25" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Tiny5&display=swap');

* {
  font-family: "Zalando", sans-serif;
}

h1 {
  font-size: 4rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;
  line-height: 0.9;
}

.font-highlight {
  font-family: 'Tiny5', sans-serif;
}

.hero-section {
  /* Warna latar belakang gelap */
  min-height: 100vh;
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