import React from 'react'
import Col from './col'
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
            <div className={"row"}>
                <div className={"title col-lg-3"}>
                    <h3 className={"h-title"}>
                        Editor choice
                    </h3>
                </div>
            </div>
            <div className={"row"}>
                <div className={'col-lg-9 col-md-12'}>
                    <div className={"row"}>
                        <div className={"col-sm-4"}><Col title={"LIFESTYLE"} img={bir} text={"The island country that gave Mayor Pete his name"} /></div>
                        <div className={"col-sm-4"}><Col title={"SPORTS"} img={ikki} text={"Disney parks expand (good) vegan food options"} /></div>
                        <div className={"col-sm-4"}><Col title={"INTERNET"} img={uch} text={"A hot springs where clothing is optional after dark"} /></div>
                        <div className={"col-sm-4"}><Col title={"NEWS"} img={tor} text={"Japanese chef carves food into incredible pieces of art"} /></div>
                        <div className={"col-sm-4"}><Col title={"NEWS"} img={besh} text={"The Misanthrope Society: A Taipei bar for people who"} /></div>
                        <div className={"col-sm-4"}><Col title={"TOURISM"} img={olti} text={"From Pakistan to the Caribbean: Curry's journey"} /></div>
                    </div>

                </div>
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
                    <div class="row right-text">
                        <div class="col-sm-12">
                            <div class="d-flex position-relative float-left">
                                <h3 class="section-title">Latest News</h3>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="border-bottom pb-3">
                                <h5 class="font-weight-600 mt-0 mb-0">
                                    South Korea’s Moon Jae-in sworn in vowing address
                                </h5>
                                <p class="text-color m-0 d-flex align-items-center">
                                    <span class="fs-10 mr-1">2 hours ago</span>
                                    <i class="mdi mdi-bookmark-outline mr-3"></i>
                                    <span class="fs-10 mr-1">126</span>
                                    <i class="mdi mdi-comment-outline"></i>
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="border-bottom pt-4 pb-3">
                                <h5 class="font-weight-600 mt-0 mb-0">
                                    South Korea’s Moon Jae-in sworn in vowing address
                                </h5>
                                <p class="text-color m-0 d-flex align-items-center">
                                    <span class="fs-10 mr-1">2 hours ago</span>
                                    <i class="mdi mdi-bookmark-outline mr-3"></i>
                                    <span class="fs-10 mr-1">126</span>
                                    <i class="mdi mdi-comment-outline"></i>
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="border-bottom pt-4 pb-3">
                                <h5 class="font-weight-600 mt-0 mb-0">
                                    South Korea’s Moon Jae-in sworn in vowing address
                                </h5>
                                <p class="text-color m-0 d-flex align-items-center">
                                    <span class="fs-10 mr-1">2 hours ago</span>
                                    <i class="mdi mdi-bookmark-outline mr-3"></i>
                                    <span class="fs-10 mr-1">126</span>
                                    <i class="mdi mdi-comment-outline"></i>
                                </p>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="pt-4">
                                <h5 class="font-weight-600 mt-0 mb-0">
                                    South Korea’s Moon Jae-in sworn in vowing address
                                </h5>
                                <p class="text-color m-0 d-flex align-items-center">
                                    <span class="fs-10 mr-1">2 hours ago</span>
                                    <i class="mdi mdi-bookmark-outline mr-3"></i>
                                    <span class="fs-10 mr-1">126</span>
                                    <i class="mdi mdi-comment-outline"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Editor
