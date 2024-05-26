import { combineReducers } from "redux";
function Main_Worker(state = 0, action) {
  if (action.type === "Decrease") {
    if (action.payload === 0) {
      return (state -= 1);
    } else {
      return (state -= action.payload);
    }
  } else if (action.type === "Increase") {
    if (action.payload === 0) {
      return (state -= 1);
    } else {
      return (state += action.payload);
    }
  }
  return state;
}
const Final_Reducer = combineReducers({
  Increase_Dcrease: Main_Worker,
});
// export default Main_Worker;
export default Final_Reducer;
