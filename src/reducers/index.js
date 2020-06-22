import { combineReducers } from "redux";
import user from "./user";
import modal from "./modal";
import loading from "./loading";
export * from "./user";
export * from "./modal";
export * from "./loading";
export default combineReducers({
  user,
  modal,
  loading,
});
