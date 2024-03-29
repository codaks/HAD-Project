import React, { Fragment, useState, useEffect } from "react";
import { Col, Row, Card, Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faFlag } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { useParams, useNavigate } from 'react-router-dom';
import { use } from "echarts";
import axiosInstance from '../../../axiosInstance';

const LowLevel = () => {
  // Array to store answers and their like counts along with the user who answered
  let { qid } = useParams();

  const navigate = useNavigate();
  const [question, setQuestion] = useState();
  useEffect(() => {

    const checkEligiblity = async () => {
      const accessToken = localStorage.getItem('access_token');
      const userid = localStorage.getItem('id');

      if (accessToken === null) {
        navigate('/sign-in');
      }
    }

    const fetchQuestion = async () => {
      const accessToken = localStorage.getItem('access_token');

      try {

        const headers = {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${accessToken}`,
        };

        axiosInstance.get(`/qaresponse/getQuestion/${qid}`, { headers: headers }).then((response) => {
          console.log("Admins: ", response.data);
          setQuestion(response.data);
        });

      }
      catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    checkEligiblity();
    fetchQuestion();
  }, [navigate]);
  const [answers, setAnswers] = useState([
    {
      text: "Depression is a lifelong condition, as there is no cure. However, this does not necessarily mean that it will affect a person every day of their life. With the right treatment plan, remission is possible. The treatment plan may need adjusting throughout a person's life",
      likes: 0,
      answeredBy: "User1",
      timestamp: "March 16, 2024, 10:30 AM",
    },
    {
      text: "These mood disorders include mood swings that range from highs (mania) to lows (depression). It's sometimes difficult to distinguish between bipolar disorder and depression.",
      likes: 0,
      answeredBy: "User2",
      timestamp: "March 16, 2024, 11:00 AM",
    },
    {
      text: "This mood disorder in children includes chronic and severe irritability and anger with frequent extreme temper outbursts. This disorder typically develops into depressive disorder or anxiety disorder during the teen years or adulthood.",
      likes: 0,
      answeredBy: "User3",
      timestamp: "March 16, 2024, 11:30 AM",
    },
    // Add more answers as needed
  ]);

  // Function to handle liking an answer
  const handleLike = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].likes += 1;
    setAnswers(updatedAnswers);
  };

  // Dummy user data for the question
  const questionUser = {
    name: "John Doe",
    profilePic: "https://via.placeholder.com/150", // Replace with actual profile picture URL
  };

  // Timestamp for the question
  const questionTimestamp = "March 16, 2024, 10:00 AM"; // Replace with actual timestamp for the question

  return (
    <Fragment>
      <div className="mb-3">
        <h4 className="mb-2">Question: Question id is : {qid}</h4>
        <div className="px-3 mb-3">
          {" "}
          {/* Add padding */}
          <Card className="w-100">
            <Card.Body>
              <Card.Text as="h4">
                {question}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* Profile Picture and Name Section */}
      <div className="px-3 d-flex justify-content-between align-items-center mb-3">
        <div className="d-flex align-items-center">
          <Image
            src={questionUser.profilePic}
            roundedCircle
            className="me-2"
            width={50}
            height={50}
          />
          <p className="mb-0">{questionUser.name}</p>
        </div>
        <div>
          <p className="mb-0">Posted on: {questionTimestamp}</p>
        </div>
      </div>
      {/* Answers Section */}
      <div className="mb-3">
        <h4 className="mb-2">Answers:</h4>
        <div className="px-3">
          {" "}
          {/* Add padding */}
          {/* Map through the answers array and render each answer with like and dislike buttons */}
          {answers.map((answer, index) => (
            <div key={index}>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <p className="mb-0">Posted on: {answer.timestamp}</p>
                <span className="me-2">Answered by: {answer.answeredBy}</span>
              </div>
              <Card className="iq-mb-3" style={{ borderRadius: "50px" }}>
                <Card.Body>
                  <Card.Text>{answer.text}</Card.Text>
                </Card.Body>
              </Card>
              {/* Like and Dislike Buttons */}

              <div className="d-flex justify-content-end px-3 align-items-center">
                <Button variant="primary" className="me-1 mb-3">
                  <FontAwesomeIcon icon={faFlag} className="me-1" />
                  Flag Answer
                </Button>
                <Button variant="primary" className="me-1 mb-3">
                  <FontAwesomeIcon icon={faThumbsUp} className="me-1" />
                  Upvote
                </Button>

                {/* Like count */}
                <span className="ms-2">Upvotes: {answer.likes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default LowLevel;
