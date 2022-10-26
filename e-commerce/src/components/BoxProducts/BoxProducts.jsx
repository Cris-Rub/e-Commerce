import React from 'react'
import { useProductContext } from '../../context/ListProducts'
import Loading from '../Loading'
import { Row, Col } from 'react-bootstrap'

const BoxProducts = () => {
  const context = useProductContext()
  return (
    context.loadingStatus
      ? <Loading />
      : (
        <Row>
          <Col>
            <div id='box-products' className='row row-cols-4'>
              {
                  context.productList.map((product, index) => (
                    product.image !== undefined && (
                      <div>
                        {product.product_name}
                      </div>
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
