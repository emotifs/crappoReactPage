import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

const MyNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="navigation">
                <Container>
                      <Navbar color="transparent" className="py-4 text-white navbar-dark" expand="md">
                        <NavbarBrand className="text-white p-0 nav-brand" href="/">CRAPPO</NavbarBrand>
                        <NavbarToggler onClick={toggle} className="text-white"/>
                        <Collapse isOpen={isOpen} navbar>
                            <Nav className="ml-auto myNav">
                                <NavItem>
                                    <NavLink className="text-white" href="#">Products</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="text-white" href="#">Features</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="text-white" href="#">About</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="text-white" href="#">Contact</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="text-white" href="#">Login</NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="btn btn-primary border-r text-white ml-5" href="#">Register</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>
                </Container>
            </div>
        </>
    );
}

export default MyNav;