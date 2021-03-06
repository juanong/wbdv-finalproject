import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

export default function LandingHeader(props) {
    const classes = useStyles();
    const { sections, title } = props;

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Link to={'/profile'} >
                    <button type="button" className="btn btn-success">
                        Profile
                    </button>
                </Link>
                &nbsp; &nbsp;

                {/*    <Link to={'/login'} >*/}
                {/*        <button type="button" className="btn btn-success">*/}
                {/*            Log In*/}
                {/*        </button>*/}
                {/*    </Link>*/}
                {/*&nbsp; &nbsp;*/}
                {/*    <Link to={'/signup'}>*/}
                {/*        <button type="button" className="btn btn-success">*/}
                {/*            Sign Up*/}
                {/*        </button>*/}
                {/*    </Link>*/}
            </Toolbar>

        </React.Fragment>
    );
}

LandingHeader.propTypes = {
    sections: PropTypes.array,
    title: PropTypes.string,
};