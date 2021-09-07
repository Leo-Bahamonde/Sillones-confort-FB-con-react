import React from 'react'
import PropTypes from 'prop-types'

function SelectionCard ({title,image,description,price}) {
    return (       
        <div className="card">
            <div className="card-body">
                <a href="https://www.youtube.com/watch?v=pp2ZmjTBB5M&t=602s&ab_channel=Bluuweb%21">
                <img src={image} alt="" width="500px"/>
                <h4 className="card-title">{title}</h4>
                <p>{description}</p>
                <span><b>{price}</b></span>
                </a>
            </div>
        </div>     
    )
}
export default SelectionCard


SelectionCard.propTypes={
    title: PropTypes.string.isRequired,
    image:PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price:PropTypes.string.isRequired
}