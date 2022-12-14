import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

interface Props {
    page: string;
    sticky: boolean;
    transparent?: boolean;
}

class CustomNavbar extends React.Component<Props> {
    render() {
        return (
            <Navbar className={`nav${this.props.transparent ? " nav-transparent" : ""}`} variant="dark" expand="lg" fixed={this.props.sticky ? "top" : undefined}>
                <Container>
                    <Navbar.Brand><img className="iconImg" src="/country.png" alt="Countryside Mapper"/> </Navbar.Brand>

                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/" className={this.props.page === "home" ? "active" : ""}>Home</Nav.Link>
                            <Nav.Link href="map" className={this.props.page === "map" ? "active" : ""}>Map</Nav.Link>
                        </Nav>

                        <Nav className="ms-auto">
                            <Nav.Link href="register" className={this.props.page === "register" ? "active" : ""}>Register Event</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default CustomNavbar