
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add dir attribute to support RTL for Arabic
document.documentElement.setAttribute('lang', 'en');
document.documentElement.setAttribute('dir', 'ltr');
document.documentElement.classList.add('antialiased');

createRoot(document.getElementById("root")!).render(<App />);
