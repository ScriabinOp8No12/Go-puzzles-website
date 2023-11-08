import { useHistory, useParams } from "react-router-dom";
import LearnAndPracticeStructure from "./LearnAndPracticeStructure";

const useNavigation = () => {
  const history = useHistory();
  // Extract section and pageNumber parameters from the url route
  const { section, pageNumber } = useParams();

  const navigateToNextPage = () => {
    const currentSectionIndex = LearnAndPracticeStructure.findIndex(s => s.section === section);
    if (currentSectionIndex === -1) {
      throw new Error(`Section "${section}" not found in tutorial structure.`);
    }

    const currentSection = LearnAndPracticeStructure[currentSectionIndex];
    const currentPageNumber = parseInt(pageNumber, 10);
    const isLastPage = currentPageNumber === currentSection.pages;

    // If the page url is 'quiz' and a next section exists, navigate to the first page of the next section
    if (pageNumber === "quiz" && currentSection.nextSection) {
      history.push(`/learn-and-practice/${currentSection.nextSection}/1`);
    } else if (pageNumber === "quiz") {
      // Handle the end of the quiz or tutorial
    } else if (isLastPage && currentSection.quiz) {
      history.push(`/learn-and-practice/${section}/quiz`);
    } else if (isLastPage) {
      // If it's the last page and there's no quiz, check if there's a next section
      if (currentSection.nextSection) {
        // If there's a next section, navigate to it
        history.push(`/learn-and-practice/${currentSection.nextSection}/1`);
      } else {
        // TODO: Handle the end of the tutorial when no next section exists
        // - Navigate to a tutorial completion page
        // - Show a completion message or modal
        // - Unlock a new feature or badge for the user
        console.log('End of tutorial reached. Implement end-of-tutorial actions here.');

        // Redirect to the homepage or appropriate end page
        history.push('/'); // Placeholder for end-of-tutorial action
      }
    } else {
      // If it's not the last page, navigate to the next page in the current section
      history.push(`/learn-and-practice/${section}/${currentPageNumber + 1}`);
    }
  };

  return navigateToNextPage;
};

export default useNavigation;
