import React from 'react'
import { useProductContext } from '../../context/ListProducts'
import Loading from '../Loading'
import Product from '../Product'
import { Row, Col, Container } from 'react-bootstrap'
import './boxProducts.scss'

const BoxProducts = () => {
  const context = useProductContext()
  return (
    <Container fluid className='box-products'>
      {context.loadingStatus
        ? <Loading />
        : (
          <Row>
            <Col>
              <div className='row row-cols-5'>
                {
                    context.productList.map((product, index) => (
                      product.image !== undefined && (
                        <Product
                          details={product}
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

export default BoxProducts
