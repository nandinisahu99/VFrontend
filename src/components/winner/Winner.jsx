import NewGame from '../new-game/NewGame'
import './Winner.css'

const Winner = ({numbers,reset,score,setScore,level,setLevel}) => {
    if (!numbers.every(n => n.value === n.index +1))  
    {
        return null
    }  
    if(!numbers.length){
       //console.log("empty")
       return null;
    }

         setScore(score+410);
         setLevel(level+1);
         
    
      

    return <div 
        className="winner">
        <p></p>
        {/* <NewGame reset={reset} /> */}
    </div>
}

export default Winner