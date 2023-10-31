import React, { useState } from "react";

const BasicRulesPage6 = () => {
  // State for show answer clickable buttons
  const [showAnswer1, setShowAnswer1] = useState(false);
  const [showAnswer2, setShowAnswer2] = useState(false);

  return (
    <div className="main-content">
      <h2>Basic Rules: Counting Liberties and Capturing Stones</h2>
      <div className="content-section">
        {/* Text section on the left half, images / diagrams on the right half */}
        <div className="content-text-section">
          <p>
            Now that you know how to place stones and how to surround territory,
            we will explore one of the most interesting parts of this game,
            capturing stones! But first we need to learn how to capture stones.
          </p>
          <ul className="spaced-list">
          <li>
            A <span className="important-text">liberty</span> is any{" "}
            <span className="important-text">straight line</span> coming off of
            the stone or stones
          </li>
          <li>
            To <span className="important-text">capture</span> a stone, you must
            take away <span className="important-text">all</span> of the
            liberties
          </li>
          <li>
            Captured stones, also known as{" "}
            <span className="important-text">prisoners</span> or captures (less
            common term) are <span className="important-text">removed</span>{" "}
            from the board{" "}
          </li>
          <li>
            During the counting/scoring phase of the game, prisoners are placed
            into your <span className="important-text">opponent's territory</span> (counts against their total territory)
          </li>
          <li>
          Terminology: <span className="important-text">Atari </span> (uh-tar-e) means the stone or stones are one move (liberty) away from being captured.
            If you play in person, you'll often hear teachers say "Atari" to help new players learn, but this not mandatory to say.
            Outside of the learning phase, it's probably not the best strategy to help your opponent out! 🤣
          </li>
          </ul>
          <p>How many liberties does the stone in the diagram have?</p>
          {/* Add answer-container wrapper div so that we give the p tags space.  It won't shift the elements above it as a result */}
      <div className="answer-container">
        {showAnswer1 && <p>The single black stone has 4 liberties (4 straight lines coming off of it).</p>}
      </div>
      <p className="toggle-text" onClick={() => setShowAnswer1(!showAnswer1)}>
        {showAnswer1 ? 'Hide answer' : 'Show answer'}
      </p>

      <p>How many moves in a row would it take to capture the stone in the diagram?</p>
      <div className="answer-container">
        {showAnswer2 && <p>To capture a stone, we must take away all of the stone's liberties. Since the stone has 4 liberties, we need to play 4 times to capture it. Remember that you only get one move at a time though.</p>}
      </div>
      <p className="toggle-text" onClick={() => setShowAnswer2(!showAnswer2)}>
        {showAnswer2 ? 'Hide answer' : 'Show answer'}
      </p>

        </div>
        {/* Image(s) on the right half */}
        <div className="diagram-container">
          <div className="image-text-wrap">
          <img
            src="/learn-and-practice-images/basic-rules-8.png"
            alt="basic-rules-8"
          />
        </div>
        </div>
      </div>
    </div>
  );
};

export default BasicRulesPage6;
