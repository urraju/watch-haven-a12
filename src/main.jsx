import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Routes.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthContext from './AuthContext/AuthContext.jsx'
const client = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthContext>
  <QueryClientProvider client={client}>
   <RouterProvider router={router}/>
   </QueryClientProvider>
  </AuthContext>
  </React.StrictMode>,
)
