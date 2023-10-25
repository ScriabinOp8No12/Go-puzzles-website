I am thankful for my wonderful teachers at App Academy for helping me on my endless bugs and coding problems during bootcamp office hours.
I am also very grateful to my Mom, Dad, and twin brother for listening to my endless rants regarding ridiculous bugs, and for brainstorming the best approach to solving problems.

I've been wanting to build this Go website for more than 2 years now, and through App Academy, I have finally been able to build it! I began building this website at the end of May 2023, and anytime I learned something new, I would immediately apply it to this project.  I have spent 335 hours (and counting) as of 10/8/23, and the website's main functionality is finally done now.

***************************************************************************************************************************************

The website is designed to help Go players of all ranks improve their skills through the mistakes they made in their own games.  Users upload a SGF (game record) and users can ask a superhuman AI to analyze their game for the largest mistakes based on the stage of the game, and display these in a puzzle format.  If the user likes/saves the generated puzzle(s), these puzzles will also be added to the public puzzles page, where any user on the website can attempt the puzzle and learn from real game situations.  Puzzles are categorized on their theme based on user's votes, and ranked on an elo system that constantly updates based on users getting the puzzle right or wrong. Public puzzles can then be searched based on the stage of the game, category, and rank. For new players, there is also an interactive tutorial that explains the rules and fundamentals of the game.

What I'm currently working on and what I plan to work on (10/25/23):

1. Working on the learn & practice page to teach people how to play Go! This page will include a series of interactive tutorials for learning the game, as well as a beginner set of puzzles. This will be done with multiple choice answers, and interactive puzzles on the go board (using glift) with comments / explanations
2. Bugs: 9 by 9 and 13 by 13 boards need to have their SGFs modified with python scripts to be in the right format for Glift. Certain SGFs that have human error when inputting (multiple branches)
doesn't get analyzed by the AI properly, it just analyzes the top most branch, which can be a few moves instead of the whole game.
3. Even more bugs: Certain SGFs, like Shin Jinseo's games, has a really weird bug with glift.  It happens in the same place of the game (where a ko fight happens), but I don't think it has to do with a ko messing it up.
4. Specific SGFs generate bad katago one line json input.  I think it has to do with the "rule" property being invalid!
5. Learn how to do mocking for my pytests
6. Write the logic to change the difficulty of the generated puzzle to match the rank of the user that made the mistake in the game, hide any puzzles the user has done from the home page, and add it to their "user puzzles" page.
7. Paginate sgfs/puzzles/potential_puzzles (basically all the pages) to only show 20 results per page, then the user can click a button near the bottom of the screen to navigate between pages
8. Add a filter to the public puzzles page to allow the user to filter the puzzles, also fix needing to hard refresh the public puzzles page (use .destroy() method instead) so that the filter stays on the page.
9. Add a profile page, which allows the user to edit their ranking, see their stats on puzzles they've solved (by category) and allow the user to change their password.
10. Add a forgot password option, where the user enters their email and a password reset is sent to them
11. Build my own server -> use desktop + buy a nice GPU and use that instead of Google Cloud
12. Write my own code for the puzzles, instead of using and modifying glift
13. Show letter options with one letter being correct for the puzzles -> probably have to use a weaker AI, and see the moves it suggests, then verify these are bad according to KataGo
14. FOR FUN: Add a "star shower" but for Go stones falling out of the sky in the user profile page, code it from scratch, but use "Star Shower" for inspiration.
15. FOR FUN: Allow users to add friends, and compete against them on a timer of 10 puzzles!
