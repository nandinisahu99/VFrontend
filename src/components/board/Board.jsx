// import { useEffect, useState } from "react"
// import './Board.css'
// import Tile from "../tile/Tile"
// import Overlay from "../overlay/Overlay"
// import NewGame from "../new-game/NewGame"
// import Winner from "../winner/Winner"

// const Board = () => {

    
//     const shuffle = () => 
//         new Array(16)
//         .fill()
//         .map((_,i) => i+1)
//         .sort(() => Math.random() -.5)
//         .map((x,i) => ({value : x , index : i}))

//     const [numbers,setNumbers] = useState([])
//     const [animating,setAnimating] = useState(false)

//     const reset = () => setNumbers(shuffle())

//     const moveTile = tile => {
//         const i16 = numbers.find(n => n.value===16).index
//         if (![i16-1,i16+1,i16-4,i16+4].includes(tile.index) || animating)
//             return
        
//         const newNumbers = 
//             [...numbers]
//             .map(number => {
//                 if (number.index !== i16 && number.index !== tile.index)
//                     return number
//                 else if (number.value === 16)
//                     return {value: 16, index: tile.index}

//                 return {value: tile.value, index : i16}
//             })
//         setAnimating(true)
//         setNumbers(newNumbers)
//         setTimeout(() => setAnimating(false), 200)
//     }
    
//     const handleKeyDown = e => {
//         const i16 = numbers.find(n => n.value===16).index
//         if (e.keyCode === 37 && !(i16 % 4 === 3))
//             moveTile(numbers.find(n => n.index === i16 + 1))
//         else if (e.keyCode === 38 && !(i16 > 11))
//             moveTile(numbers.find(n => n.index === i16 + 4))
//         else if (e.keyCode === 39 && !(i16 % 4 === 0))
//             moveTile(numbers.find(n => n.index === i16 - 1))
//         else if (e.keyCode === 40 && !(i16 < 4))
//             moveTile(numbers.find(n => n.index === i16 - 4))
//     }

//     useEffect(() => {
//         document.addEventListener('keydown',handleKeyDown)
//         return () => {document.removeEventListener('keydown',handleKeyDown)}
//     })

//     useEffect(reset, [])

//     return <div className="game">
//         <div className="board">
//             <Overlay size={16} />
//             {numbers.map ((x,i) => {
//                 return <Tile key={i} number={x} moveTile={moveTile}/>
//             })}
//         </div>
//         <Winner numbers={numbers} reset={reset}/>
//         {/* <NewGame reset={reset} /> */}
//     </div>
// }

// export default Board

import { useEffect, useState } from "react";
import './Board.css';
import Tile from "../tile/Tile";
import Overlay from "../overlay/Overlay";
import Winner from "../winner/Winner";

const Board = ({numbers,setNumbers,score,setScore,level,setLevel}) => {
    const shuffle = () => 
        new Array(36)
        .fill()
        .map((_,i) => i+1)
        .sort(() => Math.random() -.5)
        .map((x,i) => ({value : x , index : i}));

    // const [numbers,setNumbers] = useState([]);
    const [animating,setAnimating] = useState(false);

    const reset = () => setNumbers(shuffle());

    const moveTile = tile => {
        const i36 = numbers.find(n => n.value === 36).index;
        if (![i36-1, i36+1, i36-6, i36+6].includes(tile.index) || animating)
            return;
        
        const newNumbers = 
            [...numbers]
            .map(number => {
                if (number.index !== i36 && number.index !== tile.index)
                    return number;
                else if (number.value === 36)
                    return {value: 36, index: tile.index};

                return {value: tile.value, index : i36};
            });

        setAnimating(true);
        setNumbers(newNumbers);
        setTimeout(() => setAnimating(false), 200);
    };
    
    const handleKeyDown = e => {
        const i36 = numbers.find(n => n.value === 36).index;
        if (e.keyCode === 37 && !(i36 % 6 === 5))
            moveTile(numbers.find(n => n.index === i36 + 1));
        else if (e.keyCode === 38 && !(i36 > 5))
            moveTile(numbers.find(n => n.index === i36 - 6));
        else if (e.keyCode === 39 && !(i36 % 6 === 0))
            moveTile(numbers.find(n => n.index === i36 - 1));
        else if (e.keyCode === 40 && !(i36 < 6 * 5))
            moveTile(numbers.find(n => n.index === i36 + 6));
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => { document.removeEventListener('keydown', handleKeyDown); };
    }, [numbers]);

    useEffect(reset, []);

    return (
        <div className="game">
            <div className="board">
                <Overlay size={36} />
                {numbers.map ((x,i) => <Tile key={i} number={x} moveTile={moveTile} />)}
            </div>
            <Winner level={level} setLevel={setLevel} numbers={numbers} reset={reset} score={score} setScore={setScore}/>
        </div>
    );
};

export default Board;
