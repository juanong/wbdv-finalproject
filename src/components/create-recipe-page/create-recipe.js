import React, {useState} from 'react';
import {Container, TextField, Button, Box} from '@material-ui/core';
import './create-recipe.css'
import recipeService from '../../services/recipe-page-service'
import {useParams} from "react-router-dom";

const CreateRecipe = () => {
    const [newRecipe, setNewRecipe] = useState({
        author_id: "",
        title: "",
        picture_url: "",
        servings: 0,
        prep_time: 0,
        cook_time: 0,
        description: "",
        extendedIngredients: "",
        instructions: ""
    })

    const {username} = useParams()

    const createRecipe = (username, newRecipe) => {
        recipeService.createRecipe(username, newRecipe).then(status => {
            if (status == -1) {
                //display banner
            } else {
                console.log('recipe created successfully.')
            }
        })
    }

    return <div>
        {/* Recipe name, number of servings, preparation time, cooking time, Description,
         Ingredients, Instructions */}
        <Container fixed>
            <h1>Create Recipe</h1>
            <TextField
                margin="normal"
                id="recipe-name"
                type="text"
                placeholder="Recipe name"
                fullWidth="true"
                variant="outlined"
                onChange={(event) => setNewRecipe({
                    ...newRecipe,
                    author_id: username,
                    title: event.target.value
                })}
            />
            <TextField
                margin="normal"
                id="no-of-servings"
                type="number"
                placeholder="Number of servings"
                fullWidth="true"
                variant="outlined"
                onChange={(event) => setNewRecipe({...newRecipe, servings: +event.target.value})}
            />
            <TextField
                margin="normal"
                id="preparation-time"
                type="number"
                placeholder="Preparation time"
                fullWidth="true"
                variant="outlined"
                onChange={(event) => setNewRecipe({...newRecipe, prep_time: +event.target.value})}
            />
            <TextField
                margin="normal"
                id="cooking-time"
                type="number"
                placeholder="Cooking time"
                fullWidth="true"
                variant="outlined"
                onChange={(event) => setNewRecipe({...newRecipe, cook_time: +event.target.value})}
            />
            <TextField
                margin="normal"
                id="description"
                type="text"
                placeholder="Description"
                fullWidth="true"
                variant="outlined"
                multiline="true"
                rows={3}
                rowsMax={5}
                onChange={(event) => setNewRecipe({...newRecipe, description: event.target.value})}
            />
            <TextField
                margin="normal"
                id="ingredients"
                type="text"
                placeholder="Ingredients"
                fullWidth="true"
                variant="outlined"
                multiline="true"
                rows={4}
                rowsMax={10}
                onChange={(event) => {

                    const ingredientsEntered = event.target.value
                    const ingredientsArray = ingredientsEntered.split("\n").map((item) => {
                        return {"originalString": item}
                    });
                    console.log("Newly created ingre array")
                    console.log(ingredientsArray);

                    setNewRecipe({
                        ...newRecipe,
                        extendedIngredients: ingredientsArray
                    })

                }}
            />
            <TextField
                margin="normal"
                id="instructions"
                type="text"
                placeholder="Instructions"
                fullWidth="true"
                variant="outlined"
                multiline="true"
                rows={6}
                rowsMax={10}
                onChange={(event) => setNewRecipe({...newRecipe, instructions: event.target.value})}
            />
            <Box mt={2} mb={2}>
                <Button
                    className="wbdv-create-recipe-button"
                    variant="contained"
                    color="primary"
                    fullWidth="true"
                    size="large"
                    onClick={() => {
                        createRecipe(username, newRecipe)
                    }}
                >
                    Create recipe
                </Button>
            </Box>
        </Container>

    </div>
}

export default CreateRecipe