import React from 'react'
import "../App.css"
import video from "../assets/thanks.mp4"

function Finish({score,setScore,credentials}) {
  const finalscore=()=>{
    //console.log("final");
    fetch("http://localhost:3001/api/score",{
          method: "Post",
          body: JSON.stringify({score:score,email: credentials.email}),
          headers:{
              "Content-Type":"application/json"
          }
      }).then(res=>res.json())
      .then(data=>{
        if(data.selected){
          console.log(data.message)
        }
      })
  }
  finalscore()
  return (
    <>
     <div>
        <video width="100%" height="auto" autoPlay loop muted>
            <source src={video} type="video/mp4" />
        </video>
    </div>
    {/* <div className="login instruction"> */}
    <div className='final'>Final Score: {score} </div>
    {/* </div> */}
    
    </>
  )
}

export default Finish