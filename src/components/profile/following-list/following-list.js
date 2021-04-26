import React, {useEffect, useState} from "react";
import Container from "@material-ui/core/Container";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import {List} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Link, useParams} from "react-router-dom";
import usersService from "../../../services/users-service";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    container: {
        marginTop: 20,
        maxWidth: 700
    },
    avatar : {
        backgroundSize: 'cover',
        backgroundPosition: 'top center'
    }
}));

const FollowingList = () => {

    const classes = useStyles();
    const {username} = useParams()
    //const [userProfile, setUserProfile] = useState({})
    const [following, setFollowing] = useState([])

    useEffect(() => {
        usersService.findUserByUsername(username)
            .then(user => {
                //setUserProfile(user)
                console.log('followers testing', user.following)
                usersService.getFilteredUsers(user.following)
                    .then(following => {
                        console.log('following testing new api', following)
                        setFollowing(following)
                    })
            })
    }, [])

    return (<div>
        <Container  className={classes.container}>
            <h2>People you are following</h2>
            {
                (!following || following.length === 0) &&
                <p>
                    You are not following anyone right now!
                </p>
            }
            {
                following && following.length > 0 &&
                <List className={classes.root}>
                    {
                        following.map(user =>
                            <>
                                <Link to={`/${user.username}/profile`}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar size={100} className={classes.avatar}/>
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary={user.firstName + " " + user.lastName}
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        component="span"
                                                        variant="body2"
                                                        className={classes.inline}
                                                        color="textPrimary"
                                                    >
                                                        {user.userType === "CHEF" ? "Chef"
                                                            : "Home cook"}
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                </Link>
                                <Divider variant="inset" component="li"/>
                            </>
                        )
                    }
                </List>
            }
        </Container>
    </div>)
}

export default FollowingList