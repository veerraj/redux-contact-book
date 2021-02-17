import React,{useState} from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getContact } from "../actions/contactAction";

export default function UserData(props) {
  const [selectAll,setSelectAll] = useState(false);
  const disptach = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);

  const DeleteContact = (id) => {
    disptach(deleteContact(id));
  };
  return (
    <tr>
      <td>
        <div className="custom-control custom-checkbox">
          <input
            id={"selectAll"+props.index}
            type="checkbox"
            className="custom-control-input"
            checked={props.selectAll}
            onChange={()=>setSelectAll(!selectAll)}
            // value={selectAll}
            // onClick={(e)=>setSelectAll(!selectAll)}
          />
          <label htmlFor={"selectAll"+props.index} className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar
          round={true}
          size="45"
          className="mr-2"
          name={props.contact.name}
        />
        {props.contact.name}
      </td>
      <td>{props.contact.phone}</td>
      <td>{props.contact.email}</td>
      <td className="actions">
        <Link to={"/contacts/edit/" + props.contact.id}>
          <span className="material-icons">edit</span>
        </Link>
        <span
          className="material-icons text-danger"
          style={{
            cursor: "pointer",
          }}
          onClick={() => DeleteContact(props.contact.id)}
        >
          remove_circle
        </span>
      </td>
    </tr>
  );
}
