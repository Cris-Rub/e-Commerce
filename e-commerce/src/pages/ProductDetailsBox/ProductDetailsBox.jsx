import React from 'react'
import { useParams } from 'react-router-dom'
import ProductDetails from '../../components/ProductDetails'
import { ProductProvider } from '../../context/ListProducts'
import { Container } from 'react-bootstrap'
import './productDetailsBox.scss'

const ProductDetailsBox = () => {
  const { id } = useParams()
  return (
    <ProductProvider>
      <Container fluid className='product-details px-5 mt-5'>
        <ProductDetails
          productId={id}
        />
      </Container>
    </ProductProvider>
  )
}

export default ProductDetailsBox
