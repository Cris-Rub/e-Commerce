import React from 'react'
import { Container, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Container className='container-error px-5 mt-5 mb-5'>
      <Card className='card-error'>
        <Card.Title><h1 className='fw-bold' style={{ fontSize: '25px' }}>Page Not Found</h1></Card.Title>
        <Card.Body>
          <p>
            It looks like the page you are looking for does not exist.
          </p>
          <p>
            Don't worry,
          </p>
          <Link to='/home'>let's go back to our site</Link>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default Error
