import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uploadQuizThunk } from "../../store/quizzes";
import "./styles/QuizForm.css";
/*
Question 1: True or False -> Stones are placed in the squares and NOT on the intersections

Question 2: True or False -> Territory is the number of intersections a player has surrounded

Question 3: Multiple Choice -> How many liberties does the stone in the diagram have? <render image of stone on the side of board, so answer is 3>
MC choices are 0, 1, 2, 3, 4

Question 4: Multiple Choice -> What does Atari mean?
MC choices are
A. A Japanese term meaning that you are letting the opponent know that they are forced to protect their stone(s).  This would be equivalent to saying "check" in Chess.
B. A Japanese term meaning that your stone or stones are at 1 liberty and about to be captured.
C. A Japanese term that describes a captured stone.
D. A Japanese term describing the extra half point white gets that breaks ties to offset black's first move.
E. A Japanese term people say to help beginners learn the rules.
F. 2 of the above are correct

Question 5: Multiple Choice -> Which coordinate would you play to capture the stones in the diagram?  <Image showing some small amount of stones with coordinates on the board>
MC choices are various coordinates

Question 6: Multiple Choice -> How many stones are required to capture the stone in the diagram? <Show image of a stone in the center of the board>
MC choices are 0, 1, 2, 3, 4

Question 7: Input field only takes in an integer -> How many points has black surrounded? <diagram of finished game>

Question 8: Multiple Choice -> Who won the game?  <Diagram of finished game>
Choices: White, Black, neither, it's a tie

Question 9: True or False -> White typically plays first

Question 10: True or False -> A liberty is any straight line coming off the stone or stones

*/
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
      {/* Question 1 */}
      <section className="question">
        <p>
          1. Stones are placed in the squares, and <span className="important-text">not</span> on the intersections.
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
      {/* Question 2 */}
      <section className="question">
  <p>2. White typically plays first, then black plays next.</p>
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


      {/* Question 3 */}
      <section className="question">
        <p>
          3. Territory is the number of intersections surrounded.
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

      {/* Question 4 */}
      <div>
        <label>
          4. True or False: A liberty is any straight line (diagonals are NOT
          required) coming off a stone or group of stones
        </label>
        <input
          type="radio"
          name="question4"
          value="true"
          onChange={handleInputChange}
          checked={answers.question4 === "true"}
        />{" "}
        True
        <input
          type="radio"
          name="question4"
          value="false"
          onChange={handleInputChange}
          checked={answers.question4 === "false"}
        />{" "}
        False
      </div>

      {/* Multiple Choice Question 5: Who won the game? */}
      <div>
        <p>5. Who won the game?</p>
        <label>
          <input
            type="radio"
            name="question5"
            value="Black"
            onChange={handleInputChange}
            checked={answers.question5 === "Black"}
          />
          Black
        </label>
        <label>
          <input
            type="radio"
            name="question5"
            value="White"
            onChange={handleInputChange}
            checked={answers.question5 === "White"}
          />
          White
        </label>
        <label>
          <input
            type="radio"
            name="question5"
            value="Tie"
            onChange={handleInputChange}
            checked={answers.question5 === "Tie"}
          />
          Tie
        </label>
      </div>

      {/* <div>
        <label>Question 3:</label>
        <input
          type="text"
          name="question4"
          value={answers.question4}
          onChange={handleInputChange}
        />
      </div> */}
      <button type="submit" className="submitButton">
        Submit Quiz
      </button>
    </form>
  );
};

export default BasicRulesQuiz;
