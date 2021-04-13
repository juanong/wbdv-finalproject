import React from 'react'
import Review from "./review";

const ReviewsSection = ({recipe}) => {

    const reviews = recipe.reviews

    return (
        <div>
            <div className="reviews-header separation-padding">
                <h4>Write a Review</h4>
            </div>
            <textarea className="form-control top-margin" placeholder={"Leave all your thoughts on the table"}/>
            <div className="reviews-header separation-padding">
                <h4>Reviews</h4>
            </div>
            <div className="separation-padding">
                {
                    (reviews === "undefined" || typeof reviews === "undefined") &&
                        <p>Be the first one to write a review!</p>
                }
                {
                    (reviews !== "undefined" && typeof reviews !== "undefined") &&
                        reviews.map(review =>
                            <Review review={review}/>
                        )
                }
            </div>
        </div>
    )
}

export default ReviewsSection