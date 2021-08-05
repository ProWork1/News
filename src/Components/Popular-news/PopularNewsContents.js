import React from 'react'
import Maincard from './Maincard'
import './popularnews.scss'
import { Col, Row} from 'reactstrap'

const PopularNewsContents  = (props) => {
    const popularproducts = props.popularproducts.map(popularproducts => (
            <Col sm={6} className="mb-3 mb-sm-4 prop-card position-relative">
                 <Col sm={6} className="mb-5 mb-sm-2 w-100" key={popularproducts.id}>
                        <div className="position-relative image-hover">
                               <img src={popularproducts.img} className="img-fluid w-100" alt="world-news" />
                               <span className="thumb-title">{popularproducts.thumbtitle}</span>
                        </div>
                        <div>
                            <h5 className="font-weight-600 mt-3">{popularproducts.title}</h5>
                        </div>
                        <div>
                            <p className="fs-15 font-weight-normal">{popularproducts.text}</p>
                        </div>
                </Col>
            </Col>
        
    ))

    return (
        <Row className="card-content">
            <Col lg={6} className="mb-5 mb-sm-2">
                <Maincard /> 
            </Col>

            <Col lg={6} className="mb-5 mb-sm-2">
                <Row>
                   {popularproducts}
                </Row>
            </Col>
               
        </Row>
            
        
    )
}

export default PopularNewsContents