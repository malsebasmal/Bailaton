import { createBrowserRouter } from 'react-router-dom'
import  { Outlet } from "react-router-dom" 
import HomePage from '@/pages/HomePage'
import SeeForYourself from '@/pages/SeeForYourself'
import WhatIsBaileton from '@/pages/WhatIsBaileton'
import WhereAndWhenBaileton from '@/pages/WhereAndWhenBaileton'
import Header from '@/components/Header'

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/seeforyourself",
        element: <SeeForYourself />
      },
      {
        path: "/whatis",
        element: <WhatIsBaileton />
      },
      {
        path: "/whereandwhen",
        element: <WhereAndWhenBaileton />
      }
    ]
  },
])

export {
  router
}