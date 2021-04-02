import axios from "axios";
import { all, fork } from "redux-saga/effects";
import { baseUrl } from "../config/config";
import postSaga from "./post";
import userSaga from "./user";

axios.defaults.baseURL = baseUrl;
axios.defaults.withCredentials = true;

function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}

export default rootSaga;
