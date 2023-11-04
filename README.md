I am thankful for my wonderful teachers at App Academy for helping me on my endless bugs and coding problems during bootcamp office hours.
I am also very grateful to my Mom, Dad, and twin brother for listening to my endless rants regarding ridiculous bugs, and for brainstorming the best approach to solving problems.

I've been wanting to build this Go website for more than 2 years now, and through App Academy, I have finally been able to build it! I began building this website at the end of May 2023, and anytime I learned something new, I would immediately apply it to this project.  I have spent 407.5 hours on this project as of 11/2/23.

***************************************************************************************************************************************

The website is designed to help Go players of all ranks improve their skills through the mistakes they made in their own games.  Users upload a SGF (game record) and users can ask a superhuman AI to analyze their game for the largest mistakes based on the stage of the game, and display these in a puzzle format.  If the user likes/saves the generated puzzle(s), these puzzles will also be added to the public puzzles page, where any user on the website can attempt the puzzle and learn from real game situations.  Puzzles are categorized on their theme based on user's votes, and ranked on an elo system that constantly updates based on users getting the puzzle right or wrong. Public puzzles can then be searched based on the stage of the game, category, and rank. For new players, there is also an interactive tutorial that explains the rules and fundamentals of the game.

What I'm currently working on and what I plan to work on (11/1/23):

1. Finish basic rules interactive tutorial (building quiz right now). This involves creating 2 new tables on the backend to store the user's quiz information.
2. Filter feature for the public puzzles page
3. Disable generate puzzles button for board sizes that aren't 19 by 19 (work on refactoring 5 python scripts and pytests later to implement this)
4. Paginate pages to show 20 results per page
5. Write the logic to change the difficulty of the generated puzzle to match the rank of the user that made the mistake in the game
6. Profile page, which allows the user to edit their ranking, see their stats on puzzles they've solved (by category) and allow the user to change their password. Add a forgot password option, where the user enters their email and a password reset is sent to them

Bugs:

1. 9 by 9 and 13 by 13 boards need to have their SGFs modified with python scripts to be in the right format for Glift. Certain SGFs that have human error when inputting (multiple branches)
doesn't get analyzed by the AI properly, it just analyzes the top most branch, which can be a few moves instead of the whole game.
1a (might be resolved after above fixed) Even more bugs: Certain SGFs, like Shin Jinseo's games, has a really weird bug with glift.  It happens in the same place of the game (where a ko fight happens), but I don't think it has to do with a ko messing it up.

For Later:

0. *** Refactor python scripts to mutate sgfs differently and allow smaller Go boards to work with Glift puzzle rendering
1. Convert my own computer into the server to ping for KataGo analysis.  OR: Build my own server -> use desktop + buy a nice GPU and use that instead of Google Cloud
2. Write my own code for the puzzles, instead of using and modifying glift
3. Show letter options with one letter being correct for the puzzles -> probably have to use a weaker AI, and see the moves it suggests, then verify these are bad according to KataGo
4. Learn how to do mocking for my pytests
5. Add a "star shower" but for Go stones falling out of the sky in the user profile page, code it from scratch
6. Allow users to add friends, and compete against each other on a timer for 10 puzzles!
