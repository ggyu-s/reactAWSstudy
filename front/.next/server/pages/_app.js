module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("1TCz");


/***/ }),

/***/ "1TCz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TpwP");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("xnum");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("AQn3");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("F5FC");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);








const App = ({
  Component
}) => {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("meta", {
        charSet: "utf-8"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("title", {
        children: "NodeBird"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(Component, {})]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].withRedux(App));

/***/ }),

/***/ "1fKG":
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "AQn3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "next-redux-wrapper"
var external_next_redux_wrapper_ = __webpack_require__("JMOJ");

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-devtools-extension"
var external_redux_devtools_extension_ = __webpack_require__("ufKq");

// EXTERNAL MODULE: external "redux-saga"
var external_redux_saga_ = __webpack_require__("1fKG");
var external_redux_saga_default = /*#__PURE__*/__webpack_require__.n(external_redux_saga_);

// EXTERNAL MODULE: ./reducers/user.js
var user = __webpack_require__("LAVF");

// EXTERNAL MODULE: ./reducers/post.js
var post = __webpack_require__("p+NB");

// CONCATENATED MODULE: ./reducers/index.js





const rootReducer = (state, action) => {
  switch (action.type) {
    case external_next_redux_wrapper_["HYDRATE"]:
      console.log("HYDRATE", action);
      return action.payload;

    default:
      {
        const combineReducer = Object(external_redux_["combineReducers"])({
          user: user["I" /* default */],
          post: post["I" /* default */]
        });
        return combineReducer(state, action);
      }
  }
};

/* harmony default export */ var reducers = (rootReducer);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "redux-saga/effects"
var effects_ = __webpack_require__("RmXt");

// CONCATENATED MODULE: ./sagas/post.js





function loadPostsAPI(lastId) {
  return external_axios_default.a.get(`/posts?lastId=${lastId || 0}`);
}

function* loadPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostsAPI, action.lastId);
    yield Object(effects_["put"])({
      type: post["o" /* LOAD_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.log(error);
    yield Object(effects_["put"])({
      type: post["m" /* LOAD_POSTS_FAILURE */],
      data: error.response.data
    });
  }
}

function loadPostAPI(data) {
  return external_axios_default.a.get(`/post/${data}`);
}

function* loadPost(action) {
  try {
    const result = yield Object(effects_["call"])(loadPostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["r" /* LOAD_POST_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.log(error);
    yield Object(effects_["put"])({
      type: post["p" /* LOAD_POST_FAILURE */],
      data: error.response.data
    });
  }
}

function loadUserPostsAPI(data, lastId) {
  return external_axios_default.a.get(`/user/${data}/posts?lastId=${lastId || 0}`);
}

function* loadUserPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserPostsAPI, action.data, action.lastId);
    yield Object(effects_["put"])({
      type: post["u" /* LOAD_USER_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.log(error);
    yield Object(effects_["put"])({
      type: post["s" /* LOAD_USER_POSTS_FAILURE */],
      data: error.response.data
    });
  }
}

function loadHashtagPostsAPI(data, lastId) {
  return external_axios_default.a.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* loadHashtagPosts(action) {
  try {
    const result = yield Object(effects_["call"])(loadHashtagPostsAPI, action.data, action.lastId);
    yield Object(effects_["put"])({
      type: post["l" /* LOAD_HASHTAG_POSTS_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.log(error);
    yield Object(effects_["put"])({
      type: post["j" /* LOAD_HASHTAG_POSTS_FAILURE */],
      data: error.response.data
    });
  }
}

function addPostAPI(data) {
  return external_axios_default.a.post("/post", data);
}

function* addPost(action) {
  try {
    const result = yield Object(effects_["call"])(addPostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["f" /* ADD_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: user["a" /* ADD_POST_TO_ME */],
      data: result.data.id
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: post["d" /* ADD_POST_FAILURE */],
      data: error.response.data
    });
  }
}

function addCommentAPI(data) {
  return external_axios_default.a.post(`/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  try {
    const result = yield Object(effects_["call"])(addCommentAPI, action.data);
    yield Object(effects_["put"])({
      type: post["c" /* ADD_COMMENT_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: post["a" /* ADD_COMMENT_FAILURE */],
      data: error.response.data
    });
  }
}

function removePostAPI(data) {
  return external_axios_default.a.delete(`/post/${data}`);
}

function* removePost(action) {
  try {
    const result = yield Object(effects_["call"])(removePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["y" /* REMOVE_POST_SUCCESS */],
      data: result.data
    });
    yield Object(effects_["put"])({
      type: user["B" /* REMOVE_POST_OF_ME */],
      data: action.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["w" /* REMOVE_POST_FAILURE */],
      data: error.response.data
    });
  }
}

function likePostAPI(data) {
  return external_axios_default.a.patch(`/post/${data}/like`);
}

function* likePost(action) {
  try {
    const result = yield Object(effects_["call"])(likePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["i" /* LIKE_POST_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["g" /* LIKE_POST_FAILURE */],
      data: error.response.data
    });
  }
}

function unLikePostAPI(data) {
  return external_axios_default.a.delete(`/post/${data}/unlike`);
}

function* unLikePost(action) {
  try {
    const result = yield Object(effects_["call"])(unLikePostAPI, action.data);
    yield Object(effects_["put"])({
      type: post["E" /* UNLIKE_POST_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["C" /* UNLIKE_POST_FAILURE */],
      data: error.response.data
    });
  }
}

function uploadImagesAPI(data) {
  return external_axios_default.a.post(`/post/images`, data);
}

function* uploadImages(action) {
  try {
    const result = yield Object(effects_["call"])(uploadImagesAPI, action.data);
    yield Object(effects_["put"])({
      type: post["H" /* UPLOAD_IMAGES_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["F" /* UPLOAD_IMAGES_FAILURE */],
      data: error.response.data
    });
  }
}

function retweetAPI(data) {
  return external_axios_default.a.post(`/post/${data}/retweet`, data);
}

function* retweet(action) {
  try {
    const result = yield Object(effects_["call"])(retweetAPI, action.data);
    console.log(result);
    yield Object(effects_["put"])({
      type: post["B" /* RETWEET_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    console.error(error);
    yield Object(effects_["put"])({
      type: post["z" /* RETWEET_FAILURE */],
      error: error.response.data
    });
  }
}

function* watchLoadPosts() {
  yield Object(effects_["takeLatest"])(post["n" /* LOAD_POSTS_REQUEST */], loadPosts);
}

function* watchLoadPost() {
  yield Object(effects_["takeLatest"])(post["q" /* LOAD_POST_REQUEST */], loadPost);
}

function* watchLoadUserPosts() {
  yield Object(effects_["takeLatest"])(post["t" /* LOAD_USER_POSTS_REQUEST */], loadUserPosts);
}

function* watchLoadHashtagPosts() {
  yield Object(effects_["takeLatest"])(post["k" /* LOAD_HASHTAG_POSTS_REQUEST */], loadHashtagPosts);
}

function* watchAddPost() {
  yield Object(effects_["takeLatest"])(post["e" /* ADD_POST_REQUEST */], addPost);
}

function* watchAddComment() {
  yield Object(effects_["takeLatest"])(post["b" /* ADD_COMMENT_REQUEST */], addComment);
}

function* watchRemovePost() {
  yield Object(effects_["takeLatest"])(post["x" /* REMOVE_POST_REQUEST */], removePost);
}

function* watchLike() {
  yield Object(effects_["takeLatest"])(post["h" /* LIKE_POST_REQUEST */], likePost);
}

function* watchUnLike() {
  yield Object(effects_["takeLatest"])(post["D" /* UNLIKE_POST_REQUEST */], unLikePost);
}

function* watchUploadImages() {
  yield Object(effects_["takeLatest"])(post["G" /* UPLOAD_IMAGES_REQUEST */], uploadImages);
}

function* watchRetweet() {
  yield Object(effects_["takeLatest"])(post["A" /* RETWEET_REQUEST */], retweet);
}

function* post_post() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLoadPosts), Object(effects_["fork"])(watchLoadPost), Object(effects_["fork"])(watchLoadUserPosts), Object(effects_["fork"])(watchLoadHashtagPosts), Object(effects_["fork"])(watchAddPost), Object(effects_["fork"])(watchAddComment), Object(effects_["fork"])(watchRemovePost), Object(effects_["fork"])(watchLike), Object(effects_["fork"])(watchUnLike), Object(effects_["fork"])(watchUploadImages), Object(effects_["fork"])(watchRetweet)]);
}

/* harmony default export */ var sagas_post = (post_post);
// CONCATENATED MODULE: ./sagas/user.js




function loadMyInfoAPI() {
  return external_axios_default.a.get("/user");
}

function* loadMyInfo() {
  try {
    const result = yield Object(effects_["call"])(loadMyInfoAPI);
    console.log(result);
    yield Object(effects_["put"])({
      type: user["o" /* LOAD_MY_INFO_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["m" /* LOAD_MY_INFO_FAILURE */],
      error: error.response.data
    });
  }
}

function loadUserAPI(data) {
  return external_axios_default.a.get(`/user/${data}`);
}

function* loadUser(action) {
  try {
    const result = yield Object(effects_["call"])(loadUserAPI, action.data);
    console.log(result);
    yield Object(effects_["put"])({
      type: user["r" /* LOAD_USER_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["p" /* LOAD_USER_FAILURE */],
      error: error.response.data
    });
  }
}

function logInAPI(data) {
  return external_axios_default.a.post("/user/login", data);
}

function* logIn(action) {
  try {
    const result = yield Object(effects_["call"])(logInAPI, action.data);
    console.log(result);
    yield Object(effects_["put"])({
      type: user["u" /* LOG_IN_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["s" /* LOG_IN_FAILURE */],
      error: error.response.data
    });
  }
}

function logOutAPI() {
  return external_axios_default.a.post("/user/logout");
}

function* logOut() {
  try {
    yield Object(effects_["call"])(logOutAPI);
    yield Object(effects_["put"])({
      type: user["x" /* LOG_OUT_SUCCESS */]
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["v" /* LOG_OUT_FAILURE */],
      data: error.response.data
    });
  }
}

function signUpAPI(data) {
  return external_axios_default.a.post("/user", data);
}

function* signUp(action) {
  try {
    const result = yield Object(effects_["call"])(signUpAPI, action.data);
    yield Object(effects_["put"])({
      type: user["E" /* SIGN_UP_SUCCESS */]
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["C" /* SIGN_UP_FAILURE */],
      error: error.response.data
    });
  }
}

function followAPI(data) {
  return external_axios_default.a.patch(`/user/${data}/follow`);
}

function* follow(action) {
  try {
    const result = yield Object(effects_["call"])(followAPI, action.data);
    yield Object(effects_["put"])({
      type: user["g" /* FOLLOW_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["e" /* FOLLOW_FAILURE */],
      error: error.response.data
    });
  }
}

function unFollowAPI(data) {
  return external_axios_default.a.delete(`/user/${data}/follow`);
}

function* unFollow(action) {
  try {
    const result = yield Object(effects_["call"])(unFollowAPI, action.data);
    yield Object(effects_["put"])({
      type: user["H" /* UNFOLLOW_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["F" /* UNFOLLOW_FAILURE */],
      error: error.response.data
    });
  }
}

function loadFollowersAPI(data) {
  return external_axios_default.a.get(`/user/f/followers?limit=${data}`);
}

function* loadFollowers(action) {
  try {
    const result = yield Object(effects_["call"])(loadFollowersAPI, action.data);
    yield Object(effects_["put"])({
      type: user["j" /* LOAD_FOLLOWERS_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["h" /* LOAD_FOLLOWERS_FAILURE */],
      error: error.response.data
    });
  }
}

function loadFollowingsAPI(data) {
  return external_axios_default.a.get(`/user/f/followings?limit=${data}`);
}

function* loadFollowings(action) {
  try {
    const result = yield Object(effects_["call"])(loadFollowingsAPI, action.data);
    yield Object(effects_["put"])({
      type: user["l" /* LOAD_FOLLOWINGS_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["h" /* LOAD_FOLLOWERS_FAILURE */],
      error: error.response.data
    });
  }
}

function removeFollowerAPI(data) {
  return external_axios_default.a.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
  try {
    const result = yield Object(effects_["call"])(removeFollowerAPI, action.data);
    yield Object(effects_["put"])({
      type: user["A" /* REMOVE_FOLLOWER_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["y" /* REMOVE_FOLLOWER_FAILURE */],
      error: error.response.data
    });
  }
}

function changeNicknameAPI(data) {
  return external_axios_default.a.patch("/user/nickname", {
    nickname: data
  });
}

function* changeNickname(action) {
  try {
    const result = yield Object(effects_["call"])(changeNicknameAPI, action.data);
    yield Object(effects_["delay"])(1000);
    yield Object(effects_["put"])({
      type: user["d" /* CHANGE_NICKNAME_SUCCESS */],
      data: result.data
    });
  } catch (error) {
    yield Object(effects_["put"])({
      type: user["b" /* CHANGE_NICKNAME_FAILURE */],
      error: error.response.data
    });
  }
}

function* watchLoadUser() {
  yield Object(effects_["takeLatest"])(user["q" /* LOAD_USER_REQUEST */], loadUser);
}

function* watchLogIn() {
  yield Object(effects_["takeLatest"])(user["t" /* LOG_IN_REQUEST */], logIn);
}

function* watchLogOut() {
  yield Object(effects_["takeLatest"])(user["w" /* LOG_OUT_REQUEST */], logOut);
}

function* watchSignUp() {
  yield Object(effects_["takeLatest"])(user["D" /* SIGN_UP_REQUEST */], signUp);
}

function* watchFollow() {
  yield Object(effects_["takeLatest"])(user["f" /* FOLLOW_REQUEST */], follow);
}

function* watchUnFollow() {
  yield Object(effects_["takeLatest"])(user["G" /* UNFOLLOW_REQUEST */], unFollow);
}

function* watchLoadFollowers() {
  yield Object(effects_["takeLatest"])(user["i" /* LOAD_FOLLOWERS_REQUEST */], loadFollowers);
}

function* watchLoadFollowings() {
  yield Object(effects_["takeLatest"])(user["k" /* LOAD_FOLLOWINGS_REQUEST */], loadFollowings);
}

function* watchRemoveFollower() {
  yield Object(effects_["takeLatest"])(user["z" /* REMOVE_FOLLOWER_REQUEST */], removeFollower);
}

function* watchChangeNickname() {
  yield Object(effects_["takeLatest"])(user["c" /* CHANGE_NICKNAME_REQUEST */], changeNickname);
}

function* watchLoadMyInfo() {
  yield Object(effects_["takeLatest"])(user["n" /* LOAD_MY_INFO_REQUEST */], loadMyInfo);
}

function* user_user() {
  yield Object(effects_["all"])([Object(effects_["fork"])(watchLoadMyInfo), Object(effects_["fork"])(watchLoadUser), Object(effects_["fork"])(watchLogIn), Object(effects_["fork"])(watchLogOut), Object(effects_["fork"])(watchSignUp), Object(effects_["fork"])(watchFollow), Object(effects_["fork"])(watchUnFollow), Object(effects_["fork"])(watchRemoveFollower), Object(effects_["fork"])(watchLoadFollowers), Object(effects_["fork"])(watchLoadFollowings), Object(effects_["fork"])(watchChangeNickname)]);
}

/* harmony default export */ var sagas_user = (user_user);
// CONCATENATED MODULE: ./sagas/index.js




external_axios_default.a.defaults.baseURL = "http://localhost:3065";
external_axios_default.a.defaults.withCredentials = true;

function* rootSaga() {
  yield Object(effects_["all"])([Object(effects_["fork"])(sagas_user), Object(effects_["fork"])(sagas_post)]);
}

/* harmony default export */ var sagas = (rootSaga);
// CONCATENATED MODULE: ./store/configureStore.js







const configureStore = () => {
  const sagaMiddleware = external_redux_saga_default()();
  const middlewares = [sagaMiddleware];
  const enhancer = true ? Object(external_redux_["compose"])(Object(external_redux_["applyMiddleware"])(...middlewares)) : undefined;
  const store = Object(external_redux_["createStore"])(reducers, enhancer);
  store.sagaTask = sagaMiddleware.run(sagas);
  return store;
};

const wrapper = Object(external_next_redux_wrapper_["createWrapper"])(configureStore, {
  debug: false
});
/* harmony default export */ var store_configureStore = __webpack_exports__["a"] = (wrapper);

/***/ }),

/***/ "F5FC":
/***/ (function(module, exports) {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "JMOJ":
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "LAVF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_USER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_USER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOG_IN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOG_IN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOG_IN_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return LOG_OUT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return LOG_OUT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return LOG_OUT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return SIGN_UP_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return SIGN_UP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return SIGN_UP_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CHANGE_NICKNAME_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return CHANGE_NICKNAME_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CHANGE_NICKNAME_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return FOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return FOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return FOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return UNFOLLOW_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UNFOLLOW_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return UNFOLLOW_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return REMOVE_FOLLOWER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return REMOVE_FOLLOWER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REMOVE_FOLLOWER_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_FOLLOWINGS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_FOLLOWINGS_SUCCESS; });
/* unused harmony export LOAD_FOLLOWINGS_FAILURE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LOAD_FOLLOWERS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_FOLLOWERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LOAD_FOLLOWERS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_MY_INFO_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_MY_INFO_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_MY_INFO_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_POST_TO_ME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return REMOVE_POST_OF_ME; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  loadMyInfoLoading: false,
  loadMyInfoDone: false,
  loadMyInfoError: null,
  logdUserLoading: false,
  logdUserDone: false,
  logdUserError: null,
  logInLoading: false,
  logInDone: false,
  logInError: null,
  logOutLoading: false,
  logOutDone: false,
  logOutError: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false,
  changeNicknameDone: false,
  changeNicknameError: null,
  followLoading: false,
  followDone: false,
  followError: null,
  unFollowLoading: false,
  unFollowDone: false,
  unFollowError: null,
  loadFollowersLoading: false,
  loadFollowersDone: false,
  loadFollowersError: null,
  loadFollowingsLoading: false,
  loadFollowingsDone: false,
  loadFollowingsError: null,
  removeFollowerLoading: false,
  removeFollowerDone: false,
  removeFollowerError: null,
  me: null,
  userInfo: null
};
const LOAD_USER_REQUEST = "LOAD_USER_REQUEST";
const LOAD_USER_SUCCESS = "LOAD_USER_SUCCESS";
const LOAD_USER_FAILURE = "LOAD_USER_FAILURE";
const LOG_IN_REQUEST = "LOG_IN_REQUEST";
const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
const LOG_IN_FAILURE = "LOG_IN_FAILURE";
const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";
const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
const CHANGE_NICKNAME_REQUEST = "CHANGE_NICKNAME_REQUEST";
const CHANGE_NICKNAME_SUCCESS = "CHANGE_NICKNAME_SUCCESS";
const CHANGE_NICKNAME_FAILURE = "CHANGE_NICKNAME_FAILURE";
const FOLLOW_REQUEST = "FOLLOW_REQUEST";
const FOLLOW_SUCCESS = "FOLLOW_SUCCESS";
const FOLLOW_FAILURE = "FOLLOW_FAILURE";
const UNFOLLOW_REQUEST = "UNFOLLOW_REQUEST";
const UNFOLLOW_SUCCESS = "UNFOLLOW_SUCCESS";
const UNFOLLOW_FAILURE = "UNFOLLOW_FAILURE";
const REMOVE_FOLLOWER_REQUEST = "REMOVE_FOLLOWER_REQUEST";
const REMOVE_FOLLOWER_SUCCESS = "REMOVE_FOLLOWER_SUCCESS";
const REMOVE_FOLLOWER_FAILURE = "REMOVE_FOLLOWER_FAILURE";
const LOAD_FOLLOWINGS_REQUEST = "LOAD_FOLLOWINGS_REQUEST";
const LOAD_FOLLOWINGS_SUCCESS = "LOAD_FOLLOWINGS_SUCCESS";
const LOAD_FOLLOWINGS_FAILURE = "LOAD_FOLLOWINGS_FAILURE";
const LOAD_FOLLOWERS_REQUEST = "LOAD_FOLLOWERS_REQUEST";
const LOAD_FOLLOWERS_SUCCESS = "LOAD_FOLLOWERS_SUCCESS";
const LOAD_FOLLOWERS_FAILURE = "LOAD_FOLLOWERS_FAILURE";
const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS";
const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE";
const ADD_POST_TO_ME = "ADD_POST_TO_ME";
const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case LOAD_MY_INFO_REQUEST:
        draft.loadMyInfoLoading = true;
        draft.loadMyInfoDone = false;
        draft.loadMyInfoError = null;
        break;

      case LOAD_MY_INFO_SUCCESS:
        draft.loadMyInfoDone = true;
        draft.loadMyInfoLoading = false;
        draft.me = action.data;
        break;

      case LOAD_MY_INFO_FAILURE:
        draft.loadMyInfoLoading = false;
        draft.loadMyInfoError = action.error;
        break;

      case LOAD_USER_REQUEST:
        draft.loadUserLoading = true;
        draft.loadUserDone = false;
        draft.loadUserError = null;
        break;

      case LOAD_USER_SUCCESS:
        draft.loadUserDone = true;
        draft.loadUserLoading = false;
        draft.userInfo = action.data;
        break;

      case LOAD_USER_FAILURE:
        draft.loadUserLoading = false;
        draft.loadUserError = action.error;
        break;

      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;

      case LOG_IN_SUCCESS:
        draft.logInDone = true;
        draft.logInLoading = false;
        draft.me = action.data;
        break;

      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInError = action.error;
        break;

      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;

      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.me = null;
        break;

      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutError = action.error;
        break;

      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpDone = false;
        draft.signUpError = null;
        break;

      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;

      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;

      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameDone = false;
        draft.changeNicknameError = null;
        break;

      case CHANGE_NICKNAME_SUCCESS:
        draft.me.nickname = action.data.nickname;
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        break;

      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;

      case FOLLOW_REQUEST:
        draft.followLoading = true;
        draft.followDone = false;
        draft.followError = null;
        break;

      case FOLLOW_SUCCESS:
        draft.followLoading = false;
        draft.followDone = true;
        draft.me.Followings.push({
          id: action.data.UserId
        });
        break;

      case FOLLOW_FAILURE:
        draft.followLoading = false;
        draft.followError = action.error;
        break;

      case UNFOLLOW_REQUEST:
        draft.unFollowLoading = true;
        draft.unFollowDone = false;
        draft.unFollowError = null;
        break;

      case UNFOLLOW_SUCCESS:
        draft.unFollowLoading = false;
        draft.unFollowDone = true;
        draft.me.Followings = draft.me.Followings.filter(v => v.id !== action.data.UserId);
        break;

      case UNFOLLOW_FAILURE:
        draft.unFollowLoading = false;
        draft.unFollowError = action.error;
        break;

      case REMOVE_FOLLOWER_REQUEST:
        draft.removeFollowerLoading = true;
        draft.removeFollowerDone = false;
        draft.removeFollowerError = null;
        break;

      case REMOVE_FOLLOWER_SUCCESS:
        draft.removeFollowerLoading = false;
        draft.removeFollowerDone = true;
        draft.me.Followers = draft.me.Followers.filter(v => v.id !== action.data.UserId);
        break;

      case REMOVE_FOLLOWER_FAILURE:
        draft.removeFollowerLoading = false;
        draft.removeFollowerError = action.error;
        break;

      case LOAD_FOLLOWERS_REQUEST:
        draft.loadFollowersLoading = true;
        draft.loadFollowersDone = false;
        draft.loadFollowersError = null;
        break;

      case LOAD_FOLLOWERS_SUCCESS:
        draft.loadFollowersLoading = false;
        draft.loadFollowersDone = true;
        draft.me.Followers = action.data.followers;
        break;

      case LOAD_FOLLOWERS_FAILURE:
        draft.loadFollowersLoading = false;
        draft.loadFollowersError = action.error;
        break;

      case LOAD_FOLLOWINGS_REQUEST:
        draft.loadFollwingsLoading = true;
        draft.loadFollwingsDone = false;
        draft.loadFollwingsError = null;
        break;

      case LOAD_FOLLOWINGS_SUCCESS:
        draft.loadFollwingsLoading = false;
        draft.loadFollwingsDone = true;
        draft.me.Followings = action.data.followings;
        break;

      case LOAD_FOLLOWINGS_FAILURE:
        draft.loadFollwingsLoading = false;
        draft.loadFollwingsError = action.error;
        break;

      case ADD_POST_TO_ME:
        draft.me.Posts.unshift({
          id: action.data
        });
        break;

      case REMOVE_POST_OF_ME:
        draft.me.Posts = draft.me.Posts.filter(v => v.id !== action.data);
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["I"] = (reducer);

/***/ }),

/***/ "RmXt":
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "T5ka":
/***/ (function(module, exports) {

module.exports = require("immer");

/***/ }),

/***/ "TpwP":
/***/ (function(module, exports) {



/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "p+NB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initialState */
/* unused harmony export addPost */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return LOAD_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LOAD_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return LOAD_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return LOAD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return LOAD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return LOAD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return LOAD_USER_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return LOAD_USER_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return LOAD_USER_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return LOAD_HASHTAG_POSTS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return LOAD_HASHTAG_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return LOAD_HASHTAG_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return ADD_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return ADD_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return ADD_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ADD_COMMENT_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ADD_COMMENT_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_COMMENT_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return REMOVE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return REMOVE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return REMOVE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return LIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return LIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return LIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return UNLIKE_POST_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return UNLIKE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return UNLIKE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return UPLOAD_IMAGES_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return UPLOAD_IMAGES_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return UPLOAD_IMAGES_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return RETWEET_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return RETWEET_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return RETWEET_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return REMOVE_IMAGE; });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("T5ka");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  mainPosts: [],
  imagePaths: [],
  hasMorePosts: true,
  loadPostsLoading: false,
  loadPostsDone: false,
  loadPostsError: null,
  loadPostLoading: false,
  loadPostDone: false,
  loadPostError: null,
  loadUserPostsLoading: false,
  loadUserPostsDone: false,
  loadUserPostsError: null,
  loadHashtagPostsLoading: false,
  loadHashtagPostsDone: false,
  loadHashtagPostsError: null,
  addPostLoading: false,
  addPostDone: false,
  addPostError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
  removePostLoading: false,
  removePostDone: false,
  removePostError: null,
  likePostLoading: false,
  likePostDone: false,
  likePostError: null,
  unLikePostLoading: false,
  unLikePostDone: false,
  unLikePostError: null,
  uploadImagesLoading: false,
  uploadImagesDone: false,
  uploadImagesError: null,
  retweetLoading: false,
  retweetDone: false,
  retweetError: null,
  singlePost: null
};
const ADD_POST = "ADD_POST";
const addPost = {
  type: ADD_POST
};
const LOAD_POSTS_REQUEST = "LOAD_POSTS_REQUEST";
const LOAD_POSTS_SUCCESS = "LOAD_POSTS_SUCCESS";
const LOAD_POSTS_FAILURE = "LOAD_POSTS_FAILURE";
const LOAD_POST_REQUEST = "LOAD_POST_REQUEST";
const LOAD_POST_SUCCESS = "LOAD_POST_SUCCESS";
const LOAD_POST_FAILURE = "LOAD_POST_FAILURE";
const LOAD_USER_POSTS_REQUEST = "LOAD_USER_POSTS_REQUEST";
const LOAD_USER_POSTS_SUCCESS = "LOAD_USER_POSTS_SUCCESS";
const LOAD_USER_POSTS_FAILURE = "LOAD_USER_POSTS_FAILURE";
const LOAD_HASHTAG_POSTS_REQUEST = "LOAD_HASHTAG_POSTS_REQUEST";
const LOAD_HASHTAG_POSTS_SUCCESS = "LOAD_HASHTAG_POSTS_SUCCESS";
const LOAD_HASHTAG_POSTS_FAILURE = "LOAD_HASHTAG_POSTS_FAILURE";
const ADD_POST_REQUEST = "ADD_POST_REQUEST";
const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
const ADD_POST_FAILURE = "ADD_POST_FAILURE";
const ADD_COMMENT_REQUEST = "ADD_COMMENT_REQUEST";
const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
const ADD_COMMENT_FAILURE = "ADD_COMMENT_FAILURE";
const REMOVE_POST_REQUEST = "REMOVE_POST_REQUEST";
const REMOVE_POST_SUCCESS = "REMOVE_POST_SUCCESS";
const REMOVE_POST_FAILURE = "REMOVE_POST_FAILURE";
const LIKE_POST_REQUEST = "LIKE_POST_REQUEST";
const LIKE_POST_SUCCESS = "LIKE_POST_SUCCESS";
const LIKE_POST_FAILURE = "LIKE_POST_FAILURE";
const UNLIKE_POST_REQUEST = "UNLIKE_POST_REQUEST";
const UNLIKE_POST_SUCCESS = "UNLIKE_POST_SUCCESS";
const UNLIKE_POST_FAILURE = "UNLIKE_POST_FAILURE";
const UPLOAD_IMAGES_REQUEST = "UPLOAD_IMAGES_REQUEST";
const UPLOAD_IMAGES_SUCCESS = "UPLOAD_IMAGES_SUCCESS";
const UPLOAD_IMAGES_FAILURE = "UPLOAD_IMAGES_FAILURE";
const RETWEET_REQUEST = "RETWEET_REQUEST";
const RETWEET_SUCCESS = "RETWEET_SUCCESS";
const RETWEET_FAILURE = "RETWEET_FAILURE";
const REMOVE_IMAGE = "REMOVE_IMAGE";

const reducer = (state = initialState, action) => {
  return immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
    switch (action.type) {
      case LOAD_HASHTAG_POSTS_REQUEST:
      case LOAD_USER_POSTS_REQUEST:
      case LOAD_POSTS_REQUEST:
        draft.loadPostsLoading = true;
        draft.loadPostsDone = false;
        draft.loadPostsError = null;
        break;

      case LOAD_HASHTAG_POSTS_SUCCESS:
      case LOAD_USER_POSTS_SUCCESS:
      case LOAD_POSTS_SUCCESS:
        draft.loadPostsLoading = false;
        draft.loadPostsDone = true;
        draft.mainPosts = draft.mainPosts.concat(action.data);
        draft.hasMorePosts = action.data.length === 10;
        break;

      case LOAD_HASHTAG_POSTS_FAILURE:
      case LOAD_USER_POSTS_FAILURE:
      case LOAD_POSTS_FAILURE:
        draft.loadPostsLoading = false;
        draft.loadPostsError = action.error;
        break;

      case LOAD_POST_REQUEST:
        draft.loadPostLoading = true;
        draft.loadPostDone = false;
        draft.loadPostError = null;
        break;

      case LOAD_POST_SUCCESS:
        draft.loadPostLoading = false;
        draft.loadPostDone = true;
        draft.singlePost = action.data;
        break;

      case LOAD_POST_FAILURE:
        draft.loadPostLoading = false;
        draft.loadPostError = action.error;
        break;

      case ADD_POST_REQUEST:
        draft.addPostLoading = true;
        draft.addPostDone = false;
        draft.addPostError = null;
        break;

      case ADD_POST_SUCCESS:
        draft.mainPosts.unshift(action.data);
        draft.addPostLoading = false;
        draft.addPostDone = true;
        draft.imagePaths = [];
        break;

      case ADD_POST_FAILURE:
        draft.addPostLoading = false;
        draft.addPostError = action.error;
        break;

      case ADD_COMMENT_REQUEST:
        draft.addCommentLoading = true;
        draft.addCommentDone = false;
        draft.addCommentError = null;
        break;

      case ADD_COMMENT_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Comments.unshift(action.data); // const postIndex = state.mainPosts.findIndex(
          //   (v) => v.id === action.data.postId
          // );
          // const post = { ...state.mainPosts[postIndex] };
          // post.Comments = [dummyConmment(action.data), ...post.Comments];
          // const mainPosts = [...state.mainPosts];
          // mainPosts[postIndex] = post;

          draft.addCommentLoading = false;
          draft.addCommentDone = true;
          break;
        }

      case ADD_COMMENT_FAILURE:
        draft.addCommentLoading = false;
        draft.addCommentError = action.error;
        break;

      case REMOVE_POST_REQUEST:
        draft.removePostLoading = true;
        draft.removePostDone = false;
        draft.removePostError = null;
        break;

      case REMOVE_POST_SUCCESS:
        draft.removePostLoading = false;
        draft.removePostDone = true;
        draft.mainPosts = draft.mainPosts.filter(v => v.id !== action.data.PostId);
        break;

      case REMOVE_POST_FAILURE:
        draft.removePostLoading = false;
        draft.removePostError = action.error;
        break;

      case LIKE_POST_REQUEST:
        draft.likePostLoading = true;
        draft.likePostDone = false;
        draft.likePostError = null;
        break;

      case LIKE_POST_SUCCESS:
        {
          draft.likePostLoading = false;
          draft.likePostDone = true;
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers.push({
            id: action.data.UserId
          });
          break;
        }

      case LIKE_POST_FAILURE:
        draft.likePostLoading = false;
        draft.likePostError = action.error;
        break;

      case UNLIKE_POST_REQUEST:
        draft.unLikePostLoading = true;
        draft.unLikePostDone = false;
        draft.unLikePostError = null;
        break;

      case UNLIKE_POST_SUCCESS:
        {
          const post = draft.mainPosts.find(v => v.id === action.data.PostId);
          post.Likers = post.Likers.filter(v => v.id !== action.data.UserId);
          draft.unLikePostLoading = false;
          draft.unLikePostDone = true;
          break;
        }

      case UNLIKE_POST_FAILURE:
        draft.unLikePostLoading = false;
        draft.unLikePostError = action.error;
        break;

      case UPLOAD_IMAGES_REQUEST:
        draft.uploadImagesLoading = true;
        draft.uploadImagesDone = false;
        draft.uploadImagesError = null;
        break;

      case UPLOAD_IMAGES_SUCCESS:
        {
          draft.imagePaths.push(action.data);
          draft.uploadImagesLoading = false;
          draft.uploadImagesDone = true;
          break;
        }

      case UPLOAD_IMAGES_FAILURE:
        draft.uploadImagesLoading = false;
        draft.uploadImagesError = action.error;
        break;

      case RETWEET_REQUEST:
        draft.retweetLoading = true;
        draft.retweetDone = false;
        draft.retweetError = null;
        break;

      case RETWEET_SUCCESS:
        {
          draft.retweetLoading = false;
          draft.retweetDone = true;
          draft.mainPosts.unshift(action.data);
          break;
        }

      case RETWEET_FAILURE:
        draft.retweetLoading = false;
        draft.retweetError = action.error;
        break;

      case REMOVE_IMAGE:
        draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data);
        break;

      default:
        break;
    }
  });
};

/* harmony default export */ __webpack_exports__["I"] = (reducer);

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "ufKq":
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });