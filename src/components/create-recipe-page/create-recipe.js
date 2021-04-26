import React, {useState, useEffect} from 'react';
import {Container, TextField, Button, Box} from '@material-ui/core';
import './create-recipe.css'
import recipeService from '../../services/recipe-page-service'
import {useHistory, useParams} from "react-router-dom";
import UploadFile from "../upload-file/upload-file";
import usersService from '../../services/users-service'
import LandingNavbar from "../landing-page/landing-navbar";

const CreateRecipe = () => {
    const [newRecipe, setNewRecipe] = useState({
        author_id: "",
        title: "",
        image: "",
        servings: 0,
        preparationMinutes: 0,
        cookingMinutes: 0,
        summary: "",
        extendedIngredients: "",
        instructions: ""
    })

    const [imageUrl, setImageUrl] = useState();

    //const {username} = useParams()
    const history = useHistory()

    const [currUser, setCurrUser] = useState({})

    useEffect(() => {
        usersService.profile()
            .then(user => setCurrUser(user))
    }, [])

    const createRecipe = (username, newRecipe) => {
        recipeService.createRecipe(username, newRecipe)
            .then(status => {
                if (status == -1) {
                    //display banner
                } else {
                    const id = status._id;
                    history.push(`/recipes/${id}`);
                    //browserHistory.push(`/recipes/${id}`);
                }
            })
    }

    return <div>
        {/* Recipe name, number of servings, preparation time, cooking time, Description,
         Ingredients, Instructions */}
         <LandingNavbar isSearchPage={false} userLoggedIn={currUser}/>
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
                    author_id: currUser.username,
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
                onChange={(event) =>
                    setNewRecipe({...newRecipe, servings: +event.target.value})}
            />
            <TextField
                margin="normal"
                id="preparation-time"
                type="number"
                placeholder="Preparation time"
                fullWidth="true"
                variant="outlined"
                onChange={(event) =>
                    setNewRecipe({...newRecipe, preparationMinutes: +event.target.value})}
            />
            <TextField
                margin="normal"
                id="cooking-time"
                type="number"
                placeholder="Cooking time"
                fullWidth="true"
                variant="outlined"
                onChange={(event) =>
                    setNewRecipe({...newRecipe, cookingMinutes: +event.target.value})}
            />
            <TextField
                margin="normal"
                id="description"
                type="text"
                placeholder="Summary"
                fullWidth="true"
                variant="outlined"
                multiline="true"
                rows={3}
                rowsMax={5}
                onChange={(event) =>
                    setNewRecipe({...newRecipe, summary: event.target.value})}
            />
            <TextField
                margin="normal"
                id="ingredients"
                type="text"
                placeholder="Ingredients : Separate each ingredient with a new line"
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
                onChange={(event) =>
                    setNewRecipe({...newRecipe, instructions: event.target.value})}
            />
            <UploadFile setImageUrl={setImageUrl}/>
            <Box mt={2} mb={2}>
                <Button
                    className="wbdv-create-recipe-button"
                    disabled={
                        newRecipe.author_id === "" ||
                        newRecipe.title === "" ||
                        newRecipe.servings === "" ||
                        newRecipe.prep_time === "" ||
                        newRecipe.cook_time === "" ||
                        newRecipe.instructions === "" ||
                        newRecipe.summary === ""
                    }
                    variant="contained"
                    color="primary"
                    fullWidth="true"
                    size="large"
                    onClick={() => {
                        if (imageUrl && imageUrl !== undefined) {
                            newRecipe.image = `${process.env.REACT_APP_INTERNAL_IMAGES_URI}/` + imageUrl;
                        }
                        createRecipe(currUser.username, newRecipe)
                    }}
                >
                    Create recipe
                </Button>
            </Box>
        </Container>

    </div>
}

export default CreateRecipe