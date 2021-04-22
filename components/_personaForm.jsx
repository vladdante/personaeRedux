// import PropTypes from 'prop-types'
// import React, { useState } from 'react'
// import { Button, ButtonGroup, Form, ToggleButton } from "react-bootstrap"
//
// const FormPersona = props => {
//   const [eachEntry, setEachEntry] = useState(props.persona)
//   const gender_radios = [ { name: "M", value: true }, { name: "F", value: false } ]
//
//   const handleInputChange = event => {
//     setEachEntry({ ...eachEntry, [event.target.name]: event.target.value })
//   }
//
//   return(
//     <Form onSubmit={ handleSubmit }>
//       <Form.Control placeholder="Name"
//                     name="name"
//                     value={ eachEntry.name }
//                     onChange={ handleInputChange }
//       />
//
//       <Form.Control placeholder="Surname"
//                     name="surname"
//                     value={ eachEntry.surname }
//                     onChange={ handleInputChange }
//       />
//
//       <Form.Control type="date"
//                     name="birthday"
//                     value={ eachEntry.birthday }
//                     onChange={ handleInputChange }
//       />
//
//       <ButtonGroup toggle>
//         {
//           gender_radios.map((radio, idx) => (
//             <ToggleButton key={ idx }
//                           type="radio"
//                           variant="outline-dark"
//                           name="gender"
//                           value={ radio.value }
//                           checked={ eachEntry.gender === radio.value }
//                           onChange={ handleInputChange }
//             >
//               { radio.name }
//             </ToggleButton>
//           ))
//         }
//       </ButtonGroup>
//
//       <Button variant="outline-dark" type="submit">DONE</Button>
//     </Form>
//   )
// }
//
// export default FormPersona
//
// FormPersona.propTypes = {  }
//
