import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import './index.css'
import App from './App.jsx'
import { setRoundedFavicon } from './utils/favicon'

// Set circle favicon dynamically for the browser tab
setRoundedFavicon('/official-logo.png');

createRoot(document.getElementById('root')).render(<App />)

