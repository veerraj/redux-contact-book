import React, { useState,useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { clearAllContact, selectAllContact,deleteAllContact } from "../actions/contactAction";
import UserData from "./userdata";

export default function Contact() {
  const [selectAll, setSelectAll] = useState(false);
  const dispatch = useDispatch()
  const contacts = useSelector((state) => state.contacts.contacts);
  const selctedContacts = useSelector((state) => state.contacts.selectedContacts);

  useEffect(() => {
      if(selectAll){
          dispatch(selectAllContact(contacts.map(contact=>contact.id))) 
      }else{
          dispatch(clearAllContact())
      }
  }, [selectAll])
  return (
    <div className="container">
     {selctedContacts.length > 0 ? (
        <button
          className="btn btn-danger mb-3"
          onClick={() => dispatch(deleteAllContact())}
        >
          delete all
        </button>
      ) : null}
      <table className="table shadow">
        <thead className="bg-danger text-white">
          <tr>
            <th scope="col">
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  className="custom-control-input"
                  value={selectAll}
                  onClick={() => setSelectAll(!selectAll)}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <UserData key={index} index={index} contact={contact} selectAll={selectAll} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
