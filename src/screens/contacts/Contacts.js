import React from 'react'
import { useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import Table from '../../components/table/Table';
import "./style.scss";

const Contacts = () => {
  const history = useNavigate();

  const handleClickAddContacts = () => {
    history('/form')
  }

  return (
    <div className='contacts'>
      <div className='container'>
        <div className='title'>
          <h3>Contacts</h3>
          <Button text="Add Contact" color="rgb(15, 124, 249)" handleClick={handleClickAddContacts} />
        </div>
        <div className='list'>
          <Table/>
        </div>
      </div>
    </div>
  )
}

export default Contacts