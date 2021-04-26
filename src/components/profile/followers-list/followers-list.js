import React from 'react';
import {Container} from "@material-ui/core";

const FollowersList = (props) => {

    console.log('followers list', this.props.location.followersUsernamesList)

    return (<div>
        <Container>
            <ul>
                {
                    props.location.followersUsernamesList.map(user =>
                        <li>
                            {user.firstname + " " + user.lastname}
                        </li>
                    )
                }
            </ul>
        </Container>
    </div>)
}

export default FollowersList