import NewPersona from "./personaNew"
import EditPersona from "./personaEdit"
import React, { useEffect, useState } from "react"
import Moment from "react-moment"
import { connect } from "react-redux"
import { Button, Col, Modal, Row, Table } from "react-bootstrap"
import { IconContext } from "react-icons"
import { FiChevronDown, FiX, FiEdit, FiPlus } from "react-icons/fi"
import { getPersonas, destroyPersona } from "../actions/personas"
import { setPersona, setPersonas } from "../reducers/personas"

const Home = ({ personas, persona, getPersonas, destroyPersona }) => {
  const [personaShow, setPersonaShow] = useState(false)
  const [personaNew, setPersonaNew] = useState(false)
  const [personaEdit, setPersonaEdit] = useState(false)

  useEffect(() => { getPersonas() }, [])

  const createPersona = () => {
    setPersona({})
    setPersonaNew(false)
    setPersonas()
  }

  const changePersona = () => {
    setPersona({})
    setPersonaEdit(false)
    setPersonas()
  }

  const openPersonaShow = persona => {
    setPersona(persona)
    setPersonaShow(true)
  }

  const closePersonaShow = () => {
    setPersonaShow(false)
    setPersona({})
  }

  return (
    <>
      {/********************************************* INDEX ******************************************/}
      <Table hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>SURNAME</th>
            <th>BIRTHDAY</th>
            <th>GENDER</th>
            <th>
              <Button variant="link" onClick={ () => setPersonaNew(true) }>
                <IconContext.Provider value={{ color: "black", size: "1.6em" }}>
                  <FiPlus/>
                </IconContext.Provider>
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          { personas.map((persona, idx) => (
            <tr key={ idx } onClick={ () => openPersonaShow(persona) }>
              <td>{ persona.id }</td>
              <td>{ persona.name }</td>
              <td>{ persona.surname }</td>
              <td>{ persona.birthday }</td>
              <td>{ persona.gender === true ? "M" : persona.gender === false ? "F" : "none" }</td>
            </tr>
          )) }
        </tbody>
      </Table>
      {/*******************************************************************************************/}

      {/************************************************ SHOW MODAL ***************************************************/}
      <Modal
        show={ personaShow }
        onHide={ () => setPersonaShow(false) }
      >
        <Modal.Header>
          <Modal.Title>{ persona.name } { persona.surname }</Modal.Title>
          <IconContext.Provider value={{ color: "black", size: "1.6em" }}>
            <Button variant="link" onClick={ destroyPersona(persona.id) }>
              <FiX/>
            </Button>
            <Button variant="link" onClick={ () => {
              setPersonaShow(false)
              setPersonaEdit(true)
            }}>
              <FiEdit/>
            </Button>
            <Button variant="link" onClick={ closePersonaShow }>
              <FiChevronDown/>
            </Button>
          </IconContext.Provider>
        </Modal.Header>
        <Modal.Body>
          <Row><Col>Name</Col><Col>{ persona.name }</Col></Row>
          <Row><Col>Surname</Col><Col>{ persona.surname }</Col></Row>
          { persona.gender ? <Row><Col>Gender</Col><Col>{ persona.gender === true ? "M" : "F" }</Col></Row> : <></> }
          { persona.birthday ? <Row><Col>Birthday</Col><Col><Moment format="DD.MM.YYYY">{ persona.birthday }</Moment></Col></Row> : <></> }
        </Modal.Body>
      </Modal>
      {/***************************************************************************************************************/}

      {/**************************** NEW MODAL ****************************/}
      <Modal
        show={ personaNew }
        onHide={ () => setPersonaNew(false) }
      >
        <Modal.Header>
          NEW PERSONA
        </Modal.Header>
        <Modal.Body>
          <NewPersona addPersona={ createPersona }/>
        </Modal.Body>
      </Modal>
      {/*******************************************************************/}

      {/**************************** EDIT MODAL ***************************/}
      <Modal
        show={ personaEdit }
        onHide={ () => setPersonaEdit(false) }
      >
        <Modal.Header>
          EDIT PERSONA
        </Modal.Header>
        <Modal.Body>
          <EditPersona persona={ persona } updatePersona={ changePersona }/>
        </Modal.Body>
      </Modal>
      {/*******************************************************************/}
    </>
  )
}
//\\//\\//\\//\\//\\//\\// STATES CONNECTION //\\//\\//\\//\\//\\//
const mapStateToProps = state => {
  return {
    personas: state.personas.personas,
    persona: state.personas.persona
  }
}
export default connect(mapStateToProps, { getPersonas, destroyPersona })(Home)
//\\//\\//\\//\\//\\//\\////\\//\\//\\//\\//\\//\\////\\//\\//\\//