import { useState } from 'react'
import './App.css'

function App() {
  const users = useState(0)

  fetch('/users.json')
    .then(res=> res.json())
    .then(data => users = data)
  return (
    <>
      <h1>Lista de usuários:</h1>
      {JSON.stringify(users)}
    </>
  )
}

export default App
