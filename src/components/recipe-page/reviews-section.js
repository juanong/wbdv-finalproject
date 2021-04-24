import React, {useState} from 'react'
import Review from "./review";
import {Link, useParams} from "react-router-dom";
import recipePageService from '../../services/recipe-page-service'

const ReviewsSection = ({recipe, currUser, recipeId, reviews}) => {

    const [newReview, setNewReview] = useState({
        recipe_id: recipeId,
        author: currUser,
        star_rating: 0,
        review_body: ""
    })

    return (
        <div>
            {
                console.log(currUser.username)
            }
            <div className="reviews-header separation-padding">
                <h4>Write a Review</h4>
            </div>
            {
                currUser && currUser.username &&
                <div>
                    <div>
                        <textarea className="form-control top-margin"
                                  placeholder={"Leave all your thoughts on the table"}
                                  onChange={e => setNewReview({...newReview, review_body: e.target.value})}
                        />
                    </div>
                    <br/>
                    <p>On a scale of 1-4, how would you rate this?</p>
                    <div>
                        <select name="star-rating" id="stars"
                                className="form-control"
                                onChange={e => setNewReview({...newReview, star_rating: +e.target.value})}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                        </select>
                    </div>
                    <br/>
                    <button className={`btn btn-block ${newReview.star_rating === 0 ? "disabled" : ""}`}
                            onClick={() => {
                                console.log(newReview)
                                return recipePageService.createReview(newReview)
                            }}>
                        Post review</button>
                </div>
            }
            {
                Object.keys(currUser).length === 0 &&
                <div className="separation-padding">
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
            <div>
                {
                    reviews.length === 0 &&
                    <p>Be the first one to write a review!</p>
                }
                {
                    reviews.length > 0 &&
                    reviews.map(review =>
                        <Review review={review}/>
                    )
                }
            </div>
        </div>
    )
}

export default ReviewsSection