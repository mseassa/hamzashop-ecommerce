import React from "react";
import {
  ButtonGroup,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";

const Header = () => {
    return (
        <>
        {/* Topbar Start  */}
        <Container fluid>
            <Row className="bg-secondary py-1 px-xl-5">
            <Col lg={6} className="d-none d-lg-block">
                <div className="d-inline-flex align-items-center h-100">
                <a className="text-body me-3" href="">
                    About
                </a>
                <a className="text-body me-3" href="">
                    Contact
                </a>
                <a className="text-body me-3" href="">
                    Help
                </a>
                <a className="text-body me-3" href="">
                    FAQs
                </a>
                </div>
            </Col>
            <Col lg={6} className="text-center text-lg-end">
                <div className="d-inline-flex align-items-center">
                <DropdownButton
                    id="dropdown-basic-button"
                    title="My Account"
                    as={ButtonGroup}
                    size="sm"
                    variant="light"
                >
                    <Dropdown.Item href="#/action-1">Sign In</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Sign Out</Dropdown.Item>
                </DropdownButton>

                <DropdownButton
                    id="dropdown-basic-button"
                    title="USD"
                    as={ButtonGroup}
                    size="sm"
                    variant="light"
                    className="mx-2"
                >
                    <Dropdown.Item href="#/action-1">EUR</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">GBP</Dropdown.Item>
                </DropdownButton>

                <DropdownButton
                    id="dropdown-basic-button"
                    title="EN"
                    as={ButtonGroup}
                    size="sm"
                    variant="light"
                >
                    <Dropdown.Item href="#/action-1">AR</Dropdown.Item>
                </DropdownButton>
                </div>

                <div className="d-inline-flex align-items-center d-block d-lg-none">
                <a href="" className="btn px-0 ms-2">
                    <i className="fas fa-heart text-dark"></i>
                    <span
                    className="badge text-dark border border-dark rounded-circle ms-2"
                    // style={{ paddingBottom: "2px" }}
                    >
                    0
                    </span>
                </a>
                <a href="" className="btn px-0 ms-2">
                    <i className="fas fa-shopping-cart text-dark"></i>
                    <span
                    className="badge text-dark border border-dark rounded-circle ms-2"
                    // style={{ paddingBottom: '2px' }}
                    >
                    0
                    </span>
                </a>
                </div>
            </Col>
            </Row>

            <Row className="align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
            <Col lg={4}>
                <a href="" className="text-decoration-none">
                <span className="h1 text-uppercase text-primary bg-dark px-2">
                    Hamza
                </span>
                <span className="h1 text-uppercase text-dark bg-primary px-2 ms-n1">
                    Shop
                </span>
                </a>
            </Col>

            <Col lg={4} className="text-start">
                <Form>
                <InputGroup>
                    <Form.Control
                    placeholder="Search for products"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Text
                    id="basic-addon2"
                    className="input-group-text bg-transparent text-primary"
                    >
                    <i className="fa fa-search "></i>
                    </InputGroup.Text>
                </InputGroup>
                </Form>
            </Col>

            <Col lg={4} className="text-end">
                <p className="m-0">Customer Service</p>
                <h5 className="m-0">+012 345 6789</h5>
            </Col>
            </Row>
        </Container>
        {/* Topbar End */}
        </>
    );
};

export default Header;
