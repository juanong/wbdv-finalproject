import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import {AppBar, Toolbar, ListItem, ListItemText, Container, IconButton, List} from "@material-ui/core"
import Typography from "@material-ui/core/Typography";

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
    }
});

const navLinks = [
    { title: `Home`, path: `/home` },
    { title: `Recipies`, path:`/recipies` },
    { title: `Vegetarian & Vegan Paradise`, path: `/vegan` },
    { title: `Blogs`, path: `/blogs` },
    { title: `About Us`, path: `/aboutus` },
    {title: 'Contact', path: `/contact`}
];

export default function LandingNavbar(props) {
    const classes = useStyles();

    return (
        <AppBar position="static">
            <Toolbar>
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
                        {navLinks.map(({ title, path }) => (
                            <a href={path} key={title} className={classes.linkText}>
                                <ListItem button>
                                    <ListItemText primary={title} />
                                </ListItem>
                            </a>
                        ))}
                    </List>
                </Container>
            </Toolbar>
        </AppBar>
    );
}

LandingNavbar.propTypes = {
    posts: PropTypes.array,
    title: PropTypes.string,
};