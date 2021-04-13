import React from 'react'

const Review = ({review}) => {

    const stars = review.stars

    return (
        <div className="separation-padding review-divider">
            <div className="color-yellow">
                {stars === 1 && <i classname={"fas fa-star"}></i>}
                {stars === 2 && <div><i className={"fas fa-star"}></i><i className={"fas fa-star"}></i></div>}
                {stars === 3 && <div><i className={"fas fa-star"}/><i className={"fas fa-star"}/><i className={"fas fa-star"}/></div>}
                {stars === 4 && <div><i className={"fas fa-star"}/><i className={"fas fa-star"}/><i className={"fas fa-star"}/><i className={"fas fa-star"}/></div>}
            </div>
            <p>
                {review.text}
            </p>
            <p>
                {review.username} | {review.date}
            </p>
        </div>
    )
}

export default Review