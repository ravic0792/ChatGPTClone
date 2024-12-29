import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/homepage/HomePage.jsx'
import DashboardPage from './routes/dashboardPage/DashboardPage.jsx'
import ChatPage from './routes/chatPage/ChatPage.jsx'
import DashboardLayout from './layouts/dashboardLayout/DashboardLayout.jsx'
import RootLayout from './layouts/rootLayout/RootLayout.jsx'
import SignInPage from './routes/signInPage/signInPage.jsx'
import SignUpPage from './routes/signUpPage/signUpPage.jsx'

const router=createBrowserRouter([
  {
    element:<RootLayout/>,
    children:[
      {
        path:"/",
        element:<Homepage/>
      },
      {
        path:"/sign-in/*",
        element:<SignInPage/>
      },
      {
        path:"/sign-up/*",
        element:<SignUpPage/>
      },
      {
        element:<DashboardLayout/>,
        children:[
          {
            path:"/dashboard",
            element:<DashboardPage/>
          },
          {
            path:"/dashboard/chats/:id",
            element:<ChatPage/>
          }
        ]
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
