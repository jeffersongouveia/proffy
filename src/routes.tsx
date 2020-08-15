import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Landing from './pages/Landing'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Success from './pages/Success'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />

      <Route path="/login" component={LogIn} />
      <Route path="/sign-up" exact component={SignUp} />
      <Route path="/sign-up/success" component={Success} />

      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
    </BrowserRouter>
  )
}

export default Routes
