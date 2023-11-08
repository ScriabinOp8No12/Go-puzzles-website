const tutorialStructure = [
  {
    section: "basic-rules",
    pages: 7,
    quiz: true, // If there's a quiz at the end of the section
    nextSection: "more-rules-and-strategy" // The next section to navigate to
  },
  {
    section: "more-rules-and-strategy",
    pages: 5, // Assuming there are 5 pages in this section
    quiz: true,
    // nextSection: null // No next section means it's the last one
  }
  // More sections here
];


export default tutorialStructure;
