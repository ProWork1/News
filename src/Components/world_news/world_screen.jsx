import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import './world_screen.scss'

const card = [
    {
        image: "./images/travel.jpg",
        theme: "travel",
        text1: "Refugees flood Turkey's border with Greece",
        text2: "Lorem Ipsum has been the industry's standard dummy text",
        text3: "read article"
    },
    {
        image: "./images/news.jpg",
        theme: "news",
        text1: "South Korea’s Moon Jae-in sworn in vowing address",
        text2: "Lorem Ipsum has been the industry's standard dummy text",
        text3: "read article"
    },
    {
        image: "./images/art.jpg",
        theme: "art",
        text1: "These puppies are training to assist in avalanche rescue",
        text2: "Lorem Ipsum has been the industry's standard dummy text",
        text3: "read article"
    },
    {
        image: "./images/business.jpg",
        theme: "business",
        text1: "'Love Is Blind' couple opens up about their first year",
        text2: "Lorem Ipsum has been the industry's standard dummy text",
        text3: "read article"
    },
]

export default function WorldScreen() {
    return (
        <>
            <Container className=" mt-5">
                <p className = "world_theme">
                    world news
                </p>
                <Row>
                    {/* map to use; card array */}
                    {card.map(({image,theme,text1,text2,text3}) => (
                        <Col xs = "12" lg = {{size: 3}} md = {{size: 6}} className="col-lg-3 col-md-6 col-12 world_card mt-sm-4" key = {image}>
                            <div>
                                <img src={image} alt="" />
                                <div><p>{theme}</p></div>
                            </div>
                            <p>{text1}</p>
                            <p>{text2}</p>
                            <Link to = "/" className = "nav-link">{text3}</Link>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}
