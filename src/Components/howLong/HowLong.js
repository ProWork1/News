import React from 'react'
import { Row } from 'reactstrap'
import '../howLong/style.css'
import { Container, Col } from 'reactstrap';
import Images from './img/news-4.jpg'
import Images2 from './img/news-5.jpg'
import { width } from 'dom7';

function HowLong() {
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text">How long will your trip be?</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <img width={580}
                        height={340}
                        src={Images} />
                </Col>
                <Col>

                    <img width={580}
                        height={340} 
                        src={Images2} />
                </Col>
            </Row>
            <Row className="Wrapper__item">
                <Col>
              <p className="item mb-5">Mauris mattis auctor cursus. Phasellus tellus tellus, imperdiet ut imperdiet eu, iaculis a sem. Donec vehicula luctus nunc in laoreet. Aliquam erat volutpat. Suspendisse vulputate porttitor mentum. Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, lacus in malesuada pellentesque, platea dictumst.
              Proin viverra orci a leo suscipit placerat. Sed feugiat posuere semper. Cras vitae mi erat, Vestibulum faucibus neque at lacus tristique eu ultrices ipsum mollis. Phasellus venenatis, platea dictumst.</p>
                </Col>
                <Col className="button__news">
                <button className="news">News</button>
                <button className="news">News</button>
                <button className="news">News</button>
                <button className="news">News</button>
                <button className="news">News</button>
                </Col>
            </Row>
        </Container>

    )
}

export default HowLong
