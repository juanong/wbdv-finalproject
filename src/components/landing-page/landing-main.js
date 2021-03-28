import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import cake from '../../images/bg-img/bg2.jpg'
import noodles from '../../images/bg-img/bg3.jpg'
import { sizing } from '@material-ui/system';
import Paper from '@material-ui/core/Paper';

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

export default function LandingMain(props) {
    const classes = useStyles();
    const { post } = props;

    return (


        <div className="container">

            <div className="row">
                <div className="col-12">
                    <div className="section-heading">
                        <h3>Recipes of the Day:</h3>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="single-top-catagory">
                        <img src={cake} alt="" class = "img-responsive" width = "100%" />
                            <div className="top-cta-content">
                                <h3>Strawberry Cake</h3>
                                <h6>Simple &amp; Delicious</h6>
                                <a href="receipe-post.html" className="btn delicious-btn">See Full Receipe</a>
                            </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="single-top-catagory">
                        <img src={noodles} alt="" class = "img-responsive" width = "100%"/>
                            <div className="top-cta-content">
                                <h3>Chinese Noodles</h3>
                                <h6>Simple &amp; Delicious</h6>
                                <a href="receipe-post.html" className="btn delicious-btn">See Full Receipe</a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

LandingMain.propTypes = {
    post: PropTypes.object,
};