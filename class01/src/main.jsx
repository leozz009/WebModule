import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MyApp  } from './MyApp.jsx'  
import Presentation from './Presentation.jsx'
import Variables from './Variables.jsx' 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Presentation/>
    <MyApp/>
    <Variables/>
  </StrictMode>,
)
