import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import cake from '../../images/bg-img/bg2.jpg'
import RecipeCard from "../recipe-card/recipe-card";

const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
    headings : {
        paddingLeft: 40,
        marginTop: 20
    }
});

const styles = {
    paperContainer: {
        backgroundImage: `url(${cake})`
    }
};

const LandingMain = ({recipes, imageBaseUrl, latestRecipes, user}) => {
    const classes = useStyles();
    // const { post } = props;

    return (
        <>
            {
                // Anonymous and home cook
                ((!user || !user.username) || (user && user.userType === 'HOME_COOK')) &&
                <>
                    <h2 className={classes.headings}> Recent recipes posted</h2>

                </>
            }
            {
                // Chefs
                user && user.username && user.userType === "CHEF" &&
                <>
                    <h2 className={classes.headings}>Your Recent recipes</h2>
                    {
                        latestRecipes.length === 0 &&
                        <p className={classes.headings}>
                            You haven't posted any recipes yet.
                        </p>
                    }
                </>

            }
            <br/>
            <Grid container>
                {
                    latestRecipes.map(recipe => <RecipeCard recipe={recipe}
                                                            imageBaseUrl={imageBaseUrl}/>
                    )
                }
            </Grid>
            <h2 className={classes.headings}>Other recipes you might like</h2>
            <br/>
            <Grid container>
                {
                    recipes.map(recipe => <RecipeCard recipe={recipe}
                                                      imageBaseUrl={imageBaseUrl}/>
                    )
                }

            </Grid>
        </>
    )
}

// LandingMain.propTypes = {
//     post: PropTypes.object,
// };

export default LandingMain