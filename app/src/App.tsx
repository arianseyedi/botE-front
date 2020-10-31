import { CssBaseline } from '@material-ui/core'
import React from 'react'
import './App.css'
import { Routes } from './routes'


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <div className="App">
        <header className="minterview"></header>
        <div style={{ width: '100%', height: '100%' }}>
          <Routes />
        </div>
      </div>
    </React.Fragment>
  )
}

export default App
