import React from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider } from "primereact/api";
import App from './App'
import './index.css'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PrimeReactProvider>
       <App />
    </PrimeReactProvider>
  </React.StrictMode>
)