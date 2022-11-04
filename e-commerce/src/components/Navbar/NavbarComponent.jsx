import React, { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown, Form, Button } from 'react-bootstrap'
import { useProductContext } from '../../context/ListProducts'
import { AuthContext } from '../../context/AuthContext'
import Logo from '../../assets/logo.svg'
import './navbarComponent.scss'

const NavbarComponent = () => {
  const { isAuth, logout } = useContext(AuthContext)
  const context = useProductContext()
  const navigate = useNavigate()
  const [searchProdoctValue, setSearchProductValue] = useState('')
  const handleSearchValue = (e) => {
    const { target: { value } } = e
    setSearchProductValue(value.toLowerCase())
  }
  const submitSearch = (e) => {
    e.preventDefault()
    context.setLoadingStatus(false)
    navigate(`/search/${searchProdoctValue.replace(/\s+/g, '-')}`)
  }
  return (
    <>
      <Navbar collapseOnSelect bg='dark' expand='lg' sticky='top' className='navbar'>
        <Container>
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
              className='me-auto'
              style={{ maxHeight: '200px' }}
              navbarScroll
            >
              <Form className='d-flex' onSubmit={submitSearch}>
                <Form.Control
                  type='search'
                  placeholder='All what you want!'
                  className='me-2'
                  aria-label='Search'
                  name='searchValue'
                  onChange={handleSearchValue}
                />
                <Button
                  variant='outline-danger'
                  type='submit'
                >Search
                </Button>
              </Form>
              <NavDropdown title='Account' id='basic-nav-dropdown' className='navbar__toggle-dropdown'>
                {
                  !isAuth
                    ? (
                      <>
                        <NavDropdown.Item onClick={() => navigate('/login')} className='navbar__dropdown-item'>Login</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => navigate('/signup')} className='navbar__dropdown-item'>Sign Up</NavDropdown.Item>
                      </>
                      )
                    : (
                      <>
                        <NavDropdown.Item onClick={() => navigate('/account')} className='navbar__dropdown-item'>My account</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item onClick={logout} className='navbar__dropdown-item'>Log out</NavDropdown.Item>
                      </>
                      )
                }
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComponent
