import { useEffect, useState } from 'react'
import './Scramble.css'
import Timer from './components/Timer';
// import DisableDevtool from 'disable-devtool';

// DisableDevtool();


function Scramble({ level, setLevel, score, setScore}) {

    const [wordText, setWordText] = useState('')
    const [hintText, setHintText] = useState('')
    const [timer, setTimer] = useState((5));
    const [inputValue, setInputValue] = useState('');
    const [correctWord, setCorrectWord] = useState('');
    // const [score, setScore] = useState(0);
    const [questionno, setquestionno] = useState(0);

    //let mp;


    let leng

    const words = [
        {
            word: "nightmare",
            hint: "A distressing thing that evokes feelings of fear"
        },
        {
            word: "ambulance",
            hint: "A specialized vehicle equipped to transport sick"
        },
        {
            word: "blackwidow",
            hint: "A mutant with rectractable adamantium claws nd healing factor."
        },
        {
            word: "sedan",
            hint: "A large, luxurious vehicle often associated with comfort and prestige."
        },
        {
            word: "battery",
            hint: "These power our devices and keep them running when they’re not plugged in."
        },
        {
            word: "dreadful",
            hint: "Extremely bad, shocking, or terrifying."
        },
        {
            word: "internet",
            hint: "You’re using it right now to read this!"
        },
        {
            word: "research",
            hint: "Scientists use this process to gather information and learn new things."
        },
        {
            word: "haunted",
            hint: "Being inhabited or frequented by ghosts or spirits, causing a sense of unease or fear."
        },
        
        {
            word: "desperate",
            hint: "state of urgent longing or desire"
        },
        {
            word: "electronics",
            hint: "It’s all about circuits."
        },
        {
            word: "monster",
            hint: "A frightening or unnatural creature."
        },
        {
            word: "suspense",
            hint: "The feeling of anticipation or tension, often used in horror narratives."
        },
        {
            word: "thriller",
            hint: "A genre of literature or film characterized by suspense, excitement, and unexpected twists"
        },
        
        {
            word: "phobia",
            hint: "An irrational fear of a specific object, situation, or activity"
        },
        {
            word: "paranormal",
            hint: "Beyond the scope of normal scientific understanding; related to supernatural phenomena"
        },
        {
            word: "catch",
            hint: "snagging a ball is essential in different sports."
        },
        {
            word: "phantom",
            hint: "A ghost or spirit that is often perceived as an illusion."
        },
        {
            word: "bulldozer",
            hint: "Used for pushing soil, debris, or other materials"
        },
        {
            word: "rugby",
            hint: "A rough and physical team sport played with different shaped ball."
        },
        {
            word: "shadow",
            hint: "A dark, often ghostly figure."
        },
        {
            word: "energy ",
            hint: "It’s what fuels our planet."
        },
        {
            word: "wraith",
            hint: "A ghostly apparition or specter."
        },
        {
            word: "science",
            hint: " It’s not magic, but it feels like it sometimes"
        },
        {
            word: "swimming",
            hint: "Her strokes cut through the liquid medium, propelling her forward with grace."
        },
        {
            word: "repulsive",
            hint: "Causing a strong feeling of disgust or aversion"
        },
        {
            word: "annabelle",
            hint: "a cursed doll"
        },
        {
            word: "software",
            hint: "It’s essential for using your computer effectively"
        },
        {
            word: "frightening",
            hint: "Making someone feel afraid or anxious"
        },
        
        {
            word: "goosebumps",
            hint: "A temporary roughness or small raised areas on the skin caused by fear or excitement."
        },
        {
            word: "wicked",
            hint: "The witch cast this spell on the villagers"
        },
        
        {
            word: "transport",
            hint: "It’s essential for trade and movement."
        },
        {
            word: "traumatizing",
            hint: "shocking and severely upsetting someone for an extended period"
        },
        
        {
            word: "rickshaw",
            hint: "A small, three-wheeled vehicle commonly found in Asian countries."
        },
        
        {
            word: "elevator",
            hint: "A vehicle that moves on tracks within a building."
            
        },
        {
            word: "bicycle",
            hint: "A lightweight vehicle with pedals."
        },
        {
            word: "spooky",
            hint: "Suggestive of ghosts or supernatural occurrences"
        },
        {
            word: "creepy",
            hint: "Often associated with a sense of being watched or stalked."
        },
        {
            word: "basketball",
            hint: "A high-flying sport played on a court with a hoop"
        },
        {
            word: "airplane",
            hint: "Commonly used for long-distance travel"
        },
        {
            word: "petrifying",
            hint: "Causing extreme fear"
        },
        {
            word: "karate",
            hint: "A martial art that originated in Okinawa, Japan."
        },
        {
            word: "olympics",
            hint: "The sporting event that brings athletes together from various countries."
        },
        {
            word: "competition",
            hint: "A contest where individuals or teams compete against each other."
        },
        
        {
            word: "supernatural",
            hint: "Pertaining to forces or beings beyond the natural world."
        },
        {
            word: "machine",
            hint: "that can perform tasks without human intervention"
        },
        {
            word: "sprint",
            hint: "they excel in this short-distance race."
        },
        {
            word: "download",
            hint: "When you want to save a file from the internet onto your device, you do this action"
        },
        {
            word: "rocket",
            hint: "a vehicle which goes to moon"
        },
        {
            word: "balloon",
            hint: "A non-powered aircraft filled with hot air or gas"
        },
        {
            word: "coast",
            hint: "To move along the shoreline or near the edge of land or water."
        },
       
        {
            word: "gadgets",
            hint: "They’re often portable and have various functions."
        },
        {
            word: "sailboat",
            hint: "A boat that harness wind power for propulsion."
        },
        {
            word: "computer",
            hint: "It’s an essential part of your digital life."
        },
        {
            word: "bloodymary",
            hint: "A folklore figure invoked in mirrors."
        }
        
    ];


    leng = words.length

    useEffect(() => {
        initGame();

    }, []);

    useEffect(() => {
        if (timer == 0) {
            initGame()
        }
        const interval = setInterval(() => {
            setTimer((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [timer]);



    const initGame = () => {
        setTimer(30);

        setquestionno(questionno + 1)
        //console.log(questionno)
        //console.log(conq)
        if (questionno >= leng) {
            // setLevel(level+1)
            // console.log("Stop")
        }
        else {
            let randomObj = words[questionno];
            let wordArray = randomObj.word.split("");
            for (let i = wordArray.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
            }
            setWordText(wordArray.join(""));
            setHintText(randomObj.hint);
            setCorrectWord(randomObj.word.toLowerCase());
            setInputValue("");
        }
    };

    const checkWord = () => {
        let userWord = inputValue.toLowerCase();
        if (!userWord) return alert("Please enter the word to check!");
        if (userWord !== correctWord)
            return alert(`Oops! ${userWord} is not a correct word`);

        alert(`Congrats! ${correctWord.toUpperCase()} is the correct word`);
        setScore((score => score + 10));
        // console.log(score);
        initGame();
    };

    return (
        <>
        <img src="/img/scrambleBG.png"></img>
        <Timer level={level} setLevel={setLevel}></Timer>
        <div className="container login">
            <h2>Word Scramble</h2>
            <div className="content">
                <p className="word">{wordText}</p>
                <div className="details">
                    <p className="hint">Hint: <span>{hintText}</span></p>
                    <p className="time">Time Left: <span><b>{timer}</b>s</span></p>
                </div>
                <input type="text" spellCheck={false} placeholder="Enter a valid word" value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <div className="buttons">
                    <button className="refresh-word" onClick={initGame}>Refresh Word</button>
                    <button className="check-word" onClick={checkWord}>Check Word</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Scramble;

