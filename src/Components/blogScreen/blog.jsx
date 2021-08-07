import React from 'react'
import { Col, Container, Row, Button } from 'reactstrap'
import './blog.scss'

export default function Blog() {
    return (
        <>
            <Container className=" mt-5" id = "blog">
                <Row>
                    <Col xs = "12" className="text-center blog_theme">
                        <p>Use Our Compilation Of Most Famous Museums</p>
                        <Button className = "btn-dark">News</Button>
                        <div>
                            <img src="./images/Profile_1.jpg" alt="" className = "rounded-circle mx-2"/>
                            <span>Oka Tomoaki | 23 February, 2018</span>
                        </div>
                        <p>
                        He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche! movement. For many, however, the campaign has become less about backing Macron and instead about voting against Le Pen, the National Front candidate.
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = "12" lg = {{size:10, offset:1}} className="mt-4 blog_img">
                        <img src="./images/news-1.jpg" alt="" />
                    </Col>
                    <p>
                        He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche! movement. For many, however, the campaign has become less about backing Macron and instead about voting against Le Pen, the National Front candidate.
                    </p>
                </Row>
                <Row>
                    <Col xs = "12" lg = {{size:10, offset:1}} className="mt-4">
                        <Row>
                            <Col xs = "12" lg = {{size:6}} className="blog_picture">
                                <img src="./images/news-2.jpg" alt="" />
                            </Col>
                            <Col xs = "12" lg = {{size:6}} className=" blog_text">
                                <p>TravelTips: How Do I Live On The Cheap?</p>
                                <p>He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche! movement. For many, however, the campaign has become less about backing Macron and instead about voting against Le Pen, the National Front candidate.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col xs = "12" className=" blog_section2">
                        <p>
                            He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche!     movement. For many, however, the campaign has become less about backing Macron and instead about voting     against Le Pen, the National Front candidate.
                        </p>
                        <p>
                            He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche! movement. For many, however, the campaign has become less about backing Macron and instead about voting against Le Pen, the National Front candidate.
                        </p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
