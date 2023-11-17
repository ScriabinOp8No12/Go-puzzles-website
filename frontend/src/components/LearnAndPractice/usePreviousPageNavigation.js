import { useHistory, useParams } from "react-router-dom";
import LearnAndPracticeStructure from "./LearnAndPracticeStructure";

const usePreviousPageNavigation = () => {
  const history = useHistory();
  const { section, pageNumber } = useParams();

  const navigateToPreviousPage = () => {
    const currentSectionIndex = LearnAndPracticeStructure.findIndex(s => s.section === section);
    if (currentSectionIndex === -1) {
      throw new Error(`Section "${section}" not found in tutorial structure.`);
    }

    const currentSection = LearnAndPracticeStructure[currentSectionIndex];
    const currentPageNumber = parseInt(pageNumber, 10);
    const isFirstPage = currentPageNumber === 1;

    if (pageNumber === "quiz") {
      // If currently on a quiz page, go back to the last page of the section
      history.push(`/learn-and-practice/${section}/${currentSection.pages}`);
    } else if (isFirstPage) {
      // If it's the first page, navigate to the previous section if it exists
      const previousSection = LearnAndPracticeStructure[currentSectionIndex - 1];
      if (previousSection) {
        const targetPage = previousSection.quiz ? "quiz" : previousSection.pages;
        history.push(`/learn-and-practice/${previousSection.section}/${targetPage}`);
      } else {
        // TODO: Handle the case when there is no previous section.
        // - Navigate to a start page or overview
        // - Show a message or modal
        console.log('Start of tutorial reached. Implement start-of-tutorial actions here.');

        // Redirect to the homepage or appropriate start page
        history.push('/'); // Placeholder for start-of-tutorial action
      }
    } else {
      // If it's not the first page, navigate to the previous page in the current section
      history.push(`/learn-and-practice/${section}/${currentPageNumber - 1}`);
    }
  };

  return navigateToPreviousPage;
};

export default usePreviousPageNavigation;
