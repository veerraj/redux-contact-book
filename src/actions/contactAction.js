import { CLEAR_CONTACT, CREATE_CONTACT,DELETE_CONTACT,GET_CONTACT, SELECT_CONTACT, UPDATE_CONTACT
,DELETE_SELECTED_CONTACT } from "../constant/types"


export const addContact = (contact) =>{
    return {
        type:CREATE_CONTACT,
        data:contact
    }
}

//get a contact
export const getContact = (id) => ({
    type: GET_CONTACT,
    id:id
})

//update a contact
export const updateContact = (data,id) => ({
    type: UPDATE_CONTACT,
    data:data
})

//delete a contact
export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    id:id
})

//select all contact
export const selectAllContact = (id) => ({
    type: SELECT_CONTACT,
    payload:id
})

//clear all contact
export const clearAllContact = () => ({
    type: CLEAR_CONTACT
})

//delete all contact
export const deleteAllContact = () => ({
    type: DELETE_SELECTED_CONTACT,
});


