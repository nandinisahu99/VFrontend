// import React from 'react'
// import ReactDOM from 'react-dom/client'

// import './index.css'
// import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
// import Register from './components/Register.jsx'
// import Login from './components/Login.jsx'
// import Layout from './Layout.jsx'
// import MemoGame from './MemoGame.jsx'
// import Timer from './components/Timer.jsx'
// import Puzzle from './Puzzle.jsx'
// import Game from './Game.jsx'
// import Home from './Home.jsx'
// import { useState } from 'react'


// const [credentials, setCredentials] = useState({
//   email: '',
//   password: ''
// });

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/" element={<Layout></Layout>}>
//         <Route path='/' element={<Home></Home>}></Route>
//         <Route path="register" element={<Register></Register>} />
//         <Route path="login" element={<Login credentials={credentials} setCredentials={setCredentials}></Login>} />
//       </Route>
//       <Route path="/game" element={<Game credentials={credentials} setCredentials={setCredentials}></Game>}></Route>
//     </>

//   )
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>

//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )


import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Layout from './Layout.jsx'
import Home from './Home.jsx'
import { useState } from 'react'

const App = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [toggle,setToggle]=useState(true);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout toggle={toggle} setToggle={setToggle} credentials={credentials} setCredentials={setCredentials}/>}>
          <Route path='/' element={<Home />} />
          <Route
            path="register"
            element={<Register />}
          />
          <Route
            path="login"
            element={<Login credentials={credentials} setCredentials={setCredentials} toggle={toggle} setToggle={setToggle} />}
          />
        </Route>
        {/* <Route
          path="/game"
          element={<Game credentials={credentials} setCredentials={setCredentials} />}
        /> */}
      </>
    )
  );

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);
