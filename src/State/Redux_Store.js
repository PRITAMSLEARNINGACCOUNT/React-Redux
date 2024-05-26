import { thunk } from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import Worker from "./Reducers/Worker";

const Redux_Store = createStore(Worker, {}, applyMiddleware(thunk));
export default Redux_Store;
