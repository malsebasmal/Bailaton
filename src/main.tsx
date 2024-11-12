import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from "@/router/AppRouter"
import Header from "./components/Header"
import './index.css'
import "./reset.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Header /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
