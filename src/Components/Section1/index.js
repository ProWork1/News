import React from 'react'
import Slider from './Slider/Slider'
import './styles.scss'
import Col from './col-4'
import one from './img/Profile_1.jpg'
function index() {
    return (
        <div className={'container p-0 m-0 row'} >
            <div className={'col-xl-8 col-12 p-0 m-0 '} >
                <Slider />
            </div>
            <div className={'col-xl-4 col-12'}>
                <div className="row">
                    <div className="col-sm-6">
                        <Col img={one} title={"Henry Itondo"} body={"The Most And Least Visited Countries In The World"} />
                    </div>
                    <div className="col-sm-6">
                        <Col img={one} title={"Henry Itondo"} body={"The Most And Least Visited Countries In The World"} />
                    </div>
                    <div className="col-sm-6">
                        <Col img={one} title={"Henry Itondo"} body={"The Most And Least Visited Countries In The World"} />
                    </div>
                    <div className="col-sm-6">
                        <Col img={one} title={"Henry Itondo"} body={"The Most And Least Visited Countries In The World"} />
                    </div>
                    <div className="col-sm-6">
                        <Col img={one} title={"Henry Itondo"} body={"The Most And Least Visited Countries In The World"} />
                    </div>
                    <div className="col-sm-6">
                        <Col img={one} title={"Henry Itondo"} body={"The Most And Least Visited Countries In The World"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
