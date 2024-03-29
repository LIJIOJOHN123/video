import { videoReducer } from "./videoReducers";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

export const init = () => {
  const reducer = combineReducers({
    videos: videoReducer
  });
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
  return store;
};
