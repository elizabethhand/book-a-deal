import { Switch, Route, Redirect } from 'react-router-dom'
import React, { useState } from 'react'
import './styles/App.css'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Header from './pages/Header'
import Itempage from './pages/Itempage'
import Register from './pages/Register'
import Basket from './pages/Basket'

function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Homepage />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/item">
            <Itempage />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/basket">
            <Basket />
          </Route>
        </Switch>
      </main>

    </div >
  )
}

export default App
