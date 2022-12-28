import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import generateID from "../../utils/generateID";
import Button from "../button/Button";
import { addContact } from "../../redux/slices/contacts";
import "./style.scss";
import validateForm from "../../utils/validateForm";

const Form = () => {
  const history = useNavigate();
  const { state } = useLocation();
  const dispatch = useDispatch();
  const [fname, setFname] = useState(state ? state.fname : "");
  const [lname, setLname] = useState(state ? state.lname : "");
  const [address, setAddress] = useState(state ? state.address : "");
  const [city, setCity] = useState(state ? state.city : "");
  const [country, setCountry] = useState(state ? state.country : "");
  const [arrEmail, setArrEmail] = useState(
    state ? state.arrEmail : [{ id: generateID(), value: "" }]
  );
  const [arrNumber, setArrNumber] = useState(
    state ? state.arrNumber : [{ id: generateID(), value: "" }]
  );

  const handleChangeEmail = (change, id) => {
    setArrEmail((prev) => {
      return prev.map((el) => {
        if (id == el.id) {
          return { ...el, value: change };
        }
        return el;
      });
    });
  };

  const handleChangeNumber = (change, id) => {
    setArrNumber((prev) => {
      return prev.map((el) => {
        if (id == el.id) {
          return { ...el, value: change };
        }
        return el;
      });
    });
  };

  const handleAddEmail = () => {
    setArrEmail((prev) => {
      return [...prev, { id: generateID(), value: "" }];
    });
  };

  const handleAddNumber = () => {
    setArrNumber((prev) => {
      return [...prev, { id: generateID(), value: "" }];
    });
  };

  const handleDelEmail = (id) => {
    setArrEmail((prev) => {
      return prev.filter((el) => el.id != id);
    });
  };

  const handleDelNumber = (id) => {
    setArrNumber((prev) => {
      return prev.filter((el) => el.id != id);
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    let validation = validateForm(
      fname,
      lname,
      address,
      city,
      country,
      arrEmail,
      arrNumber
    );
    if (validation.res) {
      dispatch(
        addContact({
          id: state ? state.id : generateID(),
          fname,
          lname,
          address,
          city,
          country,
          arrEmail,
          arrNumber,
        })
      );
      setFname("");
      setLname("");
      setAddress("");
      setCity("");
      setCountry("");
      setArrEmail([{ id: generateID(), value: "" }]);
      setArrNumber([{ id: generateID(), value: "" }]);
      history("/");
    } else {
      alert(validation.error.join("\n"));
    }
  };

  return (
    <form>
      <div className="input-wrapper">
        <p>Name:</p>
        <input
          type="text"
          placeholder="Enter the Name"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <p>Last Name:</p>
        <input
          type="text"
          placeholder="Enter the Last Name"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <p>Address:</p>
        <input
          type="text"
          placeholder="Enter the Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <p>City:</p>
        <input
          type="text"
          placeholder="Enter the City"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <p>Country:</p>
        <input
          type="text"
          placeholder="Enter the Country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <p>Email:</p>
        {arrEmail.map((el, id) => {
          return id + 1 == arrEmail.length ? (
            <div key={el.id} className="row">
              <input
                type="text"
                placeholder="Enter the Email"
                value={el.value}
                onChange={(e) => handleChangeEmail(e.target.value, el.id)}
              />
              <Button
                handleClick={handleAddEmail}
                text="Add"
                color="rgb(15, 124, 249)"
              />
            </div>
          ) : (
            <div key={el.id} className="row">
              <input
                type="text"
                placeholder="Enter the Email"
                value={el.value}
                onChange={(e) => handleChangeEmail(e.target.value, el.id)}
              />
              <Button
                handleClick={() => handleDelEmail(el.id)}
                text="Del"
                color="rgb(233, 35, 35)"
              />
            </div>
          );
        })}
      </div>
      <div className="input-wrapper">
        <p>Number:</p>
        {arrNumber.map((el, id) => {
          return id + 1 == arrNumber.length ? (
            <div key={el.id} className="row">
              <input
                type="text"
                placeholder="Enter the Number"
                value={el.value}
                onChange={(e) => handleChangeNumber(e.target.value, el.id)}
              />
              <Button
                handleClick={handleAddNumber}
                text="Add"
                color="rgb(15, 124, 249)"
              />
            </div>
          ) : (
            <div key={el.id} className="row">
              <input
                type="text"
                placeholder="Enter the Number"
                value={el.value}
                onChange={(e) => handleChangeNumber(e.target.value, el.id)}
              />
              <Button
                handleClick={() => handleDelNumber(el.id)}
                text="Del"
                color="rgb(233, 35, 35)"
              />
            </div>
          );
        })}
      </div>
      <div className="submit-wrapper">
        <Button
          handleClick={(e) => handleSave(e)}
          type="submit"
          text="Save"
          color="rgb(15, 124, 249)"
        />
      </div>
    </form>
  );
};

export default Form;
