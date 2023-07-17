import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './main.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home';
import NavBar from './component/NavBar/NavBar';
import About from './component/About/About';
import Skills from './component/Skills/Skills';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/nav",
        element: <NavBar></NavBar>
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path: "/skills",
        element:<Skills></Skills>
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='main'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
