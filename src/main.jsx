import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'  
import { ArtiscontextProvider } from './Context/Artiscontext.jsx'   
import MusiccontextProvider  from './Context/Musiccontext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ArtiscontextProvider>
      <MusiccontextProvider>
        <App />  
        </MusiccontextProvider>
      </ArtiscontextProvider>
  </BrowserRouter>
)



