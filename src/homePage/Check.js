import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import bitcoinIMG from './images/bitcoin.svg';
import etIMG from './images/et.svg';
import liteIMG from './images/lite.svg';
import ChevronRightOutlinedIcon from '@material-ui/icons/ChevronRightOutlined';

const Check = () => {
    return (
        <div className="check-total">
            <Container>
                    <div className="check-card d-lg-block d-none">
                        <div className="check-card-header">
                            <input type="text" placeholder="Enter your hash rate" />
                            <select>
                                <option>TH/s</option>
                                <option>TH/h</option>
                                <option>TH/m</option>
                            </select>
                            <a href="#" className="btn btn-primary">Calculate</a>
                        </div>
                        <div className="check-card-body">
                            <p>ESTIMATED 24 HOUR REVENUE:</p>
                            <h2>0.055 130 59 ETH <span>($1275)</span></h2>
                            <p>Revenue will change based on mining difficulty and Ethereum price.</p>
                        </div>
                    </div>

                    <div className="next-side">
                        <h2>Trade securely and market the high <br /> growth cryptocurrencies.</h2>
                        <Row className="mt-5">
                            <Col lg="4" className="check-item">
                                <img src={bitcoinIMG} alt="paypal image"></img>
                                <h3>Bitcoin <span>BTC</span></h3>
                                <p>Digital currency in which a record of transactions is maintained.</p>
                                <a href="#" className="btn btn-primary">
                                    Start Mining <ChevronRightOutlinedIcon className="rightIcon"/>
                                </a>
                            </Col>

                            <Col lg="4" className="check-item">
                                <img src={etIMG} alt="qiwi image"></img>
                                <h3>Ethereum <span>ETH</span></h3>
                                <p>Blockchain technology to create and run decentralized digital applications.</p>
                                <a href="#" className="btn btn-primary">
                                    Start Mining <ChevronRightOutlinedIcon className="rightIcon"/>
                                </a>
                            </Col>

                            <Col lg="4" className="check-item">
                                <img src={liteIMG} alt="payer image"></img>
                                <h3>Litecoin  <span>LTC</span></h3>
                                <p>Cryptocurrency that enables instant payments to anyone in the world.</p>
                                <a href="#" className="btn btn-primary">
                                    Start Mining <ChevronRightOutlinedIcon className="rightIcon"/>
                                </a>
                            </Col>
                        </Row>
                    </div>
            </Container>
        </div>
    );
};


export default Check;