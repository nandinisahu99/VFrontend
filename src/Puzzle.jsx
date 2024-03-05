import './Puzzle.css';
import Timer from './components/Timer.jsx';
import Board from './components/board/Board.jsx'
import { useState } from 'react';

const Puzzle = ({level,setLevel,score,setScore}) => {
    const [numbers,setNumbers] = useState([]);
    return(
        <>
        <img src="/img/puzzleBG.png"></img>
    <Timer level={level} setLevel={setLevel} numbers={numbers} score={score} setScore={setScore}></Timer>
    <div className="App login"><Board level={level} setLevel={setLevel} numbers={numbers} setNumbers={setNumbers} score={score} setScore={setScore}/></div>
    </>
    )
    
}


export default Puzzle;
