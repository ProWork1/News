import React from 'react'
import './blog.scss'

export default function Blog() {
    return (
        <>
            <div className="container mt-5" id = "blog">
                <div className="row">
                    <div className="col-12 text-center blog_theme">
                        <p>Use Our Compilation Of Most Famous Museums</p>
                        <button className = "btn-dark">News</button>
                        <div>
                            <img src="./images/Profile_1.jpg" alt="" className = "rounded-circle mx-2"/>
                            <span>Oka Tomoaki | 23 February, 2018</span>
                        </div>
                        <p>
                        He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche! movement. For many, however, the campaign has become less about backing Macron and instead about voting against Le Pen, the National Front candidate.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 col-12 mt-4 blog_img">
                        <img src="./images/news-1.jpg" alt="" />
                    </div>
                    <p>
                        He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche! movement. For many, however, the campaign has become less about backing Macron and instead about voting against Le Pen, the National Front candidate.
                    </p>
                </div>
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 col-12 mt-4">
                        <div className="row">
                            <div className="col-lg-6 col-12 blog_picture">
                                <img src="./images/news-2.jpg" alt="" />
                            </div>
                            <div className="col-lg-6 col-12 blog_text">
                                <p>TravelTips: How Do I Live On The Cheap?</p>
                                <p>He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche! movement. For many, however, the campaign has become less about backing Macron and instead about voting against Le Pen, the National Front candidate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 blog_section2">
                        <p>
                            He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche!     movement. For many, however, the campaign has become less about backing Macron and instead about voting     against Le Pen, the National Front candidate.
                        </p>
                        <p>
                            He has led a remarkable campaign, defying the traditional mainstream parties courtesy of his En Marche! movement. For many, however, the campaign has become less about backing Macron and instead about voting against Le Pen, the National Front candidate.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
