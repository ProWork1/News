import React from 'react'
import { Link } from 'react-router-dom'
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

export default function World_screen() {
    
    return (
        <>
            <div className="container">
                <p className = "world_theme">
                    world news
                </p>
                <div className="row">
                    {/* map to use; card array */}
                    {card.map(({image,theme,text1,text2,text3}) => (
                        <div className="col-lg-3 col-md-6 col-12 world_card">
                            <div>
                                <img src={image} alt="" />
                                <div><p>{theme}</p></div>
                            </div>
                            <p>{text1}</p>
                            <p>{text2}</p>
                            <Link to = "/" className = "nav-link">{text3}</Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
