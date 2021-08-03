import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import p1 from './images/portfolio1.svg';
import p2 from './images/portfolio2.svg';
import p3 from './images/portfolio3.svg';

const Portfolio = () => {
    return (
        <div className="portfolio-total">
            <h2>Market sentiments, portfolio, and run <br /> the infrastructure of your choice</h2>
         <Container>
            <Row className="mt-5">
                    <Col lg="6" className="portfolio1-side1 w-100 ml-lg-0 ml-3">
                        <h3>Invest Smart</h3>
                        <p className="w-100">Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. </p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </Col>

                    <Col lg="6" className="portfolio1-side2 w-lg-100">
                        <img src={p1} ></img>
                    </Col>
            </Row>

            <Row className="mt-5">
                    <Col lg="6" className="portfolio2-side2 d-lg-block d-none">
                        <img src={p2} ></img>
                    </Col>

                    <Col lg="6" className="portfolio1-side1 w-100 ml-lg-0 ml-3">
                        <h3>Detailed Statistics</h3>
                        <p>View all mining related information in realtime, at any point at any location and decide which polls you want to mine in. </p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </Col>

                    <Col lg="6" className="portfolio2-side2 d-lg-none d-block">
                        <img src={p2} ></img>
                    </Col>
            </Row>

            <Row className="mt-5">
                    <Col lg="6" className="portfolio1-side1 w-100 ml-lg-0 ml-3">
                        <h3>Grow your profit and track your investments</h3>
                        <p>Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments. </p>
                        <a href="#" className="btn btn-primary">Learn More</a>
                    </Col>

                    <Col lg="6" className="portfolio1-side2 w-100 d-lg-block d-none">
                        <img src={p3} className="w-100 mt-5" ></img>
                    </Col>
            </Row>
         </Container>
        
            <div className="subscribe">
                <Container>
                    <Row className="subscribe-inside">
                        <Col lg="4" className="subscribe-side1">
                            <h3>
                            Start mining now
                            </h3>
                            <p>Join now with CRAPPO to get the latest news and start mining now</p>
                        </Col>
                        <Col lg="8" className="subscribe-side2">
                            <input type="email" placeholder="Enter your email" />
                            <a href="#" className="btn btn-secondary">Subscribe</a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};


export default Portfolio;