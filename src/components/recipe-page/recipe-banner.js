import React from 'react'

const RecipeBanner = ({recipe}) => {

    const user = recipe.user

    return (
        <div className="jumbotron rounded-0 jumbo-recipe jumbotron-fluid shadow make-wider">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-7">
                        <div className="recipe-profile-pad">
                            <h1>{recipe.title}</h1>
                            {
                                (user === "undefined" || typeof user === "undefined") &&
                                    <div>
                                        <i className="far fa-user fa-2x icon-spacing"></i>
                                        <span className="icon-spacing">Anonymous Spoon</span>
                                    </div>
                            }
                            {
                                user !== "undefined" && typeof user !== "undefined" &&
                                    <div>
                                        <img src={recipe.user.profilepic} className="recipe-banner-profile-pic"/>
                                        <span>{recipe.user.name}</span>
                                    </div>
                            }
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="banner-list-padding">
                            <ul>
                                <li>{recipe.servings} servings</li>
                                <li>{recipe.preparationMinutes} minutes prep time</li>
                                <li>{recipe.cookingMinutes} minutes cooking time</li>
                            </ul>
                            <i className="fas fa-heart color-red icon-spacing"></i><span>Save this recipe</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeBanner