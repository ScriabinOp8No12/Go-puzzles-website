I am thankful for my wonderful teachers at App Academy, Alex, Kate, and Jesse, for helping me on my endless bugs and coding problems during bootcamp office hours.
I am also very grateful to Jia, Alex, and Matthew (my Mom, Dad, and twin brother), for listening to my endless rants on ridiculous bugs, and for discussing the best approach to solving problems.

I've been wanting to build this Go website for more than 2 years now, and through App Academy, I have finally been able to build it! I began building this website at the end of May 2023, and anytime I learned something new, I would immediately apply it to this project.  I have spent 335 hours (and counting) as of 10/8/23, and the website's main functionality is finally done now.

***************************************************************************************************************************************

The website is designed to help Go players of all ranks improve their skills through the mistakes they made in their own games.  Users upload a SGF (game record) and users can ask a superhuman AI to analyze their game for the largest mistakes based on the stage of the game, and display these in a puzzle format.  If the user likes/saves the generated puzzle(s), these puzzles will also be added to the public puzzles page, where any user on the website can attempt the puzzle and learn from real game situations.  Puzzles are categorized on their theme based on user's votes, and ranked on an elo system that constantly updates based on users getting the puzzle right or wrong. Public puzzles can then be searched based on the stage of the game, category, and rank. For new players, there is also an interactive tutorial that explains the rules and fundamentals of the game.

What I'm currently working on and what I plan to work on (10/11/23):

1. [Currently working on] Testing / finalizing the save current puzzle button in the potential puzzle component. This includes styling the potential puzzles page to show the count of puzzles and other details
1a. [Currently working on] Adding loading + countdown timer / error messages to both the generate puzzles button, and the save current puzzle button.  The countdown timer will be an estimate of the time it will take to receive the response back from pinging KataGo on Google Cloud VM
2. Moving the puzzles (public puzzles) into their own page, and having a different landing page on the home page.  Create the "public puzzles" page mentioned, "your puzzles" page which displays the puzzles the user just saved / or attempted from the "public puzzles" page,
2a. The landing page will include a message asking the user to signup/login in order to upload/view their sgfs, create puzzles from them, and try puzzles
2b. The landing page will include a series of interactive tutorials for learning the game, as well as a beginner set of puzzles. This will be done with multiple choice answers, and interactive puzzles on the go board (using glift) with comments / explanations
3. Write the logic to change the difficulty of the generated puzzle to match the rank of the user that made the mistake in the game, hide any puzzles the user has done from the home page, and add it to their "user puzzles" page.
4. Paginate sgfs/puzzles/potential_puzzles (basically all the pages) to only show 20 results per page, then the user can click a button near the bottom of the screen to navigate between pages
5. Add a filter to the public puzzles page to allow the user to filter the puzzles, also fix needing to hard refresh the public puzzles page (use .destroy() method instead) so that the filter stays on the page.
6. Add a profile page, which allows the user to edit their ranking, see their stats on puzzles they've solved (by category) and allow the user to change their password.
6a. Add a forgot password option, where the user enters their email and a password reset is sent to them
7. FOR FUN: Add a "star shower" but for Go stones falling out of the sky in the user profile page, code it from scratch, but use "Star Shower" for inspiration.
8. FOR FUN: Allow users to add friends, and compete against them on a timer of 10 puzzles!
