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
          className={`navbar ${mode === 'dark' ? 'bg-dark' : 'bg-light'} fs-5`}
          style={{ justifyContent: 'space-between' }} // Ajoutez cette ligne
        >
          <LinkContainer to="/">
            <Navbar.Brand className="logo mx-lg-5">Da'Wave!</Navbar.Brand>
          </LinkContainer>

          <Nav className="nav-black ">
            <Nav.Link className="mx-4" href="/pads">
              Pads
            </Nav.Link>
            <Nav.Link className="mx-4" href="/aileron">
              Aileron
            </Nav.Link>

            <div className="mx-4">
              <CustomNavDropdown title="Planche" href="/planche">
                <NavDropdown.Item href="/hybride">Hybride</NavDropdown.Item>
                <NavDropdown.Item href="/shortboard">
                  Shortboard
                </NavDropdown.Item>
                <NavDropdown.Item href="/longboard">Longboard</NavDropdown.Item>
                <NavDropdown.Divider />
              </CustomNavDropdown>
            </div>
            <div className="mx-4">
              <CustomNavDropdown title="Accessoire" href="/accessoire">
                <NavDropdown.Item href="/combinaison">
                  Combinaison
                </NavDropdown.Item>
                <NavDropdown.Item href="/leash">Leash</NavDropdown.Item>
                <NavDropdown.Item href="/wax">Wax</NavDropdown.Item>
                <NavDropdown.Item href="/camera">
                  Camera portable
                </NavDropdown.Item>
              </CustomNavDropdown>
            </div>
          </Nav>
          <div
            className="d-flex align-items-center"
            style={{ marginRight: '5%' }}
          >
            <div className="ps-4">
              <Button variant={mode} onClick={switchModeHandler}>
                <FontAwesomeIcon
                  icon={mode === 'dark' ? faSun : faMoon}
                  size="2x"
                />
              </Button>
            </div>

            <div className="ps-4 mx-5">
              <Link to="/cart" className="nav-link fs-5">
                Cart
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
            </div>

            {userInfo ? (
              userInfo.isAdmin ? (
                <div className="ml-md-5">
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <Link className="dropdown-item " to="/adminaddpage">
                      Ajouter produit
                    </Link>
                    <Link className="dropdown-item" to="/adminapdatepage">
                      Modifier produit
                    </Link>
                    <Link className="dropdown-item" to="/admindeletepage">
                      Supprimer produit
                    </Link>
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
                <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                  <Link className="dropdown-item" to="/usermodifier">
                    Modifier profil
                  </Link>

                  <Link
                    className="dropdown-item fs-5"
                    to="#signout"
                    onClick={signoutHandler}
                  >
                    Sign Out
                  </Link>
                </NavDropdown>
              )
            ) : (
              <Link className="nav-link fs-5" to="/signin">
                Sign In
              </Link>
            )}
          </div>
        </Navbar>
      </header>
    </div>
  )
}

export default NavigationBar
