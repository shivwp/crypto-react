import React from 'react';
import { useState } from 'react'
import { Dropdown } from 'react-bootstrap';
import { Row, Col, Container } from 'react-bootstrap';

const Header = () => {
    const options = [

    ]
    const [value, setValue] = useState('BTC');

    const handleChange = (event) => {

        setValue(event.target.value);

    };

    return (
        <div className='header'>
            <Container>
                <Row>
                    <Col >
                        <Dropdown className='ml-4 mt-4'>
                            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                                {value}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </Col>
                    <Col>
                        <Dropdown>
                            <Dropdown.Toggle variant="secondary ml-4 mt-4" id="dropdown-basic">
                                {value}
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    <Col>
                        <button className='ml-4 mt-4 btnrfrnw'>Refresh Now</button>
                    </Col>
                    <Col>
                        <div className="cur-ref-prc">
                            <div className="cur-ref-prc-heading">
                                <p><strong>Current Refference Price</strong></p>
                            </div>
                            <div><h2><strong>27,553</strong></h2></div>
                            <div><h5>USDC</h5></div>
                        </div>
                    </Col>
                    <Col>
                        <div className="tm-expr">
                            <div className="tm-expr-heading">
                                <p><strong>Time to Expiry</strong></p>
                            </div>
                            <div className="tm-expr-tme">
                                <h2>11D 12H 15M</h2>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <button className='ml-4 mt-4 cnctwltbtn'><b>CONNECT WALLET</b></button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Header;