import React from 'react'
import { Card, Container, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { registerUserServices } from '../../services/userServices'
import './Signup.scss'

const Signup = () => {
  const navigate = useNavigate()

  const sendData = async (data) => {
    try {
      const result = await registerUserServices(data)
      if (result.status === 200) {
        navigate('/login')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    first_name: '',
    last_name: '',
    gender: '',
    email: '',
    password: ''
  })
  return (
    <Container fluid>
      <div className='row signup m-3'>
        <div className='col-12 col-md-9 col-lg-7 col-xl-6'>
          <Card className='signup__card'>
            <Card.Body className='p-5'>
              <Card.Title className='signup__title mb-5'>Create an account</Card.Title>
              <Form onSubmit={handleSubmit}>
                <Form.Group className='mb-4'>
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter first name'
                    name='first_name'
                    id='first_name'
                    value={input.first_name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Enter last name'
                    name='last_name'
                    id='last_name'
                    value={input.last_name}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    id='gender'
                    name='gender'
                    value={input.gender}
                    onChange={handleInputChange}
                  >
                    <option value=''>Choose...</option>
                    <option value='M'>Male</option>
                    <option value='F'>Female</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type='email'
                    placeholder='Enter email'
                    name='email'
                    id='email'
                    value={input.email}
                    onChange={handleInputChange}
                  />
                  <Form.Text className='text-muted'>
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>
                <Form.Group className='mb-4'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type='password'
                    placeholder='Enter password'
                    name='password'
                    id='password'
                    value={input.password}
                    onChange={handleInputChange}
                  />
                </Form.Group>
                <div className='signup__register'>
                  <Button variant='danger' type='submit'>Sign up</Button>
                </div>
                <Card.Text className='signup__already-account text-muted mt-5 mb-0'>
                  Have already an account?
                  <Link to='/login'>Login here</Link>
                </Card.Text>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  )
}

export default Signup
