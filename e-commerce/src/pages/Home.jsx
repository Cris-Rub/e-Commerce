import React from 'react'
import BoxProducts from '../components/BoxProducts'
import { Container, Row, Col } from 'react-bootstrap'
import { ProductProvider } from '../context/ListProducts'

const Home = () => {
  return (
    <ProductProvider>
      <Container fluid className='px-5 mt-5'>
        <BoxProducts />
      </Container>
    </ProductProvider>
  )
}

export default Home
