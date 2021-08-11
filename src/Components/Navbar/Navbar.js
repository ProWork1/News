import React from 'react'
import { Col, Container, Row } from 'reactstrap'

const Navbar = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col className='d-flex align-items-center justify-content-between py-32'>
                        <div className='d-flex fs-12'>
                            <div className='me-4'>Wed, March 4, 2021</div>
                            <div>30°C, London</div>
                        </div>
                        <div className='text-uppercase fw-bolder'>
                            <h1>world vision</h1>
                        </div>
                        <div className='d-flex text-uppercase fs-12'>
                            <div className='d-flex me-4'>
                                <a href='/' className='me-1 text-decoration-none text-dark'>
                                    english
                                </a>{' '}
                                |
                                <a href='/' className='ms-1 text-decoration-none text-dark'>
                                    espanol
                                </a>
                            </div>
                            <div className='d-flex text-white'>
                                <div className='border rounded bg-dark me-1 px-1'>
                                    <i className='fab fa-instagram' />
                                </div>
                                <div className='border rounded bg-dark mx-1 px-1'>
                                    <i className='fab fa-facebook-f' />
                                </div>
                                <div className='border rounded bg-dark mx-1 px-1'>
                                    <i className='fab fa-youtube' />
                                </div>
                                <div className='border rounded bg-dark mx-1 px-1'>
                                    <i className='fab fa-linkedin-in' />
                                </div>
                                <div className='border rounded bg-dark ms-1 px-1'>
                                    <i className='fab fa-twitter' />
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Navbar
