import { useHistory, useParams } from "react-router-dom";
import tutorialStructure from './tutorialStructure';

const useNavigation = () => {
  const history = useHistory();
  const { section, pageNumber } = useParams();

  const navigateToNextPage = () => {
    const currentSectionIndex = tutorialStructure.findIndex(s => s.section === section);
    if (currentSectionIndex === -1) {
      throw new Error(`Section "${section}" not found in tutorial structure.`);
    }

    const currentSection = tutorialStructure[currentSectionIndex];
    const currentPageNumber = parseInt(pageNumber, 10);
    const isLastPage = currentPageNumber === currentSection.pages;

    if (pageNumber === "quiz" && currentSection.nextSection) {
      history.push(`/learn-and-practice/${currentSection.nextSection}/1`);
    } else if (pageNumber === "quiz") {
      // Handle the end of the quiz or tutorial
    } else if (isLastPage && currentSection.quiz) {
      history.push(`/learn-and-practice/${section}/quiz`);
    } else if (isLastPage) {
      // Handle the navigation if it's the last page and there's no quiz
      // Possibly go to the next section or end the tutorial
    } else {
      // Navigate to the next page in the current section
      history.push(`/learn-and-practice/${section}/${currentPageNumber + 1}`);
    }
  };

  return navigateToNextPage;
};

export default useNavigation;
