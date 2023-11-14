import React from 'react'

const BasicRulesPage1 = () => {
  return (
    <div className="main-content">
        <h2>Basic Rules: Placing Stones & Surrounding Territory</h2>
        <div className="content-section">
          {/* Text section on the left half, images / diagrams on the right half */}
          <div className="content-text-section">
            <p>
              Welcome to the interactive tutorials for the game of Go! Go is the
              best game in the world (I’m definitely not biased). 😊
            </p>

            <p>
              As you start learning the rules and progressing through the ranks,
              you’ll start to admire the beauty and depth of the game. You’ll
              also realize how much smarter you are than your friends who play
              chess or checkers. 😉{" "}
            </p>
            <p className="how-to-play-go-text">How to play Go:</p>
            <ul className="spaced-list">
              <li>
                Go is almost always a 2 player game, where each player takes
                turns placing stones on the board.
              </li>
              <li>
                The player with the black stones typically plays first, and the
                player with the white stones plays next.
              </li>
              <li>
                Stones are placed on the intersections (where 2 lines meet) and
                not in the squares.
              </li>
              <li>
                The goal of the game is to surround territory, which is the
                number of intersections that you have surrounded.
              </li>
              <li>
                The player with the most territory at the end of the game wins!
              </li>
            </ul>
          </div>
          {/* Image(s) on the right half */}
          <div className="content-image-section">
            <img
            className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1698977660/Tutorial-images/basic-rules-1_dtrowf.png"
              alt="Surrounding territory 1"
            />
            <p>Diagram 1: Black has surrounded 4 points of territory</p>
          </div>
        </div>
        {/* Under the "content-section" where we render 2 more diagrams */}
        <div className="diagram-container">
          {/* For making the text stack vertically with the image above it */}
          <div className="image-text-wrap">
            <img
            className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1698977660/Tutorial-images/basic-rules-2_bhdwck.png"
              alt="Surrounding territory 2"
            />
            <p>Diagram 2: Highlighting the 4 points of territory</p>
          </div>
          <div className="image-text-wrap">
            <img
            className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1698977661/Tutorial-images/basic-rules-3_ayyhdl.png"
              alt="Surrounding territory 3"
            />
            <p>
              Diagram 3: How many points are each of the above black groups
              surrounding? Go to the next page to check your answer! 😄{" "}
            </p>

          </div>
        </div>
      </div>
  )
}

export default BasicRulesPage1
