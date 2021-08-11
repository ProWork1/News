import React from 'react'
import Firstcard from './Firstcard'
import Secondcard from './Secondcard'
import { Row, Col } from 'reactstrap'
import './popularnews.scss'

const PopularNews = () => {
    return (
        <section className='editors-news'>
            <Row className='main-title'>
                <Col lg={3}>
                    <div className='d-flex position-relative float-left'>
                        <h3 className='section-title'>Popular News</h3>
                    </div>
                </Col>
            </Row>
            <Row className='card-content'>
                <Col lg={6} className='mb-5 mb-sm-2'>
                    <Firstcard />
                </Col>

                <Col lg={6} className='mb-5 mb-sm-2'>
                    <Secondcard />
                </Col>
            </Row>
        </section>
    )
}

export default PopularNews
