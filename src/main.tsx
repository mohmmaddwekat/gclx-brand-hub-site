
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add lang attribute for language support
document.documentElement.setAttribute('lang', 'en');
document.documentElement.classList.add('antialiased');

// Reset any potential body margin/padding
document.body.style.margin = '0';
document.body.style.padding = '0';
document.body.style.width = '100%';
document.body.style.overflowX = 'hidden';

createRoot(document.getElementById("root")!).render(<App />);
