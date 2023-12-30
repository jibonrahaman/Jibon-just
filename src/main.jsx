import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,RouterProvider
} from "react-router-dom";
import HomePage from './Pages/HomePage.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
   
    <Route
    path='/'
    element={<HomePage/>}
    />
      
  
     
     
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider  router={router}/>
  </React.StrictMode>,
)
