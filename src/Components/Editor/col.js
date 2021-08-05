import React from 'react'

function col({ title, img, text }) {
    return (
        <div className={"editor-col"}>
            <div className={"img-hover"}>
                <img src={img} alt="" />
                <span className={'img-title'}>{title}</span>
            </div>
            <h5 class="font-weight-600 mt-3 mb-5 ">
                {text}
            </h5>
        </div>
    )
}

export default col
