import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap'
import Logo from '../../assets/logo.svg'
import './NavbarComponent.css'

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg='dark' expand='lg' sticky='top'>
        <Container className='fs-5'>
          <Navbar.Brand>
            <Link>
              <img
                alt='logo'
                src={Logo}
                width='30'
                height='30'
                className='d-inline-block align-top'
              />{' '}
              One2Shop!
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Form className='d-flex form-inline'>
                <Form.Control
                  type='search'
                  placeholder='All what you want!'
                  className='me-2 align-center'
                  aria-label='Buscar'
                  name='searchValue'
                />
                <Button
                  variant='outline-danger'
                  type='submit'
                >Search
                </Button>
              </Form>
              <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
                <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4'>
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent
