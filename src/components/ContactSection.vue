<script setup>
import { Icon } from '@iconify/vue';
</script>

<template>
    <section id="contact">
        <v-container fluid class="contact-section d-flex align-center justify-center">
            <v-row justify="center" align="center">

                <v-col cols="12" class="text-center ">

                    <h1 class="text-h3 font-weight-medium mb-4 text-white">
                        Get in <span class="font-highlight">TOUCH</span>
                    </h1>

                    <p class="font-weight-light mb-8 text-grey-lighten-1">
                        Feel free to reach out for collaborations or just a friendly hello!
                    </p>

                    <div class="d-flex align-center justify-center ga-4">

                        <v-btn icon variant="text" href="mailto:alvin.saputra20162016@gmail.com" aria-label="Email">
                            <v-icon size="large">mdi-email</v-icon>
                        </v-btn>

                        <v-btn icon variant="text" href="https://www.linkedin.com/in/alvin--saputra/" target="_blank" aria-label="LinkedIn">
                            <v-icon size="large">mdi-linkedin</v-icon>
                        </v-btn>

                        <v-btn icon variant="text" href="https://www.instagram.com/vindezign/" target="_blank" aria-label="Instagram">
                            <v-icon size="large">mdi-instagram</v-icon>
                        </v-btn>


                        <v-btn icon variant="text" href="https://github.com/Alvin-Saputra" target="_blank" aria-label="Twitter">
                            <v-icon size="large">mdi-github</v-icon>
                        </v-btn>

                        <v-btn icon variant="text" href="https://www.behance.net/alvinsaputra5" target="_blank" aria-label="Behance">
                            <Icon icon="uil:behance" width="32" height="32" style="color: #fff" />
                        </v-btn>

                    </div>
                </v-col>


            </v-row>
        </v-container>
    </section>
</template>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Tiny5&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
    font-family: 'Montserrat', sans-serif;
}

.font-highlight {
    font-family: 'Tiny5', sans-serif;
}

.contact-section {
    height: 100vh;
}
</style>