<br>

## Special Thanks and Purpose of Project

I am thankful for my wonderful teachers at App Academy for helping me on my endless bugs and coding problems during bootcamp office hours. Thank you for being there to support me nearly every day.  I am also very grateful to my Mom, Dad, and twin brother for listening to my endless rants regarding ridiculous bugs, and for brainstorming the best approach to solving problems (the rubber ducky sitting on my computer just couldn't stand it anymore 🤣)

I've been wanting to build this Go website for more than 2 years now, and through App Academy, I have finally been able to build it! I built this Go website to help my current Go students as well as other Go players. I began building this website at the end of May 2023, and anytime I learned something new at App Academy, I would immediately apply it to this project, which helped me solidify the concepts I had just learned. I have spent 467 hours on this project as of 12/5/23.

<br>

## Link to Live Site

[go-puzzles live site](https://go-puzzles.com/)

<br>

## Description

This website is designed to help Go players of all ranks improve their skills through the mistakes they made in their own games. Users upload a SGF (game record) and can ask a superhuman AI to analyze their game for the largest mistakes, and display these as potential puzzles. If the user saves the generated potential puzzle(s), these puzzles will be added to the public puzzles page, where any user on the website can attempt the puzzles. Puzzles are ranked on an elo system that constantly updates based on user responses. Public puzzles can also be filtered based on rank, game state, category, and board size. For newer players, there is also an interactive tutorial that explains the rules and fundamentals of the game.

<br>

## Technologies

<br>
<p float="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" style="width:75px;" title="JavaScript"/>
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" style="width:75px;" title="Python3"/>
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" style="width:75px;" title="Google Cloud"/>
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" style="width:75px;" title="Nginx"/>
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" style="width:75px;" title="Node.js"/>
  &nbsp;
  <img src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1702109030/icons%20for%20github/express2_orhv2h.jpg" style="width:75px;" title="Express.js"/>
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" style="width:75px;" title="Sequelize"/>
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" style="width:75px;" title="PostgreSQL"/>
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" style="width:75px;" title="Sqlite3"/>
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg" style="width:75px;" title="HTML5"/>
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain-wordmark.svg" style="width:75px;" title="CSS3"/>
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" style="width:75px;" title="React"/>
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" style="width:75px;" title="Redux"/>
  &nbsp;
  <img src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1702106394/icons%20for%20github/certbot-icon_vdpnxu.png" style="width:75px;" title="Certbot"/>
  &nbsp;
  <img src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1702106111/icons%20for%20github/cloudinary_krpbqq.svg" style="width:75px;" title="Cloudinary"/>
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" style="width:75px;" title="Selenium"/>
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" style="width:75px;" title="Figma"/>
  &nbsp;
  <img src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1702105824/icons%20for%20github/render-icon2_g4zrja.png" style="width:75px;" title="Render" />
  &nbsp;
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg" style="width:75px;" title="Pytest"/>
  &nbsp;
</p>

<br>

## Libraries related to game of Go

### Artificial Intelligence

- [KataGo](https://github.com/lightvector/KataGo)

### Frontend JavaScript Libraries

- [glift](https://github.com/artasparks/glift)
- [wgo.js](https://github.com/waltheri/wgo.js/)

### Python Libraries
- [sgfmill](https://github.com/mattheww/sgfmill)
- [Pillow](https://pypi.org/project/Pillow/)

<br>

## Features

- Full Cruds (2): SGFs and Public Puzzles
- Partial Cruds (4): Public Puzzle Ranking System, Filter Public Puzzles, Generate Potential Puzzles, and Interactive Tutorial Quizzes
- Users can view all of their uploaded SGFs, as well as upload them, edit and delete them
- Users can view all of the public puzzles, generate puzzles (by clicking the save button from a potential puzzle), edit, and delete a public puzzle
- Users can see their own ranking update after attempting a public puzzle, as well as see the public puzzle's ranking update
- Users can filter public puzzles by rank, game state, category, and board size
- Users can generate potential puzzles from their own uploaded games (SGFs) by clicking the generate puzzles button.  This sends a request to my Google Cloud Virtual Machine, which has KataGo AI (superhuman Go AI) on the server.  After running the request, it returns the information back to Render.com, where our deployed site is
- Users can complete interactive tutorials, and view their score after submitting the quizzes

<br>

## Challenges

[List of most time consuming challenges](wiki_folder/challenges.md)

<br>

## What I'm working on
[Kanban Board](https://github.com/users/ScriabinOp8No12/projects/2)

<br>

Major tasks I'm working on:

- Add 500-1000 seeder puzzles that I hand select from AI's potential puzzle output. Currently writing script utilizing Selenium to auto click the generate puzzles button and wait.
- Create an onboarding puzzle set for users setting their initial rank, hand select / hard code these
- Finish the rest of the tutorials
- Add an upvote/downvote button for puzzles, and allow user to determine the category when creating a public puzzle
- Create my own Server -> build it from my desktop computer, and put in a nice GPU chip. Google Cloud VMs are too expensive to leave on
- Build my own puzzle rendering library since the unmaintained one I'm currently using is way too complex to use well
- Create a feature letting the user save the puzzle into an anki card for spaced repetition
- Setup a payment system for people to donate or pay for a monthly subscription to offset GPU costs
- Create a button that converts the site into Mandarin (I'm fluent in Mandarin, but this will still take a long time)
