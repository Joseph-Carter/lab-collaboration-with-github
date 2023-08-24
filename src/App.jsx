import { useState } from 'react'
import './App.css'
import Header from './Components/Header';
import PlayerOne from './Components/PlayerOne';
import PlayerTwo from './Components/PlayerTwo';
import Button from './Components/Button';

function App() {
  const [playerOne, setPlayerOne] = useState(30);
  const [playerTwo, setPlayerTwo] = useState(30);
  const [currentTurn, setCurrentTurn] = useState("playerOne");
  const [attackPoints, setAttackPoints] = useState(0);

  return (
    <>
      <div>
        <Header />
        <PlayerOne />
        <PlayerTwo />
        <Button />
      </div>
    </>
  )
}

export default App
