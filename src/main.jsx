import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import StoreManage from './component/storeManager/StoreManage.jsx'
import Home from './component/Home.jsx'
import LogIn from './component/login/LogIn.jsx'

const router = createBrowserRouter ([
  {
    path:'/',
    element: <App/>,
    children: [
      {
          path:'',
          element: <Home/>,
          children: [
            {
                path:'/logIn',
                element: <LogIn/> 
            }
          ]
        
      },
      {
        path:'/storeMangement',
        element: <StoreManage/>
      }
    ]
  },
  
  
])

ReactDOM.createRoot(document.getElementById('root')).render(

 <React.StrictMode>
   <RouterProvider router={router} />
 </React.StrictMode>

)
