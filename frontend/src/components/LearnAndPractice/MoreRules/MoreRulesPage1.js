import React from 'react'

const MoreRulesPage1 = () => {
  return (
    <div className="main-content">
        <h2>More Rules and Strategy: Illegal Moves</h2>
        <div className="content-section">
          {/* Text section on the left half, images / diagrams on the right half */}
          <div className="content-text-section">
            <p>
             A move is illegal if the move puts your stone or stones at <span className="important-text">0 liberties</span>, and is <span className="important-text">not</span> capturing anything.
            </p>
            <p>
             In <span className="important-text">diagram 1</span>, black is <span className="important-text">not</span> allowed to play at the triangle or square.
            </p>
            <p>
             In <span className="important-text">diagram 2</span>, black is allowed to play in the spot with 0 liberties because they are capturing white!
            </p>
            <p>In <span className="important-text">diagram 3</span>, even if your opponent already captured your stones, this does not affect whether or not you are allowed to play in that spot.
             For example, let's say white captured the 3 black stones with move A as seen in diagram 3, black is still allowed to place stones where they were just captured because
             black would have more than 0 liberties.
            </p>

          </div>
          {/* Image(s) on the right half */}
          <div className="content-image-section">
            <img
            className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1699466950/Tutorial-images/more-rules-1_qpbyyd.png"
              alt="Illegal moves 1"
            />
            <p>Diagram 1: Black is <span className="important-text">not</span> allowed to play at either of the marked spots.  The marked square is likely an eye, which we will discuss in the next section.</p>
          </div>
        </div>
        {/* Under the "content-section" where we render 2 more diagrams */}
        <div className="diagram-container">
          {/* For making the text stack vertically with the image above it */}
          <div className="image-text-wrap">
            <img
            className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1699466263/Tutorial-images/more-rules-2_wvsgky.png"
              alt="Illegal moves 2"
            />
            <p>Diagram 2: Black is <span className="important-text">allowed </span>to play at the marked spot because although black has 0 liberties, they would be capturing white's group (white also has 0 liberties).</p>
          </div>
          <div className="image-text-wrap">
            <img
            className="button-hover"
              src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1699466263/Tutorial-images/more-rules-3_jgmmx9.png"
              alt="Illegal moves 3"
            />
            <p>
              Diagram 3: Even if white just played at A and captured 3 black stones, black can still play at any of the marked triangles because the black stone would have more than 0 liberties.
            </p>

          </div>
        </div>
      </div>
  )
}

export default MoreRulesPage1
