import axios from "axios";
import { all, fork } from "redux-saga/effects";
import postSaga from "./post";
import userSaga from "./user";

axios.defaults.baseURL = "http://18.217.44.60";
axios.defaults.withCredentials = true;

function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}

export default rootSaga;
