import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails/ProductDetails'
import Error from '../pages/Error'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route index element={<Navigate replace to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/product/:id' element={<ProductDetails />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default RoutesIndex
