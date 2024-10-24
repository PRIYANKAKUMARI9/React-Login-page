import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Logg from './componenet/Logg.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Logg />
    <App />
   
  </StrictMode>,
)