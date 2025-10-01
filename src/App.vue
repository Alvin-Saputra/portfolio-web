<script setup>
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import NavHeader from './components/NavHeader.vue';
</script>

<template>
  <v-app class="app-background">
    <v-main>
      <NavHeader />
      <HeroSection />
      <AboutSection />
    </v-main>
  </v-app>
</template>

<style lang="scss">
.app-background {
  /* 1. Path ke gambar di folder public harus dimulai dengan '/' */
  background-image: url('/Background1.jpg');

  /* 2. Properti tambahan agar background terlihat bagus */
  background-size: cover; /* Membuat gambar menutupi seluruh area */
  background-position: center center; /* Memposisikan gambar di tengah */
  background-repeat: no-repeat; /* Mencegah gambar berulang */
  background-attachment: fixed; /* Membuat gambar tetap diam saat scroll */
}
</style>