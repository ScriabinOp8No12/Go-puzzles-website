import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { uploadQuizThunk } from "../../store/quizzes"

const BasicRulesQuiz = () => {
  const dispatch = useDispatch();
   // Local state to store the user's answers
   const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: ''
   })

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
    const quizId = '1'; // For testing, hardcode the basic rules quiz id, which is 1
    await dispatch(uploadQuizThunk({ answers }, quizId));
    // Optionally, handle what happens after submission (like a redirect)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Question 1:</label>
        <input
          type="text"
          name="question1"
          value={answers.question1}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Question 2:</label>
        <input
          type="text"
          name="question2"
          value={answers.question2}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Question 3:</label>
        <input
          type="text"
          name="question3"
          value={answers.question3}
          onChange={handleInputChange}
        />
      </div>
      {/* More questions as needed */}
      <button type="submit" className="submitButton">Submit Quiz</button>
    </form>
  );
};

export default BasicRulesQuiz;
