import React from 'react'
import { useState } from 'react'
import MemoGame from './MemoGame';
import Puzzle from './Puzzle';
import Instruction from './components/Instruction';
import Finish from './components/Finish';
import Scramble from './Scramble';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


function Game({credentials,setCredentials,toggle,setToggle}) {

  const navigate = useNavigate();

 
  const [level, setLevel] = useState(0);
  const [score,setScore]=useState(0);

  if (level == 0 || level==2 || level==4){
    return (
    <>
      <Instruction level={level} setLevel={setLevel} score={score}></Instruction>
    </>
    )
  }
  else if(level == 1){
    return(
      <>
        <MemoGame level={level} setLevel={setLevel} score={score} setScore={setScore}></MemoGame>
      </>
    )
  }
  else if(level == 3){
    return(
      <Scramble level={level} setLevel={setLevel} score={score} setScore={setScore}></Scramble>
    )
  }
  else if(level == 5){
    return(
      
      <Puzzle level={level} setLevel={setLevel} score={score} setScore={setScore}></Puzzle>
    )
  }
  else if(level == 6){
    return(
      <Finish score={score} setscore={setScore} credentials={credentials} setCredentials={setCredentials}></Finish>
    )
  }
    

  return (
    <>
      <div>Instruction</div>
      <button onClick={handleGame}>start Level 1</button>

    </>

  )
}

export default Game