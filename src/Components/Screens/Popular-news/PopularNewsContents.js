import React from 'react'
import './popularnews.scss'
import {Card} from 'reactstrap'

const PopularNewsContents  = (props) => {
    const popularproducts = props.popularproducts.map(popularproduct => (
            <Col sm={6} className="mb-3">
                 <Card className="card-product card-product-sm" key={popularproduct.id}>
                    <CardBody>
                        <div>
                            <img src={popularproduct.img} className="img-fluid" />
                        </div>
                        <div>
                            <h4 className="m-0 py-3 font-weight-bold text-capitalize">{popularproduct.title}</h4>
                        </div>
                        <div>
                            <p className="text-muted m-0">{popularproduct.text}</p>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        
    ))

    return (
        <Row className="pt-5 card-component">
            <Col sm={6} md={6} className="mb-3">
                <Maincard /> 
            </Col>

            <Col sm={6} md={6}>
                <Row>
                         {popularproducts}
                </Row>
            </Col>
               
        </Row>
            
        
    )
}

export default PopularNewsContents