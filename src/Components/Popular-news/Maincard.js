import React from 'react'
import './popularnews.scss'
import {} from 'reactstrap'

const Maincard  = () => {
    return (
        <div>
            <div className="position-relative image-hover">
                <img src="./images/PopularNews/glob.jpg" className="img-fluid" alt="world-news"/>
                <span className="thumb-title">NEWS</span>
            </div>
            <h1 className="font-weight-600 mt-3">Melania Trump speaks about courage at State Department</h1>
            <p className="fs-15 font-weight-normal">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and</p>
        </div>
    )
}

export default Maincard