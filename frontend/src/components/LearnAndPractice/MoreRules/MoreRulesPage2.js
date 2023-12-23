import React from 'react'

const MoreRulesPage2 = () => {
  return (
    <div className="main-content">
        <h2>More Rules and Strategy: Eyes</h2>
        <div className="content-section">
          {/* Text section on the left half, images / diagrams on the right half */}
          <div className="content-text-section">
            <p>
             An <span className="important-text">eye</span> is any spot where the opponent is not allowed to play (an illegal move), since they would have 0 liberties when they play there.
            </p>

            <p>
              For a group of stones to be alive and unkillable, it must have <span className="important-text">at least 2 eyes</span> (there is an exception, which we will discuss in the next section). Most living groups will have a lot more than 2 eyes.
            </p>

            <p>
              A group with one eye is not alive, because the opponent could place a stone at that location as their last move to capture the group.
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

export default MoreRulesPage2
