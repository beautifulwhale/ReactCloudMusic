import { combineReducers } from "redux";
import { reducer as recommendReducer } from "../pages/recommend/store";
import { reducer as playerReducer } from '../components/player/store'
const reducerCombine = combineReducers({
  recommend: recommendReducer,
  player: playerReducer
})
export default reducerCombine
