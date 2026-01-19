import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [userName, setUserName] = useState("Guest");
  useEffect(() => {
  document.title = `Welcome, ${userName}`;
}, [userName]);

  return (
    <div>
          <h1>Hello, {userName}!</h1>
    <input
      type="text"
      value={userName}
      onChange={(e) => setUserName(e.target.value)}
    />
    </div>
  )
}

export default App
