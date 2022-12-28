import React from "react";
import { useLocation } from "react-router-dom";
import Form from '../../components/form/Form';
import "./style.scss";

const FormControl = () => {
  const { state } = useLocation();

  return (
    <div className="form-control">
      <div className="container">
        <div className="title">
          <h3>{state ?  "Edit Selected Contact" : "Register New Contact"}</h3>
        </div>
        <div className="form-wrapper">
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default FormControl;
