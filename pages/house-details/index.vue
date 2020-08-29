<template>
  <HouseComponent :img-src="imgSrc">
    <v-card-title
      style="cursor: pointer;"
      class="justify-center text-h3 text-capitalize"
      @click="$router.push('/')"
    >
      Welcome to &nbsp;
      <span :style="{ color: houseColor }">{{ getHouseName }}</span> &nbsp;
      house
    </v-card-title>
    <v-card-subtitle class="text-center text-h4">
      Founded By -
      <span>{{ getFounder }}</span>
    </v-card-subtitle>
    <v-card-text class="text-center text-h6">
      <span :style="{ color: houseColor }">Head of The House</span>
      :
      {{ getHeadOfHouse }}
    </v-card-text>
    <v-card-text class="text-center text-h6">
      <span :style="{ color: houseColor }">House Ghost</span>
      :
      {{ getHouseGhost }}
    </v-card-text>

    <v-card-text class="text-center text-h6">House Members</v-card-text>

    <template>
      <v-data-table
        :headers="headers"
        :items="houseMembers"
        :items-per-page="5"
        class="elevation-1"
      >
        <template
          v-for="h in headers"
          v-slot:[`header.${h.value}`]="{ header }"
        >
          {{ header.text.toUpperCase() }}
        </template>

        <template v-slot:item="{ item }">
          <tr>
            <td class="text-capitalize">{{ item.name }}</td>
            <td class="text-capitalize">{{ item.ministryOfMagic }}</td>
            <td class="text-capitalize">{{ item.dumbledoresArmy }}</td>
            <td class="text-capitalize">{{ item.orderOfThePhoenix }}</td>
            <td class="text-capitalize">{{ item.deathEater }}</td>
            <td class="text-capitalize">{{ item.bloodStatus }}</td>
            <td class="text-capitalize">{{ item.species }}</td>
          </tr>
        </template>
      </v-data-table>
    </template>
  </HouseComponent>
</template>

<script>
import { mapState } from 'vuex'
import HouseComponent from '../../components/ImageTextCard'

export default {
  components: {
    HouseComponent
  },
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('potter/fetchHouseMembers', params.house.name)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Could not fetch'
      })
    }
  },
  data() {
    return {
      houseColor: '',
      headers: [
        {
          text: 'Name',
          align: 'Center',
          value: 'name'
        },
        { text: 'Ministry of Magic', value: 'ministryOfMagic' },
        { text: 'Dumbledores Army', value: 'dumbledoresArmy' },
        { text: 'Order of The Phoenix', value: 'orderOfThePhoenix' },
        { text: 'Death Eater', value: 'deathEater' },
        { text: 'Blood Status', value: 'bloodStatus' },
        { text: 'Species', value: 'species' }
      ]
    }
  },
  computed: {
    ...mapState({
      houseMembers: (state) => state.potter.houseMembers
    }),
    imgSrc() {
      const imgSrc = this.$route.params.house.name
      return `./${imgSrc}.jpg`
    },
    getHeadOfHouse() {
      return this.$route.params.house.headOfHouse
    },
    getHouseName() {
      return this.$route.params.house.name
    },
    getFounder() {
      return this.$route.params.house.founder
    },
    getHouseGhost() {
      return this.$route.params.house.houseGhost
    }
  },
  created() {
    this.houseColor =
      this.$route.params.house.name === 'Gryffindor'
        ? this.$route.params.house.colors[1]
        : this.$route.params.house.colors[0]
  }
}
</script>

<style scoped></style>
