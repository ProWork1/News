import React from 'react'
import PopularNewsContents from './PopularNewsContents'
import {Container, Row, Col} from 'reactstrap'
import './popularnews.scss'

const PopularNews = () => {
    const popularproducts = [
        {
            id: 1,
            img: './images/ourproduct/2.png',
            title: 'Polipropilen J-150',
            text: " Umumiy xo'jalik maqsadlar uchun"
        },
        {
            id: 2,
            img: './images/ourproduct/2.png',
            title: 'Polipropilen J-350',
            text: 'Batareya qutilari, uy jihozlari uchun korpuslar'
        },
        {
            id: 3,
            img: './images/ourproduct/2.png',
            title: 'Polipropilen FR-170H',
            text: " Umumiy xo'jalik maqsadlar uchun"
        },
        {
            id: 4,
            img: './images/ourproduct/3.png',
            title: '15813-020',
            text: "Oziq-ovqat mahsulotlari uchun mo'ljallangan"
        }
    ]
  return (
            <Container class="editors-news">
                <Row>
                    <Col lg={3}>
                        <div class="d-flex position-relative float-left">
                            <h3 class="section-title">Popular News</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                   <Col lg={6} class="mb-5 mb-sm-2">
                        <div class="position-relative image-hover">
                            <img src="assets/images/dashboard/glob.jpg" class="img-fluid" alt="world-news"/>
                            <span class="thumb-title">NEWS</span>
                        </div>
                        <h1 class="font-weight-600 mt-3">Melania Trump speaks about courage at State Department</h1>
                        <p class="fs-15 font-weight-normal">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
                    </Col>
                    <Col lg={6} class="mb-5 mb-sm-2">
                        <Row class="row">
                            <Col sm={6} class=" mb-5 mb-sm-2">
                                <div class="position-relative image-hover">
                                    <img src="assets/images/dashboard/star-magazine-5.jpg" class="img-fluid" alt="world-news"/>
                                    <span class="thumb-title">POLITICS</span>
                                </div>
                                <h5 class="font-weight-600 mt-3">A look at California's eerie plane graveyards</h5>
                                <p class="fs-15 font-weight-normal">Lorem Ipsum has been the industry's standard dummy text</p>
                            </Col>
                            <Col sm={6} class="mb-5 mb-sm-2">
                                <div class="position-relative image-hover">
                                    <img src="assets/images/dashboard/star-magazine-6.jpg" class="img-fluid" alt="world-news"/>
                                    <span class="thumb-title">TRAVEL</span>
                                </div>
                                <h5 class="font-weight-600 mt-3"> The world's most beautiful racecourses </h5>
                                <p class="fs-15 font-weight-normal">Lorem Ipsum has been the industry's standard dummy text</p>
                            </Col>
                        </Row>
                        <Row class="mt-3">
                            <Col sm={6} class="mb-5 mb-sm-2">
                                <div class="position-relative image-hover">
                                    <img src="assets/images/dashboard/star-magazine-7.jpg" class="img-fluid" alt="world-news"/>
                                    <span class="thumb-title">POLITICS</span>
                                </div>
                                <h5 class="font-weight-600 mt-3"> Japan cancels cherry blossom festivals over virus fears </h5>
                                <p class="fs-15 font-weight-normal"> Lorem Ipsum has been the industry's standard dummy text </p>
                            </Col>
                            <Col sm={6}>
                                <div class="position-relative image-hover">
                                    <img src="assets/images/dashboard/star-magazine-8.jpg" class="img-fluid" alt="world-news"/>
                                    <span class="thumb-title">TRAVEL</span>
                                </div>
                                <h5 class="font-weight-600 mt-3">Classic cars reborn as electric vehicles</h5>
                                <p class="fs-15 font-weight-normal"> Lorem Ipsum has been the industry's standard dummy text</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
  );
}

export default PopularNews;