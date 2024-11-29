import { createStore } from "redux";
import stageReducer from "./reducer";

const store = createStore(stageReducer);

export default store;
