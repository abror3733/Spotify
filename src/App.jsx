import React from 'react'
import './App.css'
import App1 from '././components/App1/App1'
import Login from './pages/Login'

function App() {
  const code =new URLSearchParams(window.location.search).get('code')
  return (
    code ? <App1 code={code}/> : <Login/>
  )
}

export default App