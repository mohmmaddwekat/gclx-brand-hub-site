
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add lang attribute for language support
document.documentElement.setAttribute('lang', 'en');
document.documentElement.classList.add('antialiased');

createRoot(document.getElementById("root")!).render(<App />);
