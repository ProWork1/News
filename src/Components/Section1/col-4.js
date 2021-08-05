import React from 'react'
import './styles.scss'
function col({img,title,body}) {
    return (
        <div className="col-text">
            <div className="header">
                <img src={img} alt="" className="img" />
                <p>{title}</p>
            </div>
            <p>{body}</p>
            <hr/>
        </div>
    )
}

export default col
