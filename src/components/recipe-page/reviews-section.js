import React from 'react'
import Review from "./review";
import {Link} from "react-router-dom";

const ReviewsSection = ({recipe, currUser}) => {

    const reviews = recipe.reviews

    return (
        <div>
            {
                console.log(currUser)
            }
            <div className="reviews-header separation-padding">
                <h4>Write a Review</h4>
            </div>
            {
                currUser && currUser.username &&
                <textarea className="form-control top-margin"
                          placeholder={"Leave all your thoughts on the table"}/>
            }
            {
                Object.keys(currUser).length === 0 &&
                <div>
                    <Link to="/login">
                        Login
                    </Link>
                    <span> or </span>
                    <Link to="/signup">
                        Sign Up
                    </Link>
                    <span> to leave a review</span>
                </div>
            }
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