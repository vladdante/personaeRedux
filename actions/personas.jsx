import Axios from "axios"
import { setPersonas, setNewPersona, setEditedPersona, removeDestroyedPersona } from "../reducers/personas"

export const getPersonas = () => {
  return dispatch => {
    Axios.get('/api/personas.json')
      .then(response => dispatch(setPersonas(response.data)))
      .catch(error => { console.log(error) })
  }
}

export const addPersona = persona => {
  return dispatch => {
    Axios.post('/api/personas.json', persona)
      .then(() => dispatch(setNewPersona(persona)))
      .catch(error => { console.log(error) })
  }
}

export const updatePersona = persona => {
  return dispatch => {
    Axios.put(`/api/personas/${ persona.id }`, persona)
      .then(() => dispatch(setEditedPersona(persona)))
      .catch(error => { console.log(error) })
  }
}

export const destroyPersona = id => {
  return dispatch => {
    const confirmation = confirm("Are you sure?")
    if (confirmation) {
      Axios.delete(`/api/personas/${ id }`)
        .then(() => { dispatch(removeDestroyedPersona(id)) })
        .catch(error => { console.log(error) })
    }
  }
}
