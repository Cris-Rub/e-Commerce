import React from 'react'
import { Card } from 'react-bootstrap'
import { useProductContext } from '../../context/ListProducts'
import { useNavigate } from 'react-router-dom'
import './Product.css'

const Product = ({ details }) => {
  const context = useProductContext()
  const navigate = useNavigate()
  const setProduct = (id) => {
    context.setLoadingStatus(true)
    navigate(`/product/${id}`)
  }
  return (
    <div className='col mb-3' onClick={() => setProduct(details._id)}>
      <Card style={{ width: '15rem', height: '25rem', cursor: 'pointer' }} className='card-product'>
        <Card.Img
          fluid
          className='card-image'
          variant='top'
          src={details.image}
        />
        <Card.Body>
          <Card.Title>{details.product_name}</Card.Title>
          <Card.Text className='brand-product'>
            {details.brand}
          </Card.Text>
          <Card.Text className='priceProduct'>
            <h5><b>${details.price} MXN</b></h5>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Product
