import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import PersonIcon from '@material-ui/icons/Person';
import PublicIcon from '@material-ui/icons/Public'; 

const Users = () => {
    return (
        <div className="user-main">
            <Container>
                <Row>
                    <Col lg="4" className="total-users mt-2 mt-5">
                        <section className="user-icon">
                            <EqualizerOutlinedIcon />
                        </section>
                        <div>
                            <h2>
                                $30B
                            </h2>
                            <p>
                                Digital Currency Exchanged
                            </p>
                        </div>
                    </Col>

                    <Col lg="4" className="total-users mt-2 mt-5">
                        <section className="user-icon">
                            <PersonIcon />
                        </section>
                        <div>
                            <h2>
                                10M+
                            </h2>
                            <p>
                                Trusted Wallets Investor
                            </p>
                        </div>
                    </Col>

                    <Col lg="4" className="total-users mt-2 mt-5">
                        <section className="user-icon">
                            <PublicIcon />
                        </section>
                        <div>
                            <h2>
                                195
                            </h2>
                            <p>
                                Countries Supported
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Users;