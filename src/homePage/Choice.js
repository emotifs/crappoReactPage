import React from 'react';
import {Container,  Row, Col} from 'reactstrap';
import ChoiceIMG from '../homePage/images/ChoiceIMG.svg';
import design1 from '../homePage/images/design1.svg';
import design2 from '../homePage/images/design2.svg'

const Choice = () => {
    return (
        <div className="choice-total d-lg-block d-none">
          <Container>
            <Row>
                    <Col lg="6" className="d-lg-block d-none">
                        <img src={ChoiceIMG} alt="choice-image" className="w-100"></img>
                    </Col>

                    <Col lg="6" className="choice-side2 ">
                        <h2>
                        Why you should choose CRAPPO
                        </h2>
                        <p>
                        Experience the next generation cryptocurrency platform. No financial borders, extra fees, and fake reviews.
                        </p>
                        <a href="#" className="btn btn-primary choice-btn">Learn More</a>
                    </Col>
             </Row>
                <img src={design1} className="design1"></img>
                <img src={design2} className="design2"></img>
                <div className="check-header d-lg-block d-none">
                    <h2>Check how much you can earn</h2>
                    <p>Let’s check your hash rate to see how much you will earn today, <br />Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
          </Container>
        </div>
    );
};


export default Choice;