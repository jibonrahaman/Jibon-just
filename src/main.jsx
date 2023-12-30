import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,RouterProvider
} from "react-router-dom";
import HomePage from './Pages/HomePage.jsx';
import Profile from './Pages/AboutPage/Profile.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
   
   <Route>
     <Route
    path='/'
    element={<HomePage/>}
    />,
    
    <Route
    path='/profile'
    element={<Profile/>}
    />
   </Route>
      
  
     
     
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider  router={router}/>
  </React.StrictMode>,
)
