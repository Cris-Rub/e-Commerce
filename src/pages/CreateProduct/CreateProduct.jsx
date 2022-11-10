import React, { useState } from 'react'
import { Card, Container, Form, Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { createProduct } from '../../services/userServices'
import './createProduct.scss'

const CreateProduct = () => {
  const [show, setShow] = useState(false)
  const [modalMessage, setModalMessage] = useState('')
  const handleClose = () => setShow(false)

  const sendData = async (data) => {
    console.log(data)
    try {
      const result = await createProduct(data)
      if (result.status === 200) {
        setModalMessage('Product created successfully!')
        setShow(true)
      }
    } catch (error) {
      setModalMessage(error.message)
      setShow(true)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    isActive: true,
    product_name: '',
    description: '',
    price: 0,
    category: '',
    brand: '',
    sku: '',
    image: ''
  })
  return (
    <Container fluid>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant='warning' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className='row create-product m-3'>
        <div className='col-12 col-md-9 col-lg-7 col-xl-6'>
          <Card className='create-product__card'>
            <Card.Body className='p-5'>
              <Card.Title className='create-product__title mb-5'>Create a product</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-4'>
                  <Form.Label>Name product</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter your pruduct name'
                    name='product_name'
                    id='product_name'
                    value={input.product_name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter the product description'
                    name='description'
                    id='description'
                    value={input.description}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Label>Price</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Enter the product price'
                    name='price'
                    id='price'
                    min='1'
                    value={Number(input.price)}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    id='category'
                    name='category'
                    value={input.category}
                    onChange={handleInputChange}
                  >
                    <option value=''>Choose...</option>
                    <option value='Books'>Books</option>
                    <option value='Movies'>Movies</option>
                    <option value='Music'>Music</option>
                    <option value='Games'>Games</option>
                    <option value='Electronics'>Electronics</option>
                    <option value='Computers'>Computers</option>
                    <option value='Home'>Home</option>
                    <option value='Garden'>Garden</option>
                    <option value='Tools'>Tools</option>
                    <option value='Grocery'>Grocery</option>
                    <option value='Health'>Health</option>
                    <option value='Beauty'>Beauty</option>
                    <option value='Toys'>Toys</option>
                    <option value='Kids'>Kids</option>
                    <option value='Baby'>Baby</option>
                    <option value='Clothing'>Clothing</option>
                    <option value='Shoes'>Shoes</option>
                    <option value='Jewelery'>Jewelery</option>
                    <option value='Sports'>Sports</option>
                    <option value='Outdoors'>Outdoors</option>
                    <option value='Automotive'>Automotive</option>
                    <option value='Industrial'>Industrial</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Label>Brand</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter the product brand'
                    name='brand'
                    id='brand'
                    value={input.brand}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Label>Sku</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter the product sku'
                    name='sku'
                    id='sku'
                    value={input.sku}
                    onChange={handleInputChange}
                  />
                  {/* <Form.Text className='text-muted'>
                    Leave default value if you don't know the sku product.
                  </Form.Text> */}
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type='url'
                    placeholder='Enter the url for the product image'
                    name='image'
                    id='image'
                    value={input.image}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <div className='create-product__register'>
                  <Button variant='danger' type='submit'>Submit</Button>
                </div>
                <Card.Text className='create-product__already-account text-muted mt-5 mb-0'>
                  Need help?
                  <Link to='/contact'>Contact us</Link>
                </Card.Text>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  )
}

export default CreateProduct
