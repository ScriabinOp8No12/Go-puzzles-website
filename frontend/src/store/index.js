import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
import modalReducer from "./modal";
import sgfReducer from "./sgfs";
import publicPuzzlesReducer from "./publicPuzzles";

const rootReducer = combineReducers({
  // Names of reducers on the left, typically we want to match the name though
  session: sessionReducer,
  modal: modalReducer,
  sgfs: sgfReducer,
  publicPuzzles: publicPuzzlesReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
