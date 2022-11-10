import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import Loading from '../Loading'
import { useProductContext } from '../../context/ListProducts'
import { Row, Card, Button, Container } from 'react-bootstrap'
import { AuthContext } from '../../context/AuthContext'
import './productDetails.scss'

const ProductDetails = ({ productId }) => {
  const { isAuth } = useContext(AuthContext)
  const BASE_URL = 'https://ecomerce-master.herokuapp.com/api/v1/'
  const [product, setProduct] = useState({})
  const context = useProductContext()

  useEffect(() => {
    axios
      .get(`${BASE_URL}item/${productId}`)
      .then(({ data }) => {
        setProduct(data)
        context.setLoadingStatus(false)
      })
      .catch((error) => console.log(error))
    context.setLoadingStatus(false)
  }, [productId])
  return (
    <Container fluid className='product-details m-3'>
      {context.loadingStatus
        ? <Loading />
        : (
          <Card border='light' className='card-product-details'>
            <Card.Header as='h5'>{product.product_name}</Card.Header>
            <Card.Body>
              <Row>
                <div className='col-5 align-self-center'>
                  <Card.Img
                    fluid
                    className='product-image'
                    src={product.image}
                  />
                </div>
                <div className='col-7'>
                  <Card.Title className='card-product-details__title mb-5'>Details</Card.Title>
                  <Card.Text>
                    {product.description}
                  </Card.Text>
                  <Card.Text>
                    Brand: {product.brand}
                  </Card.Text>
                  <Card.Title className='fs-4' id='product-price'>${product.price} MXN</Card.Title>
                  <Card.Title className='card-product-details__shipping fs-5 '>Free shipping!</Card.Title>
                  <Card.Text>
                    <i className='bi bi-truck' style={{ color: 'rgb(0, 10, 59)', fontSize: '20px' }} />
                    Estimated delivery on <b>Dec 16</b>
                  </Card.Text>
                  <Row>
                    <div className='col-12 align-self-end'>
                      {
                        !isAuth
                          ? (
                            <>
                              <Button variant='danger' size='sm' disabled>Buy now</Button>{' '}
                              <Button variant='warning' size='sm' disabled>Add to cart</Button>{' '}
                              <Card.Text className='text-muted'>
                                Please log in or sign up to enjoy all the features we offer!
                              </Card.Text>
                            </>
                            )
                          : (
                            <>
                              <Button variant='danger' size='sm'>Buy now</Button>{' '}
                              <Button variant='warning' size='sm'>Add to cart</Button>{' '}
                            </>
                            )
                      }
                    </div>
                  </Row>
                </div>
              </Row>
            </Card.Body>
          </Card>
          )}
    </Container>
  )
}

export default ProductDetails
