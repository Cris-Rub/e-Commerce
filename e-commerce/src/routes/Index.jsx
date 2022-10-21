import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../pages/Home'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route index element={<Navigate replace to='/home' />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default RoutesIndex
