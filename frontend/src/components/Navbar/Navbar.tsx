import { useContext, useEffect } from 'react';
import { Badge, Button, Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Store } from '../../Store';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import CustomNavDropdown from './CustomNavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

function NavigationBar() {
  const {
    state: { mode, cart, userInfo },
    dispatch,
  } = useContext(Store);

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', mode);
  }, [mode]);

  const switchModeHandler = () => {
    dispatch({ type: 'SWITCH_MODE' });
  };

  const signoutHandler = () => {
    dispatch({ type: 'USER_SIGNOUT' });
    localStorage.removeItem('userInfo');
    localStorage.removeItem('cartItems');
    localStorage.removeItem('shippingAddress');
    localStorage.removeItem('paymentMethod');
    window.location.href = '/signin';
  };

  return (
    <header>
      <Navbar
        expand="lg"
        className={`navbar ${mode === 'dark' ? 'bg-dark' : 'bg-light'} fs-5`}
      >
        <Container>
          <Link to="/">
            <Navbar.Brand className="logo mx-lg-5">Da'Wave!</Navbar.Brand>
          </Link>
  
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            style={{ backgroundColor: 'white', padding: '1%' }}
          >
            <Nav className="me-auto">
              <Link to="/pads" className="nav-link mx-3">
                Pads
              </Link>
              <Link to="/aileron" className="nav-link mx-3">
                Aileron
              </Link>
              <CustomNavDropdown
                title="Planche"
                href="/planche"
                className="mx-3"
              >
                <NavDropdown.Item href="/hybride">Hybride</NavDropdown.Item>
                <NavDropdown.Item href="/shortboard">
                  Shortboard
                </NavDropdown.Item>
                <NavDropdown.Item href="/longboard">Longboard</NavDropdown.Item>
              </CustomNavDropdown>
              <CustomNavDropdown
                title="Accessoire"
                href="/accessoire"
                className="mx-3"
              >
                <NavDropdown.Item href="/combinaison">
                  Combinaison
                </NavDropdown.Item>
                <NavDropdown.Item href="/leash">Leash</NavDropdown.Item>
                <NavDropdown.Item href="/wax">Wax</NavDropdown.Item>
                <NavDropdown.Item href="/camera">
                  Camera portable
                </NavDropdown.Item>
              </CustomNavDropdown>
            </Nav>
            <Button variant={mode} onClick={switchModeHandler} className="me-3">
              <FontAwesomeIcon
                icon={mode === 'dark' ? faSun : faMoon}
                size="2x"
              />
            </Button>
            <hr></hr>
            <Nav>
              <Link to="/cart" className="nav-link fs-5 me-3">
                Cart
                {cart.cartItems.length > 0 && (
                  <Badge pill bg="danger">
                    {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                  </Badge>
                )}
              </Link>
              {userInfo ? (
                userInfo.isAdmin ? (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <Link className="dropdown-item" to="/adminaddpage">
                      Ajouter produit
                    </Link>
                    <Link className="dropdown-item" to="/adminapdatepage">
                      Modifier produit
                    </Link>
                    <Link className="dropdown-item" to="/admindeletepage">
                      Supprimer produit
                    </Link>
                    <Link className="dropdown-item" to="/usermodifier">
                      Modifier profil
                    </Link>
                    <Link className="dropdown-item" to="/admindeleteuser">
                      Supprimer profil
                    </Link>
                    <Link
                      className="dropdown-item"
                      to="#signout"
                      onClick={signoutHandler}
                    >
                      Sign Out
                    </Link>
                  </NavDropdown>
                ) : (
                  <NavDropdown title={userInfo.name} id="basic-nav-dropdown">
                    <Link className="dropdown-item" to="/usermodifier">
                      Modifier profil
                    </Link>
                    <LinkContainer to="/orderhistory">
                      <NavDropdown.Item>Order History</NavDropdown.Item>
                    </LinkContainer>
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavigationBar;
