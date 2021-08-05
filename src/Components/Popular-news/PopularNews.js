import React from 'react'
import PopularNewsContents from './PopularNewsContents'
import { Row, Col} from 'reactstrap'
import './popularnews.scss'

const PopularNews = () => {
    const popularproducts = [
        {
            id: 1,
            img: './images/PopularNews/star-magazine-5.jpg',
            thumbtitle: 'POLITICS',
            title: "A look at California's eerie plane graveyards",
            text: " Lorem Ipsum has been the industry's standard dummy text"
        },
        {
            id: 2,
            img: './images/PopularNews/star-magazine-6.jpg',
            thumbtitle: 'TRAVEL',
            title: "The world's most beautiful racecourses",
            text: "Lorem Ipsum has been the industry's standard dummy text"
        },
        {
            id: 3,
            img: './images/PopularNews/star-magazine-7.jpg',
            thumbtitle: 'POLITICS',
            title: "Japan cancels cherry blossom festivals over virus fears",
            text: "Lorem Ipsum has been the industry's standard dummy text"
        },
        {
            id: 4,
            img: './images/PopularNews/star-magazine-8.jpg',
            thumbtitle: 'TRAVEL',
            title: "Classic cars reborn as electric vehicles",
            text: "Lorem Ipsum has been the industry's standard dummy text"
        }
    ]
  return (
            <section className="editors-news">
                <Row className="main-title">
                    <Col lg={3}>
                        <div class="d-flex position-relative float-left">
                            <h3 class="section-title">Popular News</h3>
                        </div>
                    </Col>
                </Row>
                <PopularNewsContents popularproducts={popularproducts}/>
            </section>
  );
}

export default PopularNews;