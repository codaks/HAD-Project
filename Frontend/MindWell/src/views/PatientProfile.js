import React, { Fragment, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

//Table
import { Col, Row, Table } from "react-bootstrap";

// Image
import img from "../assets/images/user/11.png";

//Buttons and Dropdown
import { Button, ButtonGroup, Dropdown} from "react-bootstrap";

//Cards
import { Card, CardGroup, ListGroup } from 'react-bootstrap'

//Axios
import axios from 'axios';

const PatientProfile = () => {
    return (
        <Fragment>
            <Row>
            <Col lg="4">  {/* Part 1 : Design of Left Side Part */}
            <div className="iq-card" style={{backgroundColor: '#ceebee'}}>
                <div className="iq-card-body">
                    <div className="text-center">
                        <img
                        src={img}
                        alt="profile-img"
                        className="avatar-130 img-fluid"
                        />
                    </div>
                    <div className="text-center mt-3">
                        <div> <h4> <b>PATIENT</b> </h4> </div>
                        <div>
                            <Table style={{marginTop: '20px' }}>
                            <tr style={{color: '#000000'}}>
                                <td style={{textAlign: 'left'}}> Height </td>
                                <td style={{textAlign: 'left'}}> 5.3 inches </td>
                            </tr>
                            <tr style={{color: '#000000'}}>
                                <td style={{textAlign: 'left'}}> Weight </td>
                                <td style={{textAlign: 'left'}}> 55 kg </td>
                            </tr>
                            <tr style={{color: '#000000'}}>
                                <td style={{textAlign: 'left'}}> Blood Group </td>
                                <td style={{textAlign: 'left'}}> O +ve </td>
                            </tr>
                            </Table>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                        <Link to="/update-profile" className="btn btn-primary me-1 mb-3">
                            <i className="ri-bill-fill"></i>Update Profile
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="iq-card" style={{backgroundColor: '#ceebee'}}>
                <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                        <h4 className="card-title">
                            <b>Questions Posted</b>
                        </h4>
                    </div>
                </div>
                <div className="iq-card-body">
                <Card className="iq-mb-3">
                    <Card.Body>
                        <Card.Text className="mb-0"> 17/02/23, 5:13:00 </Card.Text>
                        <Card.Title as="h6"> How to improve Gut Health? </Card.Title>
                        <Link to="#" className="btn btn-primary">View Answer</Link>
                    </Card.Body>
                </Card>
                </div>
            </div>
            <div className="iq-card" style={{backgroundColor: '#ceebee'}}>
                <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                        <h4 className="card-title">
                            <b>Appointment Schedule</b>
                        </h4>
                    </div>
                </div>
                <div className="iq-card-body">
                <Card className="iq-mb-3">
                    <Card.Body>
                        <Card.Title as="h6"> Dr. Jennifer Kates </Card.Title>
                        <Card.Text className="mb-0"> 17/02/23, 5:13:00 </Card.Text>   
                    </Card.Body>
                </Card>
                </div>
            </div>
            </Col>

            <Col lg="8">   {/* Part 2 : Design of Right Side Part */}
                <div className="iq-card" style={{backgroundColor: '#ceebee'}}>
                    <div className="iq-card-header d-flex justify-content-between">
                        <div className="iq-header-title">
                            <h4 className="card-title">
                                <b>KATE JAMES</b>
                            </h4>
                        </div>
                    </div>
                    <div className="iq-card-body">
                        <Table borderless style={{ tableLayout: 'fixed' }}>
                            <tbody >
                                <tr style={{marginBottom: '20px'}}>
                                    <th scope="row" style={{backgroundColor: '#ceebee', textAlign: 'center'}}> <i class="ri-calendar-fill"></i></th>
                                    <td style={{backgroundColor: '#ceebee'}}>Joined Since </td>
                                    <td style={{backgroundColor: '#ceebee'}}>12/04/2023</td>
                                </tr>
                                <tr style={{marginBottom: '20px'}}>
                                    <th scope="row" style={{backgroundColor: '#ceebee', textAlign: 'center'}}> <i class="ri-calendar-line"></i></th>
                                    <td style={{backgroundColor: '#ceebee'}}>Age </td>
                                    <td style={{backgroundColor: '#ceebee'}}>26 Years</td>
                                </tr>
                                <tr style={{marginBottom: '20px'}}>
                                    <th scope="row" style={{backgroundColor: '#ceebee', textAlign: 'center'}}> <i class="fa fa-calendar"></i></th>
                                    <td style={{backgroundColor: '#ceebee'}}>Birthday </td>
                                    <td style={{backgroundColor: '#ceebee'}}>21st May 1999</td>
                                </tr>
                                <tr style={{marginBottom: '20px'}}>
                                    <th scope="row" style={{backgroundColor: '#ceebee', textAlign: 'center'}}> <i class="ri-cellphone-fill"></i></th>
                                    <td style={{backgroundColor: '#ceebee'}}>Contact Number </td>
                                    <td style={{backgroundColor: '#ceebee'}}>9876543210</td>
                                </tr>
                                <tr style={{marginBottom: '20px'}}>
                                    <th scope="row" style={{backgroundColor: '#ceebee', textAlign: 'center'}}> <span>⚤</span></th>
                                    <td style={{backgroundColor: '#ceebee'}}>Gender </td>
                                    <td style={{backgroundColor: '#ceebee'}}>Female</td>
                                </tr>
                                <tr style={{marginBottom: '20px'}}>
                                    <th scope="row" style={{backgroundColor: '#ceebee', textAlign: 'center'}}> <i class="ri-map-pin-fill"></i></th>
                                    <td style={{backgroundColor: '#ceebee'}}>Address </td>
                                    <td style={{backgroundColor: '#ceebee'}}>House No : 3, church street, Hosur Rd, Bangalore, Karnataka </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>    
                    
                </div>

                <div className="iq-card" style={{backgroundColor: '#ceebee'}}>
                <div className="iq-card-header d-flex justify-content-between">
                    <div className="iq-header-title">
                        <h4 className="card-title">
                            <b>Appointment History</b>
                        </h4>
                    </div>
                </div>
                <div className="iq-card-body">
                <Table className="mb-0" borderless>
                    <thead className="table-light">
                        <tr className="text-center">
                            <th scope="col">ID</th>
                            <th scope="col">Date</th>
                            <th scope="col">Doctor Name</th>
                            <th scope="col">Specialization</th>
                        </tr>
                    </thead>
                    <tbody className="table-striped">
                        <tr className="text-center table-primary">
                            <td>1</td>
                            <td>21/09/2023</td>
                            <td>Dr. Sushma</td>
                            <td>Dentist</td>
                        </tr>
                        <tr className="text-center table-primary">
                            <td>2</td>
                            <td>21/09/2023</td>
                            <td>Dr. Sushma</td>
                            <td>Dentist</td>
                        </tr>
                    </tbody>
                    </Table>
                </div>
            </div>
            </Col>
        </Row>

        </Fragment>
    );
};
export default PatientProfile;