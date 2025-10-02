<script setup>
import CardProjects from './CardProjects.vue';

// Buat array untuk menyimpan data proyek Anda. Ini jauh lebih rapi!
const projects = [
  {
    title: "Bookly",
    subtitle: "Flutter Mobile UI/UX Design",
    description: "A sleek and intuitive mobile app for book lovers to discover, track, and discuss their favorite reads.",
    image: "/bookly.jpg", // Gambar dari folder public
    gradienColor: "#802c08"
  },
  {
    title: "Geo-Face",
    subtitle: "Android Development (Kotlin)",
    description: "An efficient attendance tracking application for businesses, built natively for Android with Kotlin.",
    image: "/geo-face.jpg", // Gambar dari folder public
    gradienColor: "#1c5264"
  },
  {
    title: "Bin-Buddy",
    subtitle: "Android Development (Kotlin)",
    description: "A visually rich fan page dedicated to the manga 'Berserk', created with Vue.js and Vuetify.",
    image: "/bin-buddy.jpg", // Gambar dari folder public
     gradienColor: "#0c8008"
  },
  {
    title: "Tomato-DiagLeaf",
    subtitle: "Flutter Mobile",
    description: "A visually rich fan page dedicated to the manga 'Berserk', created with Vue.js and Vuetify.",
    image: "/tomato-diagleaf.jpg", // Gambar dari folder public
    gradienColor: "#0c8008" // Contoh penggunaan prop color
  },

];
</script>

<template>
  <section id="projects">
    <v-container class="projects-section align-center mt-16 mb-16">
      <v-row justify="center" align="center">
        <v-col cols="12" class="text-center">
          <h1 class="text-h3 font-weight-medium mb-4 text-white">
            My <span class="font-highlight">PROJECTS</span>
          </h1>
          <p class="font-weight-light mb-8 text-grey-lighten-1">
            Here are some of the projects I've worked on recently.
          </p>
        </v-col>
      </v-row>

      <v-row justify="center" align="stretch">
        <v-col
          v-for="(project, i) in projects"
          :key="i"
          cols="12"
          md="6"
        >
          <CardProjects
            :title="project.title"
            :subtitle="project.subtitle"
            :description="project.description"
            :image="project.image"
            :gradien-color="project.gradienColor"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Tiny5&display=swap');

.font-highlight {
  font-family: 'Tiny5', sans-serif;
  
}
</style>