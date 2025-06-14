import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { HelmetProvider } from 'react-helmet-async';
import  Root  from './Components/Root/Root.jsx';
import About from './Components/About/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element: <About></About>
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
