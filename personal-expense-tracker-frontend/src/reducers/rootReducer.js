// import { combineReducers } from "redux";

// // Placeholder reducer
// const placeholderReducer = (state = {}, action) => {
//   return state;
// };

// // Include the placeholderReducer in combineReducers
// const rootReducer = combineReducers({
//   placeholder: placeholderReducer,
//   // Add other reducers here as you create them
// });

// export default rootReducer;

import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import walletReducer from "./walletReducer";

export default combineReducers({
  errros: errorReducer,
  wallet: walletReducer,
});
