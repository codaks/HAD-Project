import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './register.css';

const Register = () => {
  const [patientId, setPatientId] = useState('');
  const [username, setUserName] = useState('');
  const [firstname, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [houseNumber, setHouseNumber] = useState('');
  const [street1, setStreet1] = useState('');
  const [street2, setStreet2] = useState('');
  const [pincode, setPincode] = useState('');
  const [cityCode, setCityCode] = useState('');
  const [stateCode, setStateCode] = useState('');
  const [districtCode, setDistrictCode] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [dob, setDob] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');


  // const [patientId, setPatientId] = useState('');
  const [username_val, setUserName_val] = useState('');
  const [firstname_val, setFirstName_val] = useState('');
  const [middleName_val, setMiddleName_val] = useState('');
  const [lastName_val, setLastName_val] = useState('');
  const [gender_val, setGender_val] = useState('');
  const [houseNumber_val, setHouseNumber_val] = useState('');
  const [street1_val, setStreet1_val] = useState('');
  const [street2_val, setStreet2_val] = useState('');
  const [pincode_val, setPincode_val] = useState('');
  const [cityCode_val, setCityCode_val] = useState('');
  const [stateCode_val, setStateCode_val] = useState('');
  const [districtCode_val, setDistrictCode_val] = useState('');
  const [countryCode_val, setCountryCode_val] = useState('');
  const [mobileNumber_val, setMobileNumber_val] = useState('');
  const [dob_val, setDob_val] = useState('');
  const [password_val, setPassword_val] = useState('');
  const [confirmPassword_val, setConfirmPassword_val] = useState('');
  const [country_val, setCountry_val] = useState('');
  const [state_val, setState_val] = useState('');

  const handleRegister = () => {
    if (!patientId || !firstname || !gender || !mobileNumber || !dob) {
      setError('Please fill in all required fields.');
      return;
    }

    const userData = {
      username,
      patientId,
      firstname,
      middleName,
      lastName,
      gender,
      houseNumber,
      street1,
      street2,
      pincode,
      cityCode,
      stateCode,
      districtCode,
      countryCode,
      mobileNumber,
      dob,
    };

    console.log('User Data:', userData);

    setPatientId('');
    setFirstName('');
    setMiddleName('');
    setLastName('');
    setGender('');
    setHouseNumber('');
    setStreet1('');
    setStreet2('');
    setPincode('');
    setCityCode('');
    setStateCode('');
    setDistrictCode('');
    setCountryCode('');
    setMobileNumber('');
    setDob('');

    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username == "")
      setUserName_val("Please fill in the email");
    else
      setUserName_val("");

    if (firstname == "")
      setFirstName_val("Please fill in the Middle Name");
    else
      setFirstName_val("");

    if (lastName == "")
      setLastName_val("Please fill in the Last Name");
    else
      setLastName_val("");

    if (password == "")
      setPassword_val("Please fill in the Password");
    else
      setPassword_val("");

    if (confirmPassword == "" || confirmPassword != password)
      setConfirmPassword_val("Password and Confirm Password Not Matched");
    else {
      setConfirmPassword_val("");
    }

    if (gender == "")
      setGender_val("Select Gender");
    else
      setGender_val("");

    if (dob == "")
      setDob_val("Please fill in the Date of Birth");
    else
      setDob_val("");

    if (pincode == "")
      setPincode_val("Please fill in the Pincode");
    else
      setPincode_val("");

    if (houseNumber == "")
      setHouseNumber_val("Please fill in the House Number");
    else
      setHouseNumber_val("");

    if (street1 == "")
      setStreet1_val("Please fill in the Street 1");
    else
      setStreet1_val("");

    if (street2 == "")
      setStreet2_val("Please fill in the Street 2");
    else
      setStreet2_val("");

    if (mobileNumber == "")
      setMobileNumber_val("Please fill in the Mobile Number");
    else
      setMobileNumber_val("");

    if (state == "")
      setState_val("Please fill in the State");
    else
      setState_val("");

    if (country == "")
      setCountry_val("Please fill in the Country");
    else
      setCountry_val("");

    if (cityCode == "")
      setCityCode_val("Please fill in the City");
    else
      setCityCode_val("");

    try {
      const response = await axios.post('http://localhost:8082/api/v1/auth/register', {
        "fname": firstname,
        "mname": middleName,
        "lname": lastName,
        "email": username,
        "password": password,
        "gender": gender,
        "hno": houseNumber,
        "street1": street1,
        "street2": street2,
        "pin_code": pincode,
        "city": cityCode,
        "state": stateCode,
        "country": countryCode,
        "district": districtCode,
        "mobile": mobileNumber,
        "dob": dob,
        "dor": "2024-02-09 20:57:16.335000",
        "role": "ADMIN"
      });

      const token = response.data;
      console.log(token)
    }
    catch (error) {
      console.error('Registration failed:', error);
    }
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={10} md={8} lg={10}>
          <h2 className="text-center">Register</h2>
          <Form onSubmit={handleSubmit}>

            <Row>
              <Col xs={12} md={4}>
                <Form.Group controlId="firstname">
                  <Form.Label>First Name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Enter First Name"
                  />
                </Form.Group>
                <div className='calert'>{firstname_val}</div>
              </Col>

              <Col xs={12} md={4}>
                <Form.Group controlId="middleName">
                  <Form.Label>Middle Name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                    placeholder="Enter Middle Name"
                  />
                </Form.Group>
                <div className='calert'>{middleName_val}</div>
              </Col>
              <Col xs={12} md={4}>
                <Form.Group controlId="lastName">
                  <Form.Label>Last Name:</Form.Label>
                  <Form.Control
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Enter Last Name"
                  />
                </Form.Group>
                <div className='calert'>{lastName_val}</div>
              </Col>
            </Row>

            <br></br>

            <Row>

              <Col xs={12} md={4}>
                <Form.Group controlId="email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    placeholder="Enter Email"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Form.Group>
                <div className='calert'>{username_val}</div>
              </Col>

              <Col xs={12} md={4}>
                <Form.Group controlId="password">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <div className='calert'>{password_val}</div>
              </Col>

              <Col xs={12} md={4}>
                <Form.Group controlId="confirmPassword">
                  <Form.Label>Confirm Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>
                <div className='calert'>{confirmPassword_val}</div>
              </Col>
            </Row>

            <br></br>

            <Row>
              <Col xs={12} md={3}>
                <Form.Group controlId="gender">
                  <Form.Label>Gender:</Form.Label>
                  <Form.Control
                    as="select"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Control>
                </Form.Group>
                <div className='calert'>{gender_val}</div>
              </Col>
              <Col xs={12} md={3}>
                <Form.Group controlId="dob">
                  <Form.Label>Date of Birth:</Form.Label>
                  <Form.Control
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </Form.Group>
                <div className='calert'>{dob_val}</div>
              </Col>
              <Col xs={12} md={3}>
                <Form.Group controlId="pincode">
                  <Form.Label>Pincode:</Form.Label>
                  <Form.Control
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter Pincode"
                  />
                </Form.Group>
                <div className='calert'>{pincode_val}</div>
              </Col>
              <Col xs={12} md={3}>
                <Form.Group controlId="houseNumber">
                  <Form.Label>House Number:</Form.Label>
                  <Form.Control
                    type="text"
                    value={houseNumber}
                    placeholder="Enter House Number"
                    onChange={(e) => setHouseNumber(e.target.value)}
                  />
                </Form.Group>
                <div className='calert'>{houseNumber_val}</div>
              </Col>
            </Row>

            <br></br>

            <Row>
              <Col xs={12} md={4}>

                <Form.Group controlId="mobileNumber">
                  <Form.Label>Mobile Number:</Form.Label>
                  <Form.Control
                    type="text"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="Enter Mobile Number" />
                </Form.Group>
                <div className='calert'>{mobileNumber_val}</div>
              </Col>
              <Col xs={12} md={4}>
                <Form.Group controlId="street1">
                  <Form.Label>Street 1:</Form.Label>
                  <Form.Control
                    type="text"
                    value={street1}
                    placeholder="Enter Street 1"
                    onChange={(e) => setStreet1(e.target.value)}
                  />
                </Form.Group>
                <div className='calert'>{street1_val}</div>
              </Col>
              <Col xs={12} md={4}>
                <Form.Group controlId="street2">
                  <Form.Label>Street 2:</Form.Label>
                  <Form.Control
                    type="text"
                    value={street2}
                    placeholder="Enter Street 2"
                    onChange={(e) => setStreet2(e.target.value)}
                  />
                </Form.Group>
                <div className='calert'>{street2_val}</div>
              </Col>
            </Row>

            <br></br>

            <Row>
              <Col xs={12} md={4}>
                <Form.Group controlId="state">
                  <Form.Label>State:</Form.Label>
                  <Form.Control
                    type="text"
                    value={state}
                    placeholder="Enter State"
                    onChange={(e) => setState(e.target.value)}
                  />
                </Form.Group>
                <div className='calert'>{stateCode_val}</div>

              </Col>

              <Col xs={12} md={4}>
                <Form.Group controlId="city">
                  <Form.Label>City:</Form.Label>
                  <Form.Control
                    type="text"
                    value={country}
                    placeholder="Enter Country"
                    onChange={(e) => setCityCode(e.target.value)}
                  />
                </Form.Group>
                <div className='calert'>{cityCode_val}</div>
              </Col>
              <Col xs={12} md={4}>
                <Form.Group controlId="country">
                  <Form.Label>Country:</Form.Label>
                  <Form.Control
                    type="text"
                    value={country}
                    placeholder="Enter Country"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </Form.Group>
                <div className='calert'>{countryCode_val}</div>
              </Col>
            </Row>

            <Button type="submit" className="btn btn-primary float-end" style={{ marginTop: '10px' }}>Register</Button>
          </Form>

          {error && <p style={{ color: 'red' }} className="mt-3">{error}</p>}
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
  );
};

export default Register;
