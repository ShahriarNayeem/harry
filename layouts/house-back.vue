<template>
  <v-app light class="mainBackground">
    <v-main>
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.mainBackground {
  background-image: url('../static/houses-back.png');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
