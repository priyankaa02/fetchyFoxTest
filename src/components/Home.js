import React, {Component} from 'react';

import {HashLink as Link} from 'react-router-hash-link';
import C from '../constants/constant';
import four_dots from '../images/four_dots.jpg';
import food_plate_1 from '../images/food_plate_1.jpeg';
import food_plate_2 from '../images/food_plate_2.png';
import food_plate_3 from '../images/food_plate_3.jpg';
import bottom_food_1 from '../images/bottom_food_1.jpeg';
import bottom_food_2 from '../images/bottom_food_2.jpeg';
import hygiene_1 from '../images/hygiene_1.jpg';
import hygiene_2 from '../images/hygiene_2.jpg';

import './Home.css'


class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpened: false,
        };
    }

    routeTo(path) {
        this.props.history.push(path);
    }

    triggerNav() {
        const {isNavOpened} = this.state;
        this.setState({
            isNavOpened: !isNavOpened,
        });
    }

    render() {
        const {isNavOpened} = this.state;
        return (
            <div className="landing">
                <header>
                    <div className="float-left">
                        <Link to={C.ROUTE_PATH_HOME}>
                            <p className="main-tag">
                              My Shop</p>
                        </Link>
                    </div>
                    <div className="float-right">
                        <a className="nav-trigger" href="#"
                           onClick={(e) => {
                               e.preventDefault();
                               this.triggerNav();
                           }}>
                            <img src={four_dots} alt="Menu"/>
                        </a>
                        <nav className={`${isNavOpened ? 'shown' : 'hidden'}`}>
                            <ul>
                                <li>
                                    <Link className="link-food-items"
                                          to={C.ROUTE_PATH_ITEMS}>
                                        FOOD ITEMS
                                    </Link>
                                </li>
                                <li className="about_us">
                                    <Link className="link-cart"
                                          to={C.ROUTE_PATH_CART}>
                                        CART
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <section className="slider">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                      <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block w-100 img-fluid" src={food_plate_3} alt="First slide"/>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100 img-fluid" src={food_plate_2} alt="Second slide"/>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100 img-fluid" src={food_plate_1} alt="Third slide"/>
                      </div>
                      </div>
                      <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                      </a>
                      <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                      </a>
                    </div>
                </section>

                <section className="about-us">
                    <div className="container-fluid">
                        <p className="p2">
                            Hygienic Food
                        </p>
                        <p className="p4">
                            Food is something necessary for all
                        </p>
                        <p className="p4">
                            Food safety is used as a scientific discipline describing handle, preparation, and storage of food in ways that prevent food-borne illness.
                        </p>
                        <p className="p4">
                          The occurrence of two or more cases of a similar illnesses resulting from the ingestion of a common food is known as a food-borne disease outbreak.
                        </p>
                        <p className="p4">
                          Food contamination happens when food are corrupted with another substance. It can happen In the process of production, transportation, packaging, storage, sales and cooking process. The contamination can be physical, chemical and biological.
                        </p>
                    </div>
                    <div className="container-fluid">
                        <div className="corp-logo">
                            <img src={hygiene_1} alt=""/>
                        </div>
                        <div className="corp-logo">
                            <img src={hygiene_2} alt=""/>
                        </div>
                    </div>
                </section>

                <section className="feature">
                    <div class="container">
                    <p className="p11">
                        Food Quality
                    </p>
                      <div className="row feature-body">
                        <div class="col-sm-4">
                        <div class="card">
                          <div class="card-body">
                            <img className="bottom_food img-fluid" src={food_plate_1} alt=""/>
                            <p className="card-title bottom-title">Special title treatment</p>
                            <p className="card-text bottom-body">With supporting text below as a natural lead-in to additional content.</p>
                          </div>
                        </div>
                        </div>
                        <div class="col-sm-4">
                        <div class="card">
                          <div class="card-body">
                            <img className="bottom_food img-fluid" src={bottom_food_1} alt=""/>
                            <p className="card-title bottom-title">Special title treatment</p>
                            <p className="card-text bottom-body">With supporting text below as a natural lead-in to additional content.</p>
                          </div>
                        </div>
                        </div>
                        <div class="col-sm-4">
                        <div class="card">
                          <div class="card-body">
                            <img className="bottom_food img-fluid" src={bottom_food_2} alt=""/>
                            <p className="card-title bottom-title">Special title treatment</p>
                            <p className="card-text bottom-body">With supporting text below as a natural lead-in to additional content.</p>
                          </div>
                        </div>
                        </div>
                     </div>
                     <p className="p1">Give us your important booking and we will make this special!!</p>
                     <p className="p2">Give us a chance to serve you</p>
                     <p className="p2">Thank You :)</p>
                    </div>
                </section>
            </div>
        );
    }
}


export default Home;
