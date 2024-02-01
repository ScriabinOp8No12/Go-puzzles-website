import React from "react";
import { useHistory, useLocation } from "react-router-dom";

const LeftNavBar = () => {
  const history = useHistory();
  const location = useLocation();

  const navigateToBasicRules1 = () => {
    history.push("/learn-and-practice/basic-rules/1");
  };

  const navigateToBasicRules6 = () => {
    history.push("/learn-and-practice/basic-rules/6");
  };

  const navigateToBasicRules7 = () => {
    history.push("/learn-and-practice/basic-rules/7");
  };

  const navigateToBasicRulesQuiz = () => {
    history.push("/learn-and-practice/basic-rules/quiz");
  };

  const navigateToMoreRules1 = () => {
    history.push("/learn-and-practice/more-rules/1");
  };

  const navigateToMoreRules2 = () => {
    history.push("/learn-and-practice/more-rules/2");
  };

  const navigateToMoreRules3 = () => {
    history.push("/learn-and-practice/more-rules/3");
  };

  const navigateToMoreRules4 = () => {
    history.push("/learn-and-practice/more-rules/4");
  };

  const navigateToMoreRules5 = () => {
    history.push("/learn-and-practice/more-rules/5");
  };

  const navigateToMoreRules6 = () => {
    history.push("/learn-and-practice/more-rules/6");
  };

  const navigateToReading1 = () => {
    history.push("/learn-and-practice/fundamentals/1");
  };

  const navigateToLadder1 = () => {
    history.push("/learn-and-practice/fundamentals/6");
  };

  const navigateToReadingLadderPuzzles = () => {
    history.push("/learn-and-practice/fundamentals/11");
  };

  const navigateToCuts1 = () => {
    history.push("/learn-and-practice/fundamentals/12");
  };


  // Determines if the current URL contains any of the specified path segments.
  // Accepts either a single string or an array of strings.
  // Returns true if a match is found, otherwise returns false.

  const isActive = (paths) => {
    const currentPath = location.pathname;
    if (Array.isArray(paths)) {
      return paths.some((path) => {
        const regex = new RegExp(`${path}/?$`); // Matches the path exactly, allowing for an optional trailing slash
        return regex.test(currentPath);
      });
    } else if (typeof paths === "string") {
      const regex = new RegExp(`${paths}/?$`); // Same as above for a single string
      return regex.test(currentPath);
    }
    return false;
  };

  return (
    <div className="left-nav-bar">
      <h1 className="interactive-tutorial-text">Interactive Tutorials</h1>
      <div className="nav-section">
        {/* Basic Rules Section */}
        <section className="left-nav-bar-section">
          <h2>Basic Rules</h2>
          <ul className="small-spaced-list">
            <li
              onClick={navigateToBasicRules1}
              className={
                isActive([
                  "/basic-rules/1",
                  "/basic-rules/2",
                  "/basic-rules/3",
                  "/basic-rules/4",
                  "/basic-rules/5",
                ])
                  ? "active"
                  : ""
              }
            >
              Placing stones & surrounding territory
            </li>
            <li
              onClick={navigateToBasicRules6}
              className={isActive("/basic-rules/6") ? "active" : ""}
            >
              Counting liberties and capturing stones
            </li>
            <li
              onClick={navigateToBasicRules7}
              className={isActive("/basic-rules/7") ? "active" : ""}
            >
              Capturing Puzzles
            </li>
            <li
              onClick={navigateToBasicRulesQuiz}
              className={isActive("/basic-rules/quiz") ? "active" : ""}
            >
              Basic Rules Quiz
            </li>
          </ul>
        </section>
      </div>
      <div className="nav-section">
        {/* More Rules and Strategy Section */}
        <section className="left-nav-bar-section">
          <h2>More Rules</h2>
          <ul className="small-spaced-list">
            <li
              onClick={navigateToMoreRules1}
              className={isActive("/more-rules/1") ? "active" : ""}
            >
              Illegal moves
            </li>

            <li
              onClick={navigateToMoreRules2}
              className={isActive("/more-rules/2") ? "active" : ""}
            >
              Eyes
            </li>
            <li
              onClick={navigateToMoreRules3}
              className={isActive("/more-rules/3") ? "active" : ""}
            >
              Seki
            </li>
            <li
              onClick={navigateToMoreRules4}
              className={isActive("/more-rules/4") ? "active" : ""}
            >
              Ko
            </li>
            <li
              onClick={navigateToMoreRules5}
              className={isActive("/more-rules/5") ? "active" : ""}
            >
              Game ending condition
            </li>
            <li
              onClick={navigateToMoreRules6}
              className={isActive("/more-rules/6") ? "active" : ""}
            >
              More Rules Puzzles
            </li>
          </ul>
        </section>
      </div>
      {/* <div className="nav-section">
        <section className="left-nav-bar-section">
          <h2>Rules & Strategy Puzzles</h2>
          <ul className="small-spaced-list">
            <li>Rules & Strategy Puzzles 1</li>
            <li>Rules & Strategy Puzzles 2</li>
          </ul>
        </section>
      </div> */}

      <div className="nav-section">
        <section className="left-nav-bar-section">
          <h2>Fundamentals</h2>
          <ul className="small-spaced-list">
            <li
              onClick={navigateToReading1}
              className={
                isActive([
                  "/fundamentals/1",
                  "/fundamentals/2",
                  "/fundamentals/3",
                  "/fundamentals/4",
                  "/fundamentals/5",
                ])
                  ? "active"
                  : ""
              }
            >
              Reading
            </li>
            <li
              onClick={navigateToLadder1}
              className={
                isActive([
                  "/fundamentals/6",
                  "/fundamentals/7",
                  "/fundamentals/8",
                  "/fundamentals/9",
                  "/fundamentals/10",
                ])
                  ? "active"
                  : ""
              }
            >
              Ladders & Nets
            </li>
            <li
              onClick={navigateToReadingLadderPuzzles}
              className={isActive(["/fundamentals/11"]) ? "active" : ""}
            >
              Reading/Ladder puzzles
            </li>
            <li
              onClick={navigateToCuts1}
              className={isActive(["/fundamentals/12", "/fundamentals/13"]) ? "active" : ""}
            >
              Cuts
            </li>
            <li>Counting</li>
            <li>Direction of Play</li>
            <li>Judgment</li>
            <li>Life & Death</li>
            <li>Sente & Gote</li>
          </ul>
        </section>
      </div>
      <div className="nav-section">
        <section className="left-nav-bar-section">
          <h2>Fundamentals Puzzles</h2>
          <ul className="small-spaced-list">
            <li>Fundamentals Puzzles 1</li>
            <li>Fundamentals Puzzles 2</li>
          </ul>
        </section>
      </div>
      <div className="nav-section">
        <section className="left-nav-bar-section">
          <h2>Resources</h2>
          <ul className="small-spaced-list">
            <li>Sensei's Library</li>
            <li>Go servers</li>
            <li>Terminology</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default LeftNavBar;
