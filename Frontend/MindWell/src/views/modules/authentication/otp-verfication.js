import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './otp-verification.css';

import axiosInstance from '../../../axiosInstance';



const OTPVerification = () => {


    const navigate = useNavigate();
    const [otp, setOTP] = useState('');


    return (
        <div className="white-box">
            <div className="center-content white-box">
                <Container className="mt-5">
                    <Row className="justify-content-center">
                        <Col xs={12} sm={10} md={8} lg={10}>
                            <h2 className="text-center">OTP Verification</h2>
                            <br></br><br></br>
                            <Form>

                                <Row>
                                    <Col xs={12} md={4}>
                                        <Form.Group controlId="firstname">
                                            
                                            {/* <Form.Control.Feedback type="invalid">{errors.fname} Hello</Form.Control.Feedback> */}
                                        </Form.Group>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <Form.Label>Enter OTP:</Form.Label>
                                        <Form.Group controlId="otp">
                                            <Form.Control
                                                name="fname"
                                                type="text"
                                                value={otp}
                                                onChange={(e) => setOTP(e.target.value)}
                                                placeholder="6 digit OTP"
                                            // isInvalid={!!errors.fname}
                                            />
                                            {/* <Form.Control.Feedback type="invalid">{errors.fname} Hello</Form.Control.Feedback> */}
                                        </Form.Group>
                                    </Col>
                                </Row>


                                <Button type="submit" className="btn btn-primary float-mid" style={{ marginTop: '10px' }}>Veriy</Button>
                            </Form>

                        </Col>
                    </Row>
                    <Row>
                        <div className="sign-info">
                            <span className="dark-color d-inline-block line-height-2">Already have an account? <Link to="/sign-in">Sign in</Link></span>
                            <ul className="iq-social-media">
                                <li><Link to="#"><i className="ri-facebook-box-line"></i></Link></li>
                                <li><Link to="#"><i className="ri-twitter-line"></i></Link></li>
                                <li><Link to="#"><i className="ri-instagram-line"></i></Link></li>
                            </ul>
                        </div>
                    </Row>
                </Container>
            </div>

        </div>
    );
};

export default OTPVerification;
