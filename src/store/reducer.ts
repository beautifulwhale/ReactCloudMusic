import { combineReducers } from "redux";
import { reducer as recommendReducer } from "../pages/recommend/store";

const reducerCombine = combineReducers({
  recommend: recommendReducer
})
export default reducerCombine
