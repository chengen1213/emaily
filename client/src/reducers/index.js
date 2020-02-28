import { combineReducers } from "redux";
import { reducer as reduxForm } from "redux-form";
import authReducers from "./authReducer";
import surveysRuducer from "./surveysReducer";

export default combineReducers({
  auth: authReducers,
  form: reduxForm,
  surveys: surveysRuducer
});
