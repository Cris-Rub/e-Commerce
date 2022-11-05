import React from 'react'
import BoxProducts from '../../components/BoxProducts'
import { Container } from 'react-bootstrap'

const Home = () => {
  return (
    <Container fluid className='px-5 mt-5'>
      <BoxProducts />
    </Container>
  )
}

export default Home
