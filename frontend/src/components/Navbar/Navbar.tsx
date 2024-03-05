import { useContext, useEffect } from 'react'
import { Badge, Button, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Store } from '../../Store'
import { LinkContainer } from 'react-router-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import 'react-toastify/dist/ReactToastify.css'
import CustomNavDropdown from './CustomNavDropdown'

function NavigationBar() {
  const {
    state: { mode, cart, userInfo },
    dispatch,
  } = useContext(Store)

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode)
  }, [mode])

  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' })
  }

  const signoutHandler = () => {
    dispatch({ type: 'USER_SIGNOUT' })
    localStorage.removeItem('userInfo')
    localStorage.removeItem('cartItems')
    localStorage.removeItem('shippingAddress')
    localStorage.removeItem('paymentMethod')
    window.location.href = '/signin'
  }

  return (
    <div>
      <header>
        <Navbar
          expand="lg"
          className={`navbar  ${mode === 'dark' ? 'bg-dark' : 'bg-light'} `}
        >
          <LinkContainer className="LinkContainer" to="/">
            <Navbar.Brand className="logo">Da'Wave!</Navbar.Brand>
          </LinkContainer>

          <Nav className="mx-auto">
            {/* Utilisez mx-auto pour centrer les éléments */}
            <Nav.Link href="/leash">Leash</Nav.Link>
            <Nav.Link href="/wax">Wax</Nav.Link>

            {/* Dropdown PLANCHE */}
            <CustomNavDropdown title="Planche" href="/planche">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </CustomNavDropdown>

            <CustomNavDropdown title="Accessoire" href="/accessoire">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </CustomNavDropdown>
          </Nav>

          <div className="ps-4">
            <Button variant={mode} onClick={switchModeHandler}>
              <FontAwesomeIcon icon={mode === 'dark' ? faSun : faMoon} />{' '}
              {/* Utilise l'icône Sun ou Moon en fonction du mode */}
            </Button>
          </div>
          <div className="ps-4">
            <Link to="/cart" className="nav-link">
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg="danger">
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
          </div>

          {userInfo ? (
            <div className="ps-4">
              <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                <Link
                  className="dropdown-item"
                  to="#signout"
                  onClick={signoutHandler}
                >
                  Sign Out
                </Link>
              </NavDropdown>
            </div>
          ) : (
            <Link className="nav-link" to="/signin">
              Sign In
            </Link>
          )}
        </Navbar>
      </header>
     
    </div>
  )
}

export default NavigationBar
