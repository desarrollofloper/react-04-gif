import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@/estilos/tema.tailwind.css';
import '@/estilos/tema.css';
import '@/estilos/app.css';
import GifApp from './componentes/GifApp.jsx';
import App from './componentes/estructura/App.jsx';
import { Toaster } from '@shadcn/sonner';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster richColors closeButton />
    <App className="scrollbar-modern">
      <GifApp />
    </App>
  </StrictMode>,
)
