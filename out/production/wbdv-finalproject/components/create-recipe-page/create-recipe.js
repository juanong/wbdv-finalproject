import React from 'react';
import {Container, TextField, Button, Box} from '@material-ui/core';
import './create-recipe.css'

const CreateRecipe = () => {
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
                variant="outlined"/>
            <TextField
                margin="normal"
                id="no-of-servings"
                type="number"
                placeholder="Number of servings"
                fullWidth="true"
                variant="outlined"/>
            <TextField
                margin="normal"
                id="preparation-time"
                type="number"
                placeholder="Preparation time"
                fullWidth="true"
                variant="outlined"/>
            <TextField
                margin="normal"
                id="cooking-time"
                type="number"
                placeholder="Cooking time"
                fullWidth="true"
                variant="outlined"/>
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
            />
            <TextField
                margin="normal"
                id="instructions"
                type="text"
                placeholder="Ingredients"
                fullWidth="true"
                variant="outlined"
                multiline="true"
                rows={4}
                rowsMax={10}
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
            />
            <Box mt={2} mb={2}>
                <Button
                    className="wbdv-create-recipe-button"
                    variant="contained"
                    color="primary"
                    fullWidth="true"
                    size="large"
                >
                    Create recipe
                </Button>
            </Box>
        </Container>

    </div>
}

export default CreateRecipe