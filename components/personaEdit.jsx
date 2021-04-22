import PropTypes from "prop-types"
import React, { useState } from "react"
import { connect } from "react-redux"
import { Button, ButtonGroup, Form, ToggleButton } from "react-bootstrap"
import { updatePersona } from "../actions/personas"

const defaultState = { id: "", name: "", surname: "", birthday: "", gender: "" }

const EditPersona = ({ persona, updatePersona, changePersona }) => {
  const [eachEntry, setEachEntry] = useState(persona)
  const { id, name, surname, birthday, gender } = eachEntry
  const gender_radios = [ { name: "M", value: "true" }, { name: "F", value: "false" } ]

  const handleInputChange = event => {
    setEachEntry({ ...eachEntry, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const formatEntry = { ...eachEntry, gender: eachEntry.gender == null ? null : eachEntry.gender === "true" }
    updatePersona(formatEntry)
    changePersona()
    setEachEntry(defaultState)
  }

  return(
    <Form onSubmit={ handleSubmit }>
      <Form.Control placeholder="Name"
                    name="name"
                    value={ name }
                    onChange={ handleInputChange }
      />

      <Form.Control placeholder="Surname"
                    name="surname"
                    value={ surname }
                    onChange={ handleInputChange }
      />

      <Form.Control type="date"
                    name="birthday"
                    value={ birthday }
                    onChange={ handleInputChange }
      />

      <ButtonGroup toggle>
        {
          gender_radios.map((radio, idx) => (
            <ToggleButton key={ idx }
                          type="radio"
                          variant="outline-dark"
                          name="gender"
                          value={ radio.value }
                          checked={ gender.toString() === radio.value }
                          onChange={ handleInputChange }
            >
              { radio.name }
            </ToggleButton>
          ))
        }
      </ButtonGroup>
      <Button variant="outline-dark" type="submit">DONE</Button>
    </Form>
  )
}

EditPersona.propTypes = { changePersona: PropTypes.func.isRequired }

//\\//\\//\\//\\//\\//\\// STATES & ACTIONS CONNECTION //\\//\\//\\//\\//\\//
const mapStateToProps = state => {
  return { persona: state.personas.persona }
}

export default connect(mapStateToProps, { updatePersona })(EditPersona)
//\\//\\//\\//\\//\\//\\//\\// STATES CONNECTION //\\//\\//\\//\\//\\//\\//
