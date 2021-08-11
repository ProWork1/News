import React from 'react'
import { Row, Col } from 'reactstrap'
import Cols from './col'
import './style.scss'
import bir from './img/1.jpg'
import ikki from './img/2.jpg'
import uch from './img/3.jpg'
import tor from './img/4.jpg'
import besh from './img/5.jpg'
import olti from './img/6.jpg'
import yetti from './img/7.jpg'
import play from './img/play.png'



function Editor() {
    return (
        <div className={"editor"}>
            <Row>
                <div className={"title col-lg-3"}>
                    <h3 className={"h-title"}>
                        Editor choice
                    </h3>
                </div>
            </Row>
            <Row>
                <Col lg={"9"} md={"12"} >
                    <Row>
                        <Col sm={"4"} ><Cols title={"LIFESTYLE"} img={bir} text={"The island country that gave Mayor Pete his name"} /></Col>
                        <Col sm={"4"} ><Cols title={"SPORTS"} img={ikki} text={"Disney parks expand (good) vegan food options"} /></Col>
                        <Col sm={"4"} ><Cols title={"INTERNET"} img={uch} text={"A hot springs where clothing is optional after dark"} /></Col>
                        <Col sm={"4"} ><Cols title={"NEWS"} img={tor} text={"Japanese chef carves food into incredible pieces of art"} /></Col>
                        <Col sm={"4"} ><Cols title={"NEWS"} img={besh} text={"The Misanthrope Society: A Taipei bar for people who"} /></Col>
                        <Col sm={"4"} ><Cols title={"TOURISM"} img={olti} text={"From Pakistan to the Caribbean: Curry's journey"} /></Col>
                    </Row>

                </Col>
                <div className={"col-lg-3 col-md-12"}>
                    <div className={"position-relative mb-3"}>
                        <img width="100%" src={yetti} alt="" />
                        <div className={"video-thumb text-muted"}>
                            <span>
                                <img src={play} width="16px" alt="" />
                            </span>
                            <span style={{ marginLeft: '10px' }} className={"ml-3"}>LIVE</span>
                        </div>
                    </div>
                    <div className="row right-text">
                        <div className="col-sm-12">
                            <div className="d-flex position-relative float-left">
                                <h3 className="section-title">Latest News</h3>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="border-bottom pb-3">
                                <h5 className="font-weight-600 mt-0 mb-0">
                                    South Korea’s Moon Jae-in sworn in vowing address
                                </h5>
                                <p className="text-color m-0 d-flex align-items-center">
                                    <span className="fs-10 mr-1">2 hours ago</span>
                                    <i className="mdi mdi-bookmark-outline mr-3"></i>
                                    <span className="fs-10 mr-1">126</span>
                                    <i className="mdi mdi-comment-outline"></i>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="border-bottom pt-4 pb-3">
                                <h5 className="font-weight-600 mt-0 mb-0">
                                    South Korea’s Moon Jae-in sworn in vowing address
                                </h5>
                                <p className="text-color m-0 d-flex align-items-center">
                                    <span className="fs-10 mr-1">2 hours ago</span>
                                    <i className="mdi mdi-bookmark-outline mr-3"></i>
                                    <span className="fs-10 mr-1">126</span>
                                    <i className="mdi mdi-comment-outline"></i>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="border-bottom pt-4 pb-3">
                                <h5 className="font-weight-600 mt-0 mb-0">
                                    South Korea’s Moon Jae-in sworn in vowing address
                                </h5>
                                <p className="text-color m-0 d-flex align-items-center">
                                    <span className="fs-10 mr-1">2 hours ago</span>
                                    <i className="mdi mdi-bookmark-outline mr-3"></i>
                                    <span className="fs-10 mr-1">126</span>
                                    <i className="mdi mdi-comment-outline"></i>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="pt-4">
                                <h5 className="font-weight-600 mt-0 mb-0">
                                    South Korea’s Moon Jae-in sworn in vowing address
                                </h5>
                                <p className="text-color m-0 d-flex align-items-center">
                                    <span className="fs-10 mr-1">2 hours ago</span>
                                    <i className="mdi mdi-bookmark-outline mr-3"></i>
                                    <span className="fs-10 mr-1">126</span>
                                    <i className="mdi mdi-comment-outline"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </div>
    )
}

export default Editor
