import React from 'react'
import { Row, Col } from 'reactstrap'
import Slider from './Slider/Slider'
import './styles.scss'
import Cols from './col-4'
import one from './img/Profile_1.jpg'
function index() {
    return (
        <Row>
            <Col md={'8'}>
                <Slider />
            </Col>
            <div className={'col-md-4 mt-2'}>
                <Row>
                    <Col sm={'6'}>
                        <Cols
                            img={one}
                            title={'Henry Itondo'}
                            body={'The Most And Least Visited Countries In The World'}
                        />
                    </Col>
                    <Col sm={'6'}>
                        <Cols
                            img={one}
                            title={'Henry Itondo'}
                            body={'The Most And Least Visited Countries In The World'}
                        />
                    </Col>
                    <Col sm={'6'}>
                        <Cols
                            img={one}
                            title={'Henry Itondo'}
                            body={'The Most And Least Visited Countries In The World'}
                        />
                    </Col>
                    <Col sm={'6'}>
                        <Cols
                            img={one}
                            title={'Henry Itondo'}
                            body={'The Most And Least Visited Countries In The World'}
                        />
                    </Col>
                    <Col sm={'6'}>
                        <Cols
                            img={one}
                            title={'Henry Itondo'}
                            body={'The Most And Least Visited Countries In The World'}
                        />
                    </Col>
                    <Col sm={'6'}>
                        <Cols
                            img={one}
                            title={'Henry Itondo'}
                            body={'The Most And Least Visited Countries In The World'}
                        />
                    </Col>
                </Row>
            </div>
        </Row>
    )
}

export default index
