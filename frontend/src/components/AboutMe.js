import React from "react";
import "./styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div>
      <h1 className="about-me-h1">About Me</h1>
      <p className="about-me-paragraph-text">
        Hi I'm Nathan! I've always wanted to be a programmer, but could never
        really get started. I kept watching videos and tutorials, but never
        wrote code for projects I cared about, and thus was never motivated.
      </p>

      <p className="about-me-paragraph-text">
        When I started teaching Go online in late 2021 shortly after college, I
        had to manually take and rename screenshots, as well as recreate Go
        board positions for my Go lessons. This was a very tedious task and took
        me over 30 minutes per lesson. When teaching 10-20 lessons on a weekly
        basis, this added up to a lot of time that could be saved. That was when
        I learned how to write Python scripts. I took a Python course on Udemy
        to get started and completed about 1/3 of it. It was a very hands on and
        engaging course that I highly recommend:
        <a href="https://www.udemy.com/course/100-days-of-code/" target="_blank" rel="noopener noreferrer">
        {" "} udemy course
                </a>
      </p>

      <p className="about-me-paragraph-text">
        I learned Python well before ChatGPT came out, and remember taking many
        hours trying to simply write some text output to a file LOL{" "}
      </p>

      <p className="about-me-paragraph-text">
        You can find the first 2 Python programs I wrote here: <a href="https://github.com/ScriabinOp8No12/screenshot_script" target="_blank" rel="noopener noreferrer">
        {" "} screenshot script</a>, <a href="https://github.com/ScriabinOp8No12/image2sgf" target="_blank" rel="noopener noreferrer">
        {" "} img2sgf</a>
      </p>


      <p className="about-me-paragraph-text">
        Fast forward a month, I started to love programming, as it was saving me
        a lot of time, and I enjoyed solving problems and discussing how to
        solve problems. My Dad is an Aerospace Engineer, and attends the SPIE
        conference every year for work. He would manually record everything,
        which took him about 10 hours. I learned how to web scrape using
        beautiful soup and selenium, and automated the entire process. The
        program took me 8 hours to write, but takes only 5-6 minutes to run. It
        grabs thousands of data points and links from the SPIE website, and
        outputs them to a csv file. You can find that code here:
        <a href="https://github.com/ScriabinOp8No12/SPIE-Beautiful-Soup-Project" target="_blank" rel="noopener noreferrer">
        {" "} SPIE scraping project</a>
      </p>


      <p className="about-me-paragraph-text">
        About 3 months after learning Python and completing the above projects,
        one of my Go students that I deeply respect and admire (and is a great
        programmer) told me something along the lines of, "There's no better
        combination for a coder than being a Finance and music person". I
        majored in Finance, and minored in Piano Performance at Boston
        University, so I decided to apply for a bootcamp. I was accepted into
        App Academy's part time online program starting January 2022! I've been
        teaching/volunteering at a local kids and teens Go club for over 14
        years now, and I've always wanted to build a Go website, so that's why I
        built this Go website! I started this website on May 24th, 2023, and
        have put in 465 hours as of December 5th, 2023. Whenever I learned
        something new, I immediately applied it to this project, which helped
        solidify my knowledge. You can find my code here:
      </p>

      <p className="about-me-paragraph-text">
        Outside of programming and playing/teaching Go, I love playing and
        teaching Piano (I learned piano when I was 5), playing tennis, playing
        League of Legends, and watching anime. I am extremely competitive,
        probably because of my twin brother, and am always looking for ways to
        improve myself. I have unwavering confidence in myself to achieve any
        short term and long term goals I set for myself, since I've achieved a
        near professional level in Piano and Go. That along with my wonderful
        family and friends keeps me motivated. Thank you for reading.
      </p>
    </div>
  );
};

export default AboutMe;
