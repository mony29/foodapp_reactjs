import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // Why app render twice --> because <StrictMode>
  // it only on dev but not production
  <StrictMode>
    <App />
  </StrictMode>,
)
