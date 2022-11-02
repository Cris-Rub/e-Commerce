import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetailsBox from '../pages/ProductDetailsBox'
import Error from '../pages/Error'
import ProductSearch from '../pages/ProductSearch'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route index element={<Navigate replace to='/home' />} />
      <Route path='/home' element={<Home />} />
      <Route path='/product/:id' element={<ProductDetailsBox />} />
      <Route path='/search/:value' element={<ProductSearch />} />
      <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default RoutesIndex
