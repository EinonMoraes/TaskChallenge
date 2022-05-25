import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="App">
      <header className="header">
        <h1>Today</h1>
        

        <div className="Tasklist-input">
         <input
           type="text"
           placeholder=" O que voçê quer fazer hoje?"
           />
        </div>

        <button type="submit" data-testid="add-task-button"  >

        </button>
        
      </header>
    </section>
  )
}

export default App
