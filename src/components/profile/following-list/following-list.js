import React from "react";
import Container from "@material-ui/core/Container";

const FollowingList = ({following}) => {

    return (<div>
        <Container>
            <ul>
                {
                    following.map(user =>
                        <li>
                            {/*{user.firstname + " " + user.lastname}*/}
                            {user}
                        </li>
                    )
                }
            </ul>
        </Container>
    </div>)
}

export default FollowingList