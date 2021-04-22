import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { connect } from "react-redux"
import { Button, ButtonGroup, Form, ToggleButton } from "react-bootstrap"
import { addPersona } from "../actions/personas"

const defaultState = { name: "", surname: "", birthday: "", gender: null }

const NewPersona = ({ persona, addPersona, createPersona }) => {
  const [eachEntry, setEachEntry] = useState(defaultState)
  const { name, surname, birthday, gender } = eachEntry
  const gender_radios = [ { name: "M", value: "male" }, { name: "F", value: "female" } ]

  const handleInputChange = event => {
    setEachEntry({ ...eachEntry, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    const formatEntry = { ...eachEntry, gender: eachEntry.gender == null ? null : eachEntry.gender === "male" }
    addPersona(formatEntry)
    createPersona()
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
                          checked={ gender === radio.value }
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

NewPersona.propTypes = { addPersona: PropTypes.func.isRequired }

//\\//\\//\\//\\//\\//\\// STATES & ACTIONS CONNECTION //\\//\\//\\//\\//\\//
const mapStateToProps = state => {
  return { persona: state.personas.persona }
}

export default connect(mapStateToProps, { addPersona })(NewPersona)
//\\//\\//\\//\\//\\//\\//\\// STATES CONNECTION //\\//\\//\\//\\//\\//\\//