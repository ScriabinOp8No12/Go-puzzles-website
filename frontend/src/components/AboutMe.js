import React from "react";
import "./styles/AboutMe.css";

const AboutMe = () => {
  return (
    <div className="about-me-outer-container">
      <h1 className="about-me-h1">About Me</h1>
      <p className="about-me-paragraph-text">
        Hi I'm Nathan! I've always wanted to be a programmer, but could never
        really get started. I kept watching videos and tutorials, but hadn't
        wrote code for projects I cared about, and thus wasn't motivated.
      </p>

      <p className="about-me-paragraph-text">
        When I started teaching Go online in late 2021 shortly after college, I
        had to manually take and rename screenshots, as well as recreate Go
        board positions for my Go lessons. This was a very tedious task and took
        me over 30 minutes per lesson. When teaching 10-20 lessons on a weekly
        basis, this added up to a lot of time that could be saved. That was when
        I learned Python through this Udemy <a href="https://www.udemy.com/course/100-days-of-code/" target="_blank" rel="noopener noreferrer">
        {" "} course </a>.
      </p>

      <p className="about-me-paragraph-text">
        You can find the first 2 Python programs I wrote here: <a href="https://github.com/ScriabinOp8No12/screenshot_script" target="_blank" rel="noopener noreferrer">
        {" "} screenshot script</a>, <a href="https://github.com/ScriabinOp8No12/image2sgf" target="_blank" rel="noopener noreferrer">
        {" "} img2sgf</a>
      </p>


      <p className="about-me-paragraph-text">
        I quickly started to love programming because it was saving me
        a lot of time, and I enjoyed discussing and solving problems. My Dad is an Aerospace Engineer, and attends the SPIE
        conference every year for work. He would manually record everything,
        which takes him 16 hours. I learned how to web scrape and automated the entire process. My scraper
        grabs thousands of data points and links from the SPIE website, and
        outputs them to a csv file. Code here: {" "}
        <a href="https://github.com/ScriabinOp8No12/SPIE-Beautiful-Soup-Project" target="_blank" rel="noopener noreferrer">
        SPIE scraping project</a>
      </p>


      <p className="about-me-paragraph-text">
        3 months later, one of my Go students that I respect and admire (and also a great
        programmer) told me something along the lines of, "There's no better
        combination for a coder than being a Finance and music person". I
        majored in Finance, and minored in Piano Performance at Boston
        University, so I decided to apply for a coding bootcamp. I was accepted into
        App Academy's part time online program that started in January 2022! I've been
        teaching/volunteering at the local Go club for over 14
        years now, and I've always wanted to build a Go website. I started this website at the end of May, 2023, and
        have put in 467 hours as of the beginning of December, 2023. Whenever I learned
        something new, I immediately applied it to this project, which helped
        solidify my knowledge. Code here: <a href="https://github.com/ScriabinOp8No12/Go-puzzles-website" target="_blank" rel="noopener noreferrer">
        {" "} Go Puzzles Website</a>

      </p>

      <p className="about-me-paragraph-text">
        Outside of programming and Go, I love playing Piano (I started at age 5), tennis,
        League of Legends, and watching anime. I am extremely competitive because of my twin brother, and am always looking for ways to
        improve myself. I am thankful for my wonderful family and friends because they encourage me to become the best version of myself.
        Thank you for reading.
      </p>
          <figure>
          <img className="about-me-image" src="https://res.cloudinary.com/dn8rdavoi/image/upload/v1701826538/About%20me%20page%20photos/20231008B010_jdxqd2.jpg" alt="Descriptive Alt Text"/>
          <figcaption className="about-me-caption" >Me teaching my favorite student at the Go club</figcaption>
          </figure>
    </div>
  );
};

export default AboutMe;
