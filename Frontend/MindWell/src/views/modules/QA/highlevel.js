import React, { Fragment } from "react";
import { Col, Row, Card, Form, FormControl, Button } from "react-bootstrap";

const HighLevel = () => {
  // State to hold the search query
  const [searchQuery, setSearchQuery] = React.useState("");

  // Function to handle search query change
  const handleSearchChange1 = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle search form submission
  const handleSearchSubmit1= (event) => {
    event.preventDefault();
    // Perform search logic here
    console.log("Search Query:", searchQuery);
  };

  const handleSearchChange2 = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to handle search form submission
  const handleSearchSubmit2= (event) => {
    event.preventDefault();
    // Perform search logic here
    console.log("Search Query:", searchQuery);
  };

  const handleSearchSubmit3= (event) => {
    event.preventDefault();
    // Perform search logic here
    console.log("Search Query:", searchQuery);
  };

  const questions = [
    "How to format a hard drive?",
    "What are the benefits of using React?",
    "How to deploy a React app?",
    "What are the different types of sorting algorithms?",
  ];

  return (
    <Fragment>
      {/* Search Bar Section */}
      <div>
        <Row className="justify-content-end mb-3">
          <Form className="d-flex" onSubmit={handleSearchSubmit1}>
            <FormControl
              type="search"
              placeholder="Search your favourite blogs"
              className="me-2 rounded-pill"
              aria-label="Search"
              onChange={handleSearchChange1}
            />
            <Button variant="primary" className="me-1 rounded-pill" type="submit">
              Search
            </Button>
          </Form>
        </Row>
             <Row className="justify-content-end mb-3">
          <Form className="d-flex" onSubmit={handleSearchSubmit2}>
            <FormControl
              type="search"
              placeholder="Add a question"
              className="me-2 rounded-pill"
              aria-label="Search"
              onChange={handleSearchChange2}
            />
            <Button variant="primary" className="me-1 rounded-pill" type="submit">
              Add
            </Button>
          </Form>
        </Row>

        <h4>Relevant Questions</h4>
        {/* Map over the questions array */}
        {questions.map((question, index) => (
          <div key={index}>
            <Card className="iq-mb-2" style={{ borderRadius: "10px" }}>
              <Card.Body>
                <Card.Text>
                  {index + 1}. {question}
                </Card.Text>
              </Card.Body>
            </Card>
            {/* Add spacing between cards */}
            {index !== questions.length - 1 && <div style={{ marginBottom: "8px" }} />}
          </div>
        ))}
      </div>
      <Row className="justify-content-center">
        <Col xs="auto">
          <Button
            variant="primary"
            className="me-1 mb-3"
            type="submit"
            onClick={handleSearchSubmit3}
            style={{ borderRadius: "100px", marginTop: "5px" }}
          >
            See more questions
          </Button>
        </Col>
      </Row>
    </Fragment>
  );
};

export default HighLevel;
