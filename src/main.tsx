import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router, RouterProvider } from "@/router/AppRouter"
import Header from './components/Header'
import './index.css'
import "./reset.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Header /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
