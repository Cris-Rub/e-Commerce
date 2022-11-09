import React, { useContext } from 'react'
import { Card, Container, Form, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import useForm from '../../hooks/useForm'
import { loginUserServices } from '../../services/userServices'
import { AuthContext } from '../../context/AuthContext'
import './Login.scss'

const Login = () => {
  const { loginUser } = useContext(AuthContext)
  const navigate = useNavigate()
  const sendData = async (data) => {
    try {
      const result = await loginUserServices(data)
      if (result.status === 200) {
        loginUser(result.data.token)
        navigate('/home')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const { input, handleInputChange, handleSubmit } = useForm(sendData, {
    email: '',
    password: ''
  })

  return (
    <Container fluid>
      <div className='row signup m-3'>
        <div className='col-12 col-md-9 col-lg-7 col-xl-6'>
          <Card className='signup__card'>
            <Card.Body className='p-5'>
              <Card.Title className='signup__title mb-5'>Log in into your account</Card.Title>
              <Form onSubmit={handleSubmit}>
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
                  {/* <Form.Text className='text-muted'>
                  </Form.Text> */}
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
                  Not register yet?
                  <Link to='/signup'>Sign up here</Link>
                </Card.Text>
              </Form>
            </Card.Body>
          </Card>
        </div>
      </div>
    </Container>
  )
}

export default Login
