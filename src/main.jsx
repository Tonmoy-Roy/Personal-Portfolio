import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { HelmetProvider } from 'react-helmet-async';
import Root from './Components/Root/Root.jsx';
import About from './Components/About/About.jsx';
import Works from './Components/Works/Works.jsx';
import Contact from './Components/Contact/Contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <About></About>
      },
      {
        path: "/works",
        element: <Works></Works>
      },
      {
        path: "/contact",
        element: <Contact></Contact>
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
