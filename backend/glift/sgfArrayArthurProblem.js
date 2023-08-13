const sgf1 = {
  sgfString: "(;GM[1]FF[4]CA[UTF-8])",
  // initialPosition: 34,
  problemConditions: {
    // If move / branch has a comment with the text "CORRECT", it is a correct move!
    C: ["CORRECT"],
  },
  widgetType: "STANDARD_PROBLEM",
};

const sgf2 = {
  sgfString: "(;GM[1]FF[4]CA[UTF-8])",
  // initialPosition: 34,
  problemConditions: {
    C: ["CORRECT"],
  },
  widgetType: "STANDARD_PROBLEM",
};

const sgfCollection = [sgf1, sgf2];

let problemSolved = false;

// alert is stopped after we either click a correct or incorrect move
function onProblemCorrect() {
  if (!problemSolved) {
    alert("Correct!");
    problemSolved = true; // Set the flag to true
    // update user ranking within this if block, so that it only triggers once
    updateUserRanking(true);
  }
}

function onProblemIncorrect() {
  if (!problemSolved) {
    alert("Incorrect!");
    problemSolved = true;
    // update user ranking within this if block, so that it only triggers once
    updateUserRanking(false);
  }
}

function updateUserRanking(isCorrect) {
  if (isCorrect === true) console.log("ranking goes up");
  else if (isCorrect === false) console.log("ranking goes down");
}

let checkCorrectHook = new glift.api.HookOptions({
  problemCorrect: onProblemCorrect,
  problemIncorrect: onProblemIncorrect,
});

gliftWidget = glift.create({
  // pass sgfCollection here
  sgfCollection,
  divId: "gliftContainer",
  hooks: checkCorrectHook,
});

const iconActions = {
  arrowRight: {
    click: () => {
      let index = gliftWidget.getSgfCollectionIndex();
      gliftWidget.goToSgf(index + 1);
    },
  },
};

gliftWidget.iconActions(iconActions);
