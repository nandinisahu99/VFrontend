import React from 'react'
import '../App.css'
import video from "../assets/instruction.mp4"


function Instruction({level,setLevel, score}) {

const gameplay=[<div>
  <p>Welcome to "Horror Night"!</p>
  <p>In this thrilling adventure game, you find yourself trapped in a haunted house,</p>
  <p>and your only way out is to conquer three challenging levels</p>
  <p> Each level presents you with a unique task that you must solve to progress.</p>
  <p> Are you ready to face your fears and escape the clutches of the haunted house?</p>
  <p className='ins'>Instructions</p>
  <p>To clear the 1st level you need to find all the matching pairs</p>
  <p>Turn over two cards at a time by clicking on them. If the cards match you will earn score </p>
</div>,

<div>
  <p>Congratulations, You have reached level 2</p>
  <p className='ins'>Instructions</p>
  <p>You’ll see a 4x4 grid with numbered tiles.</p>
  <p>Click on a tile adjacent to the empty space to slide it into the empty position</p>
  <p>The tiles are initially scrambled, and your task is to Arrange the numbered tiles in ascending order from 1 to 15.</p>
</div>,

<div>
<p>Congratulations, You have reached level 3</p>
<p className='ins'>Instructions</p>
  <p>You’ll see a set of jumbled letters on the screen</p>
  <p>Your goal is to rearrange the scrambled letters to form valid words.</p>
  <p>The clock is ticking, so think fast!</p>
</div>


]
console.log()

const handleClick = ()=>{
    setLevel(level+1)
}

  return (
    <>
    <div>
        <video width="100%" height="auto" autoPlay loop muted>
            <source src={video} type="video/mp4" />
        </video>
    </div>
    <div className='score'>Score : {score}</div>
    <div className="login instruction">
    <div>{gameplay[level/2]}</div>
    </div>
    <button onClick={handleClick} className='levelstart'><div>Start Level:{level/2+1}</div></button>
    </>
    
  )
}

export default Instruction