import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';

import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemText,
    Container,
    IconButton,
    List,
    TextField, InputAdornment
} from "@material-ui/core"
import Typography from "@material-ui/core/Typography";
import RecipeNavBarV2 from "../recipe-page/recipe-navbar-v2";
import {AccountCircle, Search} from "@material-ui/icons";
import {Link, useParams} from "react-router-dom";

const useStyles = makeStyles({
    navbarDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    navDisplayFlex: {
        display: `flex`,
        justifyContent: `space-between`
    },
    linkText: {
        textDecoration: `none`,
        textTransform: `uppercase`,
        color: `white`
    },
    wbdvLandingSearchBar: {
        color: "white"
    }
});

const navLinks = [
    {title: `Home`, path: `/home`},
    // { title: `Recipes`, path:`/recipies` },
    // { title: `Vegetarian & Vegan Paradise`, path: `/vegan` },
    // { title: `Blogs`, path: `/blogs` },
    {title: `About Us`, path: `/aboutus`},
    {title: 'Contact', path: `/contact`}
];

export default function LandingNavbar(props) {
    const classes = useStyles();

    const {username} = useParams();

    return (
        <AppBar position="static">
            <Toolbar>
                <RecipeNavBarV2/>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="left"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    Spoonful
                </Typography>
                <Container maxWidth="md" className={classes.navbarDisplayFlex}>

                    <List
                        component="nav"
                        aria-labelledby="main navigation"
                        className={classes.navDisplayFlex}
                    >
                        {navLinks.map(({title, path}) => (
                            <a href={path} key={title} className={classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary={title}/>
                                </ListItem>
                            </a>
                        ))}
                    </List>

                    <TextField
                        className={classes.wbdvLandingSearchBar}
                        variant="filled"
                        id="input-with-icon-textfield"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Search/>
                                </InputAdornment>
                            ),
                        }}
                    />

                    {
                        username === undefined &&
                        <>
                            <Link to={'/login'}>
                                <button type="button" className="btn btn-success">
                                    Log In
                                </button>
                            </Link>
                            <Link to={'/signup'}>
                                <button type="button" className="btn btn-success">
                                    Sign Up
                                </button>
                            </Link>
                        </>

                    }

                </Container>
            </Toolbar>
        </AppBar>
    );
}

LandingNavbar.propTypes = {
    posts: PropTypes.array,
    title: PropTypes.string,
};