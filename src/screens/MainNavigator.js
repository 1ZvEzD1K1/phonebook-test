import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Contacts from './contacts/Contacts'
import FormControl from './formcontrol/FormControl'

const MainNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Contacts/>} />
      <Route path="form" element={<FormControl/>} />
    </Routes>
  )
}

export default MainNavigator