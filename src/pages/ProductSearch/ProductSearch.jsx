import React from 'react'
import { useProductContext } from '../../context/ListProducts'
import { useParams } from 'react-router-dom'
import Loading from '../../components/Loading'
import Product from '../../components/Product'
import { Row, Col, Container } from 'react-bootstrap'
import './productSearch.scss'

const ProductSearch = () => {
  const { value } = useParams()
  const searchValue = value.replace(/-/g, ' ')
  const context = useProductContext()
  const productsCopy = JSON.parse(JSON.stringify(context.productList))
  console.log(productsCopy)
  return (
    <Container fluid className='box-products px-5 mt-5'>
      {context.loadingStatus
        ? <Loading />
        : (
          <Row>
            <h2>Results for {searchValue}</h2>
            <Col>
              <div className='row row-cols-5'>
                {
                  productsCopy.filter(product => {
                    if (searchValue === '') {
                      return product
                    } else if (product.product_name.toLowerCase().includes(searchValue)) {
                      return product
                    }
                    return null
                  }).map((productFilter, index) => (
                    productFilter.image !== undefined && (
                      <Product
                        details={productFilter}
                        key={index}
                      />
                    )
                  ))
                }
              </div>
            </Col>
          </Row>
          )}
    </Container>
  )
}

export default ProductSearch
