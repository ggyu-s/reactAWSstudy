import React, { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import axios from "axios";
import { END } from "redux-saga";
import useSWR from "swr";

import {
  LOAD_FOLLOWERS_REQUEST,
  LOAD_FOLLOWINGS_REQUEST,
  LOAD_MY_INFO_REQUEST,
} from "../reducers/user";

import AppLayout from "../components/AppLayout";
import NicknameEditForm from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";
import wrapper from "../store/configureStore";
import { LOAD_POSTS_REQUEST } from "../reducers/post";

const fetcher = (url) =>
  axios.get(url, { withCredentials: true }).then((result) => {
    console.log(result.data);
    return result.data;
  });

function Profile() {
  const dispatch = useDispatch();
  const { me, loadFollowersLoading, loadFollowingsLoading } = useSelector(
    (state) => state.user
  );
  // const { followers, error: followerError } = useSWR(
  //   "http://localhost:3065/user/f/followers",
  //   fetcher
  // );
  // const { followings } = useSWR(
  //   "http://localhost:3065/user/f/followings",
  //   fetcher
  // );
  const [followersLimit, setFollowersLimit] = useState(3);
  const [followingsLimit, setFollowingsLimit] = useState(3);

  useEffect(() => {
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
      data: followersLimit,
    });
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
      data: followingsLimit,
    });
    setFollowingsLimit((prev) => prev + 3);
    setFollowersLimit((prev) => prev + 3);
  }, []);

  const loadMoreFollowings = useCallback(() => {
    setFollowingsLimit((prev) => prev + 3);
    dispatch({
      type: LOAD_FOLLOWINGS_REQUEST,
      data: followingsLimit,
    });
  }, [followingsLimit]);

  const loadMoreFollowers = useCallback(() => {
    setFollowersLimit((prev) => prev + 3);
    dispatch({
      type: LOAD_FOLLOWERS_REQUEST,
      data: followersLimit,
    });
  }, [followersLimit]);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push("/");
    }
  }, [me && me.id]);

  // if (followerError || followingError) {
  //   console.error(followingError || followerError);
  //   return <div>팔로잉/팔로워 로딩 중 에러가 발생합니다.</div>;
  // }

  if (!me) {
    return null;
  }
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>내프로필 NodeBird</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList
          header="팔로잉"
          data={me.Followings}
          onClickMore={loadMoreFollowings}
          loading={loadFollowersLoading && loadFollowingsLoading}
        />
        <FollowList
          header="팔로워"
          data={me.Followers}
          onClickMore={loadMoreFollowers}
          loading={loadFollowersLoading && loadFollowingsLoading}
        />
      </AppLayout>
    </>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    const cookie = context.req ? context.req.headers.cookie : "";
    axios.defaults.headers.Cookie = "";
    if (context.req && cookie) {
      axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
  }
);

export default Profile;
