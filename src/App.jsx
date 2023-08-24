import { useState } from 'react'
import './App.css'
import Header from './Components/Header';

function App() {
  const [playerOne, setPlayerOne] = useState(30);
  const [playerTwo, setPlayerTwo] = useState(30);
  const [currentTurn, setCurrentTurn] = useState("playerOne");
  const [attackPoints, setAttackPoints] = useState(0);

  return (
    <>
      <div>
        <Header />
      </div>
    </>
  )
}

export default App
