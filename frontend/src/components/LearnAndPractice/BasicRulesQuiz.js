import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  uploadQuizThunk,
  fetchQuizCompletionStatusThunk,
  fetchQuizScoreThunk,
} from "../../store/quizzes";
import "./styles/QuizForm.css";
import QuizImage from "./QuizImage";

const BasicRulesQuiz = () => {
  const dispatch = useDispatch();
  const hasAttempted = useSelector((state) => state.quiz.hasAttempted);
  const score = useSelector((state) => state.quiz.score?.score);
  // Initialize the showAnswers state with the function
  const [showAllAnswers, setShowAllAnswers] = useState(false);
  // Function to toggle the answer visibility for all questions
  const toggleAllAnswers = (e) => {
    e.stopPropagation(); // this solved the issue of clicking the "show all answers" button causing the score to reset back to 0% for some reason
    // maybe it resubmitted an empty form, that actually makes sense
    setShowAllAnswers((prev) => !prev);
  };

  const quizId = "1"; // basic rules quiz id is 1, the id will always be 1 for this component

  useEffect(() => {
    dispatch(fetchQuizCompletionStatusThunk(quizId));
  }, [dispatch]);

  // useEffect(() => {
  //   // Always dispatch the thunk to fetch the score when the component mounts
  //   dispatch(fetchQuizScoreThunk(quizId));
  // }, [dispatch, quizId]);

  useEffect(() => {
    if (!hasAttempted) {
      // Dispatch the thunk to fetch the score when the component mounts
      dispatch(fetchQuizScoreThunk(quizId));
    }
  }, [dispatch, quizId, hasAttempted]);

  // Local state to store the user's answers
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    question8: "",
    question9: "",
    question10: "",
  });

  // Function to handle input change and update the state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAnswers({
      ...answers,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(uploadQuizThunk({ answers }, quizId));
    await dispatch(fetchQuizScoreThunk(quizId));
  };

  return (
    <form onSubmit={handleSubmit} className="quiz-form">
      <section className="question">
        {/* Conditionally render the welcome text or the score and "Show All Answers" button */}
        {hasAttempted ? (
          <>
            Your score was: <span className="important-text">{score}%</span>
            <button
              // need this here to prevent it from bubbling up (our toggle button function is defined outside of here) and submitting the form when we click the button, lol...
              type="button"
              className="show-all-answers-button"
              onClick={toggleAllAnswers}
            >
              {showAllAnswers ? "Hide All Answers" : "Show All Answers"}
            </button>
          </>
        ) : (
          <p className="basic-rules-quiz-title">
            Welcome to the basic rules quiz!
          </p>
        )}
      </section>
      {/* T/F Question 1: Placing stones */}
      <section className="question">
        <p>
          1. True or False: Stones are placed in the squares, and{" "}
          <span className="important-text">not</span> on the intersections.
        </p>
        <div className="option">
          <input
            type="radio"
            id="question1-true" // has to match the label's htmlFor
            name="question1"
            value="true"
            onChange={handleInputChange}
            checked={answers.question1 === "true"}
          />
          <label htmlFor="question1-true">True</label>
        </div>
        <div className="option">
          <input
            type="radio"
            id="question1-false"
            name="question1"
            value="false"
            onChange={handleInputChange}
            checked={answers.question1 === "false"}
          />
          <label htmlFor="question1-false">False</label>
        </div>
        {hasAttempted && (
          <div className="answer">
            {showAllAnswers && (
              <p>
                <span className="important-text">False: </span>Black typically
                plays first, the exception is if black is taking a handicap,
                then white goes first.
              </p>
            )}
          </div>
        )}
      </section>
      {/* T/F Question 2: Who plays first? */}
      <section className="question">
        <p>
          2. True or False: White typically plays first, then black plays next.
        </p>
        <div className="option">
          <input
            type="radio"
            id="question2-true"
            name="question2"
            value="true"
            onChange={handleInputChange}
            checked={answers.question2 === "true"}
          />
          <label htmlFor="question2-true">True</label>
        </div>
        <div className="option">
          <input
            type="radio"
            id="question2-false"
            name="question2"
            value="false"
            onChange={handleInputChange}
            checked={answers.question2 === "false"}
          />
          <label htmlFor="question2-false">False</label>
        </div>
        {hasAttempted && (
          <div className="answer">
            {showAllAnswers && (
              <p>
                <span className="important-text">False: </span>Stones are placed
                on the intersections, not the squares.
              </p>
            )}
          </div>
        )}
      </section>

      {/* T/F Question 3: Definition of territory */}
      <section className="question">
        <p>
          3. True or False: Territory is the number of intersections surrounded.
        </p>
        <div className="option">
          <input
            type="radio"
            id="question3-true" // has to match the label's htmlFor
            name="question3"
            value="true"
            onChange={handleInputChange}
            checked={answers.question3 === "true"}
          />
          <label htmlFor="question3-true">True</label>
        </div>
        <div className="option">
          <input
            type="radio"
            id="question3-false"
            name="question3"
            value="false"
            onChange={handleInputChange}
            checked={answers.question3 === "false"}
          />
          <label htmlFor="question3-false">False</label>
        </div>
        {hasAttempted && (
          <div className="answer">
            {showAllAnswers && (
              <p>
                <span className="important-text">True: </span>Another way to put
                this is: if you can place a stone on that location (even if it's
                an illegal move), it's a point of territory.
              </p>
            )}
          </div>
        )}
      </section>

      {/* T/F Question 4 Definition of liberty */}
      <section className="question">
        <p>
          4. True or False: A liberty is any straight line (diagonals are{" "}
          <span className="important-text">not</span>
          {""} required) coming off of a stone or group of stones.
        </p>
        <div className="option">
          <input
            type="radio"
            id="question4-true" // has to match the label's htmlFor
            name="question4"
            value="true"
            onChange={handleInputChange}
            checked={answers.question4 === "true"}
          />
          <label htmlFor="question4-true">True</label>
        </div>
        <div className="option">
          <input
            type="radio"
            id="question4-false"
            name="question4"
            value="false"
            onChange={handleInputChange}
            checked={answers.question4 === "false"}
          />
          <label htmlFor="question4-false">False</label>
        </div>
        {hasAttempted && (
          <div className="answer">
            {showAllAnswers && (
              <p>
                <span className="important-text">True: </span>This is very
                important because you don't want to "over-surround" a group,
                causing you to be inefficient.
              </p>
            )}
          </div>
        )}
      </section>

      {/* MC Question 5: Who won the game? */}
      <section className="question quiz-flex-container">
        <div className="quiz-content">
          <p>5. Who won the game?</p>
          <div className="option">
            <input
              type="radio"
              id="question5-black" // has to match the label's htmlFor
              name="question5"
              value="black"
              onChange={handleInputChange}
              checked={answers.question5 === "black"}
            />
            <label htmlFor="question5-black">Black</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="question5-white"
              name="question5"
              value="white"
              onChange={handleInputChange}
              checked={answers.question5 === "white"}
            />
            <label htmlFor="question5-white">White</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="question5-tie"
              name="question5"
              value="tie"
              onChange={handleInputChange}
              checked={answers.question5 === "tie"}
            />
            <label htmlFor="question5-tie">Tie</label>
          </div>
          {hasAttempted && (
            <div className="answer">
              {showAllAnswers && (
                <p>
                  <span className="important-text">Black: </span>Black has 25
                  points, and White has 22 points.
                </p>
              )}
            </div>
          )}
        </div>
        <div className="quiz-image-container">
          <QuizImage
            src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1698977665/Tutorial-images/basic-rules-9-quiz-image-1_a5ohf5.png"
            alt="Who won the game quiz image"
            className="quiz-image"
          />
        </div>
      </section>

      {/* MC Question 6: Definition of Atari */}
      <section className="question quiz-flex-container">
        <div className="quiz-content">
          <p>
            6. What does the Japanese Go term{" "}
            <span className="important-text">Atari</span> mean?
          </p>
          <div className="option">
            <input
              type="radio"
              id="question6-atari1" // has to match the label's htmlFor
              name="question6"
              value="question6-atari" // value has to match string on checked line
              onChange={handleInputChange}
              checked={answers.question6 === "question6-atari"}
            />
            <label htmlFor="question6-atari1">
              Letting the opponent know that they are forced to protect their
              stone(s).
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="question6-atari2" // has to match the label's htmlFor
              name="question6"
              value="question6-atari2" // value has to match string on checked line
              onChange={handleInputChange}
              checked={answers.question6 === "question6-atari2"}
            />
            <label htmlFor="question6-atari2">
              Letting the opponent know that their stone(s) are at 1 liberty and
              are about to be captured.
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="question6-atari3" // has to match the label's htmlFor
              name="question6"
              value="question6-atari3" // value has to match string on checked line
              onChange={handleInputChange}
              checked={answers.question6 === "question6-atari3"}
            />
            <label htmlFor="question6-atari3">
              A different way of saying a captured stone.
            </label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="question6-atari4" // has to match the label's htmlFor
              name="question6"
              value="question6-atari4" // value has to match string on checked line
              onChange={handleInputChange}
              checked={answers.question6 === "question6-atari4"}
            />
            <label htmlFor="question6-atari4">
              The extra half point white gets (breaking ties) to offset black's
              first move.
            </label>
          </div>
          {hasAttempted && (
            <div className="answer">
              {showAllAnswers && (
                <p>
                  <span className="important-text">Atari:</span> is simply a
                  nice gesture to let a beginner know that one or some of their
                  stones are about to be captured.
                </p>
              )}
            </div>
          )}
        </div>
      </section>

      {/* MC Question 7: Counting Liberties */}
      <section className="question quiz-flex-container">
        <div className="quiz-content">
          <p>7. How many liberties does the stone in the diagram have?</p>
          <div className="option">
            <input
              type="radio"
              id="question7-answer0"
              name="question7"
              value="0"
              onChange={handleInputChange}
              checked={answers.question7 === "0"}
            />
            <label htmlFor="question7-answer0">0</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="question7-answer1"
              name="question7"
              value="1"
              onChange={handleInputChange}
              checked={answers.question7 === "1"}
            />
            <label htmlFor="question7-answer1">1</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="question7-answer2"
              name="question7"
              value="2"
              onChange={handleInputChange}
              checked={answers.question7 === "2"}
            />
            <label htmlFor="question7-answer2">2</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="question7-answer3"
              name="question7"
              value="3"
              onChange={handleInputChange}
              checked={answers.question7 === "3"}
            />
            <label htmlFor="question7-answer3">3</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="question7-answer4"
              name="question7"
              value="4"
              onChange={handleInputChange}
              checked={answers.question7 === "4"}
            />
            <label htmlFor="question7-answer4">4</label>
          </div>
          {hasAttempted && (
            <div className="answer">
              {showAllAnswers && (
                <p>
                  <span className="important-text">3: </span>The stone has 3
                  liberties (straight lines coming off of it). J4, H3, and J2.
                </p>
              )}
            </div>
          )}
        </div>
        <div className="quiz-image-container">
          <QuizImage
            src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1698977666/Tutorial-images/basic-rules-9-quiz-image-2_n67i5k.png"
            alt="Who won the game quiz image"
            className="quiz-image"
          />
        </div>
      </section>
      {/* MC Question 8: Counting Liberties 2*/}
      <section className="question quiz-flex-container">
        <div className="quiz-content">
          <p>8. How many liberties do the stones in the diagram have?</p>
          <div className="option">
            <input
              type="radio"
              id="question8-answer1"
              name="question8"
              value="6"
              onChange={handleInputChange}
              checked={answers.question8 === "6"}
            />
            <label htmlFor="question8-answer1">6</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="question8-answer2"
              name="question8"
              value="8"
              onChange={handleInputChange}
              checked={answers.question8 === "8"}
            />
            <label htmlFor="question8-answer2">8</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="question8-answer3"
              name="question8"
              value="10"
              onChange={handleInputChange}
              checked={answers.question8 === "10"}
            />
            <label htmlFor="question8-answer3">10</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="question8-answer4"
              name="question8"
              value="12"
              onChange={handleInputChange}
              checked={answers.question8 === "12"}
            />
            <label htmlFor="question8-answer4">12</label>
          </div>
          {hasAttempted && (
            <div className="answer">
              {showAllAnswers && (
                <p>
                  <span className="important-text">8: </span>The stone has 8
                  liberties. C6, D5, E5, F5, G6, F7, E7, and D7.
                </p>
              )}
            </div>
          )}
        </div>
        <div className="quiz-image-container">
          <QuizImage
            src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1698977666/Tutorial-images/basic-rules-9-quiz-image-3_zp102v.png"
            alt="Who won the game quiz image"
            className="quiz-image"
          />
        </div>
      </section>

      {/* MC Question 9: Counting Points */}
      <section className="question quiz-flex-container">
        <div className="quiz-content">
          <p>
            9. How many points of territory has{" "}
            <span className="important-text">white</span> surrounded?
          </p>
          <div className="option">
            <input
              type="radio"
              id="question9-answer1"
              name="question9"
              value="35"
              onChange={handleInputChange}
              checked={answers.question9 === "35"}
            />
            <label htmlFor="question9-answer1">35</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="question9-answer2"
              name="question9"
              value="36"
              onChange={handleInputChange}
              checked={answers.question9 === "36"}
            />
            <label htmlFor="question8-answer2">36</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="question9-answer3"
              name="question9"
              value="37"
              onChange={handleInputChange}
              checked={answers.question9 === "37"}
            />
            <label htmlFor="question8-answer3">37</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="question9-answer4"
              name="question9"
              value="40"
              onChange={handleInputChange}
              checked={answers.question9 === "40"}
            />
            <label htmlFor="question9-answer4">40</label>
          </div>
          {hasAttempted && (
            <div className="answer">
              {showAllAnswers && (
                <p>
                  <span className="important-text">40: </span>One way to count
                  this is to visualize 2 rectangles. Rectangle with corners at:
                  A9 A6 E6 E9, is 4 times 5 = 20 points. Rectangle with corners
                  at: A5 A1 C1 C5, is 5 times 3 for 15 points. 25 + 15 = 40.
                </p>
              )}
            </div>
          )}
        </div>
        <div className="quiz-image-container">
          <QuizImage
            src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1698977668/Tutorial-images/basic-rules-9-quiz-image-6_qfl5a3.png"
            alt="Points surrounded"
            className="quiz-image"
          />
        </div>
      </section>

      {/* MC Question 10: Imagining Liberties */}
      <section className="question quiz-flex-container">
        <div className="quiz-content">
          <p>
            10. You are asked to place a stone on an empty board. What's the{" "}
            <span className="important-text">least amount of liberties</span>{" "}
            your single stone could have? You've now found the{" "}
            <span className="important-text">worst</span> possible move on the
            board! 😂
          </p>
          <div className="option">
            <input
              type="radio"
              id="question10-answer1"
              name="question10"
              value="4"
              onChange={handleInputChange}
              checked={answers.question10 === "4"}
            />
            <label htmlFor="question10-answer1">4</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="question10-answer2"
              name="question10"
              value="3"
              onChange={handleInputChange}
              checked={answers.question10 === "3"}
            />
            <label htmlFor="question10-answer2">3</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="question10-answer3"
              name="question10"
              value="2"
              onChange={handleInputChange}
              checked={answers.question10 === "2"}
            />
            <label htmlFor="question10-answer3">2</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="question10-answer4"
              name="question10"
              value="1"
              onChange={handleInputChange}
              checked={answers.question10 === "1"}
            />
            <label htmlFor="question10-answer4">1</label>
          </div>
          {hasAttempted && (
            <div className="answer">
              {showAllAnswers && (
                <p>
                  <span className="important-text">2: </span> If you place a
                  stone in any of the 4 corners (A9, J9, A1, or J1) your stone
                  only has 2 liberties.
                </p>
              )}
            </div>
          )}
        </div>
        <div className="quiz-image-container">
          <QuizImage
            src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1698977668/Tutorial-images/basic-rules-9-quiz-image-5_p9rxf4.png"
            alt="Who won the game quiz image"
            className="quiz-image"
          />
        </div>
      </section>

      <button type="submit" className="submitButton">
        Submit Quiz
      </button>
    </form>
  );
};

export default BasicRulesQuiz;
