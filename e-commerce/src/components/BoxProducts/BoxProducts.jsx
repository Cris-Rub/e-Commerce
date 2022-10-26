import React from 'react'
import { useProductContext } from '../../context/ListProducts'
import Loading from '../Loading'
import Product from '../Product'
import { Row, Col } from 'react-bootstrap'

const BoxProducts = () => {
  const context = useProductContext()
  return (
    context.loadingStatus
      ? <Loading />
      : (
        <Row>
          <Col>
            <div id='box-products' className='row row-cols-5'>
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
        )
  )
}

export default BoxProducts
