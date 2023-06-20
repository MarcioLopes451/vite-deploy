import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import data from '../data.json';
import hope from '../assets/thumbnails/beyond-earth/regular/large.jpg';

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
      <p className="read-the-docs">
        {data.map((data,index) => (
         <img src={data.thumbnail.regular.large} />
        ))}
      </p>
    </>
  )
}

export default App
