import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import { theme } from './themes/'

import './App.css'
// import { Router } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'

import NotFound from './pages/NotFound/'
import Home from './pages/Home/'
import CriticalProduct from './pages/CriticalProduct'
import TransportProduct from './pages/TransportProduct'


export default function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/criticalproduct" component={CriticalProduct} />
          <Route exact path="/transportproduct" component={TransportProduct} />
          <Route component={NotFound}></Route>
        </Switch>
      </ThemeProvider>
    </Router>
  )
}
