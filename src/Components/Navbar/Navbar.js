import React, { useState } from "react";
import { Container, NavbarToggler, NavItem, Collapse, NavLink, Nav, NavbarBrand } from "reactstrap";
import { Icon } from '@iconify/react';
import "./navbar.scss";

const Navbar = () => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <header id="header">
        <Container>
            <Nav className="navbar navbar-expand-lg navbar-light">
                <div className="d-flex justify-content-between align-items-center navbar-top">
                    <ul className="navbar-left">
                        <li>Wed, March 4, 2020</li>
                        <li>30°C,London</li>
                    </ul>
                    <div>
                        <NavbarBrand className="navbar-brand" href="#">
                            <img src="../images/logo.svg" alt="" />
                        </NavbarBrand>
                    </div>
                    <div className="d-flex">
                        <ul className="navbar-right">
                            <li>
                                <a href="#">ENGLISH</a>
                            </li>
                            <li>
                                <a href="#">ESPAÑOL</a>
                            </li>
                        </ul>
                        <ul className="social-media">
                            <li>
                                <a href="#"><Icon icon="mdi:instagram"  className="i"/></a>
                            </li>
                            <li>
                                <a href="#"><Icon icon="mdi:facebook" className="i"/></a>
                            </li>
                            <li>
                                <a href="#"><Icon icon="mdi:youtube" className="i"/></a>
                            </li>
                            <li>
                                <a href="#"><Icon icon="mdi:linkedin" className="i"/></a>
                            </li>
                            <li>
                                <a href="#"><Icon icon="mdi:twitter" className="i"/></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-bottom-menu">
                    <NavbarToggler className="navbar-toggler mr-2" onClick={toggleNavbar} />
                    <Collapse isOpen={!collapsed} navbar className="navbar-collapse justify-content-center collapse" >
                        <Nav navbar className="position-relative d-lg-flex justify-content-between align-items-center">
                            <NavItem>
                                 <button className="navbar-close">
                                    <Icon icon="mdi:close"/>
                                </button>
                            </NavItem>
                            <NavItem active>
                                <NavLink href="index.html">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="pages/world.html">World</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="pages/author.html">Magazine</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="pages/news-post.html">Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="pages/business.html">Business</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="pages/sports.html">Sports</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="pages/art.html">Art</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="pages/politics.html">Politics</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="pages/real-estate.html">Real estate</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="pages/travel.html">Travel</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#"><Icon icon="mdi:magnify"/></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Nav>
        </Container>
    </header>
  );
}

export default Navbar;
