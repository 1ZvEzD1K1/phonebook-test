import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { delContact } from "../../redux/slices/contacts";
import Button from "../button/Button";
import "./style.scss";

const Table = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const { contacts } = useSelector((state) => state.contacts);

  const handleDelContact = (id) => {
    dispatch(delContact(id))
  }

  const handleEditContact = (el) => {
    history('/form', { state: el })
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Address</th>
          <th>City</th>
          <th>Country</th>
          <th>Email</th>
          <th>Number</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((el, id) => {
          return (
            <tr key={el.id} style={{backgroundColor : id % 2 ? "none" : 'rgb(202, 195, 195)'}}>
              <td>{el.fname}</td>
              <td>{el.lname}</td>
              <td>{el.address}</td>
              <td>{el.city}</td>
              <td>{el.country}</td>
              <td>
                {el.arrEmail.map((e) => {
                  return <p key={e.id}>{e.value}</p>;
                })}
              </td>
              <td>
                {el.arrNumber.map((e) => {
                  return <p key={e.id}>{e.value}</p>;
                })}
              </td>
              <td>
                <Button handleClick={() => handleEditContact(el)} text="Edit" color="rgb(11, 178, 66)" />
              </td>
              <td>
                <Button handleClick={() => handleDelContact(el.id)} text="Delete" color="rgb(233, 35, 35)" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
