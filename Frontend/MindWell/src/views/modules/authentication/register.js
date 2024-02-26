import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';

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


                <Form.Group controlId="email">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="text"
                    value={username}
                    placeholder="Enter Email"
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </Form.Group>


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

                <Form.Group controlId="houseNumber">
                  <Form.Label>House Number:</Form.Label>
                  <Form.Control
                    type="text"
                    value={houseNumber}
                    placeholder="Enter House Number"
                    onChange={(e) => setHouseNumber(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="mobileNumber">
                  <Form.Label>Mobile Number:</Form.Label>
                  <Form.Control
                    type="text"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="Enter Mobile Number" />
                </Form.Group>

                
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

                <Form.Group controlId="password">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    placeholder="Enter Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>




                <Form.Group controlId="dob">
                  <Form.Label>Date of Birth:</Form.Label>
                  <Form.Control
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                  />
                </Form.Group>


                <Form.Group controlId="street1">
                  <Form.Label>Street 1:</Form.Label>
                  <Form.Control
                    type="text"
                    value={street1}
                    placeholder="Enter Street 1"
                    onChange={(e) => setStreet1(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="state">
                  <Form.Label>State:</Form.Label>
                  <Form.Control
                    type="text"
                    value={state}
                    placeholder="Enter State"
                    onChange={(e) => setState(e.target.value)}
                  />
                </Form.Group>

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


                <Form.Group controlId="confirmPassword">
                  <Form.Label>Confirm Password:</Form.Label>
                  <Form.Control
                    type="password"
                    value={confirmPassword}
                    placeholder="Confirm Password"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="pincode">
                  <Form.Label>Pincode:</Form.Label>
                  <Form.Control
                    type="text"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    placeholder="Enter Pincode"
                  />
                </Form.Group>



                
                <Form.Group controlId="street2">
                  <Form.Label>Street 2:</Form.Label>
                  <Form.Control
                    type="text"
                    value={street2}
                    placeholder="Enter Street 2"
                    onChange={(e) => setStreet2(e.target.value)}
                  />
                </Form.Group>

                <Form.Group controlId="country">
                  <Form.Label>Country:</Form.Label>
                  <Form.Control
                    type="text"
                    value={country}
                    placeholder="Enter Country"
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </Form.Group>

                
              </Col>
            </Row>

            <Button type="submit" className="btn btn-primary float-end" style={{ marginTop: '10px' }}>Register</Button>
          </Form>

          {error && <p style={{ color: 'red' }} className="mt-3">{error}</p>}
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
