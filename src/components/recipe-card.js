import React from "react";
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

    return (<Grid item xs={12} s={12} m={4} l={4} xl={3}>

            <Card className={styleClasses.card}>
                <Link to={`/${username}/recipes/${recipe.id}`}>
                    <CardMedia className={styleClasses.cardMedia}
                               image={`${imageBaseUrl}/${recipe.image}`}/>

                    <CardContent className={styleClasses.cardContent}>
                        <Typography noWrap
                                    className={styleClasses.cardHeading}>
                            {recipe.title}
                        </Typography>
                    </CardContent>
                </Link>
                <CardActions>
                    <IconButton aria-label="Account Icon"
                                classes={{label: styleClasses.accountIconLabel}}>
                        <AccountCircleIcon/>
                        <div>Anonymous</div>
                    </IconButton>

                    <IconButton aria-label="Add to favourites">
                        <FavoriteIcon/>
                    </IconButton>
                    <IconButton aria-label="Share">
                        <ShareIcon/>
                    </IconButton>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default RecipeCard