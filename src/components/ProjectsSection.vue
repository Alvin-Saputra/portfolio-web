<script setup>
import CardProjects from './CardProjects.vue';

</script>

<template>
  <section id="projects">
    <v-container fluid class="projects-section align-center">
      <v-row justify="center" align="center">
        <v-col cols="12" md="12" class="text-center">
          <h1 class="text-h3 font-weight-medium mb-4 text-white">
            My <span class="font-highlight">PROJECTS</span>
          </h1>
          <p class="font-weight-light mb-8 text-grey-lighten-1">
            Here are some of the projects I've worked on recently.
          </p>
        </v-col>
      </v-row>

      <v-row justify="center" align="stretch"> 
        <v-col cols="12"  md="6">
          <CardProjects />
        </v-col>
        
        <v-col cols="12" md="6">
          <CardProjects />
        </v-col>

        <v-col cols="12" md="6">
          <CardProjects />
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