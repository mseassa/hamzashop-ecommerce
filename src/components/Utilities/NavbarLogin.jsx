import React from "react";
import {
  Col,
  Container,
  Dropdown,
  Nav,
  Navbar,
  NavDropdown,
  Row,
} from "react-bootstrap";

const NavbarLogin = () => {
    return (
        <>
        {/* Navbar Start */}
        <Container fluid className="mb-30 bg-dark">
            <Row className="px-xl-5">
            <Col lg={3} className="d-none d-lg-block">
                <Dropdown>
                <Dropdown.Toggle
                    id="dropdown-basic"
                    style={{ height: "67px", padding: "0 30px" }}
                    className="border-0 d-flex align-items-center justify-content-between bg-primary w-100"
                >
                    <h6 className="text-dark m-0">
                    <i className="fa fa-bars me-2"></i>Categories
                    </h6>
                    {/* <i className="fa fa-angle-down text-dark"></i> */}
                </Dropdown.Toggle>

                <Dropdown.Menu className="w-100">
                    <Dropdown.Item href="#/action-1">Shirts</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">Jeans</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">Swimwear</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-1">Sleepwear</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">Sportswear</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">Jumpsuits</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-1">Blazers</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-2">Jackets</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-3">Shoes</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
            </Col>

            <Col lg={9} className="">
                <Navbar
                bg="dark"
                expand="lg"
                className="py-3 py-lg-0 px-0 navbar-dark"
                >
                <Container fluid>
                    <Navbar.Brand
                    href="#home"
                    className="text-decoration-none d-block d-lg-none"
                    >
                    <span className="h1 text-uppercase text-dark bg-light px-2">
                        Hamza
                    </span>
                    <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                        Shop
                    </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#shop">Shop</Nav.Link>
                        <Nav.Link href="#shopdetails">Shop Details</Nav.Link>
                        <NavDropdown
                        title="Pages"
                        id="basic-nav-dropdown"
                        menuVariant="primary"
                        >
                        <NavDropdown.Item href="#action/3.1">
                            Shopping Cart
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Checkout
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Contacts</Nav.Link>
                    </Nav>

                    <Nav className="ms-auto py-0 ">
                        <Nav.Link
                        href="#home"
                        className="btn px-0 ms-2 d-none d-lg-block"
                        >
                        <i className="fas fa-heart text-primary"></i>
                        <span
                            className="badge text-secondary border border-secondary rounded-circle ms-2"
                            //   style={{ paddingBottom: "2px" }}
                        >
                            0
                        </span>
                        </Nav.Link>
                        <Nav.Link
                        href="#home"
                        className="btn px-0 ms-2 d-none d-lg-block"
                        >
                        <i className="fas fa-shopping-cart text-primary"></i>
                        <span
                            className="badge text-secondary border border-secondary rounded-circle ms-2"
                            //   style={{ paddingBottom: "2px" }}
                        >
                            0
                        </span>
                        </Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </Col>
            </Row>
        </Container>
        {/* Navbar End */}
        </>
    );
};

export default NavbarLogin;
