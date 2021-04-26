import React, {useEffect, useState} from 'react';
import {Container, List} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
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
        maxWidth: 800
    }
}));

const FollowersList = () => {

    const classes = useStyles();
    const {username} = useParams()
    //const [userProfile, setUserProfile] = useState({})
    const [followers, setFollowers] = useState([])

    useEffect(() => {
        usersService.findUserByUsername(username)
            .then(user => {
                //setUserProfile(user)
                console.log('followers testing', user.followers)
                usersService.getFilteredUsers(user.followers)
                    .then(followers => {
                        console.log('following testing new api', followers)
                        setFollowers(followers)
                    })
            })
    }, [])

    return (<div>
        <Container className={classes.container}>
            <h2>Your followers:</h2>
            {
                (!followers || followers.length === 0) &&
                <p>
                    You dont have any followers yet!
                    Hang in there! People will notice you.
                </p>
            }
            {
                followers && followers.length > 0 &&
                <List className={classes.root}>
                    {
                        followers.map(user =>
                            <>
                            <Link to={`/${user.username}/profile`}>

                            <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                            <Avatar
                                                src={user.profilePic_url}/>
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

export default FollowersList