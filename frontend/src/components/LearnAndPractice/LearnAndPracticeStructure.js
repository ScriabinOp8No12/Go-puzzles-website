const LearnAndPracticeStructure = [
  {
    section: "basic-rules",
    pages: 7,
    quiz: true, // If there's a quiz at the end of the section
    nextSection: "more-rules" // The next section to navigate to
  },
  {
    section: "more-rules",
    pages: 6,
    quiz: false,
    nextSection: "reading"
  },
  {
    section: "reading",
    pages: 5,
    quiz: false,
    // nextSection: null // No next section means it's the last one
  }
  // More sections here
];


export default LearnAndPracticeStructure;
