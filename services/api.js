import apiService from 'axios'

const axios = apiService.create({
  baseURL: `https://www.potterapi.com/v1`
})

export default {
  getHouses() {
    return axios.get(
      `/houses?key=$2a$10$n/zmZeiD2AjlWfMDfjWXAOeTAIMWHC1.2jvL9oMMGO4sBiL8SlrlG`
    )
  },
  getCharacters() {
    return axios.get(
      `/characters?key=$2a$10$n/zmZeiD2AjlWfMDfjWXAOeTAIMWHC1.2jvL9oMMGO4sBiL8SlrlG`
    )
  },
  getHouseMembers(houseName) {
    return axios.get(
      `/characters?key=$2a$10$n/zmZeiD2AjlWfMDfjWXAOeTAIMWHC1.2jvL9oMMGO4sBiL8SlrlG&house=${houseName}`
    )
  }
}
