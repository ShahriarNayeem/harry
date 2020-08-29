<template>
  <v-card rounded>
    <v-img :src="imgSrc" min-width="150" max-height="300"></v-img>
    <v-card-title class="justify-center">{{ cardTitle }}</v-card-title>
    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    cardTitle: {
      type: String,
      default: ''
    },
    imgSrc: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped></style>
