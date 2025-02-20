import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Components
import CardExperience from './components/Card-Experience'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      
      <CardExperience role="Wordpress Engineer" company="Vectorial SA" duration="2022 - present" description="descripción del cargo" />
      <CardExperience role="Webmaster" company="Universidad Manuela Beltrán" duration="2021 - 2022" description="descripción del cargo" />
      <CardExperience role="Freelance" company="" duration="2018 - present" description="descripción del cargo" />
    </>
  )
}

export default App
