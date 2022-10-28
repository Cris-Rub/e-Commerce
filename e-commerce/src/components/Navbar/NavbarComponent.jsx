import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap'
import Logo from '../../assets/logo.svg'
import './navbarComponent.scss'

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg='dark' expand='lg' sticky='top' className='navbar'>
        <Container className='fs-5'>
          <Navbar.Brand className='navbar__logo'>
            <Link to='/home' className='fw-bold'>
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
          <Navbar.Toggle aria-controls='navbarScroll' className='navbar__toggle' />
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
              <NavDropdown title='Account' id='basic-nav-dropdown' className='navbar__toggle-dropdown'>
                <NavDropdown.Item href='#action/3.1' className='navbar__dropdown-item'>Action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2' className='navbar__dropdown-item'>Another action</NavDropdown.Item>
                <NavDropdown.Item href='#action/3.3' className='navbar__dropdown-item'>Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#action/3.4' className='navbar__dropdown-item'>Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent
