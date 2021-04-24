import React from 'react'

const Review = ({review}) => {

    const stars = review.star_rating

    return (
        <div className="separation-padding review-divider">
            <div className="color-yellow">
                {stars === 1 && <i classname={"fas fa-star"}></i>}
                {stars === 2 && <div><i className={"fas fa-star"}></i><i className={"fas fa-star"}></i></div>}
                {stars === 3 && <div><i className={"fas fa-star"}/><i className={"fas fa-star"}/><i className={"fas fa-star"}/></div>}
                {stars === 4 && <div><i className={"fas fa-star"}/><i className={"fas fa-star"}/><i className={"fas fa-star"}/><i className={"fas fa-star"}/></div>}
            </div>
            <p>
                {review.review_body}
            </p>
            <p>
                {review.author.username}
            </p>
        </div>
    )
}

export default Review