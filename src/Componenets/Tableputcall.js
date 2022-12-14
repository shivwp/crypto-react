import React from 'react';
import { Row, Col } from 'react-bootstrap';

// require('typescript-require');
// // var CptFuns = require('../helper_functions/functions');

const ASSETS = {
    BTC: "BTC", ETH: "ETH", LTC: "LTC"
}

console.log(ASSETS);

const Tableputcall = () => {
    return (
        <div className='tableputcall'>

            <Row>
                <Col className='puts'><b>PUTS</b></Col>
                <Col className='calls'><b>CALLS</b></Col>
            </Row>

            <Row className='rValue'>
                <Col>
                    <div className="rValueheading">
                        <h5><b>R3</b></h5>
                    </div>
                    <div className="rValuedata text-muted">
                        <h6>(-12000)</h6>
                    </div>
                </Col>
                <Col>
                    <div className="rValueheading">
                        <h5><b>R2</b></h5>
                    </div>
                    <div className="rValuedata text-muted">
                        <h6>(-5000)</h6>
                    </div>
                </Col>
                <Col>
                    <div className="rValueheading">
                        <h5><b>R1</b></h5>
                    </div>
                    <div className="rValuedata text-muted">
                        <h6>(-2000)</h6>
                    </div>
                </Col>
                <Col>
                    <div className="rValueheading">
                        <h5><b>STRIKE</b></h5>
                    </div>
                </Col>
                <Col>
                    <div className="rValueheading">
                        <h5><b>R1</b></h5>
                    </div>
                    <div className="rValuedata text-muted">
                        <h6>(2000)</h6>
                    </div>
                </Col>
                <Col>
                    <div className="rValueheading">
                        <h5><b>R2</b></h5>
                    </div>
                    <div className="rValuedata text-muted">
                        <h6>(5000)</h6>
                    </div>
                </Col>
                <Col>
                    <table>
                        <th>
                            <tr>
                                <div className="rValueheading">
                                    <h5><b>R3</b></h5>
                                </div>
                            </tr>
                            <tr>
                                <div className="rValuedata text-muted">
                                    <h6>(12000)</h6>
                                </div>
                            </tr>
                        </th>
                        <td>
                        </td>
                    </table>
                </Col>
            </Row>
        </div>
    )
}

export default Tableputcall;