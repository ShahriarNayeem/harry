import potterService from '../services/api'

export const state = () => ({
  houses: [],
  characters: [],
  houseMembers: []
})

export const mutations = {
  SET_HOUSES(state, houses) {
    state.houses = houses
  },
  SET_CHARACTERS(state, characters) {
    state.characters = characters
  },
  SET_HOUSE_MEMBERS(state, houseMembers) {
    state.houseMembers = houseMembers
  }
}

export const actions = {
  fetchHouses({ commit }) {
    return potterService.getHouses().then((res) => {
      commit('SET_HOUSES', res.data)
    })
  },
  fetchCharacters({ commit }) {
    return potterService.getCharacters().then((res) => {
      commit('SET_CHARACTERS', res.data)
    })
  },
  fetchHouseMembers({ commit }, houseName) {
    return potterService.getHouseMembers(houseName).then((res) => {
      commit('SET_HOUSE_MEMBERS', res.data)
    })
  }
}
