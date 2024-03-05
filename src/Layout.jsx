import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import video from "./assets/loginBG.mp4"
import './App.css'
import Game from './Game'

function Layout({toggle,setToggle,credentials,setCredentials}) {
    return (
        <>
        {
            (toggle)?<><div className='video-container'>
            <video width="100%" height="auto" autoPlay loop muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>
        <Header />
        
        <Outlet /></>:
        <Game  credentials={credentials} setCredentials={setCredentials} toggle={toggle} setToggle={setToggle}></Game>
        }
            

        </>
    )
}

export default Layout