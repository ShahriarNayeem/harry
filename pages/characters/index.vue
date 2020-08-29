<template>
  <CharacterComponent img-src="./characters.jpg">
    <v-data-table
      :headers="headers"
      :items="characters"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-for="h in headers" v-slot:[`header.${h.value}`]="{ header }">
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
  </CharacterComponent>
</template>

<script>
import { mapState } from 'vuex'
import CharacterComponent from '../../components/ImageTextCard'
export default {
  components: {
    CharacterComponent
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('potter/fetchCharacters')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Could not fetch'
      })
    }
  },
  data() {
    return {
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
    ...mapState({ characters: (state) => state.potter.characters })
  }
}
</script>

<style scoped></style>
