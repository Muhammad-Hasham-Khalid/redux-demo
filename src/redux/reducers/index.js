import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

function errorReducer(state = { error: null }, action) {
  console.log(action);
  return state;
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  error: errorReducer,
});

// {
//   counter: {
//     count: 0;
//   },
//   error: {
//     error: null
//   },
// }
