import React from "react";
import { all, fork } from "redux-saga/effects";
import postSaga from "./post";
import userSaga from "./user";

function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}

export default rootSaga;
