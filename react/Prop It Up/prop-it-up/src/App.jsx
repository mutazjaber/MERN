import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './components/personCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PersonCard firstName={ "jane" } lastName={ "doe" } age={ 88 } hairColor={ "black" }/>
      <PersonCard firstName={ "smith" } lastName={ "john" } age={ 45 } hairColor={ "brown" }/>
      <PersonCard firstName={ "filmore" } lastName={ "millard" } age={ 50 } hairColor={ "brown" }/>
    </>
  )
}

export default App
