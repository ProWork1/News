import React from 'react'
import './Slider.scss'
import one from './img/1.jpg'
import two from './img/2.jpg'
import three from './img/3.jpg'
import four from './img/4.jpg'

function Slider() {
    return (
        <div className={'Slider'}>
            <div class="carousel w-100 slide my-4" data-ride="carousel" id="myCarousel" data-interval="2000">
                <div class="carousel-inner">
                    <div class="carousel-item active"><img src={one} class="img-fluid" alt="" />
                        <div class="carousel-content">
                            <h1 class="font-weight-bold">
                                If you wanted to get rich, how would you do it?
                            </h1>
                            <h5 class="font-weight-normal  m-0">
                                Lorem Ipsum has been the industry's standard
                            </h5>
                            <p class="text-color m-0 pt-2 d-flex align-items-center">
                                <span class="fs-10 mr-1">2 hours ago</span>
                                <i class="fa fab-bookmark"></i>
                                <span class="fs-10 mr-1">126</span>
                                <i class="fa fab-comment" aria-hidden={"true"}></i>
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item"><img src={two} class="img-fluid" alt="" />
                        <div class="carousel-content">
                            <h1 class="font-weight-bold">
                                If you wanted to get rich, how would you do it?
                            </h1>
                            <h5 class="font-weight-normal  m-0">
                                Lorem Ipsum has been the industry's standard
                            </h5>
                            <p class="text-color m-0 pt-2 d-flex align-items-center">
                                <span class="fs-10 mr-1">2 hours ago</span>
                                <i class="mdi mdi-bookmark-outline mr-3"></i>
                                <span class="fs-10 mr-1">126</span>
                                <i class="mdi mdi-comment-outline"></i>
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item"><img src={three} class="img-fluid" alt="" />
                        <div class="carousel-content">
                            <h1 class="font-weight-bold">
                                If you wanted to get rich, how would you do it?
                            </h1>
                            <h5 class="font-weight-normal  m-0">
                                Lorem Ipsum has been the industry's standard
                            </h5>
                            <p class="text-color m-0 pt-2 d-flex align-items-center">
                                <span class="fs-10 mr-1">2 hours ago</span>
                                <i class="mdi mdi-bookmark-outline mr-3"></i>
                                <span class="fs-10 mr-1">126</span>
                                <i class="mdi mdi-comment-outline"></i>
                            </p>
                        </div>
                    </div>
                    <div class="carousel-item"><img src={four} class="img-fluid" alt="" />
                        <div class="carousel-content">
                            <h1 class="font-weight-bold">
                                If you wanted to get rich, how would you do it?
                            </h1>
                            <h5 class="font-weight-normal  m-0">
                                Lorem Ipsum has been the industry's standard
                            </h5>
                            <p class="text-color m-0 pt-2 d-flex align-items-center">
                                <span class="fs-10 mr-1">2 hours ago</span>
                                <i class="mdi mdi-bookmark-outline mr-3"></i>
                                <span class="fs-10 mr-1">126</span>
                                <i class="mdi mdi-comment-outline"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <ul class="carousel-indicators d-block align-content-around ">
                    <li class="active" data-slide-to="0" data-target="#myCarousel">1</li>
                    <li data-slide-to="1" data-target="#myCarousel">2</li>
                    <li data-slide-to="2" data-target="#myCarousel">3</li>
                    <li data-slide-to="3" data-target="#myCarousel">4</li>
                </ul>
            </div>
        </div>
    )
}

export default Slider
