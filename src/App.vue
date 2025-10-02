<script setup>
import HeroSection from './components/HeroSection.vue';
import AboutSection from './components/AboutSection.vue';
import NavHeader from './components/NavHeader.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import ContactSection from './components/contactSection.vue';
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
/* Kosongkan atau hapus jika tidak ada style lain */
</style>