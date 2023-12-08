I am thankful for my wonderful teachers at App Academy for helping me on my endless bugs and coding problems during bootcamp office hours. I am also very grateful to my Mom, Dad, and twin brother for listening to my endless rants regarding ridiculous bugs, and for brainstorming the best approach to solving problems. The rubber ducky just couldn't stand it anymore... 🤣

I've been wanting to build this Go website for more than 2 years now, and through App Academy, I have finally been able to build it! I began building this website at the end of May 2023, and anytime I learned something new, I would immediately apply it to this project, which helped me solidify the knowledge I had just learned.  I have spent 467 hours on this project as of 12/5/23.

***************************************************************************************************************************************

The Go website is found here: [go-puzzles](https:go-puzzles.com)

This website is designed to help Go players of all ranks improve their skills through the mistakes they made in their own games.  Users upload a SGF (game record) and can ask a superhuman AI to analyze their game for the largest mistakes, and display these as puzzles.  If the user likes/saves the generated potential puzzle(s), these puzzles will also be added to the public puzzles page, where any user on the website can attempt the puzzle.  Puzzles are ranked on an elo system that constantly updates based on users getting the puzzle right or wrong. Public puzzles can also be filtered based on the stage of the game, category, and rank. For newer players, there is also an interactive tutorial that explains the rules and fundamentals of the game.

Technologies used:

Javascript, Python, Google Cloud, Express.js, PostgresQL, Sequelize, Sqlite3, HTML, CSS, pytest, nginx, React, Redux, Cloudinary, AWS,

 KataGo Analysis Engine (AI), glift.js library, wgo.js library, Pillow, sgfmill, Selenium, pgAdmin, https, certbot, DNS, Render.com for deployment, Figma

[Greatest Challenges](wiki_folder/challenges.md)

[What I'm working on](https://github.com/users/ScriabinOp8No12/projects/2)

Summary of the above key things I'm working on:

1. Add 500-1000 seeder puzzles that I hand select from AI's potential puzzle output.  Currently writing script utilizing Selenium to auto click the generate puzzles button and wait.
2. Create an onboarding puzzle set for users setting their initial rank, hand select / hard code these
3. Finish the rest of the tutorials
4. Add an upvote/downvote button for puzzles, and allow user to determine the category when creating a public puzzle
5. Create my own Server -> build it from my desktop computer, and put in a nice GPU chip.  Google Cloud VMs are too expensive to leave on
6. Build my own puzzle rendering library since the unmaintained one I'm currently using is way too complex to use well
7. Create a feature letting the user save the puzzle into an anki card for spaced repetition
8. Setup a payment system for people to donate or pay for a monthly subscription to offset GPU costs
9. Create a button that converts the site into Mandarin (I'm fluent in Mandarin, but this will still take a long time)
