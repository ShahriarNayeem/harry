<template>
  <v-card>
    <v-img :src="imgSrc" min-width="250px" max-height="250px"></v-img>
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      default: ''
    }
  }
}
</script>
