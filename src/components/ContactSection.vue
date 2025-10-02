<template>
    <section id="contact">
        <v-container fluid class="contact-section d-flex align-center justify-center mt-24 mb-16" >
            <v-row justify="center" align="center">

                <v-col cols="12" class="text-center ">

                    <h1 class="text-h3 font-weight-medium mb-4 text-white">
                        Get in <span class="font-highlight">Touch</span> 
                    </h1>



                    <div class="d-flex align-center justify-center">


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


            </v-row>
        </v-container>
    </section>
</template>
<script setup>

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Tiny5&display=swap');
.font-highlight {
  font-family: 'Tiny5', sans-serif;
}
</style>