import React, { Fragment } from 'react'
import { Button, Col, Container, Form, Row, FormGroup , FormLabel, FormControl} from 'react-bootstrap'
import { Link } from 'react-router-dom'


// Image
import logo from "../../../assets/images/logo-white.png"
import img1 from "../../../assets/images/login/1.png"
import img2 from "../../../assets/images/login/2.png"
import img3 from "../../../assets/images/login/3.png"

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
// Swiper css
import 'swiper/css'
import 'swiper/css/pagination'


const RegisterPage = () => {
    return (
        <Fragment>
            {/* <section className="sign-in-page">
                <Container className='sign-in-page-bg mt-5 mb-md-5 mb-0 p-0'>
                    <Row className="no-gutters">
                        <Col md='6' className="text-center">
                            <div className="sign-in-detail text-white">
                                <Link className="sign-in-logo mb-5" to="/"><img src={logo} className="img-fluid" alt="logo" /></Link>
                                <Swiper className="owl-carousel" loop={true} autoplay={true} spaceBetween={30} modules={[Pagination, Autoplay]}>
                                    <SwiperSlide className="item">
                                        <img src={img1} className="img-fluid mb-4" alt="logo" />
                                        <h4 className="mb-1 text-white">Manage your orders</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    </SwiperSlide>
                                    <SwiperSlide className="item">
                                        <img src={img2} className="img-fluid mb-4" alt="logo" />
                                        <h4 className="mb-1 text-white">Manage your orders</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    </SwiperSlide>
                                    <SwiperSlide className="item">
                                        <img src={img3} className="img-fluid mb-4" alt="logo" />
                                        <h4 className="mb-1 text-white">Manage your orders</h4>
                                        <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </Col>
                        <Col md='6' className="position-relative">
                            <div className="sign-in-from">
                                <h1 className="mb-0">Sign Up</h1>
                                <Form className="mt-4">
                                    <Form.Group className='form-group'>
                                        <Form.Label htmlFor="exampleInputEmail1" className="my-2">Your Full Name</Form.Label>
                                        <Form.Control type="email" className="form-control mb-0" id="exampleInputEmail1" placeholder="Your Full Name" />
                                    </Form.Group>
                                    <Form.Group className='form-group'>
                                        <Form.Label htmlFor="exampleInputEmail2" className="my-2">Email address</Form.Label>
                                        <Form.Control type="email" className="form-control mb-0" id="exampleInputEmail2" placeholder="Enter email" />
                                    </Form.Group>
                                    <Form.Group className='form-group'>
                                        <Form.Label htmlFor="exampleInputPassword1" className="my-2">Password</Form.Label>
                                        <Form.Control type="password" className="form-control mb-0" id="exampleInputPassword1" placeholder="Password" />
                                    </Form.Group>
                                    <div className="d-flex justify-content-between w-100 align-items-center mt-2">
                                        <div className="custom-control custom-checkbox d-inline-block mt-2 pt-1">
                                            <Form.Check.Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                            <Form.Label className="custom-control-label" htmlFor="customCheck1">I accept <Link to="#">Terms and Conditions</Link></Form.Label>
                                        </div>
                                        <Button variant='primary' type="submit" className="btn btn-primary float-end">Sign Up</Button>
                                    </div>
                                    <div className="sign-info">
                                        <span className="dark-color d-inline-block line-height-2">Already Have Account ? <Link to="/sign-in">Log In</Link></span>
                                        <ul className="iq-social-media">
                                            <li><Link to="#"><i className="ri-facebook-box-line"></i></Link></li>
                                            <li><Link to="#"><i className="ri-twitter-line"></i></Link></li>
                                            <li><Link to="#"><i className="ri-instagram-line"></i></Link></li>
                                        </ul>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section> */}

            <div className="iq-card mt-5 mb-md-5 mb-0 p-0 mx-5">
              <div className="iq-card-header d-flex justify-content-between">
                <div className="iq-header-title">
                  <h4 className="card-title">Input</h4>
                </div>
              </div>
              <div className="iq-card-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  vulputate, ex ac venenatis mollis, diam nibh finibus leo
                </p>
                <div className='row'>
                    <div className="col-6">
                        <h1>Hello Text</h1>
                    </div>
                    <div className="col-6">
                        <h1>Hello Text</h1>
                    </div>
                </div>
                <Form>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputText1">
                      Input Text{" "}
                    </FormLabel>
                    <FormControl
                      className="form-control my-2"
                      id="exampleInputText1"
                      defaultValue="Mark Jets"
                      placeholder="Enter Name"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputEmail3">
                      Email Input
                    </FormLabel>
                    <FormControl
                      type="email"
                      className="form-control my-2"
                      id="exampleInputEmail3"
                      defaultValue="markJets@gmail.com"
                      placeholder="Enter Email"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputurl">Url Input</FormLabel>
                    <FormControl
                      type="url"
                      className="form-control my-2"
                      id="exampleInputurl"
                      defaultValue="https://getbootstrap.com"
                      placeholder="Enter Url"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputphone">
                      Teliphone Input
                    </FormLabel>
                    <FormControl
                      type="tel"
                      className="form-control my-2"
                      id="exampleInputphone"
                      defaultValue="1-(555)-555-5555"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputNumber1">
                      Number Input
                    </FormLabel>
                    <FormControl
                      type="number"
                      className="form-control my-2"
                      id="exampleInputNumber1"
                      defaultValue="2356"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputPassword3">
                      Password Input
                    </FormLabel>
                    <FormControl
                      type="password"
                      className="form-control my-2"
                      id="exampleInputPassword3"
                      defaultValue="markJets123"
                      placeholder="Enter Password"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputdate">Date Input</FormLabel>
                    <FormControl
                      type="date"
                      className="form-control my-2"
                      id="exampleInputdate"
                      defaultValue="2019-12-18"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputmonth">
                      Month Input
                    </FormLabel>
                    <FormControl
                      type="month"
                      className="form-control my-2"
                      id="exampleInputmonth"
                      defaultValue="2019-12"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputweek">Week Input</FormLabel>
                    <FormControl
                      type="week"
                      className="form-control my-2"
                      id="exampleInputweek"
                      defaultValue="2019-W46"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputtime">Time Input</FormLabel>
                    <FormControl
                      type="time"
                      className="form-control my-2"
                      id="exampleInputtime"
                      defaultValue="13:45"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleInputdatetime">
                      Date and Time Input
                    </FormLabel>
                    <FormControl
                      type="datetime-local"
                      className="form-control my-2"
                      id="exampleInputdatetime"
                      defaultValue="2019-12-19T13:45:00"
                    />
                  </FormGroup>
                  <FormGroup className="form-group">
                    <FormLabel className="mb-0" htmlFor="exampleFormControlTextarea1">
                      Example textarea
                    </FormLabel>
                    <textarea
                      className="form-control my-2"
                      id="exampleFormControlTextarea1"
                      rows="5"
                    ></textarea>
                  </FormGroup>
                  <Button type="submit" className="btn btn-primary me-1 mt-2">
                    Submit
                  </Button>
                  <Button
                    type="submit"
                    variant=""
                    className="btn iq-bg-danger mt-2"
                  >
                    cancel
                  </Button>
                </Form>
              </div>
            </div>
        </Fragment>
    )
}

export default RegisterPage
