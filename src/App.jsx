import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from '../data'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>
        {data.map((data,index) => (
          <div key={index}>
            <img src={data.thumbnail.regular.large}/>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
