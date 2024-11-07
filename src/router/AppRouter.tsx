import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import SeeForYourself from '@/pages/SeeForYourself'
import WhatIsBaileton from '@/pages/WhatIsBaileton'
import WhereAndWhenBaileton from '@/pages/WhereAndWhenBaileton'

const router = createBrowserRouter([
  {
    path: "/",
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
])

export {
  router,
  RouterProvider
}