<script setup>
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import NavHeader from './components/NavHeader.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ContactSection from './components/ContactSection.vue';
</script>

<template>
  <v-app class="bg-grey-darken-4"> 
    <v-main>
      <NavHeader />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </v-main>
  </v-app>
</template>

<style lang="scss">
html {
  scroll-behavior: smooth;
}
/* Kosongkan atau hapus jika tidak ada style lain */
</style>