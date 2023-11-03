import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadQuizThunk } from "../../store/quizzes";
import "./styles/QuizForm.css";
import QuizImage from "./QuizImage";

const BasicRulesQuiz = () => {
  const dispatch = useDispatch();
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
    const quizId = "1"; // basic rules quiz id is 1
    await dispatch(uploadQuizThunk({ answers }, quizId));
    // Optionally, handle what happens after submission (like a redirect)
  };

  return (
    <form onSubmit={handleSubmit} className="quiz-form">
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
        </div>
        <div className="quiz-image-container">
          <QuizImage
            src="/learn-and-practice-images/basic-rules-9-quiz-image-1.png"
            alt="Who won the game quiz image"
            className="quiz-image"
          />
        </div>
      </section>

      {/* MC Question 6: Definition of Atari */}
      <section className="question quiz-flex-container">
        <div className="quiz-content">
          <p>6. What does the Japanese Go term <span className="important-text">Atari</span> mean?</p>
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
              The extra half point white gets (breaking ties) to
              offset black's first move.
            </label>
          </div>
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
        </div>
        <div className="quiz-image-container">
          <QuizImage
            src="/learn-and-practice-images/basic-rules-9-quiz-image-2.png"
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
        </div>
        <div className="quiz-image-container">
          <QuizImage
            src="/learn-and-practice-images/basic-rules-9-quiz-image-3.png"
            alt="Who won the game quiz image"
            className="quiz-image"
          />
        </div>
      </section>

      {/* MC Question 9: Counting Points */}
      <section className="question quiz-flex-container">
        <div className="quiz-content">
          <p>9. How many points of territory has <span className ="important-text">white</span> surrounded?</p>
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
        </div>
        <div className="quiz-image-container">
          <QuizImage
            src="/learn-and-practice-images/basic-rules-9-quiz-image-6.png"
            alt="Points surrounded"
            className="quiz-image"
          />
        </div>
      </section>

      {/* MC Question 10: Imagining Liberties */}
      <section className="question quiz-flex-container">
        <div className="quiz-content">
          <p>10. You are asked to place a stone on an empty board.  What's the <span className="important-text">minimum number of liberties</span> your single stone could have? You've now found the <span className="important-text">worst</span> possible move on the board! 😂</p>
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
        </div>
        <div className="quiz-image-container">
          <QuizImage
            src="/learn-and-practice-images/basic-rules-9-quiz-image-5.png"
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

/*

Question 7: Input field only takes in an integer -> How many points has black surrounded? <diagram of finished game>

*/

export default BasicRulesQuiz;
