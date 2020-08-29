<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" align-self="center">
        <HogwartsComponent :img-src="imgSrc">
          <v-card-text>
            {{ textToBeDisplayed }}
          </v-card-text>
        </HogwartsComponent>
      </v-col>
    </v-row>

    <v-row md="4">
      <v-col cols="12" md="4">
        <BaseCard img-src="./characters.jpg">
          <v-btn rounded color="primary" large :to="{ name: 'characters' }">
            Click to show all characters
          </v-btn>
        </BaseCard>
      </v-col>

      <v-col cols="12" md="4">
        <BaseCard card-title="HOUSES" img-src="./houses.png">
          <v-list rounded color="blue lighten-3">
            <v-list-item-group color="primary">
              <v-list-item
                v-for="house in houses"
                :key="house._id"
                :to="{ name: 'house-details', params: { house } }"
                exact
              >
                <v-list-item-content>
                  <v-list-item-title>
                    {{ house.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </BaseCard>
      </v-col>

      <v-col cols="12" md="4">
        <BaseCard img-src="./spells.jpg">
          <v-btn rounded color="primary" large :to="{ name: 'spells' }" exact>
            Click to show all spells
          </v-btn>
        </BaseCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import HogwartsComponent from '../components/ImageTextCard'
export default {
  components: {
    HogwartsComponent
  },
  async fetch({ store, error }) {
    try {
      await store.dispatch('potter/fetchHouses')
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Could not fetch'
      })
    }
  },
  data() {
    return {
      textToBeDisplayed: ` Harry Potter is a series of fantasy novels written by British author J. K.
      Rowling. The novels chronicle the lives of a young wizard, Harry Potter,
      and his friends Hermione Granger and Ron Weasley, all of whom are students
      at Hogwarts School of Witchcraft and Wizardry. The main story arc concerns
      Harry's struggle against Lord Voldemort, a dark wizard who intends to
      become immortal, overthrow the wizard governing body known as the Ministry
      of Magic and subjugate all wizards and Muggles (non-magical people).`,
      imgSrc: './hogwarts.jpg'
    }
  },
  computed: {
    ...mapState({
      houses: (state) => state.potter.houses
    })
  }
}
</script>

<style scoped></style>
