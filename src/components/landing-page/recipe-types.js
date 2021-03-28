import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Image1 from '../../images/bg-img/r1.jpg'
import Image2 from '../../images/bg-img/r2.jpg'
import Image3 from '../../images/bg-img/r3.jpg'
import Image4 from '../../images/bg-img/r4.jpg'
import Image5 from '../../images/bg-img/r5.jpg'
import Image6 from '../../images/bg-img/r6.jpg'


const RecipeTypes = () => {
    return(
        <div>
        <section id="middle" className="clearfix">
            <div className="col-sm-12 space_all">
                <div id="Carousel" className="carousel slide">
                    <ol className="carousel-indicators">
                        <li data-target="#Carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#Carousel" data-slide-to="1"></li>
                        <li data-target="#Carousel" data-slide-to="2" className=""></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <a href="#" className="thumbnail"><img src={Image1} alt="abc"
                                                                           className="img_responsive"/></a>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <a href="#" className="thumbnail"><img src={Image2} alt="abc"
                                                                           className="img_responsive"/></a>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <a href="#" className="thumbnail"><img src={Image3} alt="abc"
                                                                           className="img_responsive"/></a>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <a href="#" className="thumbnail"><img src={Image4} alt="abc"
                                                                           className="img_responsive"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <a href="#" className="thumbnail"><img src="img/7.jpg" alt="abc"
                                                                           className="img_responsive"/></a>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <a href="#" className="thumbnail"><img src="img/8.jpg" alt="abc"
                                                                           className="img_responsive"/></a>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <a href="#" className="thumbnail"><img src="img/9.jpg" alt="abc"
                                                                           className="img_responsive"/></a>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <a href="#" className="thumbnail"><img src="img/10.jpg" alt="abc"
                                                                           className="img_responsive"/></a>
                                </div>
                            </div>
                        </div>
                        <div className="item">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <a href="#" className="thumbnail"><img src="img/11.jpg" alt="abc"
                                                                           className="img_responsive"/></a>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <a href="#" className="thumbnail"><img src="img/12.jpg" alt="abc"
                                                                           className="img_responsive"/></a>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <a href="#" className="thumbnail"><img src="img/13.jpg" alt="abc"
                                                                           className="img_responsive"/></a>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <a href="#" className="thumbnail"><img src="img/14.jpg" alt="abc"
                                                                           className="img_responsive"/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default RecipeTypes