import React from "react";
import {useHistory} from 'react-router-dom';

import {
    Card,
    CardActions,
    CardContent,
    CardMedia, Grid,
    IconButton,
    makeStyles,
    Typography
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import {Link, useParams} from "react-router-dom";

const useSearchStyles = makeStyles(theme => ({
        card: {
            maxWidth: 380,
            transition: "0.3s",
            marginBottom: 25,
            margin: "auto",
            boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
            "&:hover": {
                boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
            }
        },
        cardMedia: {
            paddingTop: "70%"
        },
        cardContent: {},
        cardHeading: {},
        accountIconLabel: {
            display: "flex",
            flexDirection: "row",
            fontSize: 15
        }
    }))
;

const RecipeCard = ({recipe, imageBaseUrl}) => {
    const styleClasses = useSearchStyles();
    const {username} = useParams()

    const history = useHistory();

    const goToProfile = (author_id) => {
        if (author_id) {
            history.push(`/${author_id}/profile`)
        }
    }

    return (<Grid item xs={12} sm={12} md={6} lg={4} xl={3}>

            <Card className={styleClasses.card}>
                <Link
                    to={recipe.api_source === 'internal' ? `/recipes/${recipe._id}` :`/recipes/${recipe.id}`}>
                    <CardMedia className={styleClasses.cardMedia}
                               image={recipe.api_source === 'internal' ? recipe.image : `${imageBaseUrl}/${recipe.image}`}/>

                    <CardContent className={styleClasses.cardContent}>
                        <Typography noWrap
                                    className={styleClasses.cardHeading}>
                            {recipe.title}
                        </Typography>
                    </CardContent>
                </Link>
                <CardActions>
                    <IconButton aria-label="Account Icon"
                                classes={{label: styleClasses.accountIconLabel}}
                                onClick={() => goToProfile(recipe.author_id)}>
                        <AccountCircleIcon/>
                        <div>{recipe.api_source && recipe.api_source === 'internal' ? recipe.author_id : 'Anonymous'}</div>
                    </IconButton>

                    {/*<IconButton aria-label="Add to favourites">*/}
                    {/*    <FavoriteIcon/>*/}
                    {/*</IconButton>*/}
                    {/*<IconButton aria-label="Share">*/}
                    {/*    <ShareIcon/>*/}
                    {/*</IconButton>*/}
                </CardActions>
            </Card>
        </Grid>
    )
}

export default RecipeCard