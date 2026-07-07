import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import './index.css'
import App from './App.jsx'
import { setRoundedFavicon } from './utils/favicon'

// Set rounded favicon dynamically
setRoundedFavicon('/official-logo.png', 0.22);

createRoot(document.getElementById('root')).render(<App />)
