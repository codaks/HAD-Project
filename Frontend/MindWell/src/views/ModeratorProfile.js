import React, { Fragment, useState, useEffect } from "react";
import { Link } from 'react-router-dom';

//Table
import { Col, Row, Table } from "react-bootstrap";

// Image
import img from "../assets/images/user/11.png";

//Buttons and Dropdown
import { Button, ButtonGroup, Dropdown} from "react-bootstrap";

//Axios
import axios from 'axios';

const ModeratorProfile = () => {
    /*const [tableData, setTableData] = useState({
        fname: "",
        lname: "",
        DOB: "",
        DOR: "",
        gender: "",
        house_number: "",
        street_1: "",
        street_2: "",
        city: "",
        district: "",
        state: "",
        pincode: "",
        mobile_number: "",
    });

    useEffect(() => {
        // Fetch data from the backend here
        fetchDataFromBackend()
            .then(data => {
                // Update the state with the fetched data
                setTableData(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []); // Empty dependency array ensures the effect runs only once after the initial render

    // Function to fetch data from the backend (replace this with your actual fetch function)
    const fetchDataFromBackend = async () => {
        try {
            const response = await fetch('backend-api-url');
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await response.json();
            return data; // Assuming data is in JSON format
        } catch (error) {
            throw new Error('Failed to fetch data');
        }
    }; */

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
                        <div> <h4> <b>MODERATOR</b> </h4> </div>
                        <div style={{ marginTop: '20px' }}>
                        <Link to="/update-profile" className="btn btn-primary me-1 mb-3">
                            <i className="ri-bill-fill"></i>Update Profile
                        </Link>
                        </div>
                    </div>
                </div>
            </div>
            </Col>

            <Col lg="6">   {/* Part 2 : Design of Right Side Part */}
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
            </Col>
        </Row>
    </Fragment>
    );
};
export default ModeratorProfile;