import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import cake from '../../images/bg-img/bg2.jpg'
import noodles from '../../images/bg-img/bg3.jpg'
import {sizing} from '@material-ui/system';
import Paper from '@material-ui/core/Paper';
import RecipeCard from "../recipe-card/recipe-card";
import searchService from "../../services/search-recipe-services";

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
                    <h2> Recent recipes posted</h2>

                </>
            }
            {
                // Chefs
                user && user.username && user.userType === "CHEF" &&
                <>
                    <h2>Your Recent recipes</h2>
                    {
                        latestRecipes.length === 0 &&
                        <p>
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
            <h2>Other recipes you might like</h2>
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