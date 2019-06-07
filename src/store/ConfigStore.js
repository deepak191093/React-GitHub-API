import { createStore } from "redux";
import Reducer from "./Reducer";

export default () => {
  const store = createStore(Reducer);
  return store;
};
