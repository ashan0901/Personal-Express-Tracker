import { DELETE_WALLET, GET_WALLETS } from "../actions/types";
import { GET_WALLET } from "../actions/types";

const initialState = {
  wallets: [],
  wallet: "",
};

function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WALLETS:
      return { ...state, wallets: action.payload };
    case GET_WALLET:
      return { ...state, wallet: action.payload };
    case DELETE_WALLET:
      return {
        ...state,
        wallets: state.wallets.filter((x) => x.id !== action.payload),
      };
    default:
      return state;
  }
}

export default errorReducer;
