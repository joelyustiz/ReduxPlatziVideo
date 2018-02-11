import React from 'react'
import './title.css'
function title(props) {
    return(
        <div className="Title">
            <h2>{props.title}</h2>
        </div>
    )
}

export default title;