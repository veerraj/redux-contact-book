import React, { useState,useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import shortid from "shortid";
import { addContact, getContact,updateContact } from "../actions/contactAction";

export default function EditContact() {
  const {id} = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const contact = useSelector(state => state.contacts.contact)
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const UpdateContact = (e) => {
    e.preventDefault();
    const update_contact = {
        id,
        name,
        email,
        phone,
    }
    dispatch(updateContact(update_contact));
    history.push("/");
  };

  useEffect(() => {
     if(contact){
         setName(contact.name)
         setEmail(contact.email)
         setPhone(contact.phone)
     }
     dispatch(getContact(id))
  }, [contact])

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Add a contact</div>
      <div className="card-body">
        <form onSubmit={(e) => UpdateContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <button className="btn btn-warning">Update Contact</button>
        </form>
      </div>
    </div>
  );
}
