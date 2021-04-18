import React from 'react'

const RecipeBody = ({recipe}) => {

    const ingredients = recipe.extendedIngredients
    const instructionsParent = recipe.analyzedInstructions
    let instructions = {}

    if (instructionsParent !== "undefined" && typeof instructionsParent !== "undefined") {
        instructions = instructionsParent[0]
    }

    let summary_formatted = ""

    // Grab the recipe summary, use only the first two sentences, and remove any HTML elements
    if (recipe.summary && typeof recipe.summary) {
        const summary = recipe.summary
        summary_formatted = summary.replace(/(<([^>]+)>)/gi, "")
    }

    return (
        <div>
            <div className="row flex-row">
                <div className="separation-padding">
                    <img className="description-image" src={recipe.image} alt="img-fluid"/>
                </div>
            </div>
            <div>
                <h4>Description</h4>
                {summary_formatted}
            </div>
            <div className="separation-padding">
                <h4>Ingredients</h4>
                <ul>
                    {
                        ingredients !== "undefined" && typeof ingredients !== "undefined" &&
                            ingredients.map(item =>
                                <li className="list-spacing">
                                    {item.originalString[0].toUpperCase() + item.originalString.slice(1)}
                                </li>
                            )
                    }
                </ul>
            </div>
            <div className="separation-padding">
                <h4>Instructions</h4>
                {/*<ol>*/}
                {/*    {*/}
                {/*        instructions.steps !== "undefined" && typeof instructions.steps !== "undefined" &&*/}
                {/*            instructions.steps.map(item =>*/}
                {/*                <li className="list-spacing">*/}
                {/*                    {item.step}*/}
                {/*                </li>*/}
                {/*            )*/}
                {/*    }*/}
                {/*</ol>*/}
                <p>
                    {recipe.instructions}
                </p>
            </div>
        </div>
    )
}

export default RecipeBody