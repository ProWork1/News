import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import './blogScreen.scss'

export default function BlogScreen4() {
    return (
        <>
            <Container id = "section4">
                <Row>
                    <Col className = "text-center blog_text">
                        <img src="./images/Profile_4.jpg" alt="" />
                        <p>Of the Author</p>
                        <p>Nout Golstein</p>
                        <p>Odit ut quidem impedit sequi autem ut. Consequatur vel nesciunt ut perspiciatis omnis praesentium eos. Consequatur maiores laboriosam consequatur ea minus corrupti ... More</p>
                        <p>You may also like</p>
                    </Col>
                </Row>
                <Row>
                    <Col xs = "12" lg = {{size: 8, offset: 2}}>
                        <hr />
                        <div className="d-lg-flex d-block mt-5 mb-5 news">
                            <div>
                                <img src="./images/news-6.jpg" alt="" />
                                <div><p>news</p></div>
                            </div>
                            <div className = "news_text">
                                <p>A hot springs where clothing is optional after dark</p>
                                <p>Oka Tomoaki | 23 February, 2018</p>
                            </div>
                        </div>
                        <hr />
                        <div className="d-lg-flex d-block mt-5 mb-5 news">
                            <div>
                                <img src="./images/news-7.jpg" alt="" />
                                <div><p>news</p></div>
                            </div>
                            <div className = "news_text">
                                <p>A hot springs where clothing is optional after dark</p>
                                <p>Oka Tomoaki | 23 February, 2018</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
