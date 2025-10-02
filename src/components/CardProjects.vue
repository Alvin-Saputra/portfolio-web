<script setup>
// Props Anda sudah benar, tidak perlu diubah
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  gradienColor: {
    type: String,
    // Berikan nilai default berupa kode warna yang valid
    default: '#202020',
  },
  projectUrl: {
    type: String,
    required: false,
    default: '#'
  }
});
</script>

<template>
  <v-card class="mx-auto" rounded="lg" theme="dark" height="100%" style="min-height: 560px;">
    <v-img :src="image" height="100%" cover class="d-flex align-end card-image-container">
      <div class="pa-4 d-flex flex-column card-content w-100">
        <div>
          <h2 class="text-h5 font-weight-bold">{{ title }}</h2>
          <div class="font-weight-medium text-grey-lighten-1 mb-2">{{ subtitle }}</div>
          <v-btn append-icon="mdi-open-in-new" variant="tonal" class="align-self-start mt-4 mb-4" rounded v-bind:href="projectUrl" target="_blank">
            View Project
          </v-btn>

        </div>



      </div>

    </v-img>

  </v-card>
</template>

<style scoped>
.card-content {
  /* 1. Sembunyikan konten dengan membuatnya transparan */
  opacity: 0;

  /* 2. Beri efek transisi yang mulus saat opacity berubah */
  transition: opacity 0.4s ease-in-out;

  /* 3. Pastikan div ini menempati seluruh ruang bawah agar gradien terlihat bagus */
  height: 100%;
  justify-content: flex-end;
  /* Mendorong konten ke bawah */

  /* Gradien akan selalu ada, tapi baru terlihat saat opacity > 0 */
  background: linear-gradient(to top, v-bind(gradienColor) 40%, transparent 100%);
}

/* 4. INI BAGIAN KUNCINYA:
  Ketika mouse hover di atas .card-image-container (yaitu <v-img>),
  maka ubah opacity dari .card-content (anaknya) menjadi 1 (terlihat penuh).
*/
.card-image-container:hover .card-content {
  opacity: 1;
}
</style>