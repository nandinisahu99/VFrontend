import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './MemoGame.css'
import SingleCard from './components/SingleCard'
import Timer from './components/Timer'
import "./App.css"


const cardImages = [
  {"src" : "/img/img1.png", matched: false},
  {"src" : "/img/img2.png", matched: false},
  {"src" : "/img/img3.png", matched: false},
  {"src" : "/img/img4.png", matched: false},
  {"src" : "/img/img5.png", matched: false},
  {"src" : "/img/img6.png", matched: false},
  {"src" : "/img/img7.png", matched: false},
  {"src" : "/img/img8.png", matched: false},
  {"src" : "/img/img9.png", matched: false},
  {"src" : "/img/img10.png", matched: false},
  {"src" : "/img/img11.png", matched: false},
  {"src" : "/img/img12.png", matched: false},
  {"src" : "/img/img13.png", matched: false},
  {"src" : "/img/img14.png", matched: false},
  {"src" : "/img/img15.png", matched: false},
  {"src" : "/img/img16.png", matched: false},
  {"src" : "/img/img17.png", matched: false},
  {"src" : "/img/img18.png", matched: false},
  {"src" : "/img/img19.png", matched: false},
  {"src" : "/img/img20.png", matched: false},
  {"src" : "/img/img21.png", matched: false},
  {"src" : "/img/img22.png", matched: false},
  {"src" : "/img/img23.png", matched: false},
  {"src" : "/img/img24.png", matched: false},
  {"src" : "/img/img25.png", matched: false},
  {"src" : "/img/img26.png", matched: false},
  {"src" : "/img/img27.png", matched: false},
  {"src" : "/img/img28.png", matched: false},
  {"src" : "/img/img29.png", matched: false},
  {"src" : "/img/img30.png", matched: false},
  {"src" : "/img/img31.png", matched: false},
  {"src" : "/img/img32.png", matched: false},
  {"src" : "/img/img33.png", matched: false}

]

function MemoGame({level,setLevel,score,setScore}) {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)
  // const [memoScore, setMemoScore] = useState(0)

  const shuffleCards = ()=>{
    const shufledCards = [...cardImages, ...cardImages]
    .sort(()=> Math.random()-0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setChoiceOne(null)
    setChoiceTwo(null)
    setCards(shufledCards)
    setTurns(0)
  }

  const handleChoice = (card) =>{
     choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  useEffect(()=>{
    if(choiceOne && choiceTwo){
      setDisabled(true)
      if(choiceOne.src === choiceTwo.src){
        setCards(prev => {
          return prev.map((card) => {
            if(card.src === choiceOne.src){
                setScore(score+5)
                console.log(score)
                if(score===160) setLevel(level+1);
              return {...card, matched: true}
            } else{
              return card
            }
          })
        })
        resetTurns()
      } else{
        
        setTimeout(() => resetTurns(), 1000)
      }
    }
  }, [choiceOne, choiceTwo])

  console.log(cards)

  const resetTurns = ()=>{
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prev => prev + 1)
    setDisabled(false)
  }

  useEffect(()=>{
    shuffleCards()
  },[])

  return (
    <>
    <img src="/img/memoGameBG.png"></img>
    <Timer level={level} setLevel={setLevel}></Timer>
   
    <div className='app'>
      
      {/* <button onClick={shuffleCards}>New Game</button> */}
      <div className='card-grid'>
        {cards.map(card => (
          <SingleCard
          key={card.id}
          card={card}
          handleChoice={handleChoice}
          flipped={card === choiceOne || card === choiceTwo || card.matched}
          disabled={disabled}
          />
        ))}
      </div>
      <p>Score: {score}</p>
    </div>
    </>
  )
}

export default MemoGame
