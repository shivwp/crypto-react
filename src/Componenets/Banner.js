import React from 'react';
import { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import { Row, Col } from 'react-bootstrap'

const Banner = () => {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <div>
                <Alert variant="danger">
                    <Row>
                        <Col>

                            <p><span><strong>Announcement:</strong></span>By using this you agree to our <a href=''>Terms & Conditions.</a> Disclaimer,Warning,etc.</p>

                        </Col>
                        <Col className='btnbannerpart'>
                            <button className='btnbanner' onClick={() => setShow(false)}>Ok,got it!</button>
                        </Col>
                    </Row>
                </Alert>
            </div>
        )
    }
}

export default Banner