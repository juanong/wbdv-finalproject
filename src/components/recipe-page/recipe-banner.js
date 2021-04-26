import React from 'react'
import {Link} from 'react-router-dom'

const RecipeBanner = ({recipe, author}) => {

    return (
        <div className="jumbotron rounded-0 jumbo-recipe jumbotron-fluid shadow make-wider">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-7">
                        <div className="recipe-profile-pad">
                            <h1>{recipe.title}</h1>
                            {
                                Object.keys(author).length === 0  &&
                                <div>
                                    <i className="far fa-user fa-2x icon-spacing"></i>
                                    <span className="icon-spacing">Anonymous Spoon</span>
                                </div>
                            }
                            {
                                Object.keys(author).length !== 0 &&
                                <div>
                                    {/*<img src={author.profilePic_url}*/}
                                    {/*     className="recipe-banner-profile-pic"/>*/}
                                     <Link to={`/${author.username}/profile`}>
                                         <span>{`${author.firstName} ${author.lastName}`}</span>
                                     </Link>
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