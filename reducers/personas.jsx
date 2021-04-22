const initialState = {
    personas: [],
    persona: {}
}

export default function personasReducer (state = initialState, action) {
    switch (action.type) {
        case "GET_PERSONAS": return { ...state, personas: action.personas }
        case "GET_PERSONA": return { ...state, persona: action.persona }
        case "ADD_PERSONA": return { ...state, personas: [...state.personas, action.persona] }
        case "UPDATE_PERSONA": return {
            ...state,
            personas: state.personas.map(persona => {
                if (action.persona.id === persona.id) { return action.persona }
                return persona
            })
        }
        case "DESTROY_PERSONA": return {
            // FIX IT
        }
        default: return state
    }
}

//\\//\\//\\//\\//\\//\\//\\//\\// SYNCHRONOUS ACTION CREATORS //\\//\\//\\//\\//\\//\\//\\//\\//
export const setPersonas = personas => { return { type: "GET_PERSONAS", personas } }
export const setPersona = persona => { return { type: "GET_PERSONA", persona } }
export const setNewPersona = persona => { return { type: "ADD_PERSONA", persona } }
export const setEditedPersona = persona => { return { type: "UPDATE_PERSONA", persona } }
export const removeDestroyedPersona = id => { return { type: "DESTROY_PERSONA", id } }
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\
